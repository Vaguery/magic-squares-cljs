// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30371 = [];
var len__27557__auto___30377 = arguments.length;
var i__27558__auto___30378 = (0);
while(true){
if((i__27558__auto___30378 < len__27557__auto___30377)){
args30371.push((arguments[i__27558__auto___30378]));

var G__30379 = (i__27558__auto___30378 + (1));
i__27558__auto___30378 = G__30379;
continue;
} else {
}
break;
}

var G__30373 = args30371.length;
switch (G__30373) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30371.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30374 = (function (f,blockable,meta30375){
this.f = f;
this.blockable = blockable;
this.meta30375 = meta30375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30376,meta30375__$1){
var self__ = this;
var _30376__$1 = this;
return (new cljs.core.async.t_cljs$core$async30374(self__.f,self__.blockable,meta30375__$1));
});

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30376){
var self__ = this;
var _30376__$1 = this;
return self__.meta30375;
});

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30375","meta30375",2063966229,null)], null);
});

cljs.core.async.t_cljs$core$async30374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30374";

cljs.core.async.t_cljs$core$async30374.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async30374");
});

cljs.core.async.__GT_t_cljs$core$async30374 = (function cljs$core$async$__GT_t_cljs$core$async30374(f__$1,blockable__$1,meta30375){
return (new cljs.core.async.t_cljs$core$async30374(f__$1,blockable__$1,meta30375));
});

}

return (new cljs.core.async.t_cljs$core$async30374(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30383 = [];
var len__27557__auto___30386 = arguments.length;
var i__27558__auto___30387 = (0);
while(true){
if((i__27558__auto___30387 < len__27557__auto___30386)){
args30383.push((arguments[i__27558__auto___30387]));

var G__30388 = (i__27558__auto___30387 + (1));
i__27558__auto___30387 = G__30388;
continue;
} else {
}
break;
}

var G__30385 = args30383.length;
switch (G__30385) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30383.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30390 = [];
var len__27557__auto___30393 = arguments.length;
var i__27558__auto___30394 = (0);
while(true){
if((i__27558__auto___30394 < len__27557__auto___30393)){
args30390.push((arguments[i__27558__auto___30394]));

var G__30395 = (i__27558__auto___30394 + (1));
i__27558__auto___30394 = G__30395;
continue;
} else {
}
break;
}

var G__30392 = args30390.length;
switch (G__30392) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30390.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30397 = [];
var len__27557__auto___30400 = arguments.length;
var i__27558__auto___30401 = (0);
while(true){
if((i__27558__auto___30401 < len__27557__auto___30400)){
args30397.push((arguments[i__27558__auto___30401]));

var G__30402 = (i__27558__auto___30401 + (1));
i__27558__auto___30401 = G__30402;
continue;
} else {
}
break;
}

var G__30399 = args30397.length;
switch (G__30399) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30397.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30404 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30404);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30404,ret){
return (function (){
return fn1.call(null,val_30404);
});})(val_30404,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30405 = [];
var len__27557__auto___30408 = arguments.length;
var i__27558__auto___30409 = (0);
while(true){
if((i__27558__auto___30409 < len__27557__auto___30408)){
args30405.push((arguments[i__27558__auto___30409]));

var G__30410 = (i__27558__auto___30409 + (1));
i__27558__auto___30409 = G__30410;
continue;
} else {
}
break;
}

var G__30407 = args30405.length;
switch (G__30407) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30405.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27367__auto___30412 = n;
var x_30413 = (0);
while(true){
if((x_30413 < n__27367__auto___30412)){
(a[x_30413] = (0));

var G__30414 = (x_30413 + (1));
x_30413 = G__30414;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30415 = (i + (1));
i = G__30415;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30419 = (function (flag,meta30420){
this.flag = flag;
this.meta30420 = meta30420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30421,meta30420__$1){
var self__ = this;
var _30421__$1 = this;
return (new cljs.core.async.t_cljs$core$async30419(self__.flag,meta30420__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30421){
var self__ = this;
var _30421__$1 = this;
return self__.meta30420;
});})(flag))
;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30419.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30420","meta30420",1269398590,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30419";

cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async30419");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30419 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30419(flag__$1,meta30420){
return (new cljs.core.async.t_cljs$core$async30419(flag__$1,meta30420));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30419(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30425 = (function (flag,cb,meta30426){
this.flag = flag;
this.cb = cb;
this.meta30426 = meta30426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30427,meta30426__$1){
var self__ = this;
var _30427__$1 = this;
return (new cljs.core.async.t_cljs$core$async30425(self__.flag,self__.cb,meta30426__$1));
});

cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30427){
var self__ = this;
var _30427__$1 = this;
return self__.meta30426;
});

cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30426","meta30426",-724427432,null)], null);
});

cljs.core.async.t_cljs$core$async30425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30425";

cljs.core.async.t_cljs$core$async30425.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async30425");
});

cljs.core.async.__GT_t_cljs$core$async30425 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30425(flag__$1,cb__$1,meta30426){
return (new cljs.core.async.t_cljs$core$async30425(flag__$1,cb__$1,meta30426));
});

}

return (new cljs.core.async.t_cljs$core$async30425(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30428_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30428_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30429_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30429_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26444__auto__ = wport;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30430 = (i + (1));
i = G__30430;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26444__auto__ = ret;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26432__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26432__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26432__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27564__auto__ = [];
var len__27557__auto___30436 = arguments.length;
var i__27558__auto___30437 = (0);
while(true){
if((i__27558__auto___30437 < len__27557__auto___30436)){
args__27564__auto__.push((arguments[i__27558__auto___30437]));

var G__30438 = (i__27558__auto___30437 + (1));
i__27558__auto___30437 = G__30438;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30433){
var map__30434 = p__30433;
var map__30434__$1 = ((((!((map__30434 == null)))?((((map__30434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30434):map__30434);
var opts = map__30434__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30431){
var G__30432 = cljs.core.first.call(null,seq30431);
var seq30431__$1 = cljs.core.next.call(null,seq30431);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30432,seq30431__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30439 = [];
var len__27557__auto___30489 = arguments.length;
var i__27558__auto___30490 = (0);
while(true){
if((i__27558__auto___30490 < len__27557__auto___30489)){
args30439.push((arguments[i__27558__auto___30490]));

var G__30491 = (i__27558__auto___30490 + (1));
i__27558__auto___30490 = G__30491;
continue;
} else {
}
break;
}

var G__30441 = args30439.length;
switch (G__30441) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30439.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30326__auto___30493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___30493){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___30493){
return (function (state_30465){
var state_val_30466 = (state_30465[(1)]);
if((state_val_30466 === (7))){
var inst_30461 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30467_30494 = state_30465__$1;
(statearr_30467_30494[(2)] = inst_30461);

(statearr_30467_30494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (1))){
var state_30465__$1 = state_30465;
var statearr_30468_30495 = state_30465__$1;
(statearr_30468_30495[(2)] = null);

(statearr_30468_30495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (4))){
var inst_30444 = (state_30465[(7)]);
var inst_30444__$1 = (state_30465[(2)]);
var inst_30445 = (inst_30444__$1 == null);
var state_30465__$1 = (function (){var statearr_30469 = state_30465;
(statearr_30469[(7)] = inst_30444__$1);

return statearr_30469;
})();
if(cljs.core.truth_(inst_30445)){
var statearr_30470_30496 = state_30465__$1;
(statearr_30470_30496[(1)] = (5));

} else {
var statearr_30471_30497 = state_30465__$1;
(statearr_30471_30497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (13))){
var state_30465__$1 = state_30465;
var statearr_30472_30498 = state_30465__$1;
(statearr_30472_30498[(2)] = null);

(statearr_30472_30498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (6))){
var inst_30444 = (state_30465[(7)]);
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30465__$1,(11),to,inst_30444);
} else {
if((state_val_30466 === (3))){
var inst_30463 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30465__$1,inst_30463);
} else {
if((state_val_30466 === (12))){
var state_30465__$1 = state_30465;
var statearr_30473_30499 = state_30465__$1;
(statearr_30473_30499[(2)] = null);

(statearr_30473_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (2))){
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30465__$1,(4),from);
} else {
if((state_val_30466 === (11))){
var inst_30454 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
if(cljs.core.truth_(inst_30454)){
var statearr_30474_30500 = state_30465__$1;
(statearr_30474_30500[(1)] = (12));

} else {
var statearr_30475_30501 = state_30465__$1;
(statearr_30475_30501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (9))){
var state_30465__$1 = state_30465;
var statearr_30476_30502 = state_30465__$1;
(statearr_30476_30502[(2)] = null);

(statearr_30476_30502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (5))){
var state_30465__$1 = state_30465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30477_30503 = state_30465__$1;
(statearr_30477_30503[(1)] = (8));

} else {
var statearr_30478_30504 = state_30465__$1;
(statearr_30478_30504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (14))){
var inst_30459 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30479_30505 = state_30465__$1;
(statearr_30479_30505[(2)] = inst_30459);

(statearr_30479_30505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (10))){
var inst_30451 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30480_30506 = state_30465__$1;
(statearr_30480_30506[(2)] = inst_30451);

(statearr_30480_30506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (8))){
var inst_30448 = cljs.core.async.close_BANG_.call(null,to);
var state_30465__$1 = state_30465;
var statearr_30481_30507 = state_30465__$1;
(statearr_30481_30507[(2)] = inst_30448);

(statearr_30481_30507[(1)] = (10));


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
});})(c__30326__auto___30493))
;
return ((function (switch__30214__auto__,c__30326__auto___30493){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_30485 = [null,null,null,null,null,null,null,null];
(statearr_30485[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_30485[(1)] = (1));

return statearr_30485;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_30465){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_30465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e30486){if((e30486 instanceof Object)){
var ex__30218__auto__ = e30486;
var statearr_30487_30508 = state_30465;
(statearr_30487_30508[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30509 = state_30465;
state_30465 = G__30509;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_30465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_30465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___30493))
})();
var state__30328__auto__ = (function (){var statearr_30488 = f__30327__auto__.call(null);
(statearr_30488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___30493);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___30493))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30697){
var vec__30698 = p__30697;
var v = cljs.core.nth.call(null,vec__30698,(0),null);
var p = cljs.core.nth.call(null,vec__30698,(1),null);
var job = vec__30698;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30326__auto___30884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___30884,res,vec__30698,v,p,job,jobs,results){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___30884,res,vec__30698,v,p,job,jobs,results){
return (function (state_30705){
var state_val_30706 = (state_30705[(1)]);
if((state_val_30706 === (1))){
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30705__$1,(2),res,v);
} else {
if((state_val_30706 === (2))){
var inst_30702 = (state_30705[(2)]);
var inst_30703 = cljs.core.async.close_BANG_.call(null,res);
var state_30705__$1 = (function (){var statearr_30707 = state_30705;
(statearr_30707[(7)] = inst_30702);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30705__$1,inst_30703);
} else {
return null;
}
}
});})(c__30326__auto___30884,res,vec__30698,v,p,job,jobs,results))
;
return ((function (switch__30214__auto__,c__30326__auto___30884,res,vec__30698,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0 = (function (){
var statearr_30711 = [null,null,null,null,null,null,null,null];
(statearr_30711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__);

(statearr_30711[(1)] = (1));

return statearr_30711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1 = (function (state_30705){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_30705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e30712){if((e30712 instanceof Object)){
var ex__30218__auto__ = e30712;
var statearr_30713_30885 = state_30705;
(statearr_30713_30885[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30886 = state_30705;
state_30705 = G__30886;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = function(state_30705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1.call(this,state_30705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___30884,res,vec__30698,v,p,job,jobs,results))
})();
var state__30328__auto__ = (function (){var statearr_30714 = f__30327__auto__.call(null);
(statearr_30714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___30884);

return statearr_30714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___30884,res,vec__30698,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30715){
var vec__30716 = p__30715;
var v = cljs.core.nth.call(null,vec__30716,(0),null);
var p = cljs.core.nth.call(null,vec__30716,(1),null);
var job = vec__30716;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27367__auto___30887 = n;
var __30888 = (0);
while(true){
if((__30888 < n__27367__auto___30887)){
var G__30719_30889 = type;
var G__30719_30890__$1 = (((G__30719_30889 instanceof cljs.core.Keyword))?G__30719_30889.fqn:null);
switch (G__30719_30890__$1) {
case "compute":
var c__30326__auto___30892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30888,c__30326__auto___30892,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (__30888,c__30326__auto___30892,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async){
return (function (state_30732){
var state_val_30733 = (state_30732[(1)]);
if((state_val_30733 === (1))){
var state_30732__$1 = state_30732;
var statearr_30734_30893 = state_30732__$1;
(statearr_30734_30893[(2)] = null);

(statearr_30734_30893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (2))){
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30732__$1,(4),jobs);
} else {
if((state_val_30733 === (3))){
var inst_30730 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30732__$1,inst_30730);
} else {
if((state_val_30733 === (4))){
var inst_30722 = (state_30732[(2)]);
var inst_30723 = process.call(null,inst_30722);
var state_30732__$1 = state_30732;
if(cljs.core.truth_(inst_30723)){
var statearr_30735_30894 = state_30732__$1;
(statearr_30735_30894[(1)] = (5));

} else {
var statearr_30736_30895 = state_30732__$1;
(statearr_30736_30895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (5))){
var state_30732__$1 = state_30732;
var statearr_30737_30896 = state_30732__$1;
(statearr_30737_30896[(2)] = null);

(statearr_30737_30896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (6))){
var state_30732__$1 = state_30732;
var statearr_30738_30897 = state_30732__$1;
(statearr_30738_30897[(2)] = null);

(statearr_30738_30897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30733 === (7))){
var inst_30728 = (state_30732[(2)]);
var state_30732__$1 = state_30732;
var statearr_30739_30898 = state_30732__$1;
(statearr_30739_30898[(2)] = inst_30728);

(statearr_30739_30898[(1)] = (3));


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
});})(__30888,c__30326__auto___30892,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async))
;
return ((function (__30888,switch__30214__auto__,c__30326__auto___30892,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0 = (function (){
var statearr_30743 = [null,null,null,null,null,null,null];
(statearr_30743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__);

(statearr_30743[(1)] = (1));

return statearr_30743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1 = (function (state_30732){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_30732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e30744){if((e30744 instanceof Object)){
var ex__30218__auto__ = e30744;
var statearr_30745_30899 = state_30732;
(statearr_30745_30899[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30900 = state_30732;
state_30732 = G__30900;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = function(state_30732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1.call(this,state_30732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__;
})()
;})(__30888,switch__30214__auto__,c__30326__auto___30892,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30746 = f__30327__auto__.call(null);
(statearr_30746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___30892);

return statearr_30746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(__30888,c__30326__auto___30892,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async))
);


break;
case "async":
var c__30326__auto___30901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30888,c__30326__auto___30901,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (__30888,c__30326__auto___30901,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async){
return (function (state_30759){
var state_val_30760 = (state_30759[(1)]);
if((state_val_30760 === (1))){
var state_30759__$1 = state_30759;
var statearr_30761_30902 = state_30759__$1;
(statearr_30761_30902[(2)] = null);

(statearr_30761_30902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30760 === (2))){
var state_30759__$1 = state_30759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30759__$1,(4),jobs);
} else {
if((state_val_30760 === (3))){
var inst_30757 = (state_30759[(2)]);
var state_30759__$1 = state_30759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30759__$1,inst_30757);
} else {
if((state_val_30760 === (4))){
var inst_30749 = (state_30759[(2)]);
var inst_30750 = async.call(null,inst_30749);
var state_30759__$1 = state_30759;
if(cljs.core.truth_(inst_30750)){
var statearr_30762_30903 = state_30759__$1;
(statearr_30762_30903[(1)] = (5));

} else {
var statearr_30763_30904 = state_30759__$1;
(statearr_30763_30904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30760 === (5))){
var state_30759__$1 = state_30759;
var statearr_30764_30905 = state_30759__$1;
(statearr_30764_30905[(2)] = null);

(statearr_30764_30905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30760 === (6))){
var state_30759__$1 = state_30759;
var statearr_30765_30906 = state_30759__$1;
(statearr_30765_30906[(2)] = null);

(statearr_30765_30906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30760 === (7))){
var inst_30755 = (state_30759[(2)]);
var state_30759__$1 = state_30759;
var statearr_30766_30907 = state_30759__$1;
(statearr_30766_30907[(2)] = inst_30755);

(statearr_30766_30907[(1)] = (3));


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
});})(__30888,c__30326__auto___30901,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async))
;
return ((function (__30888,switch__30214__auto__,c__30326__auto___30901,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0 = (function (){
var statearr_30770 = [null,null,null,null,null,null,null];
(statearr_30770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__);

(statearr_30770[(1)] = (1));

return statearr_30770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1 = (function (state_30759){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_30759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e30771){if((e30771 instanceof Object)){
var ex__30218__auto__ = e30771;
var statearr_30772_30908 = state_30759;
(statearr_30772_30908[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30909 = state_30759;
state_30759 = G__30909;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = function(state_30759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1.call(this,state_30759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__;
})()
;})(__30888,switch__30214__auto__,c__30326__auto___30901,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30773 = f__30327__auto__.call(null);
(statearr_30773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___30901);

return statearr_30773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(__30888,c__30326__auto___30901,G__30719_30889,G__30719_30890__$1,n__27367__auto___30887,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30719_30890__$1)].join('')));

}

var G__30910 = (__30888 + (1));
__30888 = G__30910;
continue;
} else {
}
break;
}

var c__30326__auto___30911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___30911,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___30911,jobs,results,process,async){
return (function (state_30795){
var state_val_30796 = (state_30795[(1)]);
if((state_val_30796 === (1))){
var state_30795__$1 = state_30795;
var statearr_30797_30912 = state_30795__$1;
(statearr_30797_30912[(2)] = null);

(statearr_30797_30912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (2))){
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30795__$1,(4),from);
} else {
if((state_val_30796 === (3))){
var inst_30793 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30795__$1,inst_30793);
} else {
if((state_val_30796 === (4))){
var inst_30776 = (state_30795[(7)]);
var inst_30776__$1 = (state_30795[(2)]);
var inst_30777 = (inst_30776__$1 == null);
var state_30795__$1 = (function (){var statearr_30798 = state_30795;
(statearr_30798[(7)] = inst_30776__$1);

return statearr_30798;
})();
if(cljs.core.truth_(inst_30777)){
var statearr_30799_30913 = state_30795__$1;
(statearr_30799_30913[(1)] = (5));

} else {
var statearr_30800_30914 = state_30795__$1;
(statearr_30800_30914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (5))){
var inst_30779 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30795__$1 = state_30795;
var statearr_30801_30915 = state_30795__$1;
(statearr_30801_30915[(2)] = inst_30779);

(statearr_30801_30915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (6))){
var inst_30781 = (state_30795[(8)]);
var inst_30776 = (state_30795[(7)]);
var inst_30781__$1 = cljs.core.async.chan.call(null,(1));
var inst_30782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30783 = [inst_30776,inst_30781__$1];
var inst_30784 = (new cljs.core.PersistentVector(null,2,(5),inst_30782,inst_30783,null));
var state_30795__$1 = (function (){var statearr_30802 = state_30795;
(statearr_30802[(8)] = inst_30781__$1);

return statearr_30802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30795__$1,(8),jobs,inst_30784);
} else {
if((state_val_30796 === (7))){
var inst_30791 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30803_30916 = state_30795__$1;
(statearr_30803_30916[(2)] = inst_30791);

(statearr_30803_30916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (8))){
var inst_30781 = (state_30795[(8)]);
var inst_30786 = (state_30795[(2)]);
var state_30795__$1 = (function (){var statearr_30804 = state_30795;
(statearr_30804[(9)] = inst_30786);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30795__$1,(9),results,inst_30781);
} else {
if((state_val_30796 === (9))){
var inst_30788 = (state_30795[(2)]);
var state_30795__$1 = (function (){var statearr_30805 = state_30795;
(statearr_30805[(10)] = inst_30788);

return statearr_30805;
})();
var statearr_30806_30917 = state_30795__$1;
(statearr_30806_30917[(2)] = null);

(statearr_30806_30917[(1)] = (2));


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
});})(c__30326__auto___30911,jobs,results,process,async))
;
return ((function (switch__30214__auto__,c__30326__auto___30911,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0 = (function (){
var statearr_30810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__);

(statearr_30810[(1)] = (1));

return statearr_30810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1 = (function (state_30795){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_30795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e30811){if((e30811 instanceof Object)){
var ex__30218__auto__ = e30811;
var statearr_30812_30918 = state_30795;
(statearr_30812_30918[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30919 = state_30795;
state_30795 = G__30919;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = function(state_30795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1.call(this,state_30795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___30911,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30813 = f__30327__auto__.call(null);
(statearr_30813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___30911);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___30911,jobs,results,process,async))
);


var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__,jobs,results,process,async){
return (function (state_30851){
var state_val_30852 = (state_30851[(1)]);
if((state_val_30852 === (7))){
var inst_30847 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30853_30920 = state_30851__$1;
(statearr_30853_30920[(2)] = inst_30847);

(statearr_30853_30920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (20))){
var state_30851__$1 = state_30851;
var statearr_30854_30921 = state_30851__$1;
(statearr_30854_30921[(2)] = null);

(statearr_30854_30921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (1))){
var state_30851__$1 = state_30851;
var statearr_30855_30922 = state_30851__$1;
(statearr_30855_30922[(2)] = null);

(statearr_30855_30922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (4))){
var inst_30816 = (state_30851[(7)]);
var inst_30816__$1 = (state_30851[(2)]);
var inst_30817 = (inst_30816__$1 == null);
var state_30851__$1 = (function (){var statearr_30856 = state_30851;
(statearr_30856[(7)] = inst_30816__$1);

return statearr_30856;
})();
if(cljs.core.truth_(inst_30817)){
var statearr_30857_30923 = state_30851__$1;
(statearr_30857_30923[(1)] = (5));

} else {
var statearr_30858_30924 = state_30851__$1;
(statearr_30858_30924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (15))){
var inst_30829 = (state_30851[(8)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30851__$1,(18),to,inst_30829);
} else {
if((state_val_30852 === (21))){
var inst_30842 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30859_30925 = state_30851__$1;
(statearr_30859_30925[(2)] = inst_30842);

(statearr_30859_30925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (13))){
var inst_30844 = (state_30851[(2)]);
var state_30851__$1 = (function (){var statearr_30860 = state_30851;
(statearr_30860[(9)] = inst_30844);

return statearr_30860;
})();
var statearr_30861_30926 = state_30851__$1;
(statearr_30861_30926[(2)] = null);

(statearr_30861_30926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (6))){
var inst_30816 = (state_30851[(7)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30851__$1,(11),inst_30816);
} else {
if((state_val_30852 === (17))){
var inst_30837 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
if(cljs.core.truth_(inst_30837)){
var statearr_30862_30927 = state_30851__$1;
(statearr_30862_30927[(1)] = (19));

} else {
var statearr_30863_30928 = state_30851__$1;
(statearr_30863_30928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (3))){
var inst_30849 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30851__$1,inst_30849);
} else {
if((state_val_30852 === (12))){
var inst_30826 = (state_30851[(10)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30851__$1,(14),inst_30826);
} else {
if((state_val_30852 === (2))){
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30851__$1,(4),results);
} else {
if((state_val_30852 === (19))){
var state_30851__$1 = state_30851;
var statearr_30864_30929 = state_30851__$1;
(statearr_30864_30929[(2)] = null);

(statearr_30864_30929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (11))){
var inst_30826 = (state_30851[(2)]);
var state_30851__$1 = (function (){var statearr_30865 = state_30851;
(statearr_30865[(10)] = inst_30826);

return statearr_30865;
})();
var statearr_30866_30930 = state_30851__$1;
(statearr_30866_30930[(2)] = null);

(statearr_30866_30930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (9))){
var state_30851__$1 = state_30851;
var statearr_30867_30931 = state_30851__$1;
(statearr_30867_30931[(2)] = null);

(statearr_30867_30931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (5))){
var state_30851__$1 = state_30851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30868_30932 = state_30851__$1;
(statearr_30868_30932[(1)] = (8));

} else {
var statearr_30869_30933 = state_30851__$1;
(statearr_30869_30933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (14))){
var inst_30829 = (state_30851[(8)]);
var inst_30831 = (state_30851[(11)]);
var inst_30829__$1 = (state_30851[(2)]);
var inst_30830 = (inst_30829__$1 == null);
var inst_30831__$1 = cljs.core.not.call(null,inst_30830);
var state_30851__$1 = (function (){var statearr_30870 = state_30851;
(statearr_30870[(8)] = inst_30829__$1);

(statearr_30870[(11)] = inst_30831__$1);

return statearr_30870;
})();
if(inst_30831__$1){
var statearr_30871_30934 = state_30851__$1;
(statearr_30871_30934[(1)] = (15));

} else {
var statearr_30872_30935 = state_30851__$1;
(statearr_30872_30935[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (16))){
var inst_30831 = (state_30851[(11)]);
var state_30851__$1 = state_30851;
var statearr_30873_30936 = state_30851__$1;
(statearr_30873_30936[(2)] = inst_30831);

(statearr_30873_30936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (10))){
var inst_30823 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30874_30937 = state_30851__$1;
(statearr_30874_30937[(2)] = inst_30823);

(statearr_30874_30937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (18))){
var inst_30834 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30875_30938 = state_30851__$1;
(statearr_30875_30938[(2)] = inst_30834);

(statearr_30875_30938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (8))){
var inst_30820 = cljs.core.async.close_BANG_.call(null,to);
var state_30851__$1 = state_30851;
var statearr_30876_30939 = state_30851__$1;
(statearr_30876_30939[(2)] = inst_30820);

(statearr_30876_30939[(1)] = (10));


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
}
}
}
}
});})(c__30326__auto__,jobs,results,process,async))
;
return ((function (switch__30214__auto__,c__30326__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0 = (function (){
var statearr_30880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__);

(statearr_30880[(1)] = (1));

return statearr_30880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1 = (function (state_30851){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_30851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e30881){if((e30881 instanceof Object)){
var ex__30218__auto__ = e30881;
var statearr_30882_30940 = state_30851;
(statearr_30882_30940[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30941 = state_30851;
state_30851 = G__30941;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__ = function(state_30851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1.call(this,state_30851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30883 = f__30327__auto__.call(null);
(statearr_30883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_30883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__,jobs,results,process,async))
);

return c__30326__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30942 = [];
var len__27557__auto___30945 = arguments.length;
var i__27558__auto___30946 = (0);
while(true){
if((i__27558__auto___30946 < len__27557__auto___30945)){
args30942.push((arguments[i__27558__auto___30946]));

var G__30947 = (i__27558__auto___30946 + (1));
i__27558__auto___30946 = G__30947;
continue;
} else {
}
break;
}

var G__30944 = args30942.length;
switch (G__30944) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30942.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30949 = [];
var len__27557__auto___30952 = arguments.length;
var i__27558__auto___30953 = (0);
while(true){
if((i__27558__auto___30953 < len__27557__auto___30952)){
args30949.push((arguments[i__27558__auto___30953]));

var G__30954 = (i__27558__auto___30953 + (1));
i__27558__auto___30953 = G__30954;
continue;
} else {
}
break;
}

var G__30951 = args30949.length;
switch (G__30951) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30949.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30956 = [];
var len__27557__auto___31009 = arguments.length;
var i__27558__auto___31010 = (0);
while(true){
if((i__27558__auto___31010 < len__27557__auto___31009)){
args30956.push((arguments[i__27558__auto___31010]));

var G__31011 = (i__27558__auto___31010 + (1));
i__27558__auto___31010 = G__31011;
continue;
} else {
}
break;
}

var G__30958 = args30956.length;
switch (G__30958) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30956.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30326__auto___31013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31013,tc,fc){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___31013,tc,fc){
return (function (state_30984){
var state_val_30985 = (state_30984[(1)]);
if((state_val_30985 === (7))){
var inst_30980 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
var statearr_30986_31014 = state_30984__$1;
(statearr_30986_31014[(2)] = inst_30980);

(statearr_30986_31014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (1))){
var state_30984__$1 = state_30984;
var statearr_30987_31015 = state_30984__$1;
(statearr_30987_31015[(2)] = null);

(statearr_30987_31015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (4))){
var inst_30961 = (state_30984[(7)]);
var inst_30961__$1 = (state_30984[(2)]);
var inst_30962 = (inst_30961__$1 == null);
var state_30984__$1 = (function (){var statearr_30988 = state_30984;
(statearr_30988[(7)] = inst_30961__$1);

return statearr_30988;
})();
if(cljs.core.truth_(inst_30962)){
var statearr_30989_31016 = state_30984__$1;
(statearr_30989_31016[(1)] = (5));

} else {
var statearr_30990_31017 = state_30984__$1;
(statearr_30990_31017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (13))){
var state_30984__$1 = state_30984;
var statearr_30991_31018 = state_30984__$1;
(statearr_30991_31018[(2)] = null);

(statearr_30991_31018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (6))){
var inst_30961 = (state_30984[(7)]);
var inst_30967 = p.call(null,inst_30961);
var state_30984__$1 = state_30984;
if(cljs.core.truth_(inst_30967)){
var statearr_30992_31019 = state_30984__$1;
(statearr_30992_31019[(1)] = (9));

} else {
var statearr_30993_31020 = state_30984__$1;
(statearr_30993_31020[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (3))){
var inst_30982 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30984__$1,inst_30982);
} else {
if((state_val_30985 === (12))){
var state_30984__$1 = state_30984;
var statearr_30994_31021 = state_30984__$1;
(statearr_30994_31021[(2)] = null);

(statearr_30994_31021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (2))){
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30984__$1,(4),ch);
} else {
if((state_val_30985 === (11))){
var inst_30961 = (state_30984[(7)]);
var inst_30971 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30984__$1,(8),inst_30971,inst_30961);
} else {
if((state_val_30985 === (9))){
var state_30984__$1 = state_30984;
var statearr_30995_31022 = state_30984__$1;
(statearr_30995_31022[(2)] = tc);

(statearr_30995_31022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (5))){
var inst_30964 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30965 = cljs.core.async.close_BANG_.call(null,fc);
var state_30984__$1 = (function (){var statearr_30996 = state_30984;
(statearr_30996[(8)] = inst_30964);

return statearr_30996;
})();
var statearr_30997_31023 = state_30984__$1;
(statearr_30997_31023[(2)] = inst_30965);

(statearr_30997_31023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (14))){
var inst_30978 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
var statearr_30998_31024 = state_30984__$1;
(statearr_30998_31024[(2)] = inst_30978);

(statearr_30998_31024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (10))){
var state_30984__$1 = state_30984;
var statearr_30999_31025 = state_30984__$1;
(statearr_30999_31025[(2)] = fc);

(statearr_30999_31025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (8))){
var inst_30973 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
if(cljs.core.truth_(inst_30973)){
var statearr_31000_31026 = state_30984__$1;
(statearr_31000_31026[(1)] = (12));

} else {
var statearr_31001_31027 = state_30984__$1;
(statearr_31001_31027[(1)] = (13));

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
});})(c__30326__auto___31013,tc,fc))
;
return ((function (switch__30214__auto__,c__30326__auto___31013,tc,fc){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_31005 = [null,null,null,null,null,null,null,null,null];
(statearr_31005[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_31005[(1)] = (1));

return statearr_31005;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_30984){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_30984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e31006){if((e31006 instanceof Object)){
var ex__30218__auto__ = e31006;
var statearr_31007_31028 = state_30984;
(statearr_31007_31028[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31029 = state_30984;
state_30984 = G__31029;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___31013,tc,fc))
})();
var state__30328__auto__ = (function (){var statearr_31008 = f__30327__auto__.call(null);
(statearr_31008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___31013);

return statearr_31008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31013,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__){
return (function (state_31093){
var state_val_31094 = (state_31093[(1)]);
if((state_val_31094 === (7))){
var inst_31089 = (state_31093[(2)]);
var state_31093__$1 = state_31093;
var statearr_31095_31116 = state_31093__$1;
(statearr_31095_31116[(2)] = inst_31089);

(statearr_31095_31116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (1))){
var inst_31073 = init;
var state_31093__$1 = (function (){var statearr_31096 = state_31093;
(statearr_31096[(7)] = inst_31073);

return statearr_31096;
})();
var statearr_31097_31117 = state_31093__$1;
(statearr_31097_31117[(2)] = null);

(statearr_31097_31117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (4))){
var inst_31076 = (state_31093[(8)]);
var inst_31076__$1 = (state_31093[(2)]);
var inst_31077 = (inst_31076__$1 == null);
var state_31093__$1 = (function (){var statearr_31098 = state_31093;
(statearr_31098[(8)] = inst_31076__$1);

return statearr_31098;
})();
if(cljs.core.truth_(inst_31077)){
var statearr_31099_31118 = state_31093__$1;
(statearr_31099_31118[(1)] = (5));

} else {
var statearr_31100_31119 = state_31093__$1;
(statearr_31100_31119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (6))){
var inst_31076 = (state_31093[(8)]);
var inst_31073 = (state_31093[(7)]);
var inst_31080 = (state_31093[(9)]);
var inst_31080__$1 = f.call(null,inst_31073,inst_31076);
var inst_31081 = cljs.core.reduced_QMARK_.call(null,inst_31080__$1);
var state_31093__$1 = (function (){var statearr_31101 = state_31093;
(statearr_31101[(9)] = inst_31080__$1);

return statearr_31101;
})();
if(inst_31081){
var statearr_31102_31120 = state_31093__$1;
(statearr_31102_31120[(1)] = (8));

} else {
var statearr_31103_31121 = state_31093__$1;
(statearr_31103_31121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (3))){
var inst_31091 = (state_31093[(2)]);
var state_31093__$1 = state_31093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31093__$1,inst_31091);
} else {
if((state_val_31094 === (2))){
var state_31093__$1 = state_31093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31093__$1,(4),ch);
} else {
if((state_val_31094 === (9))){
var inst_31080 = (state_31093[(9)]);
var inst_31073 = inst_31080;
var state_31093__$1 = (function (){var statearr_31104 = state_31093;
(statearr_31104[(7)] = inst_31073);

return statearr_31104;
})();
var statearr_31105_31122 = state_31093__$1;
(statearr_31105_31122[(2)] = null);

(statearr_31105_31122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (5))){
var inst_31073 = (state_31093[(7)]);
var state_31093__$1 = state_31093;
var statearr_31106_31123 = state_31093__$1;
(statearr_31106_31123[(2)] = inst_31073);

(statearr_31106_31123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (10))){
var inst_31087 = (state_31093[(2)]);
var state_31093__$1 = state_31093;
var statearr_31107_31124 = state_31093__$1;
(statearr_31107_31124[(2)] = inst_31087);

(statearr_31107_31124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (8))){
var inst_31080 = (state_31093[(9)]);
var inst_31083 = cljs.core.deref.call(null,inst_31080);
var state_31093__$1 = state_31093;
var statearr_31108_31125 = state_31093__$1;
(statearr_31108_31125[(2)] = inst_31083);

(statearr_31108_31125[(1)] = (10));


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
});})(c__30326__auto__))
;
return ((function (switch__30214__auto__,c__30326__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30215__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30215__auto____0 = (function (){
var statearr_31112 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31112[(0)] = cljs$core$async$reduce_$_state_machine__30215__auto__);

(statearr_31112[(1)] = (1));

return statearr_31112;
});
var cljs$core$async$reduce_$_state_machine__30215__auto____1 = (function (state_31093){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_31093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e31113){if((e31113 instanceof Object)){
var ex__30218__auto__ = e31113;
var statearr_31114_31126 = state_31093;
(statearr_31114_31126[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31127 = state_31093;
state_31093 = G__31127;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30215__auto__ = function(state_31093){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30215__auto____1.call(this,state_31093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30215__auto____0;
cljs$core$async$reduce_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30215__auto____1;
return cljs$core$async$reduce_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_31115 = f__30327__auto__.call(null);
(statearr_31115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_31115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__,f__$1){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__,f__$1){
return (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (1))){
var inst_31142 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31147__$1,(2),inst_31142);
} else {
if((state_val_31148 === (2))){
var inst_31144 = (state_31147[(2)]);
var inst_31145 = f__$1.call(null,inst_31144);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31147__$1,inst_31145);
} else {
return null;
}
}
});})(c__30326__auto__,f__$1))
;
return ((function (switch__30214__auto__,c__30326__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30215__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30215__auto____0 = (function (){
var statearr_31152 = [null,null,null,null,null,null,null];
(statearr_31152[(0)] = cljs$core$async$transduce_$_state_machine__30215__auto__);

(statearr_31152[(1)] = (1));

return statearr_31152;
});
var cljs$core$async$transduce_$_state_machine__30215__auto____1 = (function (state_31147){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_31147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e31153){if((e31153 instanceof Object)){
var ex__30218__auto__ = e31153;
var statearr_31154_31156 = state_31147;
(statearr_31154_31156[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31157 = state_31147;
state_31147 = G__31157;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30215__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30215__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30215__auto____0;
cljs$core$async$transduce_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30215__auto____1;
return cljs$core$async$transduce_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__,f__$1))
})();
var state__30328__auto__ = (function (){var statearr_31155 = f__30327__auto__.call(null);
(statearr_31155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_31155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__,f__$1))
);

return c__30326__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31158 = [];
var len__27557__auto___31210 = arguments.length;
var i__27558__auto___31211 = (0);
while(true){
if((i__27558__auto___31211 < len__27557__auto___31210)){
args31158.push((arguments[i__27558__auto___31211]));

var G__31212 = (i__27558__auto___31211 + (1));
i__27558__auto___31211 = G__31212;
continue;
} else {
}
break;
}

var G__31160 = args31158.length;
switch (G__31160) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31158.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__){
return (function (state_31185){
var state_val_31186 = (state_31185[(1)]);
if((state_val_31186 === (7))){
var inst_31167 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31187_31214 = state_31185__$1;
(statearr_31187_31214[(2)] = inst_31167);

(statearr_31187_31214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (1))){
var inst_31161 = cljs.core.seq.call(null,coll);
var inst_31162 = inst_31161;
var state_31185__$1 = (function (){var statearr_31188 = state_31185;
(statearr_31188[(7)] = inst_31162);

return statearr_31188;
})();
var statearr_31189_31215 = state_31185__$1;
(statearr_31189_31215[(2)] = null);

(statearr_31189_31215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (4))){
var inst_31162 = (state_31185[(7)]);
var inst_31165 = cljs.core.first.call(null,inst_31162);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31185__$1,(7),ch,inst_31165);
} else {
if((state_val_31186 === (13))){
var inst_31179 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31190_31216 = state_31185__$1;
(statearr_31190_31216[(2)] = inst_31179);

(statearr_31190_31216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (6))){
var inst_31170 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31170)){
var statearr_31191_31217 = state_31185__$1;
(statearr_31191_31217[(1)] = (8));

} else {
var statearr_31192_31218 = state_31185__$1;
(statearr_31192_31218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (3))){
var inst_31183 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31185__$1,inst_31183);
} else {
if((state_val_31186 === (12))){
var state_31185__$1 = state_31185;
var statearr_31193_31219 = state_31185__$1;
(statearr_31193_31219[(2)] = null);

(statearr_31193_31219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (2))){
var inst_31162 = (state_31185[(7)]);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31162)){
var statearr_31194_31220 = state_31185__$1;
(statearr_31194_31220[(1)] = (4));

} else {
var statearr_31195_31221 = state_31185__$1;
(statearr_31195_31221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (11))){
var inst_31176 = cljs.core.async.close_BANG_.call(null,ch);
var state_31185__$1 = state_31185;
var statearr_31196_31222 = state_31185__$1;
(statearr_31196_31222[(2)] = inst_31176);

(statearr_31196_31222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (9))){
var state_31185__$1 = state_31185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31197_31223 = state_31185__$1;
(statearr_31197_31223[(1)] = (11));

} else {
var statearr_31198_31224 = state_31185__$1;
(statearr_31198_31224[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (5))){
var inst_31162 = (state_31185[(7)]);
var state_31185__$1 = state_31185;
var statearr_31199_31225 = state_31185__$1;
(statearr_31199_31225[(2)] = inst_31162);

(statearr_31199_31225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (10))){
var inst_31181 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31200_31226 = state_31185__$1;
(statearr_31200_31226[(2)] = inst_31181);

(statearr_31200_31226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (8))){
var inst_31162 = (state_31185[(7)]);
var inst_31172 = cljs.core.next.call(null,inst_31162);
var inst_31162__$1 = inst_31172;
var state_31185__$1 = (function (){var statearr_31201 = state_31185;
(statearr_31201[(7)] = inst_31162__$1);

return statearr_31201;
})();
var statearr_31202_31227 = state_31185__$1;
(statearr_31202_31227[(2)] = null);

(statearr_31202_31227[(1)] = (2));


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
});})(c__30326__auto__))
;
return ((function (switch__30214__auto__,c__30326__auto__){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_31206 = [null,null,null,null,null,null,null,null];
(statearr_31206[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_31206[(1)] = (1));

return statearr_31206;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_31185){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_31185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e31207){if((e31207 instanceof Object)){
var ex__30218__auto__ = e31207;
var statearr_31208_31228 = state_31185;
(statearr_31208_31228[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31229 = state_31185;
state_31185 = G__31229;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_31209 = f__30327__auto__.call(null);
(statearr_31209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_31209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27112__auto__ = (((_ == null))?null:_);
var m__27113__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,_);
} else {
var m__27113__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27113__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m,ch);
} else {
var m__27113__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m);
} else {
var m__27113__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31455 = (function (ch,cs,meta31456){
this.ch = ch;
this.cs = cs;
this.meta31456 = meta31456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31457,meta31456__$1){
var self__ = this;
var _31457__$1 = this;
return (new cljs.core.async.t_cljs$core$async31455(self__.ch,self__.cs,meta31456__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31457){
var self__ = this;
var _31457__$1 = this;
return self__.meta31456;
});})(cs))
;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31455.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31456","meta31456",-595147196,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31455";

cljs.core.async.t_cljs$core$async31455.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async31455");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31455 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31455(ch__$1,cs__$1,meta31456){
return (new cljs.core.async.t_cljs$core$async31455(ch__$1,cs__$1,meta31456));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31455(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30326__auto___31680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31680,cs,m,dchan,dctr,done){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___31680,cs,m,dchan,dctr,done){
return (function (state_31592){
var state_val_31593 = (state_31592[(1)]);
if((state_val_31593 === (7))){
var inst_31588 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31594_31681 = state_31592__$1;
(statearr_31594_31681[(2)] = inst_31588);

(statearr_31594_31681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (20))){
var inst_31491 = (state_31592[(7)]);
var inst_31503 = cljs.core.first.call(null,inst_31491);
var inst_31504 = cljs.core.nth.call(null,inst_31503,(0),null);
var inst_31505 = cljs.core.nth.call(null,inst_31503,(1),null);
var state_31592__$1 = (function (){var statearr_31595 = state_31592;
(statearr_31595[(8)] = inst_31504);

return statearr_31595;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31596_31682 = state_31592__$1;
(statearr_31596_31682[(1)] = (22));

} else {
var statearr_31597_31683 = state_31592__$1;
(statearr_31597_31683[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (27))){
var inst_31533 = (state_31592[(9)]);
var inst_31540 = (state_31592[(10)]);
var inst_31535 = (state_31592[(11)]);
var inst_31460 = (state_31592[(12)]);
var inst_31540__$1 = cljs.core._nth.call(null,inst_31533,inst_31535);
var inst_31541 = cljs.core.async.put_BANG_.call(null,inst_31540__$1,inst_31460,done);
var state_31592__$1 = (function (){var statearr_31598 = state_31592;
(statearr_31598[(10)] = inst_31540__$1);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31541)){
var statearr_31599_31684 = state_31592__$1;
(statearr_31599_31684[(1)] = (30));

} else {
var statearr_31600_31685 = state_31592__$1;
(statearr_31600_31685[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (1))){
var state_31592__$1 = state_31592;
var statearr_31601_31686 = state_31592__$1;
(statearr_31601_31686[(2)] = null);

(statearr_31601_31686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (24))){
var inst_31491 = (state_31592[(7)]);
var inst_31510 = (state_31592[(2)]);
var inst_31511 = cljs.core.next.call(null,inst_31491);
var inst_31469 = inst_31511;
var inst_31470 = null;
var inst_31471 = (0);
var inst_31472 = (0);
var state_31592__$1 = (function (){var statearr_31602 = state_31592;
(statearr_31602[(13)] = inst_31469);

(statearr_31602[(14)] = inst_31510);

(statearr_31602[(15)] = inst_31472);

(statearr_31602[(16)] = inst_31471);

(statearr_31602[(17)] = inst_31470);

return statearr_31602;
})();
var statearr_31603_31687 = state_31592__$1;
(statearr_31603_31687[(2)] = null);

(statearr_31603_31687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (39))){
var state_31592__$1 = state_31592;
var statearr_31607_31688 = state_31592__$1;
(statearr_31607_31688[(2)] = null);

(statearr_31607_31688[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (4))){
var inst_31460 = (state_31592[(12)]);
var inst_31460__$1 = (state_31592[(2)]);
var inst_31461 = (inst_31460__$1 == null);
var state_31592__$1 = (function (){var statearr_31608 = state_31592;
(statearr_31608[(12)] = inst_31460__$1);

return statearr_31608;
})();
if(cljs.core.truth_(inst_31461)){
var statearr_31609_31689 = state_31592__$1;
(statearr_31609_31689[(1)] = (5));

} else {
var statearr_31610_31690 = state_31592__$1;
(statearr_31610_31690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (15))){
var inst_31469 = (state_31592[(13)]);
var inst_31472 = (state_31592[(15)]);
var inst_31471 = (state_31592[(16)]);
var inst_31470 = (state_31592[(17)]);
var inst_31487 = (state_31592[(2)]);
var inst_31488 = (inst_31472 + (1));
var tmp31604 = inst_31469;
var tmp31605 = inst_31471;
var tmp31606 = inst_31470;
var inst_31469__$1 = tmp31604;
var inst_31470__$1 = tmp31606;
var inst_31471__$1 = tmp31605;
var inst_31472__$1 = inst_31488;
var state_31592__$1 = (function (){var statearr_31611 = state_31592;
(statearr_31611[(13)] = inst_31469__$1);

(statearr_31611[(18)] = inst_31487);

(statearr_31611[(15)] = inst_31472__$1);

(statearr_31611[(16)] = inst_31471__$1);

(statearr_31611[(17)] = inst_31470__$1);

return statearr_31611;
})();
var statearr_31612_31691 = state_31592__$1;
(statearr_31612_31691[(2)] = null);

(statearr_31612_31691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (21))){
var inst_31514 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31616_31692 = state_31592__$1;
(statearr_31616_31692[(2)] = inst_31514);

(statearr_31616_31692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (31))){
var inst_31540 = (state_31592[(10)]);
var inst_31544 = done.call(null,null);
var inst_31545 = cljs.core.async.untap_STAR_.call(null,m,inst_31540);
var state_31592__$1 = (function (){var statearr_31617 = state_31592;
(statearr_31617[(19)] = inst_31544);

return statearr_31617;
})();
var statearr_31618_31693 = state_31592__$1;
(statearr_31618_31693[(2)] = inst_31545);

(statearr_31618_31693[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (32))){
var inst_31533 = (state_31592[(9)]);
var inst_31535 = (state_31592[(11)]);
var inst_31532 = (state_31592[(20)]);
var inst_31534 = (state_31592[(21)]);
var inst_31547 = (state_31592[(2)]);
var inst_31548 = (inst_31535 + (1));
var tmp31613 = inst_31533;
var tmp31614 = inst_31532;
var tmp31615 = inst_31534;
var inst_31532__$1 = tmp31614;
var inst_31533__$1 = tmp31613;
var inst_31534__$1 = tmp31615;
var inst_31535__$1 = inst_31548;
var state_31592__$1 = (function (){var statearr_31619 = state_31592;
(statearr_31619[(9)] = inst_31533__$1);

(statearr_31619[(11)] = inst_31535__$1);

(statearr_31619[(22)] = inst_31547);

(statearr_31619[(20)] = inst_31532__$1);

(statearr_31619[(21)] = inst_31534__$1);

return statearr_31619;
})();
var statearr_31620_31694 = state_31592__$1;
(statearr_31620_31694[(2)] = null);

(statearr_31620_31694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (40))){
var inst_31560 = (state_31592[(23)]);
var inst_31564 = done.call(null,null);
var inst_31565 = cljs.core.async.untap_STAR_.call(null,m,inst_31560);
var state_31592__$1 = (function (){var statearr_31621 = state_31592;
(statearr_31621[(24)] = inst_31564);

return statearr_31621;
})();
var statearr_31622_31695 = state_31592__$1;
(statearr_31622_31695[(2)] = inst_31565);

(statearr_31622_31695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (33))){
var inst_31551 = (state_31592[(25)]);
var inst_31553 = cljs.core.chunked_seq_QMARK_.call(null,inst_31551);
var state_31592__$1 = state_31592;
if(inst_31553){
var statearr_31623_31696 = state_31592__$1;
(statearr_31623_31696[(1)] = (36));

} else {
var statearr_31624_31697 = state_31592__$1;
(statearr_31624_31697[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (13))){
var inst_31481 = (state_31592[(26)]);
var inst_31484 = cljs.core.async.close_BANG_.call(null,inst_31481);
var state_31592__$1 = state_31592;
var statearr_31625_31698 = state_31592__$1;
(statearr_31625_31698[(2)] = inst_31484);

(statearr_31625_31698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (22))){
var inst_31504 = (state_31592[(8)]);
var inst_31507 = cljs.core.async.close_BANG_.call(null,inst_31504);
var state_31592__$1 = state_31592;
var statearr_31626_31699 = state_31592__$1;
(statearr_31626_31699[(2)] = inst_31507);

(statearr_31626_31699[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (36))){
var inst_31551 = (state_31592[(25)]);
var inst_31555 = cljs.core.chunk_first.call(null,inst_31551);
var inst_31556 = cljs.core.chunk_rest.call(null,inst_31551);
var inst_31557 = cljs.core.count.call(null,inst_31555);
var inst_31532 = inst_31556;
var inst_31533 = inst_31555;
var inst_31534 = inst_31557;
var inst_31535 = (0);
var state_31592__$1 = (function (){var statearr_31627 = state_31592;
(statearr_31627[(9)] = inst_31533);

(statearr_31627[(11)] = inst_31535);

(statearr_31627[(20)] = inst_31532);

(statearr_31627[(21)] = inst_31534);

return statearr_31627;
})();
var statearr_31628_31700 = state_31592__$1;
(statearr_31628_31700[(2)] = null);

(statearr_31628_31700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (41))){
var inst_31551 = (state_31592[(25)]);
var inst_31567 = (state_31592[(2)]);
var inst_31568 = cljs.core.next.call(null,inst_31551);
var inst_31532 = inst_31568;
var inst_31533 = null;
var inst_31534 = (0);
var inst_31535 = (0);
var state_31592__$1 = (function (){var statearr_31629 = state_31592;
(statearr_31629[(27)] = inst_31567);

(statearr_31629[(9)] = inst_31533);

(statearr_31629[(11)] = inst_31535);

(statearr_31629[(20)] = inst_31532);

(statearr_31629[(21)] = inst_31534);

return statearr_31629;
})();
var statearr_31630_31701 = state_31592__$1;
(statearr_31630_31701[(2)] = null);

(statearr_31630_31701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (43))){
var state_31592__$1 = state_31592;
var statearr_31631_31702 = state_31592__$1;
(statearr_31631_31702[(2)] = null);

(statearr_31631_31702[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (29))){
var inst_31576 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31632_31703 = state_31592__$1;
(statearr_31632_31703[(2)] = inst_31576);

(statearr_31632_31703[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (44))){
var inst_31585 = (state_31592[(2)]);
var state_31592__$1 = (function (){var statearr_31633 = state_31592;
(statearr_31633[(28)] = inst_31585);

return statearr_31633;
})();
var statearr_31634_31704 = state_31592__$1;
(statearr_31634_31704[(2)] = null);

(statearr_31634_31704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (6))){
var inst_31524 = (state_31592[(29)]);
var inst_31523 = cljs.core.deref.call(null,cs);
var inst_31524__$1 = cljs.core.keys.call(null,inst_31523);
var inst_31525 = cljs.core.count.call(null,inst_31524__$1);
var inst_31526 = cljs.core.reset_BANG_.call(null,dctr,inst_31525);
var inst_31531 = cljs.core.seq.call(null,inst_31524__$1);
var inst_31532 = inst_31531;
var inst_31533 = null;
var inst_31534 = (0);
var inst_31535 = (0);
var state_31592__$1 = (function (){var statearr_31635 = state_31592;
(statearr_31635[(9)] = inst_31533);

(statearr_31635[(11)] = inst_31535);

(statearr_31635[(29)] = inst_31524__$1);

(statearr_31635[(20)] = inst_31532);

(statearr_31635[(30)] = inst_31526);

(statearr_31635[(21)] = inst_31534);

return statearr_31635;
})();
var statearr_31636_31705 = state_31592__$1;
(statearr_31636_31705[(2)] = null);

(statearr_31636_31705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (28))){
var inst_31551 = (state_31592[(25)]);
var inst_31532 = (state_31592[(20)]);
var inst_31551__$1 = cljs.core.seq.call(null,inst_31532);
var state_31592__$1 = (function (){var statearr_31637 = state_31592;
(statearr_31637[(25)] = inst_31551__$1);

return statearr_31637;
})();
if(inst_31551__$1){
var statearr_31638_31706 = state_31592__$1;
(statearr_31638_31706[(1)] = (33));

} else {
var statearr_31639_31707 = state_31592__$1;
(statearr_31639_31707[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (25))){
var inst_31535 = (state_31592[(11)]);
var inst_31534 = (state_31592[(21)]);
var inst_31537 = (inst_31535 < inst_31534);
var inst_31538 = inst_31537;
var state_31592__$1 = state_31592;
if(cljs.core.truth_(inst_31538)){
var statearr_31640_31708 = state_31592__$1;
(statearr_31640_31708[(1)] = (27));

} else {
var statearr_31641_31709 = state_31592__$1;
(statearr_31641_31709[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (34))){
var state_31592__$1 = state_31592;
var statearr_31642_31710 = state_31592__$1;
(statearr_31642_31710[(2)] = null);

(statearr_31642_31710[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (17))){
var state_31592__$1 = state_31592;
var statearr_31643_31711 = state_31592__$1;
(statearr_31643_31711[(2)] = null);

(statearr_31643_31711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (3))){
var inst_31590 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31592__$1,inst_31590);
} else {
if((state_val_31593 === (12))){
var inst_31519 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31644_31712 = state_31592__$1;
(statearr_31644_31712[(2)] = inst_31519);

(statearr_31644_31712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (2))){
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31592__$1,(4),ch);
} else {
if((state_val_31593 === (23))){
var state_31592__$1 = state_31592;
var statearr_31645_31713 = state_31592__$1;
(statearr_31645_31713[(2)] = null);

(statearr_31645_31713[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (35))){
var inst_31574 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31646_31714 = state_31592__$1;
(statearr_31646_31714[(2)] = inst_31574);

(statearr_31646_31714[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (19))){
var inst_31491 = (state_31592[(7)]);
var inst_31495 = cljs.core.chunk_first.call(null,inst_31491);
var inst_31496 = cljs.core.chunk_rest.call(null,inst_31491);
var inst_31497 = cljs.core.count.call(null,inst_31495);
var inst_31469 = inst_31496;
var inst_31470 = inst_31495;
var inst_31471 = inst_31497;
var inst_31472 = (0);
var state_31592__$1 = (function (){var statearr_31647 = state_31592;
(statearr_31647[(13)] = inst_31469);

(statearr_31647[(15)] = inst_31472);

(statearr_31647[(16)] = inst_31471);

(statearr_31647[(17)] = inst_31470);

return statearr_31647;
})();
var statearr_31648_31715 = state_31592__$1;
(statearr_31648_31715[(2)] = null);

(statearr_31648_31715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (11))){
var inst_31469 = (state_31592[(13)]);
var inst_31491 = (state_31592[(7)]);
var inst_31491__$1 = cljs.core.seq.call(null,inst_31469);
var state_31592__$1 = (function (){var statearr_31649 = state_31592;
(statearr_31649[(7)] = inst_31491__$1);

return statearr_31649;
})();
if(inst_31491__$1){
var statearr_31650_31716 = state_31592__$1;
(statearr_31650_31716[(1)] = (16));

} else {
var statearr_31651_31717 = state_31592__$1;
(statearr_31651_31717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (9))){
var inst_31521 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31652_31718 = state_31592__$1;
(statearr_31652_31718[(2)] = inst_31521);

(statearr_31652_31718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (5))){
var inst_31467 = cljs.core.deref.call(null,cs);
var inst_31468 = cljs.core.seq.call(null,inst_31467);
var inst_31469 = inst_31468;
var inst_31470 = null;
var inst_31471 = (0);
var inst_31472 = (0);
var state_31592__$1 = (function (){var statearr_31653 = state_31592;
(statearr_31653[(13)] = inst_31469);

(statearr_31653[(15)] = inst_31472);

(statearr_31653[(16)] = inst_31471);

(statearr_31653[(17)] = inst_31470);

return statearr_31653;
})();
var statearr_31654_31719 = state_31592__$1;
(statearr_31654_31719[(2)] = null);

(statearr_31654_31719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (14))){
var state_31592__$1 = state_31592;
var statearr_31655_31720 = state_31592__$1;
(statearr_31655_31720[(2)] = null);

(statearr_31655_31720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (45))){
var inst_31582 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31656_31721 = state_31592__$1;
(statearr_31656_31721[(2)] = inst_31582);

(statearr_31656_31721[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (26))){
var inst_31524 = (state_31592[(29)]);
var inst_31578 = (state_31592[(2)]);
var inst_31579 = cljs.core.seq.call(null,inst_31524);
var state_31592__$1 = (function (){var statearr_31657 = state_31592;
(statearr_31657[(31)] = inst_31578);

return statearr_31657;
})();
if(inst_31579){
var statearr_31658_31722 = state_31592__$1;
(statearr_31658_31722[(1)] = (42));

} else {
var statearr_31659_31723 = state_31592__$1;
(statearr_31659_31723[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (16))){
var inst_31491 = (state_31592[(7)]);
var inst_31493 = cljs.core.chunked_seq_QMARK_.call(null,inst_31491);
var state_31592__$1 = state_31592;
if(inst_31493){
var statearr_31660_31724 = state_31592__$1;
(statearr_31660_31724[(1)] = (19));

} else {
var statearr_31661_31725 = state_31592__$1;
(statearr_31661_31725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (38))){
var inst_31571 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31662_31726 = state_31592__$1;
(statearr_31662_31726[(2)] = inst_31571);

(statearr_31662_31726[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (30))){
var state_31592__$1 = state_31592;
var statearr_31663_31727 = state_31592__$1;
(statearr_31663_31727[(2)] = null);

(statearr_31663_31727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (10))){
var inst_31472 = (state_31592[(15)]);
var inst_31470 = (state_31592[(17)]);
var inst_31480 = cljs.core._nth.call(null,inst_31470,inst_31472);
var inst_31481 = cljs.core.nth.call(null,inst_31480,(0),null);
var inst_31482 = cljs.core.nth.call(null,inst_31480,(1),null);
var state_31592__$1 = (function (){var statearr_31664 = state_31592;
(statearr_31664[(26)] = inst_31481);

return statearr_31664;
})();
if(cljs.core.truth_(inst_31482)){
var statearr_31665_31728 = state_31592__$1;
(statearr_31665_31728[(1)] = (13));

} else {
var statearr_31666_31729 = state_31592__$1;
(statearr_31666_31729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (18))){
var inst_31517 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31667_31730 = state_31592__$1;
(statearr_31667_31730[(2)] = inst_31517);

(statearr_31667_31730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (42))){
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31592__$1,(45),dchan);
} else {
if((state_val_31593 === (37))){
var inst_31551 = (state_31592[(25)]);
var inst_31460 = (state_31592[(12)]);
var inst_31560 = (state_31592[(23)]);
var inst_31560__$1 = cljs.core.first.call(null,inst_31551);
var inst_31561 = cljs.core.async.put_BANG_.call(null,inst_31560__$1,inst_31460,done);
var state_31592__$1 = (function (){var statearr_31668 = state_31592;
(statearr_31668[(23)] = inst_31560__$1);

return statearr_31668;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31669_31731 = state_31592__$1;
(statearr_31669_31731[(1)] = (39));

} else {
var statearr_31670_31732 = state_31592__$1;
(statearr_31670_31732[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (8))){
var inst_31472 = (state_31592[(15)]);
var inst_31471 = (state_31592[(16)]);
var inst_31474 = (inst_31472 < inst_31471);
var inst_31475 = inst_31474;
var state_31592__$1 = state_31592;
if(cljs.core.truth_(inst_31475)){
var statearr_31671_31733 = state_31592__$1;
(statearr_31671_31733[(1)] = (10));

} else {
var statearr_31672_31734 = state_31592__$1;
(statearr_31672_31734[(1)] = (11));

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
});})(c__30326__auto___31680,cs,m,dchan,dctr,done))
;
return ((function (switch__30214__auto__,c__30326__auto___31680,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30215__auto__ = null;
var cljs$core$async$mult_$_state_machine__30215__auto____0 = (function (){
var statearr_31676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31676[(0)] = cljs$core$async$mult_$_state_machine__30215__auto__);

(statearr_31676[(1)] = (1));

return statearr_31676;
});
var cljs$core$async$mult_$_state_machine__30215__auto____1 = (function (state_31592){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_31592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e31677){if((e31677 instanceof Object)){
var ex__30218__auto__ = e31677;
var statearr_31678_31735 = state_31592;
(statearr_31678_31735[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31736 = state_31592;
state_31592 = G__31736;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30215__auto__ = function(state_31592){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30215__auto____1.call(this,state_31592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30215__auto____0;
cljs$core$async$mult_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30215__auto____1;
return cljs$core$async$mult_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___31680,cs,m,dchan,dctr,done))
})();
var state__30328__auto__ = (function (){var statearr_31679 = f__30327__auto__.call(null);
(statearr_31679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___31680);

return statearr_31679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31680,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31737 = [];
var len__27557__auto___31740 = arguments.length;
var i__27558__auto___31741 = (0);
while(true){
if((i__27558__auto___31741 < len__27557__auto___31740)){
args31737.push((arguments[i__27558__auto___31741]));

var G__31742 = (i__27558__auto___31741 + (1));
i__27558__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31739 = args31737.length;
switch (G__31739) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31737.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m,ch);
} else {
var m__27113__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m,ch);
} else {
var m__27113__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m);
} else {
var m__27113__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m,state_map);
} else {
var m__27113__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27112__auto__ = (((m == null))?null:m);
var m__27113__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,m,mode);
} else {
var m__27113__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27564__auto__ = [];
var len__27557__auto___31754 = arguments.length;
var i__27558__auto___31755 = (0);
while(true){
if((i__27558__auto___31755 < len__27557__auto___31754)){
args__27564__auto__.push((arguments[i__27558__auto___31755]));

var G__31756 = (i__27558__auto___31755 + (1));
i__27558__auto___31755 = G__31756;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((3) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27565__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31748){
var map__31749 = p__31748;
var map__31749__$1 = ((((!((map__31749 == null)))?((((map__31749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31749):map__31749);
var opts = map__31749__$1;
var statearr_31751_31757 = state;
(statearr_31751_31757[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31749,map__31749__$1,opts){
return (function (val){
var statearr_31752_31758 = state;
(statearr_31752_31758[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31749,map__31749__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31753_31759 = state;
(statearr_31753_31759[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31744){
var G__31745 = cljs.core.first.call(null,seq31744);
var seq31744__$1 = cljs.core.next.call(null,seq31744);
var G__31746 = cljs.core.first.call(null,seq31744__$1);
var seq31744__$2 = cljs.core.next.call(null,seq31744__$1);
var G__31747 = cljs.core.first.call(null,seq31744__$2);
var seq31744__$3 = cljs.core.next.call(null,seq31744__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31745,G__31746,G__31747,seq31744__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31927 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31928){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31928 = meta31928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31929,meta31928__$1){
var self__ = this;
var _31929__$1 = this;
return (new cljs.core.async.t_cljs$core$async31927(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31928__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31929){
var self__ = this;
var _31929__$1 = this;
return self__.meta31928;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31928","meta31928",1651569455,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31927";

cljs.core.async.t_cljs$core$async31927.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async31927");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31927 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31927(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31928){
return (new cljs.core.async.t_cljs$core$async31927(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31928));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31927(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30326__auto___32094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___32094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32031){
var state_val_32032 = (state_32031[(1)]);
if((state_val_32032 === (7))){
var inst_31946 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32033_32095 = state_32031__$1;
(statearr_32033_32095[(2)] = inst_31946);

(statearr_32033_32095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (20))){
var inst_31958 = (state_32031[(7)]);
var state_32031__$1 = state_32031;
var statearr_32034_32096 = state_32031__$1;
(statearr_32034_32096[(2)] = inst_31958);

(statearr_32034_32096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (27))){
var state_32031__$1 = state_32031;
var statearr_32035_32097 = state_32031__$1;
(statearr_32035_32097[(2)] = null);

(statearr_32035_32097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (1))){
var inst_31933 = (state_32031[(8)]);
var inst_31933__$1 = calc_state.call(null);
var inst_31935 = (inst_31933__$1 == null);
var inst_31936 = cljs.core.not.call(null,inst_31935);
var state_32031__$1 = (function (){var statearr_32036 = state_32031;
(statearr_32036[(8)] = inst_31933__$1);

return statearr_32036;
})();
if(inst_31936){
var statearr_32037_32098 = state_32031__$1;
(statearr_32037_32098[(1)] = (2));

} else {
var statearr_32038_32099 = state_32031__$1;
(statearr_32038_32099[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (24))){
var inst_31982 = (state_32031[(9)]);
var inst_31991 = (state_32031[(10)]);
var inst_32005 = (state_32031[(11)]);
var inst_32005__$1 = inst_31982.call(null,inst_31991);
var state_32031__$1 = (function (){var statearr_32039 = state_32031;
(statearr_32039[(11)] = inst_32005__$1);

return statearr_32039;
})();
if(cljs.core.truth_(inst_32005__$1)){
var statearr_32040_32100 = state_32031__$1;
(statearr_32040_32100[(1)] = (29));

} else {
var statearr_32041_32101 = state_32031__$1;
(statearr_32041_32101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (4))){
var inst_31949 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31949)){
var statearr_32042_32102 = state_32031__$1;
(statearr_32042_32102[(1)] = (8));

} else {
var statearr_32043_32103 = state_32031__$1;
(statearr_32043_32103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (15))){
var inst_31976 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31976)){
var statearr_32044_32104 = state_32031__$1;
(statearr_32044_32104[(1)] = (19));

} else {
var statearr_32045_32105 = state_32031__$1;
(statearr_32045_32105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (21))){
var inst_31981 = (state_32031[(12)]);
var inst_31981__$1 = (state_32031[(2)]);
var inst_31982 = cljs.core.get.call(null,inst_31981__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31983 = cljs.core.get.call(null,inst_31981__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31984 = cljs.core.get.call(null,inst_31981__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32031__$1 = (function (){var statearr_32046 = state_32031;
(statearr_32046[(9)] = inst_31982);

(statearr_32046[(12)] = inst_31981__$1);

(statearr_32046[(13)] = inst_31983);

return statearr_32046;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32031__$1,(22),inst_31984);
} else {
if((state_val_32032 === (31))){
var inst_32013 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_32013)){
var statearr_32047_32106 = state_32031__$1;
(statearr_32047_32106[(1)] = (32));

} else {
var statearr_32048_32107 = state_32031__$1;
(statearr_32048_32107[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (32))){
var inst_31990 = (state_32031[(14)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32031__$1,(35),out,inst_31990);
} else {
if((state_val_32032 === (33))){
var inst_31981 = (state_32031[(12)]);
var inst_31958 = inst_31981;
var state_32031__$1 = (function (){var statearr_32049 = state_32031;
(statearr_32049[(7)] = inst_31958);

return statearr_32049;
})();
var statearr_32050_32108 = state_32031__$1;
(statearr_32050_32108[(2)] = null);

(statearr_32050_32108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (13))){
var inst_31958 = (state_32031[(7)]);
var inst_31965 = inst_31958.cljs$lang$protocol_mask$partition0$;
var inst_31966 = (inst_31965 & (64));
var inst_31967 = inst_31958.cljs$core$ISeq$;
var inst_31968 = (cljs.core.PROTOCOL_SENTINEL === inst_31967);
var inst_31969 = (inst_31966) || (inst_31968);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31969)){
var statearr_32051_32109 = state_32031__$1;
(statearr_32051_32109[(1)] = (16));

} else {
var statearr_32052_32110 = state_32031__$1;
(statearr_32052_32110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (22))){
var inst_31991 = (state_32031[(10)]);
var inst_31990 = (state_32031[(14)]);
var inst_31989 = (state_32031[(2)]);
var inst_31990__$1 = cljs.core.nth.call(null,inst_31989,(0),null);
var inst_31991__$1 = cljs.core.nth.call(null,inst_31989,(1),null);
var inst_31992 = (inst_31990__$1 == null);
var inst_31993 = cljs.core._EQ_.call(null,inst_31991__$1,change);
var inst_31994 = (inst_31992) || (inst_31993);
var state_32031__$1 = (function (){var statearr_32053 = state_32031;
(statearr_32053[(10)] = inst_31991__$1);

(statearr_32053[(14)] = inst_31990__$1);

return statearr_32053;
})();
if(cljs.core.truth_(inst_31994)){
var statearr_32054_32111 = state_32031__$1;
(statearr_32054_32111[(1)] = (23));

} else {
var statearr_32055_32112 = state_32031__$1;
(statearr_32055_32112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (36))){
var inst_31981 = (state_32031[(12)]);
var inst_31958 = inst_31981;
var state_32031__$1 = (function (){var statearr_32056 = state_32031;
(statearr_32056[(7)] = inst_31958);

return statearr_32056;
})();
var statearr_32057_32113 = state_32031__$1;
(statearr_32057_32113[(2)] = null);

(statearr_32057_32113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (29))){
var inst_32005 = (state_32031[(11)]);
var state_32031__$1 = state_32031;
var statearr_32058_32114 = state_32031__$1;
(statearr_32058_32114[(2)] = inst_32005);

(statearr_32058_32114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (6))){
var state_32031__$1 = state_32031;
var statearr_32059_32115 = state_32031__$1;
(statearr_32059_32115[(2)] = false);

(statearr_32059_32115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (28))){
var inst_32001 = (state_32031[(2)]);
var inst_32002 = calc_state.call(null);
var inst_31958 = inst_32002;
var state_32031__$1 = (function (){var statearr_32060 = state_32031;
(statearr_32060[(7)] = inst_31958);

(statearr_32060[(15)] = inst_32001);

return statearr_32060;
})();
var statearr_32061_32116 = state_32031__$1;
(statearr_32061_32116[(2)] = null);

(statearr_32061_32116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (25))){
var inst_32027 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32062_32117 = state_32031__$1;
(statearr_32062_32117[(2)] = inst_32027);

(statearr_32062_32117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (34))){
var inst_32025 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32063_32118 = state_32031__$1;
(statearr_32063_32118[(2)] = inst_32025);

(statearr_32063_32118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (17))){
var state_32031__$1 = state_32031;
var statearr_32064_32119 = state_32031__$1;
(statearr_32064_32119[(2)] = false);

(statearr_32064_32119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (3))){
var state_32031__$1 = state_32031;
var statearr_32065_32120 = state_32031__$1;
(statearr_32065_32120[(2)] = false);

(statearr_32065_32120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (12))){
var inst_32029 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32031__$1,inst_32029);
} else {
if((state_val_32032 === (2))){
var inst_31933 = (state_32031[(8)]);
var inst_31938 = inst_31933.cljs$lang$protocol_mask$partition0$;
var inst_31939 = (inst_31938 & (64));
var inst_31940 = inst_31933.cljs$core$ISeq$;
var inst_31941 = (cljs.core.PROTOCOL_SENTINEL === inst_31940);
var inst_31942 = (inst_31939) || (inst_31941);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31942)){
var statearr_32066_32121 = state_32031__$1;
(statearr_32066_32121[(1)] = (5));

} else {
var statearr_32067_32122 = state_32031__$1;
(statearr_32067_32122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (23))){
var inst_31990 = (state_32031[(14)]);
var inst_31996 = (inst_31990 == null);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31996)){
var statearr_32068_32123 = state_32031__$1;
(statearr_32068_32123[(1)] = (26));

} else {
var statearr_32069_32124 = state_32031__$1;
(statearr_32069_32124[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (35))){
var inst_32016 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_32016)){
var statearr_32070_32125 = state_32031__$1;
(statearr_32070_32125[(1)] = (36));

} else {
var statearr_32071_32126 = state_32031__$1;
(statearr_32071_32126[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (19))){
var inst_31958 = (state_32031[(7)]);
var inst_31978 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31958);
var state_32031__$1 = state_32031;
var statearr_32072_32127 = state_32031__$1;
(statearr_32072_32127[(2)] = inst_31978);

(statearr_32072_32127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (11))){
var inst_31958 = (state_32031[(7)]);
var inst_31962 = (inst_31958 == null);
var inst_31963 = cljs.core.not.call(null,inst_31962);
var state_32031__$1 = state_32031;
if(inst_31963){
var statearr_32073_32128 = state_32031__$1;
(statearr_32073_32128[(1)] = (13));

} else {
var statearr_32074_32129 = state_32031__$1;
(statearr_32074_32129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (9))){
var inst_31933 = (state_32031[(8)]);
var state_32031__$1 = state_32031;
var statearr_32075_32130 = state_32031__$1;
(statearr_32075_32130[(2)] = inst_31933);

(statearr_32075_32130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (5))){
var state_32031__$1 = state_32031;
var statearr_32076_32131 = state_32031__$1;
(statearr_32076_32131[(2)] = true);

(statearr_32076_32131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (14))){
var state_32031__$1 = state_32031;
var statearr_32077_32132 = state_32031__$1;
(statearr_32077_32132[(2)] = false);

(statearr_32077_32132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (26))){
var inst_31991 = (state_32031[(10)]);
var inst_31998 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31991);
var state_32031__$1 = state_32031;
var statearr_32078_32133 = state_32031__$1;
(statearr_32078_32133[(2)] = inst_31998);

(statearr_32078_32133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (16))){
var state_32031__$1 = state_32031;
var statearr_32079_32134 = state_32031__$1;
(statearr_32079_32134[(2)] = true);

(statearr_32079_32134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (38))){
var inst_32021 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32080_32135 = state_32031__$1;
(statearr_32080_32135[(2)] = inst_32021);

(statearr_32080_32135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (30))){
var inst_31982 = (state_32031[(9)]);
var inst_31991 = (state_32031[(10)]);
var inst_31983 = (state_32031[(13)]);
var inst_32008 = cljs.core.empty_QMARK_.call(null,inst_31982);
var inst_32009 = inst_31983.call(null,inst_31991);
var inst_32010 = cljs.core.not.call(null,inst_32009);
var inst_32011 = (inst_32008) && (inst_32010);
var state_32031__$1 = state_32031;
var statearr_32081_32136 = state_32031__$1;
(statearr_32081_32136[(2)] = inst_32011);

(statearr_32081_32136[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (10))){
var inst_31933 = (state_32031[(8)]);
var inst_31954 = (state_32031[(2)]);
var inst_31955 = cljs.core.get.call(null,inst_31954,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31956 = cljs.core.get.call(null,inst_31954,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31957 = cljs.core.get.call(null,inst_31954,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31958 = inst_31933;
var state_32031__$1 = (function (){var statearr_32082 = state_32031;
(statearr_32082[(16)] = inst_31955);

(statearr_32082[(17)] = inst_31956);

(statearr_32082[(7)] = inst_31958);

(statearr_32082[(18)] = inst_31957);

return statearr_32082;
})();
var statearr_32083_32137 = state_32031__$1;
(statearr_32083_32137[(2)] = null);

(statearr_32083_32137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (18))){
var inst_31973 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32084_32138 = state_32031__$1;
(statearr_32084_32138[(2)] = inst_31973);

(statearr_32084_32138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (37))){
var state_32031__$1 = state_32031;
var statearr_32085_32139 = state_32031__$1;
(statearr_32085_32139[(2)] = null);

(statearr_32085_32139[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (8))){
var inst_31933 = (state_32031[(8)]);
var inst_31951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31933);
var state_32031__$1 = state_32031;
var statearr_32086_32140 = state_32031__$1;
(statearr_32086_32140[(2)] = inst_31951);

(statearr_32086_32140[(1)] = (10));


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
});})(c__30326__auto___32094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30214__auto__,c__30326__auto___32094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30215__auto__ = null;
var cljs$core$async$mix_$_state_machine__30215__auto____0 = (function (){
var statearr_32090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32090[(0)] = cljs$core$async$mix_$_state_machine__30215__auto__);

(statearr_32090[(1)] = (1));

return statearr_32090;
});
var cljs$core$async$mix_$_state_machine__30215__auto____1 = (function (state_32031){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32091){if((e32091 instanceof Object)){
var ex__30218__auto__ = e32091;
var statearr_32092_32141 = state_32031;
(statearr_32092_32141[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32142 = state_32031;
state_32031 = G__32142;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30215__auto__ = function(state_32031){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30215__auto____1.call(this,state_32031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30215__auto____0;
cljs$core$async$mix_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30215__auto____1;
return cljs$core$async$mix_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___32094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30328__auto__ = (function (){var statearr_32093 = f__30327__auto__.call(null);
(statearr_32093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___32094);

return statearr_32093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27112__auto__ = (((p == null))?null:p);
var m__27113__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27113__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27112__auto__ = (((p == null))?null:p);
var m__27113__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,p,v,ch);
} else {
var m__27113__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32143 = [];
var len__27557__auto___32146 = arguments.length;
var i__27558__auto___32147 = (0);
while(true){
if((i__27558__auto___32147 < len__27557__auto___32146)){
args32143.push((arguments[i__27558__auto___32147]));

var G__32148 = (i__27558__auto___32147 + (1));
i__27558__auto___32147 = G__32148;
continue;
} else {
}
break;
}

var G__32145 = args32143.length;
switch (G__32145) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32143.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27112__auto__ = (((p == null))?null:p);
var m__27113__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,p);
} else {
var m__27113__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27112__auto__ = (((p == null))?null:p);
var m__27113__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,p,v);
} else {
var m__27113__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32151 = [];
var len__27557__auto___32276 = arguments.length;
var i__27558__auto___32277 = (0);
while(true){
if((i__27558__auto___32277 < len__27557__auto___32276)){
args32151.push((arguments[i__27558__auto___32277]));

var G__32278 = (i__27558__auto___32277 + (1));
i__27558__auto___32277 = G__32278;
continue;
} else {
}
break;
}

var G__32153 = args32151.length;
switch (G__32153) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32151.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26444__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26444__auto__,mults){
return (function (p1__32150_SHARP_){
if(cljs.core.truth_(p1__32150_SHARP_.call(null,topic))){
return p1__32150_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32150_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26444__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32154 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32155){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32155 = meta32155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32156,meta32155__$1){
var self__ = this;
var _32156__$1 = this;
return (new cljs.core.async.t_cljs$core$async32154(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32155__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32156){
var self__ = this;
var _32156__$1 = this;
return self__.meta32155;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32155","meta32155",937435878,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32154";

cljs.core.async.t_cljs$core$async32154.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async32154");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32154 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32154(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32155){
return (new cljs.core.async.t_cljs$core$async32154(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32155));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32154(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30326__auto___32280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32280,mults,ensure_mult,p){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___32280,mults,ensure_mult,p){
return (function (state_32228){
var state_val_32229 = (state_32228[(1)]);
if((state_val_32229 === (7))){
var inst_32224 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32230_32281 = state_32228__$1;
(statearr_32230_32281[(2)] = inst_32224);

(statearr_32230_32281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (20))){
var state_32228__$1 = state_32228;
var statearr_32231_32282 = state_32228__$1;
(statearr_32231_32282[(2)] = null);

(statearr_32231_32282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (1))){
var state_32228__$1 = state_32228;
var statearr_32232_32283 = state_32228__$1;
(statearr_32232_32283[(2)] = null);

(statearr_32232_32283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (24))){
var inst_32207 = (state_32228[(7)]);
var inst_32216 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32207);
var state_32228__$1 = state_32228;
var statearr_32233_32284 = state_32228__$1;
(statearr_32233_32284[(2)] = inst_32216);

(statearr_32233_32284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (4))){
var inst_32159 = (state_32228[(8)]);
var inst_32159__$1 = (state_32228[(2)]);
var inst_32160 = (inst_32159__$1 == null);
var state_32228__$1 = (function (){var statearr_32234 = state_32228;
(statearr_32234[(8)] = inst_32159__$1);

return statearr_32234;
})();
if(cljs.core.truth_(inst_32160)){
var statearr_32235_32285 = state_32228__$1;
(statearr_32235_32285[(1)] = (5));

} else {
var statearr_32236_32286 = state_32228__$1;
(statearr_32236_32286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (15))){
var inst_32201 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32237_32287 = state_32228__$1;
(statearr_32237_32287[(2)] = inst_32201);

(statearr_32237_32287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (21))){
var inst_32221 = (state_32228[(2)]);
var state_32228__$1 = (function (){var statearr_32238 = state_32228;
(statearr_32238[(9)] = inst_32221);

return statearr_32238;
})();
var statearr_32239_32288 = state_32228__$1;
(statearr_32239_32288[(2)] = null);

(statearr_32239_32288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (13))){
var inst_32183 = (state_32228[(10)]);
var inst_32185 = cljs.core.chunked_seq_QMARK_.call(null,inst_32183);
var state_32228__$1 = state_32228;
if(inst_32185){
var statearr_32240_32289 = state_32228__$1;
(statearr_32240_32289[(1)] = (16));

} else {
var statearr_32241_32290 = state_32228__$1;
(statearr_32241_32290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (22))){
var inst_32213 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
if(cljs.core.truth_(inst_32213)){
var statearr_32242_32291 = state_32228__$1;
(statearr_32242_32291[(1)] = (23));

} else {
var statearr_32243_32292 = state_32228__$1;
(statearr_32243_32292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (6))){
var inst_32207 = (state_32228[(7)]);
var inst_32209 = (state_32228[(11)]);
var inst_32159 = (state_32228[(8)]);
var inst_32207__$1 = topic_fn.call(null,inst_32159);
var inst_32208 = cljs.core.deref.call(null,mults);
var inst_32209__$1 = cljs.core.get.call(null,inst_32208,inst_32207__$1);
var state_32228__$1 = (function (){var statearr_32244 = state_32228;
(statearr_32244[(7)] = inst_32207__$1);

(statearr_32244[(11)] = inst_32209__$1);

return statearr_32244;
})();
if(cljs.core.truth_(inst_32209__$1)){
var statearr_32245_32293 = state_32228__$1;
(statearr_32245_32293[(1)] = (19));

} else {
var statearr_32246_32294 = state_32228__$1;
(statearr_32246_32294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (25))){
var inst_32218 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32247_32295 = state_32228__$1;
(statearr_32247_32295[(2)] = inst_32218);

(statearr_32247_32295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (17))){
var inst_32183 = (state_32228[(10)]);
var inst_32192 = cljs.core.first.call(null,inst_32183);
var inst_32193 = cljs.core.async.muxch_STAR_.call(null,inst_32192);
var inst_32194 = cljs.core.async.close_BANG_.call(null,inst_32193);
var inst_32195 = cljs.core.next.call(null,inst_32183);
var inst_32169 = inst_32195;
var inst_32170 = null;
var inst_32171 = (0);
var inst_32172 = (0);
var state_32228__$1 = (function (){var statearr_32248 = state_32228;
(statearr_32248[(12)] = inst_32170);

(statearr_32248[(13)] = inst_32194);

(statearr_32248[(14)] = inst_32169);

(statearr_32248[(15)] = inst_32171);

(statearr_32248[(16)] = inst_32172);

return statearr_32248;
})();
var statearr_32249_32296 = state_32228__$1;
(statearr_32249_32296[(2)] = null);

(statearr_32249_32296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (3))){
var inst_32226 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32228__$1,inst_32226);
} else {
if((state_val_32229 === (12))){
var inst_32203 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32250_32297 = state_32228__$1;
(statearr_32250_32297[(2)] = inst_32203);

(statearr_32250_32297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (2))){
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32228__$1,(4),ch);
} else {
if((state_val_32229 === (23))){
var state_32228__$1 = state_32228;
var statearr_32251_32298 = state_32228__$1;
(statearr_32251_32298[(2)] = null);

(statearr_32251_32298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (19))){
var inst_32209 = (state_32228[(11)]);
var inst_32159 = (state_32228[(8)]);
var inst_32211 = cljs.core.async.muxch_STAR_.call(null,inst_32209);
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32228__$1,(22),inst_32211,inst_32159);
} else {
if((state_val_32229 === (11))){
var inst_32169 = (state_32228[(14)]);
var inst_32183 = (state_32228[(10)]);
var inst_32183__$1 = cljs.core.seq.call(null,inst_32169);
var state_32228__$1 = (function (){var statearr_32252 = state_32228;
(statearr_32252[(10)] = inst_32183__$1);

return statearr_32252;
})();
if(inst_32183__$1){
var statearr_32253_32299 = state_32228__$1;
(statearr_32253_32299[(1)] = (13));

} else {
var statearr_32254_32300 = state_32228__$1;
(statearr_32254_32300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (9))){
var inst_32205 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32255_32301 = state_32228__$1;
(statearr_32255_32301[(2)] = inst_32205);

(statearr_32255_32301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (5))){
var inst_32166 = cljs.core.deref.call(null,mults);
var inst_32167 = cljs.core.vals.call(null,inst_32166);
var inst_32168 = cljs.core.seq.call(null,inst_32167);
var inst_32169 = inst_32168;
var inst_32170 = null;
var inst_32171 = (0);
var inst_32172 = (0);
var state_32228__$1 = (function (){var statearr_32256 = state_32228;
(statearr_32256[(12)] = inst_32170);

(statearr_32256[(14)] = inst_32169);

(statearr_32256[(15)] = inst_32171);

(statearr_32256[(16)] = inst_32172);

return statearr_32256;
})();
var statearr_32257_32302 = state_32228__$1;
(statearr_32257_32302[(2)] = null);

(statearr_32257_32302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (14))){
var state_32228__$1 = state_32228;
var statearr_32261_32303 = state_32228__$1;
(statearr_32261_32303[(2)] = null);

(statearr_32261_32303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (16))){
var inst_32183 = (state_32228[(10)]);
var inst_32187 = cljs.core.chunk_first.call(null,inst_32183);
var inst_32188 = cljs.core.chunk_rest.call(null,inst_32183);
var inst_32189 = cljs.core.count.call(null,inst_32187);
var inst_32169 = inst_32188;
var inst_32170 = inst_32187;
var inst_32171 = inst_32189;
var inst_32172 = (0);
var state_32228__$1 = (function (){var statearr_32262 = state_32228;
(statearr_32262[(12)] = inst_32170);

(statearr_32262[(14)] = inst_32169);

(statearr_32262[(15)] = inst_32171);

(statearr_32262[(16)] = inst_32172);

return statearr_32262;
})();
var statearr_32263_32304 = state_32228__$1;
(statearr_32263_32304[(2)] = null);

(statearr_32263_32304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (10))){
var inst_32170 = (state_32228[(12)]);
var inst_32169 = (state_32228[(14)]);
var inst_32171 = (state_32228[(15)]);
var inst_32172 = (state_32228[(16)]);
var inst_32177 = cljs.core._nth.call(null,inst_32170,inst_32172);
var inst_32178 = cljs.core.async.muxch_STAR_.call(null,inst_32177);
var inst_32179 = cljs.core.async.close_BANG_.call(null,inst_32178);
var inst_32180 = (inst_32172 + (1));
var tmp32258 = inst_32170;
var tmp32259 = inst_32169;
var tmp32260 = inst_32171;
var inst_32169__$1 = tmp32259;
var inst_32170__$1 = tmp32258;
var inst_32171__$1 = tmp32260;
var inst_32172__$1 = inst_32180;
var state_32228__$1 = (function (){var statearr_32264 = state_32228;
(statearr_32264[(17)] = inst_32179);

(statearr_32264[(12)] = inst_32170__$1);

(statearr_32264[(14)] = inst_32169__$1);

(statearr_32264[(15)] = inst_32171__$1);

(statearr_32264[(16)] = inst_32172__$1);

return statearr_32264;
})();
var statearr_32265_32305 = state_32228__$1;
(statearr_32265_32305[(2)] = null);

(statearr_32265_32305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (18))){
var inst_32198 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32266_32306 = state_32228__$1;
(statearr_32266_32306[(2)] = inst_32198);

(statearr_32266_32306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (8))){
var inst_32171 = (state_32228[(15)]);
var inst_32172 = (state_32228[(16)]);
var inst_32174 = (inst_32172 < inst_32171);
var inst_32175 = inst_32174;
var state_32228__$1 = state_32228;
if(cljs.core.truth_(inst_32175)){
var statearr_32267_32307 = state_32228__$1;
(statearr_32267_32307[(1)] = (10));

} else {
var statearr_32268_32308 = state_32228__$1;
(statearr_32268_32308[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__30326__auto___32280,mults,ensure_mult,p))
;
return ((function (switch__30214__auto__,c__30326__auto___32280,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_32272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32272[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_32272[(1)] = (1));

return statearr_32272;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_32228){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32273){if((e32273 instanceof Object)){
var ex__30218__auto__ = e32273;
var statearr_32274_32309 = state_32228;
(statearr_32274_32309[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32310 = state_32228;
state_32228 = G__32310;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_32228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_32228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___32280,mults,ensure_mult,p))
})();
var state__30328__auto__ = (function (){var statearr_32275 = f__30327__auto__.call(null);
(statearr_32275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___32280);

return statearr_32275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32280,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32311 = [];
var len__27557__auto___32314 = arguments.length;
var i__27558__auto___32315 = (0);
while(true){
if((i__27558__auto___32315 < len__27557__auto___32314)){
args32311.push((arguments[i__27558__auto___32315]));

var G__32316 = (i__27558__auto___32315 + (1));
i__27558__auto___32315 = G__32316;
continue;
} else {
}
break;
}

var G__32313 = args32311.length;
switch (G__32313) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32311.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32318 = [];
var len__27557__auto___32321 = arguments.length;
var i__27558__auto___32322 = (0);
while(true){
if((i__27558__auto___32322 < len__27557__auto___32321)){
args32318.push((arguments[i__27558__auto___32322]));

var G__32323 = (i__27558__auto___32322 + (1));
i__27558__auto___32322 = G__32323;
continue;
} else {
}
break;
}

var G__32320 = args32318.length;
switch (G__32320) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32318.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32325 = [];
var len__27557__auto___32396 = arguments.length;
var i__27558__auto___32397 = (0);
while(true){
if((i__27558__auto___32397 < len__27557__auto___32396)){
args32325.push((arguments[i__27558__auto___32397]));

var G__32398 = (i__27558__auto___32397 + (1));
i__27558__auto___32397 = G__32398;
continue;
} else {
}
break;
}

var G__32327 = args32325.length;
switch (G__32327) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32325.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30326__auto___32400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___32400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32366){
var state_val_32367 = (state_32366[(1)]);
if((state_val_32367 === (7))){
var state_32366__$1 = state_32366;
var statearr_32368_32401 = state_32366__$1;
(statearr_32368_32401[(2)] = null);

(statearr_32368_32401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (1))){
var state_32366__$1 = state_32366;
var statearr_32369_32402 = state_32366__$1;
(statearr_32369_32402[(2)] = null);

(statearr_32369_32402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (4))){
var inst_32330 = (state_32366[(7)]);
var inst_32332 = (inst_32330 < cnt);
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32332)){
var statearr_32370_32403 = state_32366__$1;
(statearr_32370_32403[(1)] = (6));

} else {
var statearr_32371_32404 = state_32366__$1;
(statearr_32371_32404[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (15))){
var inst_32362 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32372_32405 = state_32366__$1;
(statearr_32372_32405[(2)] = inst_32362);

(statearr_32372_32405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (13))){
var inst_32355 = cljs.core.async.close_BANG_.call(null,out);
var state_32366__$1 = state_32366;
var statearr_32373_32406 = state_32366__$1;
(statearr_32373_32406[(2)] = inst_32355);

(statearr_32373_32406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (6))){
var state_32366__$1 = state_32366;
var statearr_32374_32407 = state_32366__$1;
(statearr_32374_32407[(2)] = null);

(statearr_32374_32407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (3))){
var inst_32364 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32366__$1,inst_32364);
} else {
if((state_val_32367 === (12))){
var inst_32352 = (state_32366[(8)]);
var inst_32352__$1 = (state_32366[(2)]);
var inst_32353 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32352__$1);
var state_32366__$1 = (function (){var statearr_32375 = state_32366;
(statearr_32375[(8)] = inst_32352__$1);

return statearr_32375;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32376_32408 = state_32366__$1;
(statearr_32376_32408[(1)] = (13));

} else {
var statearr_32377_32409 = state_32366__$1;
(statearr_32377_32409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (2))){
var inst_32329 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32330 = (0);
var state_32366__$1 = (function (){var statearr_32378 = state_32366;
(statearr_32378[(7)] = inst_32330);

(statearr_32378[(9)] = inst_32329);

return statearr_32378;
})();
var statearr_32379_32410 = state_32366__$1;
(statearr_32379_32410[(2)] = null);

(statearr_32379_32410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (11))){
var inst_32330 = (state_32366[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32366,(10),Object,null,(9));
var inst_32339 = chs__$1.call(null,inst_32330);
var inst_32340 = done.call(null,inst_32330);
var inst_32341 = cljs.core.async.take_BANG_.call(null,inst_32339,inst_32340);
var state_32366__$1 = state_32366;
var statearr_32380_32411 = state_32366__$1;
(statearr_32380_32411[(2)] = inst_32341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (9))){
var inst_32330 = (state_32366[(7)]);
var inst_32343 = (state_32366[(2)]);
var inst_32344 = (inst_32330 + (1));
var inst_32330__$1 = inst_32344;
var state_32366__$1 = (function (){var statearr_32381 = state_32366;
(statearr_32381[(10)] = inst_32343);

(statearr_32381[(7)] = inst_32330__$1);

return statearr_32381;
})();
var statearr_32382_32412 = state_32366__$1;
(statearr_32382_32412[(2)] = null);

(statearr_32382_32412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (5))){
var inst_32350 = (state_32366[(2)]);
var state_32366__$1 = (function (){var statearr_32383 = state_32366;
(statearr_32383[(11)] = inst_32350);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32366__$1,(12),dchan);
} else {
if((state_val_32367 === (14))){
var inst_32352 = (state_32366[(8)]);
var inst_32357 = cljs.core.apply.call(null,f,inst_32352);
var state_32366__$1 = state_32366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32366__$1,(16),out,inst_32357);
} else {
if((state_val_32367 === (16))){
var inst_32359 = (state_32366[(2)]);
var state_32366__$1 = (function (){var statearr_32384 = state_32366;
(statearr_32384[(12)] = inst_32359);

return statearr_32384;
})();
var statearr_32385_32413 = state_32366__$1;
(statearr_32385_32413[(2)] = null);

(statearr_32385_32413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (10))){
var inst_32334 = (state_32366[(2)]);
var inst_32335 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32366__$1 = (function (){var statearr_32386 = state_32366;
(statearr_32386[(13)] = inst_32334);

return statearr_32386;
})();
var statearr_32387_32414 = state_32366__$1;
(statearr_32387_32414[(2)] = inst_32335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (8))){
var inst_32348 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32388_32415 = state_32366__$1;
(statearr_32388_32415[(2)] = inst_32348);

(statearr_32388_32415[(1)] = (5));


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
});})(c__30326__auto___32400,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30214__auto__,c__30326__auto___32400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_32392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32392[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_32392[(1)] = (1));

return statearr_32392;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_32366){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32393){if((e32393 instanceof Object)){
var ex__30218__auto__ = e32393;
var statearr_32394_32416 = state_32366;
(statearr_32394_32416[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32417 = state_32366;
state_32366 = G__32417;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_32366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_32366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___32400,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30328__auto__ = (function (){var statearr_32395 = f__30327__auto__.call(null);
(statearr_32395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___32400);

return statearr_32395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32400,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32419 = [];
var len__27557__auto___32477 = arguments.length;
var i__27558__auto___32478 = (0);
while(true){
if((i__27558__auto___32478 < len__27557__auto___32477)){
args32419.push((arguments[i__27558__auto___32478]));

var G__32479 = (i__27558__auto___32478 + (1));
i__27558__auto___32478 = G__32479;
continue;
} else {
}
break;
}

var G__32421 = args32419.length;
switch (G__32421) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32419.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___32481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32481,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___32481,out){
return (function (state_32453){
var state_val_32454 = (state_32453[(1)]);
if((state_val_32454 === (7))){
var inst_32433 = (state_32453[(7)]);
var inst_32432 = (state_32453[(8)]);
var inst_32432__$1 = (state_32453[(2)]);
var inst_32433__$1 = cljs.core.nth.call(null,inst_32432__$1,(0),null);
var inst_32434 = cljs.core.nth.call(null,inst_32432__$1,(1),null);
var inst_32435 = (inst_32433__$1 == null);
var state_32453__$1 = (function (){var statearr_32455 = state_32453;
(statearr_32455[(9)] = inst_32434);

(statearr_32455[(7)] = inst_32433__$1);

(statearr_32455[(8)] = inst_32432__$1);

return statearr_32455;
})();
if(cljs.core.truth_(inst_32435)){
var statearr_32456_32482 = state_32453__$1;
(statearr_32456_32482[(1)] = (8));

} else {
var statearr_32457_32483 = state_32453__$1;
(statearr_32457_32483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (1))){
var inst_32422 = cljs.core.vec.call(null,chs);
var inst_32423 = inst_32422;
var state_32453__$1 = (function (){var statearr_32458 = state_32453;
(statearr_32458[(10)] = inst_32423);

return statearr_32458;
})();
var statearr_32459_32484 = state_32453__$1;
(statearr_32459_32484[(2)] = null);

(statearr_32459_32484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (4))){
var inst_32423 = (state_32453[(10)]);
var state_32453__$1 = state_32453;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32453__$1,(7),inst_32423);
} else {
if((state_val_32454 === (6))){
var inst_32449 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
var statearr_32460_32485 = state_32453__$1;
(statearr_32460_32485[(2)] = inst_32449);

(statearr_32460_32485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (3))){
var inst_32451 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32453__$1,inst_32451);
} else {
if((state_val_32454 === (2))){
var inst_32423 = (state_32453[(10)]);
var inst_32425 = cljs.core.count.call(null,inst_32423);
var inst_32426 = (inst_32425 > (0));
var state_32453__$1 = state_32453;
if(cljs.core.truth_(inst_32426)){
var statearr_32462_32486 = state_32453__$1;
(statearr_32462_32486[(1)] = (4));

} else {
var statearr_32463_32487 = state_32453__$1;
(statearr_32463_32487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (11))){
var inst_32423 = (state_32453[(10)]);
var inst_32442 = (state_32453[(2)]);
var tmp32461 = inst_32423;
var inst_32423__$1 = tmp32461;
var state_32453__$1 = (function (){var statearr_32464 = state_32453;
(statearr_32464[(11)] = inst_32442);

(statearr_32464[(10)] = inst_32423__$1);

return statearr_32464;
})();
var statearr_32465_32488 = state_32453__$1;
(statearr_32465_32488[(2)] = null);

(statearr_32465_32488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (9))){
var inst_32433 = (state_32453[(7)]);
var state_32453__$1 = state_32453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32453__$1,(11),out,inst_32433);
} else {
if((state_val_32454 === (5))){
var inst_32447 = cljs.core.async.close_BANG_.call(null,out);
var state_32453__$1 = state_32453;
var statearr_32466_32489 = state_32453__$1;
(statearr_32466_32489[(2)] = inst_32447);

(statearr_32466_32489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (10))){
var inst_32445 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
var statearr_32467_32490 = state_32453__$1;
(statearr_32467_32490[(2)] = inst_32445);

(statearr_32467_32490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (8))){
var inst_32434 = (state_32453[(9)]);
var inst_32433 = (state_32453[(7)]);
var inst_32432 = (state_32453[(8)]);
var inst_32423 = (state_32453[(10)]);
var inst_32437 = (function (){var cs = inst_32423;
var vec__32428 = inst_32432;
var v = inst_32433;
var c = inst_32434;
return ((function (cs,vec__32428,v,c,inst_32434,inst_32433,inst_32432,inst_32423,state_val_32454,c__30326__auto___32481,out){
return (function (p1__32418_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32418_SHARP_);
});
;})(cs,vec__32428,v,c,inst_32434,inst_32433,inst_32432,inst_32423,state_val_32454,c__30326__auto___32481,out))
})();
var inst_32438 = cljs.core.filterv.call(null,inst_32437,inst_32423);
var inst_32423__$1 = inst_32438;
var state_32453__$1 = (function (){var statearr_32468 = state_32453;
(statearr_32468[(10)] = inst_32423__$1);

return statearr_32468;
})();
var statearr_32469_32491 = state_32453__$1;
(statearr_32469_32491[(2)] = null);

(statearr_32469_32491[(1)] = (2));


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
});})(c__30326__auto___32481,out))
;
return ((function (switch__30214__auto__,c__30326__auto___32481,out){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_32473 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32473[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_32473[(1)] = (1));

return statearr_32473;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_32453){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32474){if((e32474 instanceof Object)){
var ex__30218__auto__ = e32474;
var statearr_32475_32492 = state_32453;
(statearr_32475_32492[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32493 = state_32453;
state_32453 = G__32493;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_32453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_32453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___32481,out))
})();
var state__30328__auto__ = (function (){var statearr_32476 = f__30327__auto__.call(null);
(statearr_32476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___32481);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32481,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32494 = [];
var len__27557__auto___32543 = arguments.length;
var i__27558__auto___32544 = (0);
while(true){
if((i__27558__auto___32544 < len__27557__auto___32543)){
args32494.push((arguments[i__27558__auto___32544]));

var G__32545 = (i__27558__auto___32544 + (1));
i__27558__auto___32544 = G__32545;
continue;
} else {
}
break;
}

var G__32496 = args32494.length;
switch (G__32496) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32494.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___32547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32547,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___32547,out){
return (function (state_32520){
var state_val_32521 = (state_32520[(1)]);
if((state_val_32521 === (7))){
var inst_32502 = (state_32520[(7)]);
var inst_32502__$1 = (state_32520[(2)]);
var inst_32503 = (inst_32502__$1 == null);
var inst_32504 = cljs.core.not.call(null,inst_32503);
var state_32520__$1 = (function (){var statearr_32522 = state_32520;
(statearr_32522[(7)] = inst_32502__$1);

return statearr_32522;
})();
if(inst_32504){
var statearr_32523_32548 = state_32520__$1;
(statearr_32523_32548[(1)] = (8));

} else {
var statearr_32524_32549 = state_32520__$1;
(statearr_32524_32549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (1))){
var inst_32497 = (0);
var state_32520__$1 = (function (){var statearr_32525 = state_32520;
(statearr_32525[(8)] = inst_32497);

return statearr_32525;
})();
var statearr_32526_32550 = state_32520__$1;
(statearr_32526_32550[(2)] = null);

(statearr_32526_32550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (4))){
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(7),ch);
} else {
if((state_val_32521 === (6))){
var inst_32515 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32527_32551 = state_32520__$1;
(statearr_32527_32551[(2)] = inst_32515);

(statearr_32527_32551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (3))){
var inst_32517 = (state_32520[(2)]);
var inst_32518 = cljs.core.async.close_BANG_.call(null,out);
var state_32520__$1 = (function (){var statearr_32528 = state_32520;
(statearr_32528[(9)] = inst_32517);

return statearr_32528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32520__$1,inst_32518);
} else {
if((state_val_32521 === (2))){
var inst_32497 = (state_32520[(8)]);
var inst_32499 = (inst_32497 < n);
var state_32520__$1 = state_32520;
if(cljs.core.truth_(inst_32499)){
var statearr_32529_32552 = state_32520__$1;
(statearr_32529_32552[(1)] = (4));

} else {
var statearr_32530_32553 = state_32520__$1;
(statearr_32530_32553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (11))){
var inst_32497 = (state_32520[(8)]);
var inst_32507 = (state_32520[(2)]);
var inst_32508 = (inst_32497 + (1));
var inst_32497__$1 = inst_32508;
var state_32520__$1 = (function (){var statearr_32531 = state_32520;
(statearr_32531[(10)] = inst_32507);

(statearr_32531[(8)] = inst_32497__$1);

return statearr_32531;
})();
var statearr_32532_32554 = state_32520__$1;
(statearr_32532_32554[(2)] = null);

(statearr_32532_32554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (9))){
var state_32520__$1 = state_32520;
var statearr_32533_32555 = state_32520__$1;
(statearr_32533_32555[(2)] = null);

(statearr_32533_32555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (5))){
var state_32520__$1 = state_32520;
var statearr_32534_32556 = state_32520__$1;
(statearr_32534_32556[(2)] = null);

(statearr_32534_32556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (10))){
var inst_32512 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32535_32557 = state_32520__$1;
(statearr_32535_32557[(2)] = inst_32512);

(statearr_32535_32557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (8))){
var inst_32502 = (state_32520[(7)]);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32520__$1,(11),out,inst_32502);
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
});})(c__30326__auto___32547,out))
;
return ((function (switch__30214__auto__,c__30326__auto___32547,out){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_32520){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__30218__auto__ = e32540;
var statearr_32541_32558 = state_32520;
(statearr_32541_32558[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32559 = state_32520;
state_32520 = G__32559;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_32520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_32520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___32547,out))
})();
var state__30328__auto__ = (function (){var statearr_32542 = f__30327__auto__.call(null);
(statearr_32542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___32547);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32547,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32567 = (function (f,ch,meta32568){
this.f = f;
this.ch = ch;
this.meta32568 = meta32568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32569,meta32568__$1){
var self__ = this;
var _32569__$1 = this;
return (new cljs.core.async.t_cljs$core$async32567(self__.f,self__.ch,meta32568__$1));
});

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32569){
var self__ = this;
var _32569__$1 = this;
return self__.meta32568;
});

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32570 = (function (f,ch,meta32568,_,fn1,meta32571){
this.f = f;
this.ch = ch;
this.meta32568 = meta32568;
this._ = _;
this.fn1 = fn1;
this.meta32571 = meta32571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32572,meta32571__$1){
var self__ = this;
var _32572__$1 = this;
return (new cljs.core.async.t_cljs$core$async32570(self__.f,self__.ch,self__.meta32568,self__._,self__.fn1,meta32571__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32572){
var self__ = this;
var _32572__$1 = this;
return self__.meta32571;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32570.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32560_SHARP_){
return f1.call(null,(((p1__32560_SHARP_ == null))?null:self__.f.call(null,p1__32560_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32570.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32568","meta32568",-932833595,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32567","cljs.core.async/t_cljs$core$async32567",1799939648,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32571","meta32571",-1980405709,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32570";

cljs.core.async.t_cljs$core$async32570.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async32570");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32570 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32570(f__$1,ch__$1,meta32568__$1,___$2,fn1__$1,meta32571){
return (new cljs.core.async.t_cljs$core$async32570(f__$1,ch__$1,meta32568__$1,___$2,fn1__$1,meta32571));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32570(self__.f,self__.ch,self__.meta32568,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26432__auto__ = ret;
if(cljs.core.truth_(and__26432__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26432__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32568","meta32568",-932833595,null)], null);
});

cljs.core.async.t_cljs$core$async32567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32567";

cljs.core.async.t_cljs$core$async32567.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async32567");
});

cljs.core.async.__GT_t_cljs$core$async32567 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32567(f__$1,ch__$1,meta32568){
return (new cljs.core.async.t_cljs$core$async32567(f__$1,ch__$1,meta32568));
});

}

return (new cljs.core.async.t_cljs$core$async32567(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32576 = (function (f,ch,meta32577){
this.f = f;
this.ch = ch;
this.meta32577 = meta32577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32578,meta32577__$1){
var self__ = this;
var _32578__$1 = this;
return (new cljs.core.async.t_cljs$core$async32576(self__.f,self__.ch,meta32577__$1));
});

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32578){
var self__ = this;
var _32578__$1 = this;
return self__.meta32577;
});

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32577","meta32577",-1616872274,null)], null);
});

cljs.core.async.t_cljs$core$async32576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32576";

cljs.core.async.t_cljs$core$async32576.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async32576");
});

cljs.core.async.__GT_t_cljs$core$async32576 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32576(f__$1,ch__$1,meta32577){
return (new cljs.core.async.t_cljs$core$async32576(f__$1,ch__$1,meta32577));
});

}

return (new cljs.core.async.t_cljs$core$async32576(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32582 = (function (p,ch,meta32583){
this.p = p;
this.ch = ch;
this.meta32583 = meta32583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32584,meta32583__$1){
var self__ = this;
var _32584__$1 = this;
return (new cljs.core.async.t_cljs$core$async32582(self__.p,self__.ch,meta32583__$1));
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32584){
var self__ = this;
var _32584__$1 = this;
return self__.meta32583;
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32583","meta32583",401710594,null)], null);
});

cljs.core.async.t_cljs$core$async32582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32582";

cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async32582");
});

cljs.core.async.__GT_t_cljs$core$async32582 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32582(p__$1,ch__$1,meta32583){
return (new cljs.core.async.t_cljs$core$async32582(p__$1,ch__$1,meta32583));
});

}

return (new cljs.core.async.t_cljs$core$async32582(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32585 = [];
var len__27557__auto___32629 = arguments.length;
var i__27558__auto___32630 = (0);
while(true){
if((i__27558__auto___32630 < len__27557__auto___32629)){
args32585.push((arguments[i__27558__auto___32630]));

var G__32631 = (i__27558__auto___32630 + (1));
i__27558__auto___32630 = G__32631;
continue;
} else {
}
break;
}

var G__32587 = args32585.length;
switch (G__32587) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32585.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___32633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32633,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___32633,out){
return (function (state_32608){
var state_val_32609 = (state_32608[(1)]);
if((state_val_32609 === (7))){
var inst_32604 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
var statearr_32610_32634 = state_32608__$1;
(statearr_32610_32634[(2)] = inst_32604);

(statearr_32610_32634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (1))){
var state_32608__$1 = state_32608;
var statearr_32611_32635 = state_32608__$1;
(statearr_32611_32635[(2)] = null);

(statearr_32611_32635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (4))){
var inst_32590 = (state_32608[(7)]);
var inst_32590__$1 = (state_32608[(2)]);
var inst_32591 = (inst_32590__$1 == null);
var state_32608__$1 = (function (){var statearr_32612 = state_32608;
(statearr_32612[(7)] = inst_32590__$1);

return statearr_32612;
})();
if(cljs.core.truth_(inst_32591)){
var statearr_32613_32636 = state_32608__$1;
(statearr_32613_32636[(1)] = (5));

} else {
var statearr_32614_32637 = state_32608__$1;
(statearr_32614_32637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (6))){
var inst_32590 = (state_32608[(7)]);
var inst_32595 = p.call(null,inst_32590);
var state_32608__$1 = state_32608;
if(cljs.core.truth_(inst_32595)){
var statearr_32615_32638 = state_32608__$1;
(statearr_32615_32638[(1)] = (8));

} else {
var statearr_32616_32639 = state_32608__$1;
(statearr_32616_32639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (3))){
var inst_32606 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32608__$1,inst_32606);
} else {
if((state_val_32609 === (2))){
var state_32608__$1 = state_32608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32608__$1,(4),ch);
} else {
if((state_val_32609 === (11))){
var inst_32598 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
var statearr_32617_32640 = state_32608__$1;
(statearr_32617_32640[(2)] = inst_32598);

(statearr_32617_32640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (9))){
var state_32608__$1 = state_32608;
var statearr_32618_32641 = state_32608__$1;
(statearr_32618_32641[(2)] = null);

(statearr_32618_32641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (5))){
var inst_32593 = cljs.core.async.close_BANG_.call(null,out);
var state_32608__$1 = state_32608;
var statearr_32619_32642 = state_32608__$1;
(statearr_32619_32642[(2)] = inst_32593);

(statearr_32619_32642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (10))){
var inst_32601 = (state_32608[(2)]);
var state_32608__$1 = (function (){var statearr_32620 = state_32608;
(statearr_32620[(8)] = inst_32601);

return statearr_32620;
})();
var statearr_32621_32643 = state_32608__$1;
(statearr_32621_32643[(2)] = null);

(statearr_32621_32643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (8))){
var inst_32590 = (state_32608[(7)]);
var state_32608__$1 = state_32608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32608__$1,(11),out,inst_32590);
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
});})(c__30326__auto___32633,out))
;
return ((function (switch__30214__auto__,c__30326__auto___32633,out){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_32625 = [null,null,null,null,null,null,null,null,null];
(statearr_32625[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_32625[(1)] = (1));

return statearr_32625;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_32608){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32626){if((e32626 instanceof Object)){
var ex__30218__auto__ = e32626;
var statearr_32627_32644 = state_32608;
(statearr_32627_32644[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32645 = state_32608;
state_32608 = G__32645;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_32608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_32608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___32633,out))
})();
var state__30328__auto__ = (function (){var statearr_32628 = f__30327__auto__.call(null);
(statearr_32628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___32633);

return statearr_32628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32633,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32646 = [];
var len__27557__auto___32649 = arguments.length;
var i__27558__auto___32650 = (0);
while(true){
if((i__27558__auto___32650 < len__27557__auto___32649)){
args32646.push((arguments[i__27558__auto___32650]));

var G__32651 = (i__27558__auto___32650 + (1));
i__27558__auto___32650 = G__32651;
continue;
} else {
}
break;
}

var G__32648 = args32646.length;
switch (G__32648) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32646.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__){
return (function (state_32818){
var state_val_32819 = (state_32818[(1)]);
if((state_val_32819 === (7))){
var inst_32814 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32820_32861 = state_32818__$1;
(statearr_32820_32861[(2)] = inst_32814);

(statearr_32820_32861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (20))){
var inst_32784 = (state_32818[(7)]);
var inst_32795 = (state_32818[(2)]);
var inst_32796 = cljs.core.next.call(null,inst_32784);
var inst_32770 = inst_32796;
var inst_32771 = null;
var inst_32772 = (0);
var inst_32773 = (0);
var state_32818__$1 = (function (){var statearr_32821 = state_32818;
(statearr_32821[(8)] = inst_32771);

(statearr_32821[(9)] = inst_32770);

(statearr_32821[(10)] = inst_32773);

(statearr_32821[(11)] = inst_32795);

(statearr_32821[(12)] = inst_32772);

return statearr_32821;
})();
var statearr_32822_32862 = state_32818__$1;
(statearr_32822_32862[(2)] = null);

(statearr_32822_32862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (1))){
var state_32818__$1 = state_32818;
var statearr_32823_32863 = state_32818__$1;
(statearr_32823_32863[(2)] = null);

(statearr_32823_32863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (4))){
var inst_32759 = (state_32818[(13)]);
var inst_32759__$1 = (state_32818[(2)]);
var inst_32760 = (inst_32759__$1 == null);
var state_32818__$1 = (function (){var statearr_32824 = state_32818;
(statearr_32824[(13)] = inst_32759__$1);

return statearr_32824;
})();
if(cljs.core.truth_(inst_32760)){
var statearr_32825_32864 = state_32818__$1;
(statearr_32825_32864[(1)] = (5));

} else {
var statearr_32826_32865 = state_32818__$1;
(statearr_32826_32865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (15))){
var state_32818__$1 = state_32818;
var statearr_32830_32866 = state_32818__$1;
(statearr_32830_32866[(2)] = null);

(statearr_32830_32866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (21))){
var state_32818__$1 = state_32818;
var statearr_32831_32867 = state_32818__$1;
(statearr_32831_32867[(2)] = null);

(statearr_32831_32867[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (13))){
var inst_32771 = (state_32818[(8)]);
var inst_32770 = (state_32818[(9)]);
var inst_32773 = (state_32818[(10)]);
var inst_32772 = (state_32818[(12)]);
var inst_32780 = (state_32818[(2)]);
var inst_32781 = (inst_32773 + (1));
var tmp32827 = inst_32771;
var tmp32828 = inst_32770;
var tmp32829 = inst_32772;
var inst_32770__$1 = tmp32828;
var inst_32771__$1 = tmp32827;
var inst_32772__$1 = tmp32829;
var inst_32773__$1 = inst_32781;
var state_32818__$1 = (function (){var statearr_32832 = state_32818;
(statearr_32832[(8)] = inst_32771__$1);

(statearr_32832[(14)] = inst_32780);

(statearr_32832[(9)] = inst_32770__$1);

(statearr_32832[(10)] = inst_32773__$1);

(statearr_32832[(12)] = inst_32772__$1);

return statearr_32832;
})();
var statearr_32833_32868 = state_32818__$1;
(statearr_32833_32868[(2)] = null);

(statearr_32833_32868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (22))){
var state_32818__$1 = state_32818;
var statearr_32834_32869 = state_32818__$1;
(statearr_32834_32869[(2)] = null);

(statearr_32834_32869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (6))){
var inst_32759 = (state_32818[(13)]);
var inst_32768 = f.call(null,inst_32759);
var inst_32769 = cljs.core.seq.call(null,inst_32768);
var inst_32770 = inst_32769;
var inst_32771 = null;
var inst_32772 = (0);
var inst_32773 = (0);
var state_32818__$1 = (function (){var statearr_32835 = state_32818;
(statearr_32835[(8)] = inst_32771);

(statearr_32835[(9)] = inst_32770);

(statearr_32835[(10)] = inst_32773);

(statearr_32835[(12)] = inst_32772);

return statearr_32835;
})();
var statearr_32836_32870 = state_32818__$1;
(statearr_32836_32870[(2)] = null);

(statearr_32836_32870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (17))){
var inst_32784 = (state_32818[(7)]);
var inst_32788 = cljs.core.chunk_first.call(null,inst_32784);
var inst_32789 = cljs.core.chunk_rest.call(null,inst_32784);
var inst_32790 = cljs.core.count.call(null,inst_32788);
var inst_32770 = inst_32789;
var inst_32771 = inst_32788;
var inst_32772 = inst_32790;
var inst_32773 = (0);
var state_32818__$1 = (function (){var statearr_32837 = state_32818;
(statearr_32837[(8)] = inst_32771);

(statearr_32837[(9)] = inst_32770);

(statearr_32837[(10)] = inst_32773);

(statearr_32837[(12)] = inst_32772);

return statearr_32837;
})();
var statearr_32838_32871 = state_32818__$1;
(statearr_32838_32871[(2)] = null);

(statearr_32838_32871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (3))){
var inst_32816 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32818__$1,inst_32816);
} else {
if((state_val_32819 === (12))){
var inst_32804 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32839_32872 = state_32818__$1;
(statearr_32839_32872[(2)] = inst_32804);

(statearr_32839_32872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (2))){
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32818__$1,(4),in$);
} else {
if((state_val_32819 === (23))){
var inst_32812 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32840_32873 = state_32818__$1;
(statearr_32840_32873[(2)] = inst_32812);

(statearr_32840_32873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (19))){
var inst_32799 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32841_32874 = state_32818__$1;
(statearr_32841_32874[(2)] = inst_32799);

(statearr_32841_32874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (11))){
var inst_32770 = (state_32818[(9)]);
var inst_32784 = (state_32818[(7)]);
var inst_32784__$1 = cljs.core.seq.call(null,inst_32770);
var state_32818__$1 = (function (){var statearr_32842 = state_32818;
(statearr_32842[(7)] = inst_32784__$1);

return statearr_32842;
})();
if(inst_32784__$1){
var statearr_32843_32875 = state_32818__$1;
(statearr_32843_32875[(1)] = (14));

} else {
var statearr_32844_32876 = state_32818__$1;
(statearr_32844_32876[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (9))){
var inst_32806 = (state_32818[(2)]);
var inst_32807 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32818__$1 = (function (){var statearr_32845 = state_32818;
(statearr_32845[(15)] = inst_32806);

return statearr_32845;
})();
if(cljs.core.truth_(inst_32807)){
var statearr_32846_32877 = state_32818__$1;
(statearr_32846_32877[(1)] = (21));

} else {
var statearr_32847_32878 = state_32818__$1;
(statearr_32847_32878[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (5))){
var inst_32762 = cljs.core.async.close_BANG_.call(null,out);
var state_32818__$1 = state_32818;
var statearr_32848_32879 = state_32818__$1;
(statearr_32848_32879[(2)] = inst_32762);

(statearr_32848_32879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (14))){
var inst_32784 = (state_32818[(7)]);
var inst_32786 = cljs.core.chunked_seq_QMARK_.call(null,inst_32784);
var state_32818__$1 = state_32818;
if(inst_32786){
var statearr_32849_32880 = state_32818__$1;
(statearr_32849_32880[(1)] = (17));

} else {
var statearr_32850_32881 = state_32818__$1;
(statearr_32850_32881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (16))){
var inst_32802 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32851_32882 = state_32818__$1;
(statearr_32851_32882[(2)] = inst_32802);

(statearr_32851_32882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (10))){
var inst_32771 = (state_32818[(8)]);
var inst_32773 = (state_32818[(10)]);
var inst_32778 = cljs.core._nth.call(null,inst_32771,inst_32773);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32818__$1,(13),out,inst_32778);
} else {
if((state_val_32819 === (18))){
var inst_32784 = (state_32818[(7)]);
var inst_32793 = cljs.core.first.call(null,inst_32784);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32818__$1,(20),out,inst_32793);
} else {
if((state_val_32819 === (8))){
var inst_32773 = (state_32818[(10)]);
var inst_32772 = (state_32818[(12)]);
var inst_32775 = (inst_32773 < inst_32772);
var inst_32776 = inst_32775;
var state_32818__$1 = state_32818;
if(cljs.core.truth_(inst_32776)){
var statearr_32852_32883 = state_32818__$1;
(statearr_32852_32883[(1)] = (10));

} else {
var statearr_32853_32884 = state_32818__$1;
(statearr_32853_32884[(1)] = (11));

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
}
}
}
}
}
}
});})(c__30326__auto__))
;
return ((function (switch__30214__auto__,c__30326__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30215__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30215__auto____0 = (function (){
var statearr_32857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32857[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30215__auto__);

(statearr_32857[(1)] = (1));

return statearr_32857;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30215__auto____1 = (function (state_32818){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32858){if((e32858 instanceof Object)){
var ex__30218__auto__ = e32858;
var statearr_32859_32885 = state_32818;
(statearr_32859_32885[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32886 = state_32818;
state_32818 = G__32886;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30215__auto__ = function(state_32818){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30215__auto____1.call(this,state_32818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30215__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30215__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_32860 = f__30327__auto__.call(null);
(statearr_32860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32887 = [];
var len__27557__auto___32890 = arguments.length;
var i__27558__auto___32891 = (0);
while(true){
if((i__27558__auto___32891 < len__27557__auto___32890)){
args32887.push((arguments[i__27558__auto___32891]));

var G__32892 = (i__27558__auto___32891 + (1));
i__27558__auto___32891 = G__32892;
continue;
} else {
}
break;
}

var G__32889 = args32887.length;
switch (G__32889) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32887.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32894 = [];
var len__27557__auto___32897 = arguments.length;
var i__27558__auto___32898 = (0);
while(true){
if((i__27558__auto___32898 < len__27557__auto___32897)){
args32894.push((arguments[i__27558__auto___32898]));

var G__32899 = (i__27558__auto___32898 + (1));
i__27558__auto___32898 = G__32899;
continue;
} else {
}
break;
}

var G__32896 = args32894.length;
switch (G__32896) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32894.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32901 = [];
var len__27557__auto___32952 = arguments.length;
var i__27558__auto___32953 = (0);
while(true){
if((i__27558__auto___32953 < len__27557__auto___32952)){
args32901.push((arguments[i__27558__auto___32953]));

var G__32954 = (i__27558__auto___32953 + (1));
i__27558__auto___32953 = G__32954;
continue;
} else {
}
break;
}

var G__32903 = args32901.length;
switch (G__32903) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32901.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___32956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32956,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___32956,out){
return (function (state_32927){
var state_val_32928 = (state_32927[(1)]);
if((state_val_32928 === (7))){
var inst_32922 = (state_32927[(2)]);
var state_32927__$1 = state_32927;
var statearr_32929_32957 = state_32927__$1;
(statearr_32929_32957[(2)] = inst_32922);

(statearr_32929_32957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (1))){
var inst_32904 = null;
var state_32927__$1 = (function (){var statearr_32930 = state_32927;
(statearr_32930[(7)] = inst_32904);

return statearr_32930;
})();
var statearr_32931_32958 = state_32927__$1;
(statearr_32931_32958[(2)] = null);

(statearr_32931_32958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (4))){
var inst_32907 = (state_32927[(8)]);
var inst_32907__$1 = (state_32927[(2)]);
var inst_32908 = (inst_32907__$1 == null);
var inst_32909 = cljs.core.not.call(null,inst_32908);
var state_32927__$1 = (function (){var statearr_32932 = state_32927;
(statearr_32932[(8)] = inst_32907__$1);

return statearr_32932;
})();
if(inst_32909){
var statearr_32933_32959 = state_32927__$1;
(statearr_32933_32959[(1)] = (5));

} else {
var statearr_32934_32960 = state_32927__$1;
(statearr_32934_32960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (6))){
var state_32927__$1 = state_32927;
var statearr_32935_32961 = state_32927__$1;
(statearr_32935_32961[(2)] = null);

(statearr_32935_32961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (3))){
var inst_32924 = (state_32927[(2)]);
var inst_32925 = cljs.core.async.close_BANG_.call(null,out);
var state_32927__$1 = (function (){var statearr_32936 = state_32927;
(statearr_32936[(9)] = inst_32924);

return statearr_32936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32927__$1,inst_32925);
} else {
if((state_val_32928 === (2))){
var state_32927__$1 = state_32927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32927__$1,(4),ch);
} else {
if((state_val_32928 === (11))){
var inst_32907 = (state_32927[(8)]);
var inst_32916 = (state_32927[(2)]);
var inst_32904 = inst_32907;
var state_32927__$1 = (function (){var statearr_32937 = state_32927;
(statearr_32937[(7)] = inst_32904);

(statearr_32937[(10)] = inst_32916);

return statearr_32937;
})();
var statearr_32938_32962 = state_32927__$1;
(statearr_32938_32962[(2)] = null);

(statearr_32938_32962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (9))){
var inst_32907 = (state_32927[(8)]);
var state_32927__$1 = state_32927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32927__$1,(11),out,inst_32907);
} else {
if((state_val_32928 === (5))){
var inst_32904 = (state_32927[(7)]);
var inst_32907 = (state_32927[(8)]);
var inst_32911 = cljs.core._EQ_.call(null,inst_32907,inst_32904);
var state_32927__$1 = state_32927;
if(inst_32911){
var statearr_32940_32963 = state_32927__$1;
(statearr_32940_32963[(1)] = (8));

} else {
var statearr_32941_32964 = state_32927__$1;
(statearr_32941_32964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (10))){
var inst_32919 = (state_32927[(2)]);
var state_32927__$1 = state_32927;
var statearr_32942_32965 = state_32927__$1;
(statearr_32942_32965[(2)] = inst_32919);

(statearr_32942_32965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (8))){
var inst_32904 = (state_32927[(7)]);
var tmp32939 = inst_32904;
var inst_32904__$1 = tmp32939;
var state_32927__$1 = (function (){var statearr_32943 = state_32927;
(statearr_32943[(7)] = inst_32904__$1);

return statearr_32943;
})();
var statearr_32944_32966 = state_32927__$1;
(statearr_32944_32966[(2)] = null);

(statearr_32944_32966[(1)] = (2));


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
});})(c__30326__auto___32956,out))
;
return ((function (switch__30214__auto__,c__30326__auto___32956,out){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_32948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32948[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_32948[(1)] = (1));

return statearr_32948;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_32927){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_32927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e32949){if((e32949 instanceof Object)){
var ex__30218__auto__ = e32949;
var statearr_32950_32967 = state_32927;
(statearr_32950_32967[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32968 = state_32927;
state_32927 = G__32968;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_32927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_32927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___32956,out))
})();
var state__30328__auto__ = (function (){var statearr_32951 = f__30327__auto__.call(null);
(statearr_32951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___32956);

return statearr_32951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32956,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32969 = [];
var len__27557__auto___33039 = arguments.length;
var i__27558__auto___33040 = (0);
while(true){
if((i__27558__auto___33040 < len__27557__auto___33039)){
args32969.push((arguments[i__27558__auto___33040]));

var G__33041 = (i__27558__auto___33040 + (1));
i__27558__auto___33040 = G__33041;
continue;
} else {
}
break;
}

var G__32971 = args32969.length;
switch (G__32971) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32969.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___33043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___33043,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___33043,out){
return (function (state_33009){
var state_val_33010 = (state_33009[(1)]);
if((state_val_33010 === (7))){
var inst_33005 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33011_33044 = state_33009__$1;
(statearr_33011_33044[(2)] = inst_33005);

(statearr_33011_33044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (1))){
var inst_32972 = (new Array(n));
var inst_32973 = inst_32972;
var inst_32974 = (0);
var state_33009__$1 = (function (){var statearr_33012 = state_33009;
(statearr_33012[(7)] = inst_32973);

(statearr_33012[(8)] = inst_32974);

return statearr_33012;
})();
var statearr_33013_33045 = state_33009__$1;
(statearr_33013_33045[(2)] = null);

(statearr_33013_33045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (4))){
var inst_32977 = (state_33009[(9)]);
var inst_32977__$1 = (state_33009[(2)]);
var inst_32978 = (inst_32977__$1 == null);
var inst_32979 = cljs.core.not.call(null,inst_32978);
var state_33009__$1 = (function (){var statearr_33014 = state_33009;
(statearr_33014[(9)] = inst_32977__$1);

return statearr_33014;
})();
if(inst_32979){
var statearr_33015_33046 = state_33009__$1;
(statearr_33015_33046[(1)] = (5));

} else {
var statearr_33016_33047 = state_33009__$1;
(statearr_33016_33047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (15))){
var inst_32999 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33017_33048 = state_33009__$1;
(statearr_33017_33048[(2)] = inst_32999);

(statearr_33017_33048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (13))){
var state_33009__$1 = state_33009;
var statearr_33018_33049 = state_33009__$1;
(statearr_33018_33049[(2)] = null);

(statearr_33018_33049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (6))){
var inst_32974 = (state_33009[(8)]);
var inst_32995 = (inst_32974 > (0));
var state_33009__$1 = state_33009;
if(cljs.core.truth_(inst_32995)){
var statearr_33019_33050 = state_33009__$1;
(statearr_33019_33050[(1)] = (12));

} else {
var statearr_33020_33051 = state_33009__$1;
(statearr_33020_33051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (3))){
var inst_33007 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33009__$1,inst_33007);
} else {
if((state_val_33010 === (12))){
var inst_32973 = (state_33009[(7)]);
var inst_32997 = cljs.core.vec.call(null,inst_32973);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33009__$1,(15),out,inst_32997);
} else {
if((state_val_33010 === (2))){
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33009__$1,(4),ch);
} else {
if((state_val_33010 === (11))){
var inst_32989 = (state_33009[(2)]);
var inst_32990 = (new Array(n));
var inst_32973 = inst_32990;
var inst_32974 = (0);
var state_33009__$1 = (function (){var statearr_33021 = state_33009;
(statearr_33021[(10)] = inst_32989);

(statearr_33021[(7)] = inst_32973);

(statearr_33021[(8)] = inst_32974);

return statearr_33021;
})();
var statearr_33022_33052 = state_33009__$1;
(statearr_33022_33052[(2)] = null);

(statearr_33022_33052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (9))){
var inst_32973 = (state_33009[(7)]);
var inst_32987 = cljs.core.vec.call(null,inst_32973);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33009__$1,(11),out,inst_32987);
} else {
if((state_val_33010 === (5))){
var inst_32977 = (state_33009[(9)]);
var inst_32982 = (state_33009[(11)]);
var inst_32973 = (state_33009[(7)]);
var inst_32974 = (state_33009[(8)]);
var inst_32981 = (inst_32973[inst_32974] = inst_32977);
var inst_32982__$1 = (inst_32974 + (1));
var inst_32983 = (inst_32982__$1 < n);
var state_33009__$1 = (function (){var statearr_33023 = state_33009;
(statearr_33023[(11)] = inst_32982__$1);

(statearr_33023[(12)] = inst_32981);

return statearr_33023;
})();
if(cljs.core.truth_(inst_32983)){
var statearr_33024_33053 = state_33009__$1;
(statearr_33024_33053[(1)] = (8));

} else {
var statearr_33025_33054 = state_33009__$1;
(statearr_33025_33054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (14))){
var inst_33002 = (state_33009[(2)]);
var inst_33003 = cljs.core.async.close_BANG_.call(null,out);
var state_33009__$1 = (function (){var statearr_33027 = state_33009;
(statearr_33027[(13)] = inst_33002);

return statearr_33027;
})();
var statearr_33028_33055 = state_33009__$1;
(statearr_33028_33055[(2)] = inst_33003);

(statearr_33028_33055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (10))){
var inst_32993 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33029_33056 = state_33009__$1;
(statearr_33029_33056[(2)] = inst_32993);

(statearr_33029_33056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (8))){
var inst_32982 = (state_33009[(11)]);
var inst_32973 = (state_33009[(7)]);
var tmp33026 = inst_32973;
var inst_32973__$1 = tmp33026;
var inst_32974 = inst_32982;
var state_33009__$1 = (function (){var statearr_33030 = state_33009;
(statearr_33030[(7)] = inst_32973__$1);

(statearr_33030[(8)] = inst_32974);

return statearr_33030;
})();
var statearr_33031_33057 = state_33009__$1;
(statearr_33031_33057[(2)] = null);

(statearr_33031_33057[(1)] = (2));


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
});})(c__30326__auto___33043,out))
;
return ((function (switch__30214__auto__,c__30326__auto___33043,out){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_33035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33035[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_33035[(1)] = (1));

return statearr_33035;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_33009){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_33009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e33036){if((e33036 instanceof Object)){
var ex__30218__auto__ = e33036;
var statearr_33037_33058 = state_33009;
(statearr_33037_33058[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33059 = state_33009;
state_33009 = G__33059;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_33009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_33009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___33043,out))
})();
var state__30328__auto__ = (function (){var statearr_33038 = f__30327__auto__.call(null);
(statearr_33038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___33043);

return statearr_33038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___33043,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33060 = [];
var len__27557__auto___33134 = arguments.length;
var i__27558__auto___33135 = (0);
while(true){
if((i__27558__auto___33135 < len__27557__auto___33134)){
args33060.push((arguments[i__27558__auto___33135]));

var G__33136 = (i__27558__auto___33135 + (1));
i__27558__auto___33135 = G__33136;
continue;
} else {
}
break;
}

var G__33062 = args33060.length;
switch (G__33062) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33060.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___33138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___33138,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___33138,out){
return (function (state_33104){
var state_val_33105 = (state_33104[(1)]);
if((state_val_33105 === (7))){
var inst_33100 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33106_33139 = state_33104__$1;
(statearr_33106_33139[(2)] = inst_33100);

(statearr_33106_33139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (1))){
var inst_33063 = [];
var inst_33064 = inst_33063;
var inst_33065 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33104__$1 = (function (){var statearr_33107 = state_33104;
(statearr_33107[(7)] = inst_33065);

(statearr_33107[(8)] = inst_33064);

return statearr_33107;
})();
var statearr_33108_33140 = state_33104__$1;
(statearr_33108_33140[(2)] = null);

(statearr_33108_33140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (4))){
var inst_33068 = (state_33104[(9)]);
var inst_33068__$1 = (state_33104[(2)]);
var inst_33069 = (inst_33068__$1 == null);
var inst_33070 = cljs.core.not.call(null,inst_33069);
var state_33104__$1 = (function (){var statearr_33109 = state_33104;
(statearr_33109[(9)] = inst_33068__$1);

return statearr_33109;
})();
if(inst_33070){
var statearr_33110_33141 = state_33104__$1;
(statearr_33110_33141[(1)] = (5));

} else {
var statearr_33111_33142 = state_33104__$1;
(statearr_33111_33142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (15))){
var inst_33094 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33112_33143 = state_33104__$1;
(statearr_33112_33143[(2)] = inst_33094);

(statearr_33112_33143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (13))){
var state_33104__$1 = state_33104;
var statearr_33113_33144 = state_33104__$1;
(statearr_33113_33144[(2)] = null);

(statearr_33113_33144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (6))){
var inst_33064 = (state_33104[(8)]);
var inst_33089 = inst_33064.length;
var inst_33090 = (inst_33089 > (0));
var state_33104__$1 = state_33104;
if(cljs.core.truth_(inst_33090)){
var statearr_33114_33145 = state_33104__$1;
(statearr_33114_33145[(1)] = (12));

} else {
var statearr_33115_33146 = state_33104__$1;
(statearr_33115_33146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (3))){
var inst_33102 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33104__$1,inst_33102);
} else {
if((state_val_33105 === (12))){
var inst_33064 = (state_33104[(8)]);
var inst_33092 = cljs.core.vec.call(null,inst_33064);
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33104__$1,(15),out,inst_33092);
} else {
if((state_val_33105 === (2))){
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33104__$1,(4),ch);
} else {
if((state_val_33105 === (11))){
var inst_33068 = (state_33104[(9)]);
var inst_33072 = (state_33104[(10)]);
var inst_33082 = (state_33104[(2)]);
var inst_33083 = [];
var inst_33084 = inst_33083.push(inst_33068);
var inst_33064 = inst_33083;
var inst_33065 = inst_33072;
var state_33104__$1 = (function (){var statearr_33116 = state_33104;
(statearr_33116[(7)] = inst_33065);

(statearr_33116[(11)] = inst_33082);

(statearr_33116[(12)] = inst_33084);

(statearr_33116[(8)] = inst_33064);

return statearr_33116;
})();
var statearr_33117_33147 = state_33104__$1;
(statearr_33117_33147[(2)] = null);

(statearr_33117_33147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (9))){
var inst_33064 = (state_33104[(8)]);
var inst_33080 = cljs.core.vec.call(null,inst_33064);
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33104__$1,(11),out,inst_33080);
} else {
if((state_val_33105 === (5))){
var inst_33065 = (state_33104[(7)]);
var inst_33068 = (state_33104[(9)]);
var inst_33072 = (state_33104[(10)]);
var inst_33072__$1 = f.call(null,inst_33068);
var inst_33073 = cljs.core._EQ_.call(null,inst_33072__$1,inst_33065);
var inst_33074 = cljs.core.keyword_identical_QMARK_.call(null,inst_33065,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33075 = (inst_33073) || (inst_33074);
var state_33104__$1 = (function (){var statearr_33118 = state_33104;
(statearr_33118[(10)] = inst_33072__$1);

return statearr_33118;
})();
if(cljs.core.truth_(inst_33075)){
var statearr_33119_33148 = state_33104__$1;
(statearr_33119_33148[(1)] = (8));

} else {
var statearr_33120_33149 = state_33104__$1;
(statearr_33120_33149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (14))){
var inst_33097 = (state_33104[(2)]);
var inst_33098 = cljs.core.async.close_BANG_.call(null,out);
var state_33104__$1 = (function (){var statearr_33122 = state_33104;
(statearr_33122[(13)] = inst_33097);

return statearr_33122;
})();
var statearr_33123_33150 = state_33104__$1;
(statearr_33123_33150[(2)] = inst_33098);

(statearr_33123_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (10))){
var inst_33087 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33124_33151 = state_33104__$1;
(statearr_33124_33151[(2)] = inst_33087);

(statearr_33124_33151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (8))){
var inst_33068 = (state_33104[(9)]);
var inst_33064 = (state_33104[(8)]);
var inst_33072 = (state_33104[(10)]);
var inst_33077 = inst_33064.push(inst_33068);
var tmp33121 = inst_33064;
var inst_33064__$1 = tmp33121;
var inst_33065 = inst_33072;
var state_33104__$1 = (function (){var statearr_33125 = state_33104;
(statearr_33125[(7)] = inst_33065);

(statearr_33125[(8)] = inst_33064__$1);

(statearr_33125[(14)] = inst_33077);

return statearr_33125;
})();
var statearr_33126_33152 = state_33104__$1;
(statearr_33126_33152[(2)] = null);

(statearr_33126_33152[(1)] = (2));


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
});})(c__30326__auto___33138,out))
;
return ((function (switch__30214__auto__,c__30326__auto___33138,out){
return (function() {
var cljs$core$async$state_machine__30215__auto__ = null;
var cljs$core$async$state_machine__30215__auto____0 = (function (){
var statearr_33130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33130[(0)] = cljs$core$async$state_machine__30215__auto__);

(statearr_33130[(1)] = (1));

return statearr_33130;
});
var cljs$core$async$state_machine__30215__auto____1 = (function (state_33104){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_33104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e33131){if((e33131 instanceof Object)){
var ex__30218__auto__ = e33131;
var statearr_33132_33153 = state_33104;
(statearr_33132_33153[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33154 = state_33104;
state_33104 = G__33154;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
cljs$core$async$state_machine__30215__auto__ = function(state_33104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30215__auto____1.call(this,state_33104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30215__auto____0;
cljs$core$async$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30215__auto____1;
return cljs$core$async$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___33138,out))
})();
var state__30328__auto__ = (function (){var statearr_33133 = f__30327__auto__.call(null);
(statearr_33133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___33138);

return statearr_33133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___33138,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496186256950