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
var args31829 = [];
var len__27557__auto___31835 = arguments.length;
var i__27558__auto___31836 = (0);
while(true){
if((i__27558__auto___31836 < len__27557__auto___31835)){
args31829.push((arguments[i__27558__auto___31836]));

var G__31837 = (i__27558__auto___31836 + (1));
i__27558__auto___31836 = G__31837;
continue;
} else {
}
break;
}

var G__31831 = args31829.length;
switch (G__31831) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31829.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31832 = (function (f,blockable,meta31833){
this.f = f;
this.blockable = blockable;
this.meta31833 = meta31833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31834,meta31833__$1){
var self__ = this;
var _31834__$1 = this;
return (new cljs.core.async.t_cljs$core$async31832(self__.f,self__.blockable,meta31833__$1));
});

cljs.core.async.t_cljs$core$async31832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31834){
var self__ = this;
var _31834__$1 = this;
return self__.meta31833;
});

cljs.core.async.t_cljs$core$async31832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31833","meta31833",403392275,null)], null);
});

cljs.core.async.t_cljs$core$async31832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31832";

cljs.core.async.t_cljs$core$async31832.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async31832");
});

cljs.core.async.__GT_t_cljs$core$async31832 = (function cljs$core$async$__GT_t_cljs$core$async31832(f__$1,blockable__$1,meta31833){
return (new cljs.core.async.t_cljs$core$async31832(f__$1,blockable__$1,meta31833));
});

}

return (new cljs.core.async.t_cljs$core$async31832(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31841 = [];
var len__27557__auto___31844 = arguments.length;
var i__27558__auto___31845 = (0);
while(true){
if((i__27558__auto___31845 < len__27557__auto___31844)){
args31841.push((arguments[i__27558__auto___31845]));

var G__31846 = (i__27558__auto___31845 + (1));
i__27558__auto___31845 = G__31846;
continue;
} else {
}
break;
}

var G__31843 = args31841.length;
switch (G__31843) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31841.length)].join('')));

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
var args31848 = [];
var len__27557__auto___31851 = arguments.length;
var i__27558__auto___31852 = (0);
while(true){
if((i__27558__auto___31852 < len__27557__auto___31851)){
args31848.push((arguments[i__27558__auto___31852]));

var G__31853 = (i__27558__auto___31852 + (1));
i__27558__auto___31852 = G__31853;
continue;
} else {
}
break;
}

var G__31850 = args31848.length;
switch (G__31850) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31848.length)].join('')));

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
var args31855 = [];
var len__27557__auto___31858 = arguments.length;
var i__27558__auto___31859 = (0);
while(true){
if((i__27558__auto___31859 < len__27557__auto___31858)){
args31855.push((arguments[i__27558__auto___31859]));

var G__31860 = (i__27558__auto___31859 + (1));
i__27558__auto___31859 = G__31860;
continue;
} else {
}
break;
}

var G__31857 = args31855.length;
switch (G__31857) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31855.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31862 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31862);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31862,ret){
return (function (){
return fn1.call(null,val_31862);
});})(val_31862,ret))
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
var args31863 = [];
var len__27557__auto___31866 = arguments.length;
var i__27558__auto___31867 = (0);
while(true){
if((i__27558__auto___31867 < len__27557__auto___31866)){
args31863.push((arguments[i__27558__auto___31867]));

var G__31868 = (i__27558__auto___31867 + (1));
i__27558__auto___31867 = G__31868;
continue;
} else {
}
break;
}

var G__31865 = args31863.length;
switch (G__31865) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31863.length)].join('')));

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
var n__27367__auto___31870 = n;
var x_31871 = (0);
while(true){
if((x_31871 < n__27367__auto___31870)){
(a[x_31871] = (0));

var G__31872 = (x_31871 + (1));
x_31871 = G__31872;
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

var G__31873 = (i + (1));
i = G__31873;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31877 = (function (flag,meta31878){
this.flag = flag;
this.meta31878 = meta31878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31879,meta31878__$1){
var self__ = this;
var _31879__$1 = this;
return (new cljs.core.async.t_cljs$core$async31877(self__.flag,meta31878__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31879){
var self__ = this;
var _31879__$1 = this;
return self__.meta31878;
});})(flag))
;

cljs.core.async.t_cljs$core$async31877.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31877.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31878","meta31878",-2037112101,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31877";

cljs.core.async.t_cljs$core$async31877.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async31877");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31877 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31877(flag__$1,meta31878){
return (new cljs.core.async.t_cljs$core$async31877(flag__$1,meta31878));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31877(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31883 = (function (flag,cb,meta31884){
this.flag = flag;
this.cb = cb;
this.meta31884 = meta31884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31885,meta31884__$1){
var self__ = this;
var _31885__$1 = this;
return (new cljs.core.async.t_cljs$core$async31883(self__.flag,self__.cb,meta31884__$1));
});

cljs.core.async.t_cljs$core$async31883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31885){
var self__ = this;
var _31885__$1 = this;
return self__.meta31884;
});

cljs.core.async.t_cljs$core$async31883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31884","meta31884",226638503,null)], null);
});

cljs.core.async.t_cljs$core$async31883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31883";

cljs.core.async.t_cljs$core$async31883.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async31883");
});

cljs.core.async.__GT_t_cljs$core$async31883 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31883(flag__$1,cb__$1,meta31884){
return (new cljs.core.async.t_cljs$core$async31883(flag__$1,cb__$1,meta31884));
});

}

return (new cljs.core.async.t_cljs$core$async31883(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31886_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31886_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31887_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31887_SHARP_,port], null));
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
var G__31888 = (i + (1));
i = G__31888;
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
var len__27557__auto___31894 = arguments.length;
var i__27558__auto___31895 = (0);
while(true){
if((i__27558__auto___31895 < len__27557__auto___31894)){
args__27564__auto__.push((arguments[i__27558__auto___31895]));

var G__31896 = (i__27558__auto___31895 + (1));
i__27558__auto___31895 = G__31896;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31891){
var map__31892 = p__31891;
var map__31892__$1 = ((((!((map__31892 == null)))?((((map__31892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31892):map__31892);
var opts = map__31892__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31889){
var G__31890 = cljs.core.first.call(null,seq31889);
var seq31889__$1 = cljs.core.next.call(null,seq31889);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31890,seq31889__$1);
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
var args31897 = [];
var len__27557__auto___31947 = arguments.length;
var i__27558__auto___31948 = (0);
while(true){
if((i__27558__auto___31948 < len__27557__auto___31947)){
args31897.push((arguments[i__27558__auto___31948]));

var G__31949 = (i__27558__auto___31948 + (1));
i__27558__auto___31948 = G__31949;
continue;
} else {
}
break;
}

var G__31899 = args31897.length;
switch (G__31899) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31897.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31784__auto___31951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___31951){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___31951){
return (function (state_31923){
var state_val_31924 = (state_31923[(1)]);
if((state_val_31924 === (7))){
var inst_31919 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
var statearr_31925_31952 = state_31923__$1;
(statearr_31925_31952[(2)] = inst_31919);

(statearr_31925_31952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (1))){
var state_31923__$1 = state_31923;
var statearr_31926_31953 = state_31923__$1;
(statearr_31926_31953[(2)] = null);

(statearr_31926_31953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (4))){
var inst_31902 = (state_31923[(7)]);
var inst_31902__$1 = (state_31923[(2)]);
var inst_31903 = (inst_31902__$1 == null);
var state_31923__$1 = (function (){var statearr_31927 = state_31923;
(statearr_31927[(7)] = inst_31902__$1);

return statearr_31927;
})();
if(cljs.core.truth_(inst_31903)){
var statearr_31928_31954 = state_31923__$1;
(statearr_31928_31954[(1)] = (5));

} else {
var statearr_31929_31955 = state_31923__$1;
(statearr_31929_31955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (13))){
var state_31923__$1 = state_31923;
var statearr_31930_31956 = state_31923__$1;
(statearr_31930_31956[(2)] = null);

(statearr_31930_31956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (6))){
var inst_31902 = (state_31923[(7)]);
var state_31923__$1 = state_31923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31923__$1,(11),to,inst_31902);
} else {
if((state_val_31924 === (3))){
var inst_31921 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31923__$1,inst_31921);
} else {
if((state_val_31924 === (12))){
var state_31923__$1 = state_31923;
var statearr_31931_31957 = state_31923__$1;
(statearr_31931_31957[(2)] = null);

(statearr_31931_31957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (2))){
var state_31923__$1 = state_31923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31923__$1,(4),from);
} else {
if((state_val_31924 === (11))){
var inst_31912 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
if(cljs.core.truth_(inst_31912)){
var statearr_31932_31958 = state_31923__$1;
(statearr_31932_31958[(1)] = (12));

} else {
var statearr_31933_31959 = state_31923__$1;
(statearr_31933_31959[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (9))){
var state_31923__$1 = state_31923;
var statearr_31934_31960 = state_31923__$1;
(statearr_31934_31960[(2)] = null);

(statearr_31934_31960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (5))){
var state_31923__$1 = state_31923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31935_31961 = state_31923__$1;
(statearr_31935_31961[(1)] = (8));

} else {
var statearr_31936_31962 = state_31923__$1;
(statearr_31936_31962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (14))){
var inst_31917 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
var statearr_31937_31963 = state_31923__$1;
(statearr_31937_31963[(2)] = inst_31917);

(statearr_31937_31963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (10))){
var inst_31909 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
var statearr_31938_31964 = state_31923__$1;
(statearr_31938_31964[(2)] = inst_31909);

(statearr_31938_31964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (8))){
var inst_31906 = cljs.core.async.close_BANG_.call(null,to);
var state_31923__$1 = state_31923;
var statearr_31939_31965 = state_31923__$1;
(statearr_31939_31965[(2)] = inst_31906);

(statearr_31939_31965[(1)] = (10));


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
});})(c__31784__auto___31951))
;
return ((function (switch__31672__auto__,c__31784__auto___31951){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_31943 = [null,null,null,null,null,null,null,null];
(statearr_31943[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_31943[(1)] = (1));

return statearr_31943;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_31923){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_31923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e31944){if((e31944 instanceof Object)){
var ex__31676__auto__ = e31944;
var statearr_31945_31966 = state_31923;
(statearr_31945_31966[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31967 = state_31923;
state_31923 = G__31967;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_31923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_31923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___31951))
})();
var state__31786__auto__ = (function (){var statearr_31946 = f__31785__auto__.call(null);
(statearr_31946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___31951);

return statearr_31946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___31951))
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
return (function (p__32155){
var vec__32156 = p__32155;
var v = cljs.core.nth.call(null,vec__32156,(0),null);
var p = cljs.core.nth.call(null,vec__32156,(1),null);
var job = vec__32156;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31784__auto___32342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___32342,res,vec__32156,v,p,job,jobs,results){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___32342,res,vec__32156,v,p,job,jobs,results){
return (function (state_32163){
var state_val_32164 = (state_32163[(1)]);
if((state_val_32164 === (1))){
var state_32163__$1 = state_32163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32163__$1,(2),res,v);
} else {
if((state_val_32164 === (2))){
var inst_32160 = (state_32163[(2)]);
var inst_32161 = cljs.core.async.close_BANG_.call(null,res);
var state_32163__$1 = (function (){var statearr_32165 = state_32163;
(statearr_32165[(7)] = inst_32160);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32163__$1,inst_32161);
} else {
return null;
}
}
});})(c__31784__auto___32342,res,vec__32156,v,p,job,jobs,results))
;
return ((function (switch__31672__auto__,c__31784__auto___32342,res,vec__32156,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0 = (function (){
var statearr_32169 = [null,null,null,null,null,null,null,null];
(statearr_32169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__);

(statearr_32169[(1)] = (1));

return statearr_32169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1 = (function (state_32163){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32170){if((e32170 instanceof Object)){
var ex__31676__auto__ = e32170;
var statearr_32171_32343 = state_32163;
(statearr_32171_32343[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32344 = state_32163;
state_32163 = G__32344;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = function(state_32163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1.call(this,state_32163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___32342,res,vec__32156,v,p,job,jobs,results))
})();
var state__31786__auto__ = (function (){var statearr_32172 = f__31785__auto__.call(null);
(statearr_32172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___32342);

return statearr_32172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___32342,res,vec__32156,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32173){
var vec__32174 = p__32173;
var v = cljs.core.nth.call(null,vec__32174,(0),null);
var p = cljs.core.nth.call(null,vec__32174,(1),null);
var job = vec__32174;
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
var n__27367__auto___32345 = n;
var __32346 = (0);
while(true){
if((__32346 < n__27367__auto___32345)){
var G__32177_32347 = type;
var G__32177_32348__$1 = (((G__32177_32347 instanceof cljs.core.Keyword))?G__32177_32347.fqn:null);
switch (G__32177_32348__$1) {
case "compute":
var c__31784__auto___32350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32346,c__31784__auto___32350,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (__32346,c__31784__auto___32350,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async){
return (function (state_32190){
var state_val_32191 = (state_32190[(1)]);
if((state_val_32191 === (1))){
var state_32190__$1 = state_32190;
var statearr_32192_32351 = state_32190__$1;
(statearr_32192_32351[(2)] = null);

(statearr_32192_32351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (2))){
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32190__$1,(4),jobs);
} else {
if((state_val_32191 === (3))){
var inst_32188 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32190__$1,inst_32188);
} else {
if((state_val_32191 === (4))){
var inst_32180 = (state_32190[(2)]);
var inst_32181 = process.call(null,inst_32180);
var state_32190__$1 = state_32190;
if(cljs.core.truth_(inst_32181)){
var statearr_32193_32352 = state_32190__$1;
(statearr_32193_32352[(1)] = (5));

} else {
var statearr_32194_32353 = state_32190__$1;
(statearr_32194_32353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (5))){
var state_32190__$1 = state_32190;
var statearr_32195_32354 = state_32190__$1;
(statearr_32195_32354[(2)] = null);

(statearr_32195_32354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (6))){
var state_32190__$1 = state_32190;
var statearr_32196_32355 = state_32190__$1;
(statearr_32196_32355[(2)] = null);

(statearr_32196_32355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (7))){
var inst_32186 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32197_32356 = state_32190__$1;
(statearr_32197_32356[(2)] = inst_32186);

(statearr_32197_32356[(1)] = (3));


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
});})(__32346,c__31784__auto___32350,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async))
;
return ((function (__32346,switch__31672__auto__,c__31784__auto___32350,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0 = (function (){
var statearr_32201 = [null,null,null,null,null,null,null];
(statearr_32201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__);

(statearr_32201[(1)] = (1));

return statearr_32201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1 = (function (state_32190){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32202){if((e32202 instanceof Object)){
var ex__31676__auto__ = e32202;
var statearr_32203_32357 = state_32190;
(statearr_32203_32357[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32358 = state_32190;
state_32190 = G__32358;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = function(state_32190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1.call(this,state_32190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__;
})()
;})(__32346,switch__31672__auto__,c__31784__auto___32350,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async))
})();
var state__31786__auto__ = (function (){var statearr_32204 = f__31785__auto__.call(null);
(statearr_32204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___32350);

return statearr_32204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(__32346,c__31784__auto___32350,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async))
);


break;
case "async":
var c__31784__auto___32359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32346,c__31784__auto___32359,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (__32346,c__31784__auto___32359,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async){
return (function (state_32217){
var state_val_32218 = (state_32217[(1)]);
if((state_val_32218 === (1))){
var state_32217__$1 = state_32217;
var statearr_32219_32360 = state_32217__$1;
(statearr_32219_32360[(2)] = null);

(statearr_32219_32360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (2))){
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32217__$1,(4),jobs);
} else {
if((state_val_32218 === (3))){
var inst_32215 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32217__$1,inst_32215);
} else {
if((state_val_32218 === (4))){
var inst_32207 = (state_32217[(2)]);
var inst_32208 = async.call(null,inst_32207);
var state_32217__$1 = state_32217;
if(cljs.core.truth_(inst_32208)){
var statearr_32220_32361 = state_32217__$1;
(statearr_32220_32361[(1)] = (5));

} else {
var statearr_32221_32362 = state_32217__$1;
(statearr_32221_32362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (5))){
var state_32217__$1 = state_32217;
var statearr_32222_32363 = state_32217__$1;
(statearr_32222_32363[(2)] = null);

(statearr_32222_32363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (6))){
var state_32217__$1 = state_32217;
var statearr_32223_32364 = state_32217__$1;
(statearr_32223_32364[(2)] = null);

(statearr_32223_32364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (7))){
var inst_32213 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32224_32365 = state_32217__$1;
(statearr_32224_32365[(2)] = inst_32213);

(statearr_32224_32365[(1)] = (3));


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
});})(__32346,c__31784__auto___32359,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async))
;
return ((function (__32346,switch__31672__auto__,c__31784__auto___32359,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0 = (function (){
var statearr_32228 = [null,null,null,null,null,null,null];
(statearr_32228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__);

(statearr_32228[(1)] = (1));

return statearr_32228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1 = (function (state_32217){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32229){if((e32229 instanceof Object)){
var ex__31676__auto__ = e32229;
var statearr_32230_32366 = state_32217;
(statearr_32230_32366[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32367 = state_32217;
state_32217 = G__32367;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = function(state_32217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1.call(this,state_32217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__;
})()
;})(__32346,switch__31672__auto__,c__31784__auto___32359,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async))
})();
var state__31786__auto__ = (function (){var statearr_32231 = f__31785__auto__.call(null);
(statearr_32231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___32359);

return statearr_32231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(__32346,c__31784__auto___32359,G__32177_32347,G__32177_32348__$1,n__27367__auto___32345,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32177_32348__$1)].join('')));

}

var G__32368 = (__32346 + (1));
__32346 = G__32368;
continue;
} else {
}
break;
}

var c__31784__auto___32369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___32369,jobs,results,process,async){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___32369,jobs,results,process,async){
return (function (state_32253){
var state_val_32254 = (state_32253[(1)]);
if((state_val_32254 === (1))){
var state_32253__$1 = state_32253;
var statearr_32255_32370 = state_32253__$1;
(statearr_32255_32370[(2)] = null);

(statearr_32255_32370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (2))){
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32253__$1,(4),from);
} else {
if((state_val_32254 === (3))){
var inst_32251 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32253__$1,inst_32251);
} else {
if((state_val_32254 === (4))){
var inst_32234 = (state_32253[(7)]);
var inst_32234__$1 = (state_32253[(2)]);
var inst_32235 = (inst_32234__$1 == null);
var state_32253__$1 = (function (){var statearr_32256 = state_32253;
(statearr_32256[(7)] = inst_32234__$1);

return statearr_32256;
})();
if(cljs.core.truth_(inst_32235)){
var statearr_32257_32371 = state_32253__$1;
(statearr_32257_32371[(1)] = (5));

} else {
var statearr_32258_32372 = state_32253__$1;
(statearr_32258_32372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (5))){
var inst_32237 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32253__$1 = state_32253;
var statearr_32259_32373 = state_32253__$1;
(statearr_32259_32373[(2)] = inst_32237);

(statearr_32259_32373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (6))){
var inst_32234 = (state_32253[(7)]);
var inst_32239 = (state_32253[(8)]);
var inst_32239__$1 = cljs.core.async.chan.call(null,(1));
var inst_32240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32241 = [inst_32234,inst_32239__$1];
var inst_32242 = (new cljs.core.PersistentVector(null,2,(5),inst_32240,inst_32241,null));
var state_32253__$1 = (function (){var statearr_32260 = state_32253;
(statearr_32260[(8)] = inst_32239__$1);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32253__$1,(8),jobs,inst_32242);
} else {
if((state_val_32254 === (7))){
var inst_32249 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32261_32374 = state_32253__$1;
(statearr_32261_32374[(2)] = inst_32249);

(statearr_32261_32374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (8))){
var inst_32239 = (state_32253[(8)]);
var inst_32244 = (state_32253[(2)]);
var state_32253__$1 = (function (){var statearr_32262 = state_32253;
(statearr_32262[(9)] = inst_32244);

return statearr_32262;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32253__$1,(9),results,inst_32239);
} else {
if((state_val_32254 === (9))){
var inst_32246 = (state_32253[(2)]);
var state_32253__$1 = (function (){var statearr_32263 = state_32253;
(statearr_32263[(10)] = inst_32246);

return statearr_32263;
})();
var statearr_32264_32375 = state_32253__$1;
(statearr_32264_32375[(2)] = null);

(statearr_32264_32375[(1)] = (2));


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
});})(c__31784__auto___32369,jobs,results,process,async))
;
return ((function (switch__31672__auto__,c__31784__auto___32369,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0 = (function (){
var statearr_32268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__);

(statearr_32268[(1)] = (1));

return statearr_32268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1 = (function (state_32253){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32269){if((e32269 instanceof Object)){
var ex__31676__auto__ = e32269;
var statearr_32270_32376 = state_32253;
(statearr_32270_32376[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32377 = state_32253;
state_32253 = G__32377;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = function(state_32253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1.call(this,state_32253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___32369,jobs,results,process,async))
})();
var state__31786__auto__ = (function (){var statearr_32271 = f__31785__auto__.call(null);
(statearr_32271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___32369);

return statearr_32271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___32369,jobs,results,process,async))
);


var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__,jobs,results,process,async){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__,jobs,results,process,async){
return (function (state_32309){
var state_val_32310 = (state_32309[(1)]);
if((state_val_32310 === (7))){
var inst_32305 = (state_32309[(2)]);
var state_32309__$1 = state_32309;
var statearr_32311_32378 = state_32309__$1;
(statearr_32311_32378[(2)] = inst_32305);

(statearr_32311_32378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (20))){
var state_32309__$1 = state_32309;
var statearr_32312_32379 = state_32309__$1;
(statearr_32312_32379[(2)] = null);

(statearr_32312_32379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (1))){
var state_32309__$1 = state_32309;
var statearr_32313_32380 = state_32309__$1;
(statearr_32313_32380[(2)] = null);

(statearr_32313_32380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (4))){
var inst_32274 = (state_32309[(7)]);
var inst_32274__$1 = (state_32309[(2)]);
var inst_32275 = (inst_32274__$1 == null);
var state_32309__$1 = (function (){var statearr_32314 = state_32309;
(statearr_32314[(7)] = inst_32274__$1);

return statearr_32314;
})();
if(cljs.core.truth_(inst_32275)){
var statearr_32315_32381 = state_32309__$1;
(statearr_32315_32381[(1)] = (5));

} else {
var statearr_32316_32382 = state_32309__$1;
(statearr_32316_32382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (15))){
var inst_32287 = (state_32309[(8)]);
var state_32309__$1 = state_32309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32309__$1,(18),to,inst_32287);
} else {
if((state_val_32310 === (21))){
var inst_32300 = (state_32309[(2)]);
var state_32309__$1 = state_32309;
var statearr_32317_32383 = state_32309__$1;
(statearr_32317_32383[(2)] = inst_32300);

(statearr_32317_32383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (13))){
var inst_32302 = (state_32309[(2)]);
var state_32309__$1 = (function (){var statearr_32318 = state_32309;
(statearr_32318[(9)] = inst_32302);

return statearr_32318;
})();
var statearr_32319_32384 = state_32309__$1;
(statearr_32319_32384[(2)] = null);

(statearr_32319_32384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (6))){
var inst_32274 = (state_32309[(7)]);
var state_32309__$1 = state_32309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32309__$1,(11),inst_32274);
} else {
if((state_val_32310 === (17))){
var inst_32295 = (state_32309[(2)]);
var state_32309__$1 = state_32309;
if(cljs.core.truth_(inst_32295)){
var statearr_32320_32385 = state_32309__$1;
(statearr_32320_32385[(1)] = (19));

} else {
var statearr_32321_32386 = state_32309__$1;
(statearr_32321_32386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (3))){
var inst_32307 = (state_32309[(2)]);
var state_32309__$1 = state_32309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32309__$1,inst_32307);
} else {
if((state_val_32310 === (12))){
var inst_32284 = (state_32309[(10)]);
var state_32309__$1 = state_32309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32309__$1,(14),inst_32284);
} else {
if((state_val_32310 === (2))){
var state_32309__$1 = state_32309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32309__$1,(4),results);
} else {
if((state_val_32310 === (19))){
var state_32309__$1 = state_32309;
var statearr_32322_32387 = state_32309__$1;
(statearr_32322_32387[(2)] = null);

(statearr_32322_32387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (11))){
var inst_32284 = (state_32309[(2)]);
var state_32309__$1 = (function (){var statearr_32323 = state_32309;
(statearr_32323[(10)] = inst_32284);

return statearr_32323;
})();
var statearr_32324_32388 = state_32309__$1;
(statearr_32324_32388[(2)] = null);

(statearr_32324_32388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (9))){
var state_32309__$1 = state_32309;
var statearr_32325_32389 = state_32309__$1;
(statearr_32325_32389[(2)] = null);

(statearr_32325_32389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (5))){
var state_32309__$1 = state_32309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32326_32390 = state_32309__$1;
(statearr_32326_32390[(1)] = (8));

} else {
var statearr_32327_32391 = state_32309__$1;
(statearr_32327_32391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (14))){
var inst_32289 = (state_32309[(11)]);
var inst_32287 = (state_32309[(8)]);
var inst_32287__$1 = (state_32309[(2)]);
var inst_32288 = (inst_32287__$1 == null);
var inst_32289__$1 = cljs.core.not.call(null,inst_32288);
var state_32309__$1 = (function (){var statearr_32328 = state_32309;
(statearr_32328[(11)] = inst_32289__$1);

(statearr_32328[(8)] = inst_32287__$1);

return statearr_32328;
})();
if(inst_32289__$1){
var statearr_32329_32392 = state_32309__$1;
(statearr_32329_32392[(1)] = (15));

} else {
var statearr_32330_32393 = state_32309__$1;
(statearr_32330_32393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (16))){
var inst_32289 = (state_32309[(11)]);
var state_32309__$1 = state_32309;
var statearr_32331_32394 = state_32309__$1;
(statearr_32331_32394[(2)] = inst_32289);

(statearr_32331_32394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (10))){
var inst_32281 = (state_32309[(2)]);
var state_32309__$1 = state_32309;
var statearr_32332_32395 = state_32309__$1;
(statearr_32332_32395[(2)] = inst_32281);

(statearr_32332_32395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (18))){
var inst_32292 = (state_32309[(2)]);
var state_32309__$1 = state_32309;
var statearr_32333_32396 = state_32309__$1;
(statearr_32333_32396[(2)] = inst_32292);

(statearr_32333_32396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32310 === (8))){
var inst_32278 = cljs.core.async.close_BANG_.call(null,to);
var state_32309__$1 = state_32309;
var statearr_32334_32397 = state_32309__$1;
(statearr_32334_32397[(2)] = inst_32278);

(statearr_32334_32397[(1)] = (10));


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
});})(c__31784__auto__,jobs,results,process,async))
;
return ((function (switch__31672__auto__,c__31784__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0 = (function (){
var statearr_32338 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__);

(statearr_32338[(1)] = (1));

return statearr_32338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1 = (function (state_32309){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32339){if((e32339 instanceof Object)){
var ex__31676__auto__ = e32339;
var statearr_32340_32398 = state_32309;
(statearr_32340_32398[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32399 = state_32309;
state_32309 = G__32399;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__ = function(state_32309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1.call(this,state_32309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__,jobs,results,process,async))
})();
var state__31786__auto__ = (function (){var statearr_32341 = f__31785__auto__.call(null);
(statearr_32341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_32341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__,jobs,results,process,async))
);

return c__31784__auto__;
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
var args32400 = [];
var len__27557__auto___32403 = arguments.length;
var i__27558__auto___32404 = (0);
while(true){
if((i__27558__auto___32404 < len__27557__auto___32403)){
args32400.push((arguments[i__27558__auto___32404]));

var G__32405 = (i__27558__auto___32404 + (1));
i__27558__auto___32404 = G__32405;
continue;
} else {
}
break;
}

var G__32402 = args32400.length;
switch (G__32402) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32400.length)].join('')));

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
var args32407 = [];
var len__27557__auto___32410 = arguments.length;
var i__27558__auto___32411 = (0);
while(true){
if((i__27558__auto___32411 < len__27557__auto___32410)){
args32407.push((arguments[i__27558__auto___32411]));

var G__32412 = (i__27558__auto___32411 + (1));
i__27558__auto___32411 = G__32412;
continue;
} else {
}
break;
}

var G__32409 = args32407.length;
switch (G__32409) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32407.length)].join('')));

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
var args32414 = [];
var len__27557__auto___32467 = arguments.length;
var i__27558__auto___32468 = (0);
while(true){
if((i__27558__auto___32468 < len__27557__auto___32467)){
args32414.push((arguments[i__27558__auto___32468]));

var G__32469 = (i__27558__auto___32468 + (1));
i__27558__auto___32468 = G__32469;
continue;
} else {
}
break;
}

var G__32416 = args32414.length;
switch (G__32416) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32414.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31784__auto___32471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___32471,tc,fc){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___32471,tc,fc){
return (function (state_32442){
var state_val_32443 = (state_32442[(1)]);
if((state_val_32443 === (7))){
var inst_32438 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32444_32472 = state_32442__$1;
(statearr_32444_32472[(2)] = inst_32438);

(statearr_32444_32472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (1))){
var state_32442__$1 = state_32442;
var statearr_32445_32473 = state_32442__$1;
(statearr_32445_32473[(2)] = null);

(statearr_32445_32473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (4))){
var inst_32419 = (state_32442[(7)]);
var inst_32419__$1 = (state_32442[(2)]);
var inst_32420 = (inst_32419__$1 == null);
var state_32442__$1 = (function (){var statearr_32446 = state_32442;
(statearr_32446[(7)] = inst_32419__$1);

return statearr_32446;
})();
if(cljs.core.truth_(inst_32420)){
var statearr_32447_32474 = state_32442__$1;
(statearr_32447_32474[(1)] = (5));

} else {
var statearr_32448_32475 = state_32442__$1;
(statearr_32448_32475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (13))){
var state_32442__$1 = state_32442;
var statearr_32449_32476 = state_32442__$1;
(statearr_32449_32476[(2)] = null);

(statearr_32449_32476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (6))){
var inst_32419 = (state_32442[(7)]);
var inst_32425 = p.call(null,inst_32419);
var state_32442__$1 = state_32442;
if(cljs.core.truth_(inst_32425)){
var statearr_32450_32477 = state_32442__$1;
(statearr_32450_32477[(1)] = (9));

} else {
var statearr_32451_32478 = state_32442__$1;
(statearr_32451_32478[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (3))){
var inst_32440 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32442__$1,inst_32440);
} else {
if((state_val_32443 === (12))){
var state_32442__$1 = state_32442;
var statearr_32452_32479 = state_32442__$1;
(statearr_32452_32479[(2)] = null);

(statearr_32452_32479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (2))){
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32442__$1,(4),ch);
} else {
if((state_val_32443 === (11))){
var inst_32419 = (state_32442[(7)]);
var inst_32429 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32442__$1,(8),inst_32429,inst_32419);
} else {
if((state_val_32443 === (9))){
var state_32442__$1 = state_32442;
var statearr_32453_32480 = state_32442__$1;
(statearr_32453_32480[(2)] = tc);

(statearr_32453_32480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (5))){
var inst_32422 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32423 = cljs.core.async.close_BANG_.call(null,fc);
var state_32442__$1 = (function (){var statearr_32454 = state_32442;
(statearr_32454[(8)] = inst_32422);

return statearr_32454;
})();
var statearr_32455_32481 = state_32442__$1;
(statearr_32455_32481[(2)] = inst_32423);

(statearr_32455_32481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (14))){
var inst_32436 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32456_32482 = state_32442__$1;
(statearr_32456_32482[(2)] = inst_32436);

(statearr_32456_32482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (10))){
var state_32442__$1 = state_32442;
var statearr_32457_32483 = state_32442__$1;
(statearr_32457_32483[(2)] = fc);

(statearr_32457_32483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (8))){
var inst_32431 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
if(cljs.core.truth_(inst_32431)){
var statearr_32458_32484 = state_32442__$1;
(statearr_32458_32484[(1)] = (12));

} else {
var statearr_32459_32485 = state_32442__$1;
(statearr_32459_32485[(1)] = (13));

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
});})(c__31784__auto___32471,tc,fc))
;
return ((function (switch__31672__auto__,c__31784__auto___32471,tc,fc){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_32463 = [null,null,null,null,null,null,null,null,null];
(statearr_32463[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_32463[(1)] = (1));

return statearr_32463;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_32442){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32464){if((e32464 instanceof Object)){
var ex__31676__auto__ = e32464;
var statearr_32465_32486 = state_32442;
(statearr_32465_32486[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32487 = state_32442;
state_32442 = G__32487;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_32442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_32442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___32471,tc,fc))
})();
var state__31786__auto__ = (function (){var statearr_32466 = f__31785__auto__.call(null);
(statearr_32466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___32471);

return statearr_32466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___32471,tc,fc))
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
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__){
return (function (state_32551){
var state_val_32552 = (state_32551[(1)]);
if((state_val_32552 === (7))){
var inst_32547 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32553_32574 = state_32551__$1;
(statearr_32553_32574[(2)] = inst_32547);

(statearr_32553_32574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (1))){
var inst_32531 = init;
var state_32551__$1 = (function (){var statearr_32554 = state_32551;
(statearr_32554[(7)] = inst_32531);

return statearr_32554;
})();
var statearr_32555_32575 = state_32551__$1;
(statearr_32555_32575[(2)] = null);

(statearr_32555_32575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (4))){
var inst_32534 = (state_32551[(8)]);
var inst_32534__$1 = (state_32551[(2)]);
var inst_32535 = (inst_32534__$1 == null);
var state_32551__$1 = (function (){var statearr_32556 = state_32551;
(statearr_32556[(8)] = inst_32534__$1);

return statearr_32556;
})();
if(cljs.core.truth_(inst_32535)){
var statearr_32557_32576 = state_32551__$1;
(statearr_32557_32576[(1)] = (5));

} else {
var statearr_32558_32577 = state_32551__$1;
(statearr_32558_32577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (6))){
var inst_32534 = (state_32551[(8)]);
var inst_32531 = (state_32551[(7)]);
var inst_32538 = (state_32551[(9)]);
var inst_32538__$1 = f.call(null,inst_32531,inst_32534);
var inst_32539 = cljs.core.reduced_QMARK_.call(null,inst_32538__$1);
var state_32551__$1 = (function (){var statearr_32559 = state_32551;
(statearr_32559[(9)] = inst_32538__$1);

return statearr_32559;
})();
if(inst_32539){
var statearr_32560_32578 = state_32551__$1;
(statearr_32560_32578[(1)] = (8));

} else {
var statearr_32561_32579 = state_32551__$1;
(statearr_32561_32579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (3))){
var inst_32549 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32551__$1,inst_32549);
} else {
if((state_val_32552 === (2))){
var state_32551__$1 = state_32551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32551__$1,(4),ch);
} else {
if((state_val_32552 === (9))){
var inst_32538 = (state_32551[(9)]);
var inst_32531 = inst_32538;
var state_32551__$1 = (function (){var statearr_32562 = state_32551;
(statearr_32562[(7)] = inst_32531);

return statearr_32562;
})();
var statearr_32563_32580 = state_32551__$1;
(statearr_32563_32580[(2)] = null);

(statearr_32563_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (5))){
var inst_32531 = (state_32551[(7)]);
var state_32551__$1 = state_32551;
var statearr_32564_32581 = state_32551__$1;
(statearr_32564_32581[(2)] = inst_32531);

(statearr_32564_32581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (10))){
var inst_32545 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32565_32582 = state_32551__$1;
(statearr_32565_32582[(2)] = inst_32545);

(statearr_32565_32582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (8))){
var inst_32538 = (state_32551[(9)]);
var inst_32541 = cljs.core.deref.call(null,inst_32538);
var state_32551__$1 = state_32551;
var statearr_32566_32583 = state_32551__$1;
(statearr_32566_32583[(2)] = inst_32541);

(statearr_32566_32583[(1)] = (10));


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
});})(c__31784__auto__))
;
return ((function (switch__31672__auto__,c__31784__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31673__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31673__auto____0 = (function (){
var statearr_32570 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32570[(0)] = cljs$core$async$reduce_$_state_machine__31673__auto__);

(statearr_32570[(1)] = (1));

return statearr_32570;
});
var cljs$core$async$reduce_$_state_machine__31673__auto____1 = (function (state_32551){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32571){if((e32571 instanceof Object)){
var ex__31676__auto__ = e32571;
var statearr_32572_32584 = state_32551;
(statearr_32572_32584[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32585 = state_32551;
state_32551 = G__32585;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31673__auto__ = function(state_32551){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31673__auto____1.call(this,state_32551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31673__auto____0;
cljs$core$async$reduce_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31673__auto____1;
return cljs$core$async$reduce_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__))
})();
var state__31786__auto__ = (function (){var statearr_32573 = f__31785__auto__.call(null);
(statearr_32573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_32573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__))
);

return c__31784__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__,f__$1){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__,f__$1){
return (function (state_32605){
var state_val_32606 = (state_32605[(1)]);
if((state_val_32606 === (1))){
var inst_32600 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32605__$1 = state_32605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32605__$1,(2),inst_32600);
} else {
if((state_val_32606 === (2))){
var inst_32602 = (state_32605[(2)]);
var inst_32603 = f__$1.call(null,inst_32602);
var state_32605__$1 = state_32605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32605__$1,inst_32603);
} else {
return null;
}
}
});})(c__31784__auto__,f__$1))
;
return ((function (switch__31672__auto__,c__31784__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31673__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31673__auto____0 = (function (){
var statearr_32610 = [null,null,null,null,null,null,null];
(statearr_32610[(0)] = cljs$core$async$transduce_$_state_machine__31673__auto__);

(statearr_32610[(1)] = (1));

return statearr_32610;
});
var cljs$core$async$transduce_$_state_machine__31673__auto____1 = (function (state_32605){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32611){if((e32611 instanceof Object)){
var ex__31676__auto__ = e32611;
var statearr_32612_32614 = state_32605;
(statearr_32612_32614[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32615 = state_32605;
state_32605 = G__32615;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31673__auto__ = function(state_32605){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31673__auto____1.call(this,state_32605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31673__auto____0;
cljs$core$async$transduce_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31673__auto____1;
return cljs$core$async$transduce_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__,f__$1))
})();
var state__31786__auto__ = (function (){var statearr_32613 = f__31785__auto__.call(null);
(statearr_32613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_32613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__,f__$1))
);

return c__31784__auto__;
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
var args32616 = [];
var len__27557__auto___32668 = arguments.length;
var i__27558__auto___32669 = (0);
while(true){
if((i__27558__auto___32669 < len__27557__auto___32668)){
args32616.push((arguments[i__27558__auto___32669]));

var G__32670 = (i__27558__auto___32669 + (1));
i__27558__auto___32669 = G__32670;
continue;
} else {
}
break;
}

var G__32618 = args32616.length;
switch (G__32618) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32616.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__){
return (function (state_32643){
var state_val_32644 = (state_32643[(1)]);
if((state_val_32644 === (7))){
var inst_32625 = (state_32643[(2)]);
var state_32643__$1 = state_32643;
var statearr_32645_32672 = state_32643__$1;
(statearr_32645_32672[(2)] = inst_32625);

(statearr_32645_32672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (1))){
var inst_32619 = cljs.core.seq.call(null,coll);
var inst_32620 = inst_32619;
var state_32643__$1 = (function (){var statearr_32646 = state_32643;
(statearr_32646[(7)] = inst_32620);

return statearr_32646;
})();
var statearr_32647_32673 = state_32643__$1;
(statearr_32647_32673[(2)] = null);

(statearr_32647_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (4))){
var inst_32620 = (state_32643[(7)]);
var inst_32623 = cljs.core.first.call(null,inst_32620);
var state_32643__$1 = state_32643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32643__$1,(7),ch,inst_32623);
} else {
if((state_val_32644 === (13))){
var inst_32637 = (state_32643[(2)]);
var state_32643__$1 = state_32643;
var statearr_32648_32674 = state_32643__$1;
(statearr_32648_32674[(2)] = inst_32637);

(statearr_32648_32674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (6))){
var inst_32628 = (state_32643[(2)]);
var state_32643__$1 = state_32643;
if(cljs.core.truth_(inst_32628)){
var statearr_32649_32675 = state_32643__$1;
(statearr_32649_32675[(1)] = (8));

} else {
var statearr_32650_32676 = state_32643__$1;
(statearr_32650_32676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (3))){
var inst_32641 = (state_32643[(2)]);
var state_32643__$1 = state_32643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32643__$1,inst_32641);
} else {
if((state_val_32644 === (12))){
var state_32643__$1 = state_32643;
var statearr_32651_32677 = state_32643__$1;
(statearr_32651_32677[(2)] = null);

(statearr_32651_32677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (2))){
var inst_32620 = (state_32643[(7)]);
var state_32643__$1 = state_32643;
if(cljs.core.truth_(inst_32620)){
var statearr_32652_32678 = state_32643__$1;
(statearr_32652_32678[(1)] = (4));

} else {
var statearr_32653_32679 = state_32643__$1;
(statearr_32653_32679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (11))){
var inst_32634 = cljs.core.async.close_BANG_.call(null,ch);
var state_32643__$1 = state_32643;
var statearr_32654_32680 = state_32643__$1;
(statearr_32654_32680[(2)] = inst_32634);

(statearr_32654_32680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (9))){
var state_32643__$1 = state_32643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32655_32681 = state_32643__$1;
(statearr_32655_32681[(1)] = (11));

} else {
var statearr_32656_32682 = state_32643__$1;
(statearr_32656_32682[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (5))){
var inst_32620 = (state_32643[(7)]);
var state_32643__$1 = state_32643;
var statearr_32657_32683 = state_32643__$1;
(statearr_32657_32683[(2)] = inst_32620);

(statearr_32657_32683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (10))){
var inst_32639 = (state_32643[(2)]);
var state_32643__$1 = state_32643;
var statearr_32658_32684 = state_32643__$1;
(statearr_32658_32684[(2)] = inst_32639);

(statearr_32658_32684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (8))){
var inst_32620 = (state_32643[(7)]);
var inst_32630 = cljs.core.next.call(null,inst_32620);
var inst_32620__$1 = inst_32630;
var state_32643__$1 = (function (){var statearr_32659 = state_32643;
(statearr_32659[(7)] = inst_32620__$1);

return statearr_32659;
})();
var statearr_32660_32685 = state_32643__$1;
(statearr_32660_32685[(2)] = null);

(statearr_32660_32685[(1)] = (2));


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
});})(c__31784__auto__))
;
return ((function (switch__31672__auto__,c__31784__auto__){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_32664 = [null,null,null,null,null,null,null,null];
(statearr_32664[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_32664[(1)] = (1));

return statearr_32664;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_32643){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_32643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e32665){if((e32665 instanceof Object)){
var ex__31676__auto__ = e32665;
var statearr_32666_32686 = state_32643;
(statearr_32666_32686[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32687 = state_32643;
state_32643 = G__32687;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_32643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_32643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__))
})();
var state__31786__auto__ = (function (){var statearr_32667 = f__31785__auto__.call(null);
(statearr_32667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_32667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__))
);

return c__31784__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32913 = (function (ch,cs,meta32914){
this.ch = ch;
this.cs = cs;
this.meta32914 = meta32914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32915,meta32914__$1){
var self__ = this;
var _32915__$1 = this;
return (new cljs.core.async.t_cljs$core$async32913(self__.ch,self__.cs,meta32914__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32915){
var self__ = this;
var _32915__$1 = this;
return self__.meta32914;
});})(cs))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32913.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32914","meta32914",1574714999,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32913";

cljs.core.async.t_cljs$core$async32913.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async32913");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32913 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32913(ch__$1,cs__$1,meta32914){
return (new cljs.core.async.t_cljs$core$async32913(ch__$1,cs__$1,meta32914));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32913(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31784__auto___33138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___33138,cs,m,dchan,dctr,done){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___33138,cs,m,dchan,dctr,done){
return (function (state_33050){
var state_val_33051 = (state_33050[(1)]);
if((state_val_33051 === (7))){
var inst_33046 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33052_33139 = state_33050__$1;
(statearr_33052_33139[(2)] = inst_33046);

(statearr_33052_33139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (20))){
var inst_32949 = (state_33050[(7)]);
var inst_32961 = cljs.core.first.call(null,inst_32949);
var inst_32962 = cljs.core.nth.call(null,inst_32961,(0),null);
var inst_32963 = cljs.core.nth.call(null,inst_32961,(1),null);
var state_33050__$1 = (function (){var statearr_33053 = state_33050;
(statearr_33053[(8)] = inst_32962);

return statearr_33053;
})();
if(cljs.core.truth_(inst_32963)){
var statearr_33054_33140 = state_33050__$1;
(statearr_33054_33140[(1)] = (22));

} else {
var statearr_33055_33141 = state_33050__$1;
(statearr_33055_33141[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (27))){
var inst_32918 = (state_33050[(9)]);
var inst_32993 = (state_33050[(10)]);
var inst_32991 = (state_33050[(11)]);
var inst_32998 = (state_33050[(12)]);
var inst_32998__$1 = cljs.core._nth.call(null,inst_32991,inst_32993);
var inst_32999 = cljs.core.async.put_BANG_.call(null,inst_32998__$1,inst_32918,done);
var state_33050__$1 = (function (){var statearr_33056 = state_33050;
(statearr_33056[(12)] = inst_32998__$1);

return statearr_33056;
})();
if(cljs.core.truth_(inst_32999)){
var statearr_33057_33142 = state_33050__$1;
(statearr_33057_33142[(1)] = (30));

} else {
var statearr_33058_33143 = state_33050__$1;
(statearr_33058_33143[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (1))){
var state_33050__$1 = state_33050;
var statearr_33059_33144 = state_33050__$1;
(statearr_33059_33144[(2)] = null);

(statearr_33059_33144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (24))){
var inst_32949 = (state_33050[(7)]);
var inst_32968 = (state_33050[(2)]);
var inst_32969 = cljs.core.next.call(null,inst_32949);
var inst_32927 = inst_32969;
var inst_32928 = null;
var inst_32929 = (0);
var inst_32930 = (0);
var state_33050__$1 = (function (){var statearr_33060 = state_33050;
(statearr_33060[(13)] = inst_32930);

(statearr_33060[(14)] = inst_32929);

(statearr_33060[(15)] = inst_32928);

(statearr_33060[(16)] = inst_32927);

(statearr_33060[(17)] = inst_32968);

return statearr_33060;
})();
var statearr_33061_33145 = state_33050__$1;
(statearr_33061_33145[(2)] = null);

(statearr_33061_33145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (39))){
var state_33050__$1 = state_33050;
var statearr_33065_33146 = state_33050__$1;
(statearr_33065_33146[(2)] = null);

(statearr_33065_33146[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (4))){
var inst_32918 = (state_33050[(9)]);
var inst_32918__$1 = (state_33050[(2)]);
var inst_32919 = (inst_32918__$1 == null);
var state_33050__$1 = (function (){var statearr_33066 = state_33050;
(statearr_33066[(9)] = inst_32918__$1);

return statearr_33066;
})();
if(cljs.core.truth_(inst_32919)){
var statearr_33067_33147 = state_33050__$1;
(statearr_33067_33147[(1)] = (5));

} else {
var statearr_33068_33148 = state_33050__$1;
(statearr_33068_33148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (15))){
var inst_32930 = (state_33050[(13)]);
var inst_32929 = (state_33050[(14)]);
var inst_32928 = (state_33050[(15)]);
var inst_32927 = (state_33050[(16)]);
var inst_32945 = (state_33050[(2)]);
var inst_32946 = (inst_32930 + (1));
var tmp33062 = inst_32929;
var tmp33063 = inst_32928;
var tmp33064 = inst_32927;
var inst_32927__$1 = tmp33064;
var inst_32928__$1 = tmp33063;
var inst_32929__$1 = tmp33062;
var inst_32930__$1 = inst_32946;
var state_33050__$1 = (function (){var statearr_33069 = state_33050;
(statearr_33069[(13)] = inst_32930__$1);

(statearr_33069[(14)] = inst_32929__$1);

(statearr_33069[(15)] = inst_32928__$1);

(statearr_33069[(16)] = inst_32927__$1);

(statearr_33069[(18)] = inst_32945);

return statearr_33069;
})();
var statearr_33070_33149 = state_33050__$1;
(statearr_33070_33149[(2)] = null);

(statearr_33070_33149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (21))){
var inst_32972 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33074_33150 = state_33050__$1;
(statearr_33074_33150[(2)] = inst_32972);

(statearr_33074_33150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (31))){
var inst_32998 = (state_33050[(12)]);
var inst_33002 = done.call(null,null);
var inst_33003 = cljs.core.async.untap_STAR_.call(null,m,inst_32998);
var state_33050__$1 = (function (){var statearr_33075 = state_33050;
(statearr_33075[(19)] = inst_33002);

return statearr_33075;
})();
var statearr_33076_33151 = state_33050__$1;
(statearr_33076_33151[(2)] = inst_33003);

(statearr_33076_33151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (32))){
var inst_32993 = (state_33050[(10)]);
var inst_32991 = (state_33050[(11)]);
var inst_32992 = (state_33050[(20)]);
var inst_32990 = (state_33050[(21)]);
var inst_33005 = (state_33050[(2)]);
var inst_33006 = (inst_32993 + (1));
var tmp33071 = inst_32991;
var tmp33072 = inst_32992;
var tmp33073 = inst_32990;
var inst_32990__$1 = tmp33073;
var inst_32991__$1 = tmp33071;
var inst_32992__$1 = tmp33072;
var inst_32993__$1 = inst_33006;
var state_33050__$1 = (function (){var statearr_33077 = state_33050;
(statearr_33077[(10)] = inst_32993__$1);

(statearr_33077[(11)] = inst_32991__$1);

(statearr_33077[(22)] = inst_33005);

(statearr_33077[(20)] = inst_32992__$1);

(statearr_33077[(21)] = inst_32990__$1);

return statearr_33077;
})();
var statearr_33078_33152 = state_33050__$1;
(statearr_33078_33152[(2)] = null);

(statearr_33078_33152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (40))){
var inst_33018 = (state_33050[(23)]);
var inst_33022 = done.call(null,null);
var inst_33023 = cljs.core.async.untap_STAR_.call(null,m,inst_33018);
var state_33050__$1 = (function (){var statearr_33079 = state_33050;
(statearr_33079[(24)] = inst_33022);

return statearr_33079;
})();
var statearr_33080_33153 = state_33050__$1;
(statearr_33080_33153[(2)] = inst_33023);

(statearr_33080_33153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (33))){
var inst_33009 = (state_33050[(25)]);
var inst_33011 = cljs.core.chunked_seq_QMARK_.call(null,inst_33009);
var state_33050__$1 = state_33050;
if(inst_33011){
var statearr_33081_33154 = state_33050__$1;
(statearr_33081_33154[(1)] = (36));

} else {
var statearr_33082_33155 = state_33050__$1;
(statearr_33082_33155[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (13))){
var inst_32939 = (state_33050[(26)]);
var inst_32942 = cljs.core.async.close_BANG_.call(null,inst_32939);
var state_33050__$1 = state_33050;
var statearr_33083_33156 = state_33050__$1;
(statearr_33083_33156[(2)] = inst_32942);

(statearr_33083_33156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (22))){
var inst_32962 = (state_33050[(8)]);
var inst_32965 = cljs.core.async.close_BANG_.call(null,inst_32962);
var state_33050__$1 = state_33050;
var statearr_33084_33157 = state_33050__$1;
(statearr_33084_33157[(2)] = inst_32965);

(statearr_33084_33157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (36))){
var inst_33009 = (state_33050[(25)]);
var inst_33013 = cljs.core.chunk_first.call(null,inst_33009);
var inst_33014 = cljs.core.chunk_rest.call(null,inst_33009);
var inst_33015 = cljs.core.count.call(null,inst_33013);
var inst_32990 = inst_33014;
var inst_32991 = inst_33013;
var inst_32992 = inst_33015;
var inst_32993 = (0);
var state_33050__$1 = (function (){var statearr_33085 = state_33050;
(statearr_33085[(10)] = inst_32993);

(statearr_33085[(11)] = inst_32991);

(statearr_33085[(20)] = inst_32992);

(statearr_33085[(21)] = inst_32990);

return statearr_33085;
})();
var statearr_33086_33158 = state_33050__$1;
(statearr_33086_33158[(2)] = null);

(statearr_33086_33158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (41))){
var inst_33009 = (state_33050[(25)]);
var inst_33025 = (state_33050[(2)]);
var inst_33026 = cljs.core.next.call(null,inst_33009);
var inst_32990 = inst_33026;
var inst_32991 = null;
var inst_32992 = (0);
var inst_32993 = (0);
var state_33050__$1 = (function (){var statearr_33087 = state_33050;
(statearr_33087[(27)] = inst_33025);

(statearr_33087[(10)] = inst_32993);

(statearr_33087[(11)] = inst_32991);

(statearr_33087[(20)] = inst_32992);

(statearr_33087[(21)] = inst_32990);

return statearr_33087;
})();
var statearr_33088_33159 = state_33050__$1;
(statearr_33088_33159[(2)] = null);

(statearr_33088_33159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (43))){
var state_33050__$1 = state_33050;
var statearr_33089_33160 = state_33050__$1;
(statearr_33089_33160[(2)] = null);

(statearr_33089_33160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (29))){
var inst_33034 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33090_33161 = state_33050__$1;
(statearr_33090_33161[(2)] = inst_33034);

(statearr_33090_33161[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (44))){
var inst_33043 = (state_33050[(2)]);
var state_33050__$1 = (function (){var statearr_33091 = state_33050;
(statearr_33091[(28)] = inst_33043);

return statearr_33091;
})();
var statearr_33092_33162 = state_33050__$1;
(statearr_33092_33162[(2)] = null);

(statearr_33092_33162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (6))){
var inst_32982 = (state_33050[(29)]);
var inst_32981 = cljs.core.deref.call(null,cs);
var inst_32982__$1 = cljs.core.keys.call(null,inst_32981);
var inst_32983 = cljs.core.count.call(null,inst_32982__$1);
var inst_32984 = cljs.core.reset_BANG_.call(null,dctr,inst_32983);
var inst_32989 = cljs.core.seq.call(null,inst_32982__$1);
var inst_32990 = inst_32989;
var inst_32991 = null;
var inst_32992 = (0);
var inst_32993 = (0);
var state_33050__$1 = (function (){var statearr_33093 = state_33050;
(statearr_33093[(29)] = inst_32982__$1);

(statearr_33093[(10)] = inst_32993);

(statearr_33093[(11)] = inst_32991);

(statearr_33093[(30)] = inst_32984);

(statearr_33093[(20)] = inst_32992);

(statearr_33093[(21)] = inst_32990);

return statearr_33093;
})();
var statearr_33094_33163 = state_33050__$1;
(statearr_33094_33163[(2)] = null);

(statearr_33094_33163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (28))){
var inst_33009 = (state_33050[(25)]);
var inst_32990 = (state_33050[(21)]);
var inst_33009__$1 = cljs.core.seq.call(null,inst_32990);
var state_33050__$1 = (function (){var statearr_33095 = state_33050;
(statearr_33095[(25)] = inst_33009__$1);

return statearr_33095;
})();
if(inst_33009__$1){
var statearr_33096_33164 = state_33050__$1;
(statearr_33096_33164[(1)] = (33));

} else {
var statearr_33097_33165 = state_33050__$1;
(statearr_33097_33165[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (25))){
var inst_32993 = (state_33050[(10)]);
var inst_32992 = (state_33050[(20)]);
var inst_32995 = (inst_32993 < inst_32992);
var inst_32996 = inst_32995;
var state_33050__$1 = state_33050;
if(cljs.core.truth_(inst_32996)){
var statearr_33098_33166 = state_33050__$1;
(statearr_33098_33166[(1)] = (27));

} else {
var statearr_33099_33167 = state_33050__$1;
(statearr_33099_33167[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (34))){
var state_33050__$1 = state_33050;
var statearr_33100_33168 = state_33050__$1;
(statearr_33100_33168[(2)] = null);

(statearr_33100_33168[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (17))){
var state_33050__$1 = state_33050;
var statearr_33101_33169 = state_33050__$1;
(statearr_33101_33169[(2)] = null);

(statearr_33101_33169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (3))){
var inst_33048 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33050__$1,inst_33048);
} else {
if((state_val_33051 === (12))){
var inst_32977 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33102_33170 = state_33050__$1;
(statearr_33102_33170[(2)] = inst_32977);

(statearr_33102_33170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (2))){
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33050__$1,(4),ch);
} else {
if((state_val_33051 === (23))){
var state_33050__$1 = state_33050;
var statearr_33103_33171 = state_33050__$1;
(statearr_33103_33171[(2)] = null);

(statearr_33103_33171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (35))){
var inst_33032 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33104_33172 = state_33050__$1;
(statearr_33104_33172[(2)] = inst_33032);

(statearr_33104_33172[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (19))){
var inst_32949 = (state_33050[(7)]);
var inst_32953 = cljs.core.chunk_first.call(null,inst_32949);
var inst_32954 = cljs.core.chunk_rest.call(null,inst_32949);
var inst_32955 = cljs.core.count.call(null,inst_32953);
var inst_32927 = inst_32954;
var inst_32928 = inst_32953;
var inst_32929 = inst_32955;
var inst_32930 = (0);
var state_33050__$1 = (function (){var statearr_33105 = state_33050;
(statearr_33105[(13)] = inst_32930);

(statearr_33105[(14)] = inst_32929);

(statearr_33105[(15)] = inst_32928);

(statearr_33105[(16)] = inst_32927);

return statearr_33105;
})();
var statearr_33106_33173 = state_33050__$1;
(statearr_33106_33173[(2)] = null);

(statearr_33106_33173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (11))){
var inst_32949 = (state_33050[(7)]);
var inst_32927 = (state_33050[(16)]);
var inst_32949__$1 = cljs.core.seq.call(null,inst_32927);
var state_33050__$1 = (function (){var statearr_33107 = state_33050;
(statearr_33107[(7)] = inst_32949__$1);

return statearr_33107;
})();
if(inst_32949__$1){
var statearr_33108_33174 = state_33050__$1;
(statearr_33108_33174[(1)] = (16));

} else {
var statearr_33109_33175 = state_33050__$1;
(statearr_33109_33175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (9))){
var inst_32979 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33110_33176 = state_33050__$1;
(statearr_33110_33176[(2)] = inst_32979);

(statearr_33110_33176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (5))){
var inst_32925 = cljs.core.deref.call(null,cs);
var inst_32926 = cljs.core.seq.call(null,inst_32925);
var inst_32927 = inst_32926;
var inst_32928 = null;
var inst_32929 = (0);
var inst_32930 = (0);
var state_33050__$1 = (function (){var statearr_33111 = state_33050;
(statearr_33111[(13)] = inst_32930);

(statearr_33111[(14)] = inst_32929);

(statearr_33111[(15)] = inst_32928);

(statearr_33111[(16)] = inst_32927);

return statearr_33111;
})();
var statearr_33112_33177 = state_33050__$1;
(statearr_33112_33177[(2)] = null);

(statearr_33112_33177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (14))){
var state_33050__$1 = state_33050;
var statearr_33113_33178 = state_33050__$1;
(statearr_33113_33178[(2)] = null);

(statearr_33113_33178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (45))){
var inst_33040 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33114_33179 = state_33050__$1;
(statearr_33114_33179[(2)] = inst_33040);

(statearr_33114_33179[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (26))){
var inst_32982 = (state_33050[(29)]);
var inst_33036 = (state_33050[(2)]);
var inst_33037 = cljs.core.seq.call(null,inst_32982);
var state_33050__$1 = (function (){var statearr_33115 = state_33050;
(statearr_33115[(31)] = inst_33036);

return statearr_33115;
})();
if(inst_33037){
var statearr_33116_33180 = state_33050__$1;
(statearr_33116_33180[(1)] = (42));

} else {
var statearr_33117_33181 = state_33050__$1;
(statearr_33117_33181[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (16))){
var inst_32949 = (state_33050[(7)]);
var inst_32951 = cljs.core.chunked_seq_QMARK_.call(null,inst_32949);
var state_33050__$1 = state_33050;
if(inst_32951){
var statearr_33118_33182 = state_33050__$1;
(statearr_33118_33182[(1)] = (19));

} else {
var statearr_33119_33183 = state_33050__$1;
(statearr_33119_33183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (38))){
var inst_33029 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33120_33184 = state_33050__$1;
(statearr_33120_33184[(2)] = inst_33029);

(statearr_33120_33184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (30))){
var state_33050__$1 = state_33050;
var statearr_33121_33185 = state_33050__$1;
(statearr_33121_33185[(2)] = null);

(statearr_33121_33185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (10))){
var inst_32930 = (state_33050[(13)]);
var inst_32928 = (state_33050[(15)]);
var inst_32938 = cljs.core._nth.call(null,inst_32928,inst_32930);
var inst_32939 = cljs.core.nth.call(null,inst_32938,(0),null);
var inst_32940 = cljs.core.nth.call(null,inst_32938,(1),null);
var state_33050__$1 = (function (){var statearr_33122 = state_33050;
(statearr_33122[(26)] = inst_32939);

return statearr_33122;
})();
if(cljs.core.truth_(inst_32940)){
var statearr_33123_33186 = state_33050__$1;
(statearr_33123_33186[(1)] = (13));

} else {
var statearr_33124_33187 = state_33050__$1;
(statearr_33124_33187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (18))){
var inst_32975 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33125_33188 = state_33050__$1;
(statearr_33125_33188[(2)] = inst_32975);

(statearr_33125_33188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (42))){
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33050__$1,(45),dchan);
} else {
if((state_val_33051 === (37))){
var inst_32918 = (state_33050[(9)]);
var inst_33009 = (state_33050[(25)]);
var inst_33018 = (state_33050[(23)]);
var inst_33018__$1 = cljs.core.first.call(null,inst_33009);
var inst_33019 = cljs.core.async.put_BANG_.call(null,inst_33018__$1,inst_32918,done);
var state_33050__$1 = (function (){var statearr_33126 = state_33050;
(statearr_33126[(23)] = inst_33018__$1);

return statearr_33126;
})();
if(cljs.core.truth_(inst_33019)){
var statearr_33127_33189 = state_33050__$1;
(statearr_33127_33189[(1)] = (39));

} else {
var statearr_33128_33190 = state_33050__$1;
(statearr_33128_33190[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (8))){
var inst_32930 = (state_33050[(13)]);
var inst_32929 = (state_33050[(14)]);
var inst_32932 = (inst_32930 < inst_32929);
var inst_32933 = inst_32932;
var state_33050__$1 = state_33050;
if(cljs.core.truth_(inst_32933)){
var statearr_33129_33191 = state_33050__$1;
(statearr_33129_33191[(1)] = (10));

} else {
var statearr_33130_33192 = state_33050__$1;
(statearr_33130_33192[(1)] = (11));

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
});})(c__31784__auto___33138,cs,m,dchan,dctr,done))
;
return ((function (switch__31672__auto__,c__31784__auto___33138,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31673__auto__ = null;
var cljs$core$async$mult_$_state_machine__31673__auto____0 = (function (){
var statearr_33134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33134[(0)] = cljs$core$async$mult_$_state_machine__31673__auto__);

(statearr_33134[(1)] = (1));

return statearr_33134;
});
var cljs$core$async$mult_$_state_machine__31673__auto____1 = (function (state_33050){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_33050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e33135){if((e33135 instanceof Object)){
var ex__31676__auto__ = e33135;
var statearr_33136_33193 = state_33050;
(statearr_33136_33193[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33194 = state_33050;
state_33050 = G__33194;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31673__auto__ = function(state_33050){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31673__auto____1.call(this,state_33050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31673__auto____0;
cljs$core$async$mult_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31673__auto____1;
return cljs$core$async$mult_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___33138,cs,m,dchan,dctr,done))
})();
var state__31786__auto__ = (function (){var statearr_33137 = f__31785__auto__.call(null);
(statearr_33137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___33138);

return statearr_33137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___33138,cs,m,dchan,dctr,done))
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
var args33195 = [];
var len__27557__auto___33198 = arguments.length;
var i__27558__auto___33199 = (0);
while(true){
if((i__27558__auto___33199 < len__27557__auto___33198)){
args33195.push((arguments[i__27558__auto___33199]));

var G__33200 = (i__27558__auto___33199 + (1));
i__27558__auto___33199 = G__33200;
continue;
} else {
}
break;
}

var G__33197 = args33195.length;
switch (G__33197) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33195.length)].join('')));

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
var len__27557__auto___33212 = arguments.length;
var i__27558__auto___33213 = (0);
while(true){
if((i__27558__auto___33213 < len__27557__auto___33212)){
args__27564__auto__.push((arguments[i__27558__auto___33213]));

var G__33214 = (i__27558__auto___33213 + (1));
i__27558__auto___33213 = G__33214;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((3) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27565__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33206){
var map__33207 = p__33206;
var map__33207__$1 = ((((!((map__33207 == null)))?((((map__33207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33207):map__33207);
var opts = map__33207__$1;
var statearr_33209_33215 = state;
(statearr_33209_33215[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33207,map__33207__$1,opts){
return (function (val){
var statearr_33210_33216 = state;
(statearr_33210_33216[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33207,map__33207__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33211_33217 = state;
(statearr_33211_33217[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33202){
var G__33203 = cljs.core.first.call(null,seq33202);
var seq33202__$1 = cljs.core.next.call(null,seq33202);
var G__33204 = cljs.core.first.call(null,seq33202__$1);
var seq33202__$2 = cljs.core.next.call(null,seq33202__$1);
var G__33205 = cljs.core.first.call(null,seq33202__$2);
var seq33202__$3 = cljs.core.next.call(null,seq33202__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33203,G__33204,G__33205,seq33202__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33385 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33386){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33386 = meta33386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33387,meta33386__$1){
var self__ = this;
var _33387__$1 = this;
return (new cljs.core.async.t_cljs$core$async33385(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33386__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33387){
var self__ = this;
var _33387__$1 = this;
return self__.meta33386;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33385.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33386","meta33386",1987997787,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33385";

cljs.core.async.t_cljs$core$async33385.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async33385");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33385 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33385(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33386){
return (new cljs.core.async.t_cljs$core$async33385(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33386));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33385(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31784__auto___33552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___33552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___33552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33489){
var state_val_33490 = (state_33489[(1)]);
if((state_val_33490 === (7))){
var inst_33404 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33491_33553 = state_33489__$1;
(statearr_33491_33553[(2)] = inst_33404);

(statearr_33491_33553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (20))){
var inst_33416 = (state_33489[(7)]);
var state_33489__$1 = state_33489;
var statearr_33492_33554 = state_33489__$1;
(statearr_33492_33554[(2)] = inst_33416);

(statearr_33492_33554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (27))){
var state_33489__$1 = state_33489;
var statearr_33493_33555 = state_33489__$1;
(statearr_33493_33555[(2)] = null);

(statearr_33493_33555[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (1))){
var inst_33391 = (state_33489[(8)]);
var inst_33391__$1 = calc_state.call(null);
var inst_33393 = (inst_33391__$1 == null);
var inst_33394 = cljs.core.not.call(null,inst_33393);
var state_33489__$1 = (function (){var statearr_33494 = state_33489;
(statearr_33494[(8)] = inst_33391__$1);

return statearr_33494;
})();
if(inst_33394){
var statearr_33495_33556 = state_33489__$1;
(statearr_33495_33556[(1)] = (2));

} else {
var statearr_33496_33557 = state_33489__$1;
(statearr_33496_33557[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (24))){
var inst_33449 = (state_33489[(9)]);
var inst_33463 = (state_33489[(10)]);
var inst_33440 = (state_33489[(11)]);
var inst_33463__$1 = inst_33440.call(null,inst_33449);
var state_33489__$1 = (function (){var statearr_33497 = state_33489;
(statearr_33497[(10)] = inst_33463__$1);

return statearr_33497;
})();
if(cljs.core.truth_(inst_33463__$1)){
var statearr_33498_33558 = state_33489__$1;
(statearr_33498_33558[(1)] = (29));

} else {
var statearr_33499_33559 = state_33489__$1;
(statearr_33499_33559[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (4))){
var inst_33407 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33407)){
var statearr_33500_33560 = state_33489__$1;
(statearr_33500_33560[(1)] = (8));

} else {
var statearr_33501_33561 = state_33489__$1;
(statearr_33501_33561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (15))){
var inst_33434 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33434)){
var statearr_33502_33562 = state_33489__$1;
(statearr_33502_33562[(1)] = (19));

} else {
var statearr_33503_33563 = state_33489__$1;
(statearr_33503_33563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (21))){
var inst_33439 = (state_33489[(12)]);
var inst_33439__$1 = (state_33489[(2)]);
var inst_33440 = cljs.core.get.call(null,inst_33439__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33441 = cljs.core.get.call(null,inst_33439__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33442 = cljs.core.get.call(null,inst_33439__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33489__$1 = (function (){var statearr_33504 = state_33489;
(statearr_33504[(12)] = inst_33439__$1);

(statearr_33504[(13)] = inst_33441);

(statearr_33504[(11)] = inst_33440);

return statearr_33504;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33489__$1,(22),inst_33442);
} else {
if((state_val_33490 === (31))){
var inst_33471 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33471)){
var statearr_33505_33564 = state_33489__$1;
(statearr_33505_33564[(1)] = (32));

} else {
var statearr_33506_33565 = state_33489__$1;
(statearr_33506_33565[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (32))){
var inst_33448 = (state_33489[(14)]);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33489__$1,(35),out,inst_33448);
} else {
if((state_val_33490 === (33))){
var inst_33439 = (state_33489[(12)]);
var inst_33416 = inst_33439;
var state_33489__$1 = (function (){var statearr_33507 = state_33489;
(statearr_33507[(7)] = inst_33416);

return statearr_33507;
})();
var statearr_33508_33566 = state_33489__$1;
(statearr_33508_33566[(2)] = null);

(statearr_33508_33566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (13))){
var inst_33416 = (state_33489[(7)]);
var inst_33423 = inst_33416.cljs$lang$protocol_mask$partition0$;
var inst_33424 = (inst_33423 & (64));
var inst_33425 = inst_33416.cljs$core$ISeq$;
var inst_33426 = (cljs.core.PROTOCOL_SENTINEL === inst_33425);
var inst_33427 = (inst_33424) || (inst_33426);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33427)){
var statearr_33509_33567 = state_33489__$1;
(statearr_33509_33567[(1)] = (16));

} else {
var statearr_33510_33568 = state_33489__$1;
(statearr_33510_33568[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (22))){
var inst_33449 = (state_33489[(9)]);
var inst_33448 = (state_33489[(14)]);
var inst_33447 = (state_33489[(2)]);
var inst_33448__$1 = cljs.core.nth.call(null,inst_33447,(0),null);
var inst_33449__$1 = cljs.core.nth.call(null,inst_33447,(1),null);
var inst_33450 = (inst_33448__$1 == null);
var inst_33451 = cljs.core._EQ_.call(null,inst_33449__$1,change);
var inst_33452 = (inst_33450) || (inst_33451);
var state_33489__$1 = (function (){var statearr_33511 = state_33489;
(statearr_33511[(9)] = inst_33449__$1);

(statearr_33511[(14)] = inst_33448__$1);

return statearr_33511;
})();
if(cljs.core.truth_(inst_33452)){
var statearr_33512_33569 = state_33489__$1;
(statearr_33512_33569[(1)] = (23));

} else {
var statearr_33513_33570 = state_33489__$1;
(statearr_33513_33570[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (36))){
var inst_33439 = (state_33489[(12)]);
var inst_33416 = inst_33439;
var state_33489__$1 = (function (){var statearr_33514 = state_33489;
(statearr_33514[(7)] = inst_33416);

return statearr_33514;
})();
var statearr_33515_33571 = state_33489__$1;
(statearr_33515_33571[(2)] = null);

(statearr_33515_33571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (29))){
var inst_33463 = (state_33489[(10)]);
var state_33489__$1 = state_33489;
var statearr_33516_33572 = state_33489__$1;
(statearr_33516_33572[(2)] = inst_33463);

(statearr_33516_33572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (6))){
var state_33489__$1 = state_33489;
var statearr_33517_33573 = state_33489__$1;
(statearr_33517_33573[(2)] = false);

(statearr_33517_33573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (28))){
var inst_33459 = (state_33489[(2)]);
var inst_33460 = calc_state.call(null);
var inst_33416 = inst_33460;
var state_33489__$1 = (function (){var statearr_33518 = state_33489;
(statearr_33518[(15)] = inst_33459);

(statearr_33518[(7)] = inst_33416);

return statearr_33518;
})();
var statearr_33519_33574 = state_33489__$1;
(statearr_33519_33574[(2)] = null);

(statearr_33519_33574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (25))){
var inst_33485 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33520_33575 = state_33489__$1;
(statearr_33520_33575[(2)] = inst_33485);

(statearr_33520_33575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (34))){
var inst_33483 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33521_33576 = state_33489__$1;
(statearr_33521_33576[(2)] = inst_33483);

(statearr_33521_33576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (17))){
var state_33489__$1 = state_33489;
var statearr_33522_33577 = state_33489__$1;
(statearr_33522_33577[(2)] = false);

(statearr_33522_33577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (3))){
var state_33489__$1 = state_33489;
var statearr_33523_33578 = state_33489__$1;
(statearr_33523_33578[(2)] = false);

(statearr_33523_33578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (12))){
var inst_33487 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33489__$1,inst_33487);
} else {
if((state_val_33490 === (2))){
var inst_33391 = (state_33489[(8)]);
var inst_33396 = inst_33391.cljs$lang$protocol_mask$partition0$;
var inst_33397 = (inst_33396 & (64));
var inst_33398 = inst_33391.cljs$core$ISeq$;
var inst_33399 = (cljs.core.PROTOCOL_SENTINEL === inst_33398);
var inst_33400 = (inst_33397) || (inst_33399);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33400)){
var statearr_33524_33579 = state_33489__$1;
(statearr_33524_33579[(1)] = (5));

} else {
var statearr_33525_33580 = state_33489__$1;
(statearr_33525_33580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (23))){
var inst_33448 = (state_33489[(14)]);
var inst_33454 = (inst_33448 == null);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33454)){
var statearr_33526_33581 = state_33489__$1;
(statearr_33526_33581[(1)] = (26));

} else {
var statearr_33527_33582 = state_33489__$1;
(statearr_33527_33582[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (35))){
var inst_33474 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33474)){
var statearr_33528_33583 = state_33489__$1;
(statearr_33528_33583[(1)] = (36));

} else {
var statearr_33529_33584 = state_33489__$1;
(statearr_33529_33584[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (19))){
var inst_33416 = (state_33489[(7)]);
var inst_33436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33416);
var state_33489__$1 = state_33489;
var statearr_33530_33585 = state_33489__$1;
(statearr_33530_33585[(2)] = inst_33436);

(statearr_33530_33585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (11))){
var inst_33416 = (state_33489[(7)]);
var inst_33420 = (inst_33416 == null);
var inst_33421 = cljs.core.not.call(null,inst_33420);
var state_33489__$1 = state_33489;
if(inst_33421){
var statearr_33531_33586 = state_33489__$1;
(statearr_33531_33586[(1)] = (13));

} else {
var statearr_33532_33587 = state_33489__$1;
(statearr_33532_33587[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (9))){
var inst_33391 = (state_33489[(8)]);
var state_33489__$1 = state_33489;
var statearr_33533_33588 = state_33489__$1;
(statearr_33533_33588[(2)] = inst_33391);

(statearr_33533_33588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (5))){
var state_33489__$1 = state_33489;
var statearr_33534_33589 = state_33489__$1;
(statearr_33534_33589[(2)] = true);

(statearr_33534_33589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (14))){
var state_33489__$1 = state_33489;
var statearr_33535_33590 = state_33489__$1;
(statearr_33535_33590[(2)] = false);

(statearr_33535_33590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (26))){
var inst_33449 = (state_33489[(9)]);
var inst_33456 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33449);
var state_33489__$1 = state_33489;
var statearr_33536_33591 = state_33489__$1;
(statearr_33536_33591[(2)] = inst_33456);

(statearr_33536_33591[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (16))){
var state_33489__$1 = state_33489;
var statearr_33537_33592 = state_33489__$1;
(statearr_33537_33592[(2)] = true);

(statearr_33537_33592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (38))){
var inst_33479 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33538_33593 = state_33489__$1;
(statearr_33538_33593[(2)] = inst_33479);

(statearr_33538_33593[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (30))){
var inst_33449 = (state_33489[(9)]);
var inst_33441 = (state_33489[(13)]);
var inst_33440 = (state_33489[(11)]);
var inst_33466 = cljs.core.empty_QMARK_.call(null,inst_33440);
var inst_33467 = inst_33441.call(null,inst_33449);
var inst_33468 = cljs.core.not.call(null,inst_33467);
var inst_33469 = (inst_33466) && (inst_33468);
var state_33489__$1 = state_33489;
var statearr_33539_33594 = state_33489__$1;
(statearr_33539_33594[(2)] = inst_33469);

(statearr_33539_33594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (10))){
var inst_33391 = (state_33489[(8)]);
var inst_33412 = (state_33489[(2)]);
var inst_33413 = cljs.core.get.call(null,inst_33412,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33414 = cljs.core.get.call(null,inst_33412,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33415 = cljs.core.get.call(null,inst_33412,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33416 = inst_33391;
var state_33489__$1 = (function (){var statearr_33540 = state_33489;
(statearr_33540[(16)] = inst_33413);

(statearr_33540[(17)] = inst_33414);

(statearr_33540[(7)] = inst_33416);

(statearr_33540[(18)] = inst_33415);

return statearr_33540;
})();
var statearr_33541_33595 = state_33489__$1;
(statearr_33541_33595[(2)] = null);

(statearr_33541_33595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (18))){
var inst_33431 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33542_33596 = state_33489__$1;
(statearr_33542_33596[(2)] = inst_33431);

(statearr_33542_33596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (37))){
var state_33489__$1 = state_33489;
var statearr_33543_33597 = state_33489__$1;
(statearr_33543_33597[(2)] = null);

(statearr_33543_33597[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (8))){
var inst_33391 = (state_33489[(8)]);
var inst_33409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33391);
var state_33489__$1 = state_33489;
var statearr_33544_33598 = state_33489__$1;
(statearr_33544_33598[(2)] = inst_33409);

(statearr_33544_33598[(1)] = (10));


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
});})(c__31784__auto___33552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31672__auto__,c__31784__auto___33552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31673__auto__ = null;
var cljs$core$async$mix_$_state_machine__31673__auto____0 = (function (){
var statearr_33548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33548[(0)] = cljs$core$async$mix_$_state_machine__31673__auto__);

(statearr_33548[(1)] = (1));

return statearr_33548;
});
var cljs$core$async$mix_$_state_machine__31673__auto____1 = (function (state_33489){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_33489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e33549){if((e33549 instanceof Object)){
var ex__31676__auto__ = e33549;
var statearr_33550_33599 = state_33489;
(statearr_33550_33599[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33600 = state_33489;
state_33489 = G__33600;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31673__auto__ = function(state_33489){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31673__auto____1.call(this,state_33489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31673__auto____0;
cljs$core$async$mix_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31673__auto____1;
return cljs$core$async$mix_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___33552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31786__auto__ = (function (){var statearr_33551 = f__31785__auto__.call(null);
(statearr_33551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___33552);

return statearr_33551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___33552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args33601 = [];
var len__27557__auto___33604 = arguments.length;
var i__27558__auto___33605 = (0);
while(true){
if((i__27558__auto___33605 < len__27557__auto___33604)){
args33601.push((arguments[i__27558__auto___33605]));

var G__33606 = (i__27558__auto___33605 + (1));
i__27558__auto___33605 = G__33606;
continue;
} else {
}
break;
}

var G__33603 = args33601.length;
switch (G__33603) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33601.length)].join('')));

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
var args33609 = [];
var len__27557__auto___33734 = arguments.length;
var i__27558__auto___33735 = (0);
while(true){
if((i__27558__auto___33735 < len__27557__auto___33734)){
args33609.push((arguments[i__27558__auto___33735]));

var G__33736 = (i__27558__auto___33735 + (1));
i__27558__auto___33735 = G__33736;
continue;
} else {
}
break;
}

var G__33611 = args33609.length;
switch (G__33611) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33609.length)].join('')));

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
return (function (p1__33608_SHARP_){
if(cljs.core.truth_(p1__33608_SHARP_.call(null,topic))){
return p1__33608_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33608_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26444__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33612 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33613){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33613 = meta33613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33614,meta33613__$1){
var self__ = this;
var _33614__$1 = this;
return (new cljs.core.async.t_cljs$core$async33612(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33613__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33614){
var self__ = this;
var _33614__$1 = this;
return self__.meta33613;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33612.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33613","meta33613",-1189378806,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33612";

cljs.core.async.t_cljs$core$async33612.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async33612");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33612 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33612(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33613){
return (new cljs.core.async.t_cljs$core$async33612(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33613));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33612(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31784__auto___33738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___33738,mults,ensure_mult,p){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___33738,mults,ensure_mult,p){
return (function (state_33686){
var state_val_33687 = (state_33686[(1)]);
if((state_val_33687 === (7))){
var inst_33682 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33688_33739 = state_33686__$1;
(statearr_33688_33739[(2)] = inst_33682);

(statearr_33688_33739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (20))){
var state_33686__$1 = state_33686;
var statearr_33689_33740 = state_33686__$1;
(statearr_33689_33740[(2)] = null);

(statearr_33689_33740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (1))){
var state_33686__$1 = state_33686;
var statearr_33690_33741 = state_33686__$1;
(statearr_33690_33741[(2)] = null);

(statearr_33690_33741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (24))){
var inst_33665 = (state_33686[(7)]);
var inst_33674 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33665);
var state_33686__$1 = state_33686;
var statearr_33691_33742 = state_33686__$1;
(statearr_33691_33742[(2)] = inst_33674);

(statearr_33691_33742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (4))){
var inst_33617 = (state_33686[(8)]);
var inst_33617__$1 = (state_33686[(2)]);
var inst_33618 = (inst_33617__$1 == null);
var state_33686__$1 = (function (){var statearr_33692 = state_33686;
(statearr_33692[(8)] = inst_33617__$1);

return statearr_33692;
})();
if(cljs.core.truth_(inst_33618)){
var statearr_33693_33743 = state_33686__$1;
(statearr_33693_33743[(1)] = (5));

} else {
var statearr_33694_33744 = state_33686__$1;
(statearr_33694_33744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (15))){
var inst_33659 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33695_33745 = state_33686__$1;
(statearr_33695_33745[(2)] = inst_33659);

(statearr_33695_33745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (21))){
var inst_33679 = (state_33686[(2)]);
var state_33686__$1 = (function (){var statearr_33696 = state_33686;
(statearr_33696[(9)] = inst_33679);

return statearr_33696;
})();
var statearr_33697_33746 = state_33686__$1;
(statearr_33697_33746[(2)] = null);

(statearr_33697_33746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (13))){
var inst_33641 = (state_33686[(10)]);
var inst_33643 = cljs.core.chunked_seq_QMARK_.call(null,inst_33641);
var state_33686__$1 = state_33686;
if(inst_33643){
var statearr_33698_33747 = state_33686__$1;
(statearr_33698_33747[(1)] = (16));

} else {
var statearr_33699_33748 = state_33686__$1;
(statearr_33699_33748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (22))){
var inst_33671 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
if(cljs.core.truth_(inst_33671)){
var statearr_33700_33749 = state_33686__$1;
(statearr_33700_33749[(1)] = (23));

} else {
var statearr_33701_33750 = state_33686__$1;
(statearr_33701_33750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (6))){
var inst_33667 = (state_33686[(11)]);
var inst_33665 = (state_33686[(7)]);
var inst_33617 = (state_33686[(8)]);
var inst_33665__$1 = topic_fn.call(null,inst_33617);
var inst_33666 = cljs.core.deref.call(null,mults);
var inst_33667__$1 = cljs.core.get.call(null,inst_33666,inst_33665__$1);
var state_33686__$1 = (function (){var statearr_33702 = state_33686;
(statearr_33702[(11)] = inst_33667__$1);

(statearr_33702[(7)] = inst_33665__$1);

return statearr_33702;
})();
if(cljs.core.truth_(inst_33667__$1)){
var statearr_33703_33751 = state_33686__$1;
(statearr_33703_33751[(1)] = (19));

} else {
var statearr_33704_33752 = state_33686__$1;
(statearr_33704_33752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (25))){
var inst_33676 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33705_33753 = state_33686__$1;
(statearr_33705_33753[(2)] = inst_33676);

(statearr_33705_33753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (17))){
var inst_33641 = (state_33686[(10)]);
var inst_33650 = cljs.core.first.call(null,inst_33641);
var inst_33651 = cljs.core.async.muxch_STAR_.call(null,inst_33650);
var inst_33652 = cljs.core.async.close_BANG_.call(null,inst_33651);
var inst_33653 = cljs.core.next.call(null,inst_33641);
var inst_33627 = inst_33653;
var inst_33628 = null;
var inst_33629 = (0);
var inst_33630 = (0);
var state_33686__$1 = (function (){var statearr_33706 = state_33686;
(statearr_33706[(12)] = inst_33627);

(statearr_33706[(13)] = inst_33629);

(statearr_33706[(14)] = inst_33652);

(statearr_33706[(15)] = inst_33628);

(statearr_33706[(16)] = inst_33630);

return statearr_33706;
})();
var statearr_33707_33754 = state_33686__$1;
(statearr_33707_33754[(2)] = null);

(statearr_33707_33754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (3))){
var inst_33684 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33686__$1,inst_33684);
} else {
if((state_val_33687 === (12))){
var inst_33661 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33708_33755 = state_33686__$1;
(statearr_33708_33755[(2)] = inst_33661);

(statearr_33708_33755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (2))){
var state_33686__$1 = state_33686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33686__$1,(4),ch);
} else {
if((state_val_33687 === (23))){
var state_33686__$1 = state_33686;
var statearr_33709_33756 = state_33686__$1;
(statearr_33709_33756[(2)] = null);

(statearr_33709_33756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (19))){
var inst_33667 = (state_33686[(11)]);
var inst_33617 = (state_33686[(8)]);
var inst_33669 = cljs.core.async.muxch_STAR_.call(null,inst_33667);
var state_33686__$1 = state_33686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33686__$1,(22),inst_33669,inst_33617);
} else {
if((state_val_33687 === (11))){
var inst_33627 = (state_33686[(12)]);
var inst_33641 = (state_33686[(10)]);
var inst_33641__$1 = cljs.core.seq.call(null,inst_33627);
var state_33686__$1 = (function (){var statearr_33710 = state_33686;
(statearr_33710[(10)] = inst_33641__$1);

return statearr_33710;
})();
if(inst_33641__$1){
var statearr_33711_33757 = state_33686__$1;
(statearr_33711_33757[(1)] = (13));

} else {
var statearr_33712_33758 = state_33686__$1;
(statearr_33712_33758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (9))){
var inst_33663 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33713_33759 = state_33686__$1;
(statearr_33713_33759[(2)] = inst_33663);

(statearr_33713_33759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (5))){
var inst_33624 = cljs.core.deref.call(null,mults);
var inst_33625 = cljs.core.vals.call(null,inst_33624);
var inst_33626 = cljs.core.seq.call(null,inst_33625);
var inst_33627 = inst_33626;
var inst_33628 = null;
var inst_33629 = (0);
var inst_33630 = (0);
var state_33686__$1 = (function (){var statearr_33714 = state_33686;
(statearr_33714[(12)] = inst_33627);

(statearr_33714[(13)] = inst_33629);

(statearr_33714[(15)] = inst_33628);

(statearr_33714[(16)] = inst_33630);

return statearr_33714;
})();
var statearr_33715_33760 = state_33686__$1;
(statearr_33715_33760[(2)] = null);

(statearr_33715_33760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (14))){
var state_33686__$1 = state_33686;
var statearr_33719_33761 = state_33686__$1;
(statearr_33719_33761[(2)] = null);

(statearr_33719_33761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (16))){
var inst_33641 = (state_33686[(10)]);
var inst_33645 = cljs.core.chunk_first.call(null,inst_33641);
var inst_33646 = cljs.core.chunk_rest.call(null,inst_33641);
var inst_33647 = cljs.core.count.call(null,inst_33645);
var inst_33627 = inst_33646;
var inst_33628 = inst_33645;
var inst_33629 = inst_33647;
var inst_33630 = (0);
var state_33686__$1 = (function (){var statearr_33720 = state_33686;
(statearr_33720[(12)] = inst_33627);

(statearr_33720[(13)] = inst_33629);

(statearr_33720[(15)] = inst_33628);

(statearr_33720[(16)] = inst_33630);

return statearr_33720;
})();
var statearr_33721_33762 = state_33686__$1;
(statearr_33721_33762[(2)] = null);

(statearr_33721_33762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (10))){
var inst_33627 = (state_33686[(12)]);
var inst_33629 = (state_33686[(13)]);
var inst_33628 = (state_33686[(15)]);
var inst_33630 = (state_33686[(16)]);
var inst_33635 = cljs.core._nth.call(null,inst_33628,inst_33630);
var inst_33636 = cljs.core.async.muxch_STAR_.call(null,inst_33635);
var inst_33637 = cljs.core.async.close_BANG_.call(null,inst_33636);
var inst_33638 = (inst_33630 + (1));
var tmp33716 = inst_33627;
var tmp33717 = inst_33629;
var tmp33718 = inst_33628;
var inst_33627__$1 = tmp33716;
var inst_33628__$1 = tmp33718;
var inst_33629__$1 = tmp33717;
var inst_33630__$1 = inst_33638;
var state_33686__$1 = (function (){var statearr_33722 = state_33686;
(statearr_33722[(12)] = inst_33627__$1);

(statearr_33722[(13)] = inst_33629__$1);

(statearr_33722[(17)] = inst_33637);

(statearr_33722[(15)] = inst_33628__$1);

(statearr_33722[(16)] = inst_33630__$1);

return statearr_33722;
})();
var statearr_33723_33763 = state_33686__$1;
(statearr_33723_33763[(2)] = null);

(statearr_33723_33763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (18))){
var inst_33656 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33724_33764 = state_33686__$1;
(statearr_33724_33764[(2)] = inst_33656);

(statearr_33724_33764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33687 === (8))){
var inst_33629 = (state_33686[(13)]);
var inst_33630 = (state_33686[(16)]);
var inst_33632 = (inst_33630 < inst_33629);
var inst_33633 = inst_33632;
var state_33686__$1 = state_33686;
if(cljs.core.truth_(inst_33633)){
var statearr_33725_33765 = state_33686__$1;
(statearr_33725_33765[(1)] = (10));

} else {
var statearr_33726_33766 = state_33686__$1;
(statearr_33726_33766[(1)] = (11));

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
});})(c__31784__auto___33738,mults,ensure_mult,p))
;
return ((function (switch__31672__auto__,c__31784__auto___33738,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_33730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33730[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_33730[(1)] = (1));

return statearr_33730;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_33686){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_33686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e33731){if((e33731 instanceof Object)){
var ex__31676__auto__ = e33731;
var statearr_33732_33767 = state_33686;
(statearr_33732_33767[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33768 = state_33686;
state_33686 = G__33768;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_33686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_33686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___33738,mults,ensure_mult,p))
})();
var state__31786__auto__ = (function (){var statearr_33733 = f__31785__auto__.call(null);
(statearr_33733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___33738);

return statearr_33733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___33738,mults,ensure_mult,p))
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
var args33769 = [];
var len__27557__auto___33772 = arguments.length;
var i__27558__auto___33773 = (0);
while(true){
if((i__27558__auto___33773 < len__27557__auto___33772)){
args33769.push((arguments[i__27558__auto___33773]));

var G__33774 = (i__27558__auto___33773 + (1));
i__27558__auto___33773 = G__33774;
continue;
} else {
}
break;
}

var G__33771 = args33769.length;
switch (G__33771) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33769.length)].join('')));

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
var args33776 = [];
var len__27557__auto___33779 = arguments.length;
var i__27558__auto___33780 = (0);
while(true){
if((i__27558__auto___33780 < len__27557__auto___33779)){
args33776.push((arguments[i__27558__auto___33780]));

var G__33781 = (i__27558__auto___33780 + (1));
i__27558__auto___33780 = G__33781;
continue;
} else {
}
break;
}

var G__33778 = args33776.length;
switch (G__33778) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33776.length)].join('')));

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
var args33783 = [];
var len__27557__auto___33854 = arguments.length;
var i__27558__auto___33855 = (0);
while(true){
if((i__27558__auto___33855 < len__27557__auto___33854)){
args33783.push((arguments[i__27558__auto___33855]));

var G__33856 = (i__27558__auto___33855 + (1));
i__27558__auto___33855 = G__33856;
continue;
} else {
}
break;
}

var G__33785 = args33783.length;
switch (G__33785) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33783.length)].join('')));

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
var c__31784__auto___33858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___33858,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___33858,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33824){
var state_val_33825 = (state_33824[(1)]);
if((state_val_33825 === (7))){
var state_33824__$1 = state_33824;
var statearr_33826_33859 = state_33824__$1;
(statearr_33826_33859[(2)] = null);

(statearr_33826_33859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (1))){
var state_33824__$1 = state_33824;
var statearr_33827_33860 = state_33824__$1;
(statearr_33827_33860[(2)] = null);

(statearr_33827_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (4))){
var inst_33788 = (state_33824[(7)]);
var inst_33790 = (inst_33788 < cnt);
var state_33824__$1 = state_33824;
if(cljs.core.truth_(inst_33790)){
var statearr_33828_33861 = state_33824__$1;
(statearr_33828_33861[(1)] = (6));

} else {
var statearr_33829_33862 = state_33824__$1;
(statearr_33829_33862[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (15))){
var inst_33820 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
var statearr_33830_33863 = state_33824__$1;
(statearr_33830_33863[(2)] = inst_33820);

(statearr_33830_33863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (13))){
var inst_33813 = cljs.core.async.close_BANG_.call(null,out);
var state_33824__$1 = state_33824;
var statearr_33831_33864 = state_33824__$1;
(statearr_33831_33864[(2)] = inst_33813);

(statearr_33831_33864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (6))){
var state_33824__$1 = state_33824;
var statearr_33832_33865 = state_33824__$1;
(statearr_33832_33865[(2)] = null);

(statearr_33832_33865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (3))){
var inst_33822 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33824__$1,inst_33822);
} else {
if((state_val_33825 === (12))){
var inst_33810 = (state_33824[(8)]);
var inst_33810__$1 = (state_33824[(2)]);
var inst_33811 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33810__$1);
var state_33824__$1 = (function (){var statearr_33833 = state_33824;
(statearr_33833[(8)] = inst_33810__$1);

return statearr_33833;
})();
if(cljs.core.truth_(inst_33811)){
var statearr_33834_33866 = state_33824__$1;
(statearr_33834_33866[(1)] = (13));

} else {
var statearr_33835_33867 = state_33824__$1;
(statearr_33835_33867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (2))){
var inst_33787 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33788 = (0);
var state_33824__$1 = (function (){var statearr_33836 = state_33824;
(statearr_33836[(9)] = inst_33787);

(statearr_33836[(7)] = inst_33788);

return statearr_33836;
})();
var statearr_33837_33868 = state_33824__$1;
(statearr_33837_33868[(2)] = null);

(statearr_33837_33868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (11))){
var inst_33788 = (state_33824[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33824,(10),Object,null,(9));
var inst_33797 = chs__$1.call(null,inst_33788);
var inst_33798 = done.call(null,inst_33788);
var inst_33799 = cljs.core.async.take_BANG_.call(null,inst_33797,inst_33798);
var state_33824__$1 = state_33824;
var statearr_33838_33869 = state_33824__$1;
(statearr_33838_33869[(2)] = inst_33799);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33824__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (9))){
var inst_33788 = (state_33824[(7)]);
var inst_33801 = (state_33824[(2)]);
var inst_33802 = (inst_33788 + (1));
var inst_33788__$1 = inst_33802;
var state_33824__$1 = (function (){var statearr_33839 = state_33824;
(statearr_33839[(7)] = inst_33788__$1);

(statearr_33839[(10)] = inst_33801);

return statearr_33839;
})();
var statearr_33840_33870 = state_33824__$1;
(statearr_33840_33870[(2)] = null);

(statearr_33840_33870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (5))){
var inst_33808 = (state_33824[(2)]);
var state_33824__$1 = (function (){var statearr_33841 = state_33824;
(statearr_33841[(11)] = inst_33808);

return statearr_33841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33824__$1,(12),dchan);
} else {
if((state_val_33825 === (14))){
var inst_33810 = (state_33824[(8)]);
var inst_33815 = cljs.core.apply.call(null,f,inst_33810);
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33824__$1,(16),out,inst_33815);
} else {
if((state_val_33825 === (16))){
var inst_33817 = (state_33824[(2)]);
var state_33824__$1 = (function (){var statearr_33842 = state_33824;
(statearr_33842[(12)] = inst_33817);

return statearr_33842;
})();
var statearr_33843_33871 = state_33824__$1;
(statearr_33843_33871[(2)] = null);

(statearr_33843_33871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (10))){
var inst_33792 = (state_33824[(2)]);
var inst_33793 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33824__$1 = (function (){var statearr_33844 = state_33824;
(statearr_33844[(13)] = inst_33792);

return statearr_33844;
})();
var statearr_33845_33872 = state_33824__$1;
(statearr_33845_33872[(2)] = inst_33793);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33824__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (8))){
var inst_33806 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
var statearr_33846_33873 = state_33824__$1;
(statearr_33846_33873[(2)] = inst_33806);

(statearr_33846_33873[(1)] = (5));


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
});})(c__31784__auto___33858,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31672__auto__,c__31784__auto___33858,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_33850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33850[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_33850[(1)] = (1));

return statearr_33850;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_33824){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_33824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e33851){if((e33851 instanceof Object)){
var ex__31676__auto__ = e33851;
var statearr_33852_33874 = state_33824;
(statearr_33852_33874[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33875 = state_33824;
state_33824 = G__33875;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_33824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_33824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___33858,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31786__auto__ = (function (){var statearr_33853 = f__31785__auto__.call(null);
(statearr_33853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___33858);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___33858,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33877 = [];
var len__27557__auto___33935 = arguments.length;
var i__27558__auto___33936 = (0);
while(true){
if((i__27558__auto___33936 < len__27557__auto___33935)){
args33877.push((arguments[i__27558__auto___33936]));

var G__33937 = (i__27558__auto___33936 + (1));
i__27558__auto___33936 = G__33937;
continue;
} else {
}
break;
}

var G__33879 = args33877.length;
switch (G__33879) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33877.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31784__auto___33939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___33939,out){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___33939,out){
return (function (state_33911){
var state_val_33912 = (state_33911[(1)]);
if((state_val_33912 === (7))){
var inst_33890 = (state_33911[(7)]);
var inst_33891 = (state_33911[(8)]);
var inst_33890__$1 = (state_33911[(2)]);
var inst_33891__$1 = cljs.core.nth.call(null,inst_33890__$1,(0),null);
var inst_33892 = cljs.core.nth.call(null,inst_33890__$1,(1),null);
var inst_33893 = (inst_33891__$1 == null);
var state_33911__$1 = (function (){var statearr_33913 = state_33911;
(statearr_33913[(7)] = inst_33890__$1);

(statearr_33913[(9)] = inst_33892);

(statearr_33913[(8)] = inst_33891__$1);

return statearr_33913;
})();
if(cljs.core.truth_(inst_33893)){
var statearr_33914_33940 = state_33911__$1;
(statearr_33914_33940[(1)] = (8));

} else {
var statearr_33915_33941 = state_33911__$1;
(statearr_33915_33941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (1))){
var inst_33880 = cljs.core.vec.call(null,chs);
var inst_33881 = inst_33880;
var state_33911__$1 = (function (){var statearr_33916 = state_33911;
(statearr_33916[(10)] = inst_33881);

return statearr_33916;
})();
var statearr_33917_33942 = state_33911__$1;
(statearr_33917_33942[(2)] = null);

(statearr_33917_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (4))){
var inst_33881 = (state_33911[(10)]);
var state_33911__$1 = state_33911;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33911__$1,(7),inst_33881);
} else {
if((state_val_33912 === (6))){
var inst_33907 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33918_33943 = state_33911__$1;
(statearr_33918_33943[(2)] = inst_33907);

(statearr_33918_33943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (3))){
var inst_33909 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33911__$1,inst_33909);
} else {
if((state_val_33912 === (2))){
var inst_33881 = (state_33911[(10)]);
var inst_33883 = cljs.core.count.call(null,inst_33881);
var inst_33884 = (inst_33883 > (0));
var state_33911__$1 = state_33911;
if(cljs.core.truth_(inst_33884)){
var statearr_33920_33944 = state_33911__$1;
(statearr_33920_33944[(1)] = (4));

} else {
var statearr_33921_33945 = state_33911__$1;
(statearr_33921_33945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (11))){
var inst_33881 = (state_33911[(10)]);
var inst_33900 = (state_33911[(2)]);
var tmp33919 = inst_33881;
var inst_33881__$1 = tmp33919;
var state_33911__$1 = (function (){var statearr_33922 = state_33911;
(statearr_33922[(10)] = inst_33881__$1);

(statearr_33922[(11)] = inst_33900);

return statearr_33922;
})();
var statearr_33923_33946 = state_33911__$1;
(statearr_33923_33946[(2)] = null);

(statearr_33923_33946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (9))){
var inst_33891 = (state_33911[(8)]);
var state_33911__$1 = state_33911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33911__$1,(11),out,inst_33891);
} else {
if((state_val_33912 === (5))){
var inst_33905 = cljs.core.async.close_BANG_.call(null,out);
var state_33911__$1 = state_33911;
var statearr_33924_33947 = state_33911__$1;
(statearr_33924_33947[(2)] = inst_33905);

(statearr_33924_33947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (10))){
var inst_33903 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33925_33948 = state_33911__$1;
(statearr_33925_33948[(2)] = inst_33903);

(statearr_33925_33948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (8))){
var inst_33881 = (state_33911[(10)]);
var inst_33890 = (state_33911[(7)]);
var inst_33892 = (state_33911[(9)]);
var inst_33891 = (state_33911[(8)]);
var inst_33895 = (function (){var cs = inst_33881;
var vec__33886 = inst_33890;
var v = inst_33891;
var c = inst_33892;
return ((function (cs,vec__33886,v,c,inst_33881,inst_33890,inst_33892,inst_33891,state_val_33912,c__31784__auto___33939,out){
return (function (p1__33876_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33876_SHARP_);
});
;})(cs,vec__33886,v,c,inst_33881,inst_33890,inst_33892,inst_33891,state_val_33912,c__31784__auto___33939,out))
})();
var inst_33896 = cljs.core.filterv.call(null,inst_33895,inst_33881);
var inst_33881__$1 = inst_33896;
var state_33911__$1 = (function (){var statearr_33926 = state_33911;
(statearr_33926[(10)] = inst_33881__$1);

return statearr_33926;
})();
var statearr_33927_33949 = state_33911__$1;
(statearr_33927_33949[(2)] = null);

(statearr_33927_33949[(1)] = (2));


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
});})(c__31784__auto___33939,out))
;
return ((function (switch__31672__auto__,c__31784__auto___33939,out){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_33931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33931[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_33931[(1)] = (1));

return statearr_33931;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_33911){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_33911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e33932){if((e33932 instanceof Object)){
var ex__31676__auto__ = e33932;
var statearr_33933_33950 = state_33911;
(statearr_33933_33950[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33951 = state_33911;
state_33911 = G__33951;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_33911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_33911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___33939,out))
})();
var state__31786__auto__ = (function (){var statearr_33934 = f__31785__auto__.call(null);
(statearr_33934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___33939);

return statearr_33934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___33939,out))
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
var args33952 = [];
var len__27557__auto___34001 = arguments.length;
var i__27558__auto___34002 = (0);
while(true){
if((i__27558__auto___34002 < len__27557__auto___34001)){
args33952.push((arguments[i__27558__auto___34002]));

var G__34003 = (i__27558__auto___34002 + (1));
i__27558__auto___34002 = G__34003;
continue;
} else {
}
break;
}

var G__33954 = args33952.length;
switch (G__33954) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33952.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31784__auto___34005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___34005,out){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___34005,out){
return (function (state_33978){
var state_val_33979 = (state_33978[(1)]);
if((state_val_33979 === (7))){
var inst_33960 = (state_33978[(7)]);
var inst_33960__$1 = (state_33978[(2)]);
var inst_33961 = (inst_33960__$1 == null);
var inst_33962 = cljs.core.not.call(null,inst_33961);
var state_33978__$1 = (function (){var statearr_33980 = state_33978;
(statearr_33980[(7)] = inst_33960__$1);

return statearr_33980;
})();
if(inst_33962){
var statearr_33981_34006 = state_33978__$1;
(statearr_33981_34006[(1)] = (8));

} else {
var statearr_33982_34007 = state_33978__$1;
(statearr_33982_34007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (1))){
var inst_33955 = (0);
var state_33978__$1 = (function (){var statearr_33983 = state_33978;
(statearr_33983[(8)] = inst_33955);

return statearr_33983;
})();
var statearr_33984_34008 = state_33978__$1;
(statearr_33984_34008[(2)] = null);

(statearr_33984_34008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (4))){
var state_33978__$1 = state_33978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33978__$1,(7),ch);
} else {
if((state_val_33979 === (6))){
var inst_33973 = (state_33978[(2)]);
var state_33978__$1 = state_33978;
var statearr_33985_34009 = state_33978__$1;
(statearr_33985_34009[(2)] = inst_33973);

(statearr_33985_34009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (3))){
var inst_33975 = (state_33978[(2)]);
var inst_33976 = cljs.core.async.close_BANG_.call(null,out);
var state_33978__$1 = (function (){var statearr_33986 = state_33978;
(statearr_33986[(9)] = inst_33975);

return statearr_33986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33978__$1,inst_33976);
} else {
if((state_val_33979 === (2))){
var inst_33955 = (state_33978[(8)]);
var inst_33957 = (inst_33955 < n);
var state_33978__$1 = state_33978;
if(cljs.core.truth_(inst_33957)){
var statearr_33987_34010 = state_33978__$1;
(statearr_33987_34010[(1)] = (4));

} else {
var statearr_33988_34011 = state_33978__$1;
(statearr_33988_34011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (11))){
var inst_33955 = (state_33978[(8)]);
var inst_33965 = (state_33978[(2)]);
var inst_33966 = (inst_33955 + (1));
var inst_33955__$1 = inst_33966;
var state_33978__$1 = (function (){var statearr_33989 = state_33978;
(statearr_33989[(8)] = inst_33955__$1);

(statearr_33989[(10)] = inst_33965);

return statearr_33989;
})();
var statearr_33990_34012 = state_33978__$1;
(statearr_33990_34012[(2)] = null);

(statearr_33990_34012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (9))){
var state_33978__$1 = state_33978;
var statearr_33991_34013 = state_33978__$1;
(statearr_33991_34013[(2)] = null);

(statearr_33991_34013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (5))){
var state_33978__$1 = state_33978;
var statearr_33992_34014 = state_33978__$1;
(statearr_33992_34014[(2)] = null);

(statearr_33992_34014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (10))){
var inst_33970 = (state_33978[(2)]);
var state_33978__$1 = state_33978;
var statearr_33993_34015 = state_33978__$1;
(statearr_33993_34015[(2)] = inst_33970);

(statearr_33993_34015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (8))){
var inst_33960 = (state_33978[(7)]);
var state_33978__$1 = state_33978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33978__$1,(11),out,inst_33960);
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
});})(c__31784__auto___34005,out))
;
return ((function (switch__31672__auto__,c__31784__auto___34005,out){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_33997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33997[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_33997[(1)] = (1));

return statearr_33997;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_33978){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_33978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e33998){if((e33998 instanceof Object)){
var ex__31676__auto__ = e33998;
var statearr_33999_34016 = state_33978;
(statearr_33999_34016[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34017 = state_33978;
state_33978 = G__34017;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_33978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_33978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___34005,out))
})();
var state__31786__auto__ = (function (){var statearr_34000 = f__31785__auto__.call(null);
(statearr_34000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___34005);

return statearr_34000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___34005,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34025 = (function (f,ch,meta34026){
this.f = f;
this.ch = ch;
this.meta34026 = meta34026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34027,meta34026__$1){
var self__ = this;
var _34027__$1 = this;
return (new cljs.core.async.t_cljs$core$async34025(self__.f,self__.ch,meta34026__$1));
});

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34027){
var self__ = this;
var _34027__$1 = this;
return self__.meta34026;
});

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34028 = (function (f,ch,meta34026,_,fn1,meta34029){
this.f = f;
this.ch = ch;
this.meta34026 = meta34026;
this._ = _;
this.fn1 = fn1;
this.meta34029 = meta34029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34030,meta34029__$1){
var self__ = this;
var _34030__$1 = this;
return (new cljs.core.async.t_cljs$core$async34028(self__.f,self__.ch,self__.meta34026,self__._,self__.fn1,meta34029__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34030){
var self__ = this;
var _34030__$1 = this;
return self__.meta34029;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34018_SHARP_){
return f1.call(null,(((p1__34018_SHARP_ == null))?null:self__.f.call(null,p1__34018_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34028.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34026","meta34026",1069625556,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34025","cljs.core.async/t_cljs$core$async34025",-1549788508,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34029","meta34029",2076966059,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34028";

cljs.core.async.t_cljs$core$async34028.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async34028");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34028 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34028(f__$1,ch__$1,meta34026__$1,___$2,fn1__$1,meta34029){
return (new cljs.core.async.t_cljs$core$async34028(f__$1,ch__$1,meta34026__$1,___$2,fn1__$1,meta34029));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34028(self__.f,self__.ch,self__.meta34026,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34026","meta34026",1069625556,null)], null);
});

cljs.core.async.t_cljs$core$async34025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34025";

cljs.core.async.t_cljs$core$async34025.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async34025");
});

cljs.core.async.__GT_t_cljs$core$async34025 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34025(f__$1,ch__$1,meta34026){
return (new cljs.core.async.t_cljs$core$async34025(f__$1,ch__$1,meta34026));
});

}

return (new cljs.core.async.t_cljs$core$async34025(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34034 = (function (f,ch,meta34035){
this.f = f;
this.ch = ch;
this.meta34035 = meta34035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34036,meta34035__$1){
var self__ = this;
var _34036__$1 = this;
return (new cljs.core.async.t_cljs$core$async34034(self__.f,self__.ch,meta34035__$1));
});

cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34036){
var self__ = this;
var _34036__$1 = this;
return self__.meta34035;
});

cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34035","meta34035",-1383349919,null)], null);
});

cljs.core.async.t_cljs$core$async34034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34034";

cljs.core.async.t_cljs$core$async34034.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async34034");
});

cljs.core.async.__GT_t_cljs$core$async34034 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34034(f__$1,ch__$1,meta34035){
return (new cljs.core.async.t_cljs$core$async34034(f__$1,ch__$1,meta34035));
});

}

return (new cljs.core.async.t_cljs$core$async34034(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34040 = (function (p,ch,meta34041){
this.p = p;
this.ch = ch;
this.meta34041 = meta34041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34042,meta34041__$1){
var self__ = this;
var _34042__$1 = this;
return (new cljs.core.async.t_cljs$core$async34040(self__.p,self__.ch,meta34041__$1));
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34042){
var self__ = this;
var _34042__$1 = this;
return self__.meta34041;
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34041","meta34041",-1984561289,null)], null);
});

cljs.core.async.t_cljs$core$async34040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34040";

cljs.core.async.t_cljs$core$async34040.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.core.async/t_cljs$core$async34040");
});

cljs.core.async.__GT_t_cljs$core$async34040 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34040(p__$1,ch__$1,meta34041){
return (new cljs.core.async.t_cljs$core$async34040(p__$1,ch__$1,meta34041));
});

}

return (new cljs.core.async.t_cljs$core$async34040(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34043 = [];
var len__27557__auto___34087 = arguments.length;
var i__27558__auto___34088 = (0);
while(true){
if((i__27558__auto___34088 < len__27557__auto___34087)){
args34043.push((arguments[i__27558__auto___34088]));

var G__34089 = (i__27558__auto___34088 + (1));
i__27558__auto___34088 = G__34089;
continue;
} else {
}
break;
}

var G__34045 = args34043.length;
switch (G__34045) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34043.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31784__auto___34091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___34091,out){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___34091,out){
return (function (state_34066){
var state_val_34067 = (state_34066[(1)]);
if((state_val_34067 === (7))){
var inst_34062 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34068_34092 = state_34066__$1;
(statearr_34068_34092[(2)] = inst_34062);

(statearr_34068_34092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (1))){
var state_34066__$1 = state_34066;
var statearr_34069_34093 = state_34066__$1;
(statearr_34069_34093[(2)] = null);

(statearr_34069_34093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (4))){
var inst_34048 = (state_34066[(7)]);
var inst_34048__$1 = (state_34066[(2)]);
var inst_34049 = (inst_34048__$1 == null);
var state_34066__$1 = (function (){var statearr_34070 = state_34066;
(statearr_34070[(7)] = inst_34048__$1);

return statearr_34070;
})();
if(cljs.core.truth_(inst_34049)){
var statearr_34071_34094 = state_34066__$1;
(statearr_34071_34094[(1)] = (5));

} else {
var statearr_34072_34095 = state_34066__$1;
(statearr_34072_34095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (6))){
var inst_34048 = (state_34066[(7)]);
var inst_34053 = p.call(null,inst_34048);
var state_34066__$1 = state_34066;
if(cljs.core.truth_(inst_34053)){
var statearr_34073_34096 = state_34066__$1;
(statearr_34073_34096[(1)] = (8));

} else {
var statearr_34074_34097 = state_34066__$1;
(statearr_34074_34097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (3))){
var inst_34064 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34066__$1,inst_34064);
} else {
if((state_val_34067 === (2))){
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34066__$1,(4),ch);
} else {
if((state_val_34067 === (11))){
var inst_34056 = (state_34066[(2)]);
var state_34066__$1 = state_34066;
var statearr_34075_34098 = state_34066__$1;
(statearr_34075_34098[(2)] = inst_34056);

(statearr_34075_34098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (9))){
var state_34066__$1 = state_34066;
var statearr_34076_34099 = state_34066__$1;
(statearr_34076_34099[(2)] = null);

(statearr_34076_34099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (5))){
var inst_34051 = cljs.core.async.close_BANG_.call(null,out);
var state_34066__$1 = state_34066;
var statearr_34077_34100 = state_34066__$1;
(statearr_34077_34100[(2)] = inst_34051);

(statearr_34077_34100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (10))){
var inst_34059 = (state_34066[(2)]);
var state_34066__$1 = (function (){var statearr_34078 = state_34066;
(statearr_34078[(8)] = inst_34059);

return statearr_34078;
})();
var statearr_34079_34101 = state_34066__$1;
(statearr_34079_34101[(2)] = null);

(statearr_34079_34101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (8))){
var inst_34048 = (state_34066[(7)]);
var state_34066__$1 = state_34066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34066__$1,(11),out,inst_34048);
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
});})(c__31784__auto___34091,out))
;
return ((function (switch__31672__auto__,c__31784__auto___34091,out){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_34083 = [null,null,null,null,null,null,null,null,null];
(statearr_34083[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_34083[(1)] = (1));

return statearr_34083;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_34066){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_34066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e34084){if((e34084 instanceof Object)){
var ex__31676__auto__ = e34084;
var statearr_34085_34102 = state_34066;
(statearr_34085_34102[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34103 = state_34066;
state_34066 = G__34103;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_34066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_34066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___34091,out))
})();
var state__31786__auto__ = (function (){var statearr_34086 = f__31785__auto__.call(null);
(statearr_34086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___34091);

return statearr_34086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___34091,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34104 = [];
var len__27557__auto___34107 = arguments.length;
var i__27558__auto___34108 = (0);
while(true){
if((i__27558__auto___34108 < len__27557__auto___34107)){
args34104.push((arguments[i__27558__auto___34108]));

var G__34109 = (i__27558__auto___34108 + (1));
i__27558__auto___34108 = G__34109;
continue;
} else {
}
break;
}

var G__34106 = args34104.length;
switch (G__34106) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34104.length)].join('')));

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
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__){
return (function (state_34276){
var state_val_34277 = (state_34276[(1)]);
if((state_val_34277 === (7))){
var inst_34272 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34278_34319 = state_34276__$1;
(statearr_34278_34319[(2)] = inst_34272);

(statearr_34278_34319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (20))){
var inst_34242 = (state_34276[(7)]);
var inst_34253 = (state_34276[(2)]);
var inst_34254 = cljs.core.next.call(null,inst_34242);
var inst_34228 = inst_34254;
var inst_34229 = null;
var inst_34230 = (0);
var inst_34231 = (0);
var state_34276__$1 = (function (){var statearr_34279 = state_34276;
(statearr_34279[(8)] = inst_34229);

(statearr_34279[(9)] = inst_34253);

(statearr_34279[(10)] = inst_34230);

(statearr_34279[(11)] = inst_34231);

(statearr_34279[(12)] = inst_34228);

return statearr_34279;
})();
var statearr_34280_34320 = state_34276__$1;
(statearr_34280_34320[(2)] = null);

(statearr_34280_34320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (1))){
var state_34276__$1 = state_34276;
var statearr_34281_34321 = state_34276__$1;
(statearr_34281_34321[(2)] = null);

(statearr_34281_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (4))){
var inst_34217 = (state_34276[(13)]);
var inst_34217__$1 = (state_34276[(2)]);
var inst_34218 = (inst_34217__$1 == null);
var state_34276__$1 = (function (){var statearr_34282 = state_34276;
(statearr_34282[(13)] = inst_34217__$1);

return statearr_34282;
})();
if(cljs.core.truth_(inst_34218)){
var statearr_34283_34322 = state_34276__$1;
(statearr_34283_34322[(1)] = (5));

} else {
var statearr_34284_34323 = state_34276__$1;
(statearr_34284_34323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (15))){
var state_34276__$1 = state_34276;
var statearr_34288_34324 = state_34276__$1;
(statearr_34288_34324[(2)] = null);

(statearr_34288_34324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (21))){
var state_34276__$1 = state_34276;
var statearr_34289_34325 = state_34276__$1;
(statearr_34289_34325[(2)] = null);

(statearr_34289_34325[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (13))){
var inst_34229 = (state_34276[(8)]);
var inst_34230 = (state_34276[(10)]);
var inst_34231 = (state_34276[(11)]);
var inst_34228 = (state_34276[(12)]);
var inst_34238 = (state_34276[(2)]);
var inst_34239 = (inst_34231 + (1));
var tmp34285 = inst_34229;
var tmp34286 = inst_34230;
var tmp34287 = inst_34228;
var inst_34228__$1 = tmp34287;
var inst_34229__$1 = tmp34285;
var inst_34230__$1 = tmp34286;
var inst_34231__$1 = inst_34239;
var state_34276__$1 = (function (){var statearr_34290 = state_34276;
(statearr_34290[(8)] = inst_34229__$1);

(statearr_34290[(14)] = inst_34238);

(statearr_34290[(10)] = inst_34230__$1);

(statearr_34290[(11)] = inst_34231__$1);

(statearr_34290[(12)] = inst_34228__$1);

return statearr_34290;
})();
var statearr_34291_34326 = state_34276__$1;
(statearr_34291_34326[(2)] = null);

(statearr_34291_34326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (22))){
var state_34276__$1 = state_34276;
var statearr_34292_34327 = state_34276__$1;
(statearr_34292_34327[(2)] = null);

(statearr_34292_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (6))){
var inst_34217 = (state_34276[(13)]);
var inst_34226 = f.call(null,inst_34217);
var inst_34227 = cljs.core.seq.call(null,inst_34226);
var inst_34228 = inst_34227;
var inst_34229 = null;
var inst_34230 = (0);
var inst_34231 = (0);
var state_34276__$1 = (function (){var statearr_34293 = state_34276;
(statearr_34293[(8)] = inst_34229);

(statearr_34293[(10)] = inst_34230);

(statearr_34293[(11)] = inst_34231);

(statearr_34293[(12)] = inst_34228);

return statearr_34293;
})();
var statearr_34294_34328 = state_34276__$1;
(statearr_34294_34328[(2)] = null);

(statearr_34294_34328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (17))){
var inst_34242 = (state_34276[(7)]);
var inst_34246 = cljs.core.chunk_first.call(null,inst_34242);
var inst_34247 = cljs.core.chunk_rest.call(null,inst_34242);
var inst_34248 = cljs.core.count.call(null,inst_34246);
var inst_34228 = inst_34247;
var inst_34229 = inst_34246;
var inst_34230 = inst_34248;
var inst_34231 = (0);
var state_34276__$1 = (function (){var statearr_34295 = state_34276;
(statearr_34295[(8)] = inst_34229);

(statearr_34295[(10)] = inst_34230);

(statearr_34295[(11)] = inst_34231);

(statearr_34295[(12)] = inst_34228);

return statearr_34295;
})();
var statearr_34296_34329 = state_34276__$1;
(statearr_34296_34329[(2)] = null);

(statearr_34296_34329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (3))){
var inst_34274 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34276__$1,inst_34274);
} else {
if((state_val_34277 === (12))){
var inst_34262 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34297_34330 = state_34276__$1;
(statearr_34297_34330[(2)] = inst_34262);

(statearr_34297_34330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (2))){
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34276__$1,(4),in$);
} else {
if((state_val_34277 === (23))){
var inst_34270 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34298_34331 = state_34276__$1;
(statearr_34298_34331[(2)] = inst_34270);

(statearr_34298_34331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (19))){
var inst_34257 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34299_34332 = state_34276__$1;
(statearr_34299_34332[(2)] = inst_34257);

(statearr_34299_34332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (11))){
var inst_34242 = (state_34276[(7)]);
var inst_34228 = (state_34276[(12)]);
var inst_34242__$1 = cljs.core.seq.call(null,inst_34228);
var state_34276__$1 = (function (){var statearr_34300 = state_34276;
(statearr_34300[(7)] = inst_34242__$1);

return statearr_34300;
})();
if(inst_34242__$1){
var statearr_34301_34333 = state_34276__$1;
(statearr_34301_34333[(1)] = (14));

} else {
var statearr_34302_34334 = state_34276__$1;
(statearr_34302_34334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (9))){
var inst_34264 = (state_34276[(2)]);
var inst_34265 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34276__$1 = (function (){var statearr_34303 = state_34276;
(statearr_34303[(15)] = inst_34264);

return statearr_34303;
})();
if(cljs.core.truth_(inst_34265)){
var statearr_34304_34335 = state_34276__$1;
(statearr_34304_34335[(1)] = (21));

} else {
var statearr_34305_34336 = state_34276__$1;
(statearr_34305_34336[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (5))){
var inst_34220 = cljs.core.async.close_BANG_.call(null,out);
var state_34276__$1 = state_34276;
var statearr_34306_34337 = state_34276__$1;
(statearr_34306_34337[(2)] = inst_34220);

(statearr_34306_34337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (14))){
var inst_34242 = (state_34276[(7)]);
var inst_34244 = cljs.core.chunked_seq_QMARK_.call(null,inst_34242);
var state_34276__$1 = state_34276;
if(inst_34244){
var statearr_34307_34338 = state_34276__$1;
(statearr_34307_34338[(1)] = (17));

} else {
var statearr_34308_34339 = state_34276__$1;
(statearr_34308_34339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (16))){
var inst_34260 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34309_34340 = state_34276__$1;
(statearr_34309_34340[(2)] = inst_34260);

(statearr_34309_34340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (10))){
var inst_34229 = (state_34276[(8)]);
var inst_34231 = (state_34276[(11)]);
var inst_34236 = cljs.core._nth.call(null,inst_34229,inst_34231);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34276__$1,(13),out,inst_34236);
} else {
if((state_val_34277 === (18))){
var inst_34242 = (state_34276[(7)]);
var inst_34251 = cljs.core.first.call(null,inst_34242);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34276__$1,(20),out,inst_34251);
} else {
if((state_val_34277 === (8))){
var inst_34230 = (state_34276[(10)]);
var inst_34231 = (state_34276[(11)]);
var inst_34233 = (inst_34231 < inst_34230);
var inst_34234 = inst_34233;
var state_34276__$1 = state_34276;
if(cljs.core.truth_(inst_34234)){
var statearr_34310_34341 = state_34276__$1;
(statearr_34310_34341[(1)] = (10));

} else {
var statearr_34311_34342 = state_34276__$1;
(statearr_34311_34342[(1)] = (11));

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
});})(c__31784__auto__))
;
return ((function (switch__31672__auto__,c__31784__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31673__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31673__auto____0 = (function (){
var statearr_34315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34315[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31673__auto__);

(statearr_34315[(1)] = (1));

return statearr_34315;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31673__auto____1 = (function (state_34276){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_34276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e34316){if((e34316 instanceof Object)){
var ex__31676__auto__ = e34316;
var statearr_34317_34343 = state_34276;
(statearr_34317_34343[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34344 = state_34276;
state_34276 = G__34344;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31673__auto__ = function(state_34276){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31673__auto____1.call(this,state_34276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31673__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31673__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__))
})();
var state__31786__auto__ = (function (){var statearr_34318 = f__31785__auto__.call(null);
(statearr_34318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_34318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__))
);

return c__31784__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34345 = [];
var len__27557__auto___34348 = arguments.length;
var i__27558__auto___34349 = (0);
while(true){
if((i__27558__auto___34349 < len__27557__auto___34348)){
args34345.push((arguments[i__27558__auto___34349]));

var G__34350 = (i__27558__auto___34349 + (1));
i__27558__auto___34349 = G__34350;
continue;
} else {
}
break;
}

var G__34347 = args34345.length;
switch (G__34347) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34345.length)].join('')));

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
var args34352 = [];
var len__27557__auto___34355 = arguments.length;
var i__27558__auto___34356 = (0);
while(true){
if((i__27558__auto___34356 < len__27557__auto___34355)){
args34352.push((arguments[i__27558__auto___34356]));

var G__34357 = (i__27558__auto___34356 + (1));
i__27558__auto___34356 = G__34357;
continue;
} else {
}
break;
}

var G__34354 = args34352.length;
switch (G__34354) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34352.length)].join('')));

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
var args34359 = [];
var len__27557__auto___34410 = arguments.length;
var i__27558__auto___34411 = (0);
while(true){
if((i__27558__auto___34411 < len__27557__auto___34410)){
args34359.push((arguments[i__27558__auto___34411]));

var G__34412 = (i__27558__auto___34411 + (1));
i__27558__auto___34411 = G__34412;
continue;
} else {
}
break;
}

var G__34361 = args34359.length;
switch (G__34361) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34359.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31784__auto___34414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___34414,out){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___34414,out){
return (function (state_34385){
var state_val_34386 = (state_34385[(1)]);
if((state_val_34386 === (7))){
var inst_34380 = (state_34385[(2)]);
var state_34385__$1 = state_34385;
var statearr_34387_34415 = state_34385__$1;
(statearr_34387_34415[(2)] = inst_34380);

(statearr_34387_34415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (1))){
var inst_34362 = null;
var state_34385__$1 = (function (){var statearr_34388 = state_34385;
(statearr_34388[(7)] = inst_34362);

return statearr_34388;
})();
var statearr_34389_34416 = state_34385__$1;
(statearr_34389_34416[(2)] = null);

(statearr_34389_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (4))){
var inst_34365 = (state_34385[(8)]);
var inst_34365__$1 = (state_34385[(2)]);
var inst_34366 = (inst_34365__$1 == null);
var inst_34367 = cljs.core.not.call(null,inst_34366);
var state_34385__$1 = (function (){var statearr_34390 = state_34385;
(statearr_34390[(8)] = inst_34365__$1);

return statearr_34390;
})();
if(inst_34367){
var statearr_34391_34417 = state_34385__$1;
(statearr_34391_34417[(1)] = (5));

} else {
var statearr_34392_34418 = state_34385__$1;
(statearr_34392_34418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (6))){
var state_34385__$1 = state_34385;
var statearr_34393_34419 = state_34385__$1;
(statearr_34393_34419[(2)] = null);

(statearr_34393_34419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (3))){
var inst_34382 = (state_34385[(2)]);
var inst_34383 = cljs.core.async.close_BANG_.call(null,out);
var state_34385__$1 = (function (){var statearr_34394 = state_34385;
(statearr_34394[(9)] = inst_34382);

return statearr_34394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34385__$1,inst_34383);
} else {
if((state_val_34386 === (2))){
var state_34385__$1 = state_34385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34385__$1,(4),ch);
} else {
if((state_val_34386 === (11))){
var inst_34365 = (state_34385[(8)]);
var inst_34374 = (state_34385[(2)]);
var inst_34362 = inst_34365;
var state_34385__$1 = (function (){var statearr_34395 = state_34385;
(statearr_34395[(7)] = inst_34362);

(statearr_34395[(10)] = inst_34374);

return statearr_34395;
})();
var statearr_34396_34420 = state_34385__$1;
(statearr_34396_34420[(2)] = null);

(statearr_34396_34420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (9))){
var inst_34365 = (state_34385[(8)]);
var state_34385__$1 = state_34385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34385__$1,(11),out,inst_34365);
} else {
if((state_val_34386 === (5))){
var inst_34362 = (state_34385[(7)]);
var inst_34365 = (state_34385[(8)]);
var inst_34369 = cljs.core._EQ_.call(null,inst_34365,inst_34362);
var state_34385__$1 = state_34385;
if(inst_34369){
var statearr_34398_34421 = state_34385__$1;
(statearr_34398_34421[(1)] = (8));

} else {
var statearr_34399_34422 = state_34385__$1;
(statearr_34399_34422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (10))){
var inst_34377 = (state_34385[(2)]);
var state_34385__$1 = state_34385;
var statearr_34400_34423 = state_34385__$1;
(statearr_34400_34423[(2)] = inst_34377);

(statearr_34400_34423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (8))){
var inst_34362 = (state_34385[(7)]);
var tmp34397 = inst_34362;
var inst_34362__$1 = tmp34397;
var state_34385__$1 = (function (){var statearr_34401 = state_34385;
(statearr_34401[(7)] = inst_34362__$1);

return statearr_34401;
})();
var statearr_34402_34424 = state_34385__$1;
(statearr_34402_34424[(2)] = null);

(statearr_34402_34424[(1)] = (2));


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
});})(c__31784__auto___34414,out))
;
return ((function (switch__31672__auto__,c__31784__auto___34414,out){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_34406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34406[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_34406[(1)] = (1));

return statearr_34406;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_34385){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_34385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e34407){if((e34407 instanceof Object)){
var ex__31676__auto__ = e34407;
var statearr_34408_34425 = state_34385;
(statearr_34408_34425[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34426 = state_34385;
state_34385 = G__34426;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_34385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_34385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___34414,out))
})();
var state__31786__auto__ = (function (){var statearr_34409 = f__31785__auto__.call(null);
(statearr_34409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___34414);

return statearr_34409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___34414,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34427 = [];
var len__27557__auto___34497 = arguments.length;
var i__27558__auto___34498 = (0);
while(true){
if((i__27558__auto___34498 < len__27557__auto___34497)){
args34427.push((arguments[i__27558__auto___34498]));

var G__34499 = (i__27558__auto___34498 + (1));
i__27558__auto___34498 = G__34499;
continue;
} else {
}
break;
}

var G__34429 = args34427.length;
switch (G__34429) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34427.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31784__auto___34501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___34501,out){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___34501,out){
return (function (state_34467){
var state_val_34468 = (state_34467[(1)]);
if((state_val_34468 === (7))){
var inst_34463 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34469_34502 = state_34467__$1;
(statearr_34469_34502[(2)] = inst_34463);

(statearr_34469_34502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (1))){
var inst_34430 = (new Array(n));
var inst_34431 = inst_34430;
var inst_34432 = (0);
var state_34467__$1 = (function (){var statearr_34470 = state_34467;
(statearr_34470[(7)] = inst_34431);

(statearr_34470[(8)] = inst_34432);

return statearr_34470;
})();
var statearr_34471_34503 = state_34467__$1;
(statearr_34471_34503[(2)] = null);

(statearr_34471_34503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (4))){
var inst_34435 = (state_34467[(9)]);
var inst_34435__$1 = (state_34467[(2)]);
var inst_34436 = (inst_34435__$1 == null);
var inst_34437 = cljs.core.not.call(null,inst_34436);
var state_34467__$1 = (function (){var statearr_34472 = state_34467;
(statearr_34472[(9)] = inst_34435__$1);

return statearr_34472;
})();
if(inst_34437){
var statearr_34473_34504 = state_34467__$1;
(statearr_34473_34504[(1)] = (5));

} else {
var statearr_34474_34505 = state_34467__$1;
(statearr_34474_34505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (15))){
var inst_34457 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34475_34506 = state_34467__$1;
(statearr_34475_34506[(2)] = inst_34457);

(statearr_34475_34506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (13))){
var state_34467__$1 = state_34467;
var statearr_34476_34507 = state_34467__$1;
(statearr_34476_34507[(2)] = null);

(statearr_34476_34507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (6))){
var inst_34432 = (state_34467[(8)]);
var inst_34453 = (inst_34432 > (0));
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34453)){
var statearr_34477_34508 = state_34467__$1;
(statearr_34477_34508[(1)] = (12));

} else {
var statearr_34478_34509 = state_34467__$1;
(statearr_34478_34509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (3))){
var inst_34465 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34467__$1,inst_34465);
} else {
if((state_val_34468 === (12))){
var inst_34431 = (state_34467[(7)]);
var inst_34455 = cljs.core.vec.call(null,inst_34431);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34467__$1,(15),out,inst_34455);
} else {
if((state_val_34468 === (2))){
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34467__$1,(4),ch);
} else {
if((state_val_34468 === (11))){
var inst_34447 = (state_34467[(2)]);
var inst_34448 = (new Array(n));
var inst_34431 = inst_34448;
var inst_34432 = (0);
var state_34467__$1 = (function (){var statearr_34479 = state_34467;
(statearr_34479[(10)] = inst_34447);

(statearr_34479[(7)] = inst_34431);

(statearr_34479[(8)] = inst_34432);

return statearr_34479;
})();
var statearr_34480_34510 = state_34467__$1;
(statearr_34480_34510[(2)] = null);

(statearr_34480_34510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (9))){
var inst_34431 = (state_34467[(7)]);
var inst_34445 = cljs.core.vec.call(null,inst_34431);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34467__$1,(11),out,inst_34445);
} else {
if((state_val_34468 === (5))){
var inst_34431 = (state_34467[(7)]);
var inst_34440 = (state_34467[(11)]);
var inst_34432 = (state_34467[(8)]);
var inst_34435 = (state_34467[(9)]);
var inst_34439 = (inst_34431[inst_34432] = inst_34435);
var inst_34440__$1 = (inst_34432 + (1));
var inst_34441 = (inst_34440__$1 < n);
var state_34467__$1 = (function (){var statearr_34481 = state_34467;
(statearr_34481[(11)] = inst_34440__$1);

(statearr_34481[(12)] = inst_34439);

return statearr_34481;
})();
if(cljs.core.truth_(inst_34441)){
var statearr_34482_34511 = state_34467__$1;
(statearr_34482_34511[(1)] = (8));

} else {
var statearr_34483_34512 = state_34467__$1;
(statearr_34483_34512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (14))){
var inst_34460 = (state_34467[(2)]);
var inst_34461 = cljs.core.async.close_BANG_.call(null,out);
var state_34467__$1 = (function (){var statearr_34485 = state_34467;
(statearr_34485[(13)] = inst_34460);

return statearr_34485;
})();
var statearr_34486_34513 = state_34467__$1;
(statearr_34486_34513[(2)] = inst_34461);

(statearr_34486_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (10))){
var inst_34451 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34487_34514 = state_34467__$1;
(statearr_34487_34514[(2)] = inst_34451);

(statearr_34487_34514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (8))){
var inst_34431 = (state_34467[(7)]);
var inst_34440 = (state_34467[(11)]);
var tmp34484 = inst_34431;
var inst_34431__$1 = tmp34484;
var inst_34432 = inst_34440;
var state_34467__$1 = (function (){var statearr_34488 = state_34467;
(statearr_34488[(7)] = inst_34431__$1);

(statearr_34488[(8)] = inst_34432);

return statearr_34488;
})();
var statearr_34489_34515 = state_34467__$1;
(statearr_34489_34515[(2)] = null);

(statearr_34489_34515[(1)] = (2));


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
});})(c__31784__auto___34501,out))
;
return ((function (switch__31672__auto__,c__31784__auto___34501,out){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_34493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34493[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_34493[(1)] = (1));

return statearr_34493;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_34467){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_34467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e34494){if((e34494 instanceof Object)){
var ex__31676__auto__ = e34494;
var statearr_34495_34516 = state_34467;
(statearr_34495_34516[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34517 = state_34467;
state_34467 = G__34517;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_34467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_34467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___34501,out))
})();
var state__31786__auto__ = (function (){var statearr_34496 = f__31785__auto__.call(null);
(statearr_34496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___34501);

return statearr_34496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___34501,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34518 = [];
var len__27557__auto___34592 = arguments.length;
var i__27558__auto___34593 = (0);
while(true){
if((i__27558__auto___34593 < len__27557__auto___34592)){
args34518.push((arguments[i__27558__auto___34593]));

var G__34594 = (i__27558__auto___34593 + (1));
i__27558__auto___34593 = G__34594;
continue;
} else {
}
break;
}

var G__34520 = args34518.length;
switch (G__34520) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34518.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31784__auto___34596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___34596,out){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___34596,out){
return (function (state_34562){
var state_val_34563 = (state_34562[(1)]);
if((state_val_34563 === (7))){
var inst_34558 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34564_34597 = state_34562__$1;
(statearr_34564_34597[(2)] = inst_34558);

(statearr_34564_34597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (1))){
var inst_34521 = [];
var inst_34522 = inst_34521;
var inst_34523 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34562__$1 = (function (){var statearr_34565 = state_34562;
(statearr_34565[(7)] = inst_34523);

(statearr_34565[(8)] = inst_34522);

return statearr_34565;
})();
var statearr_34566_34598 = state_34562__$1;
(statearr_34566_34598[(2)] = null);

(statearr_34566_34598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (4))){
var inst_34526 = (state_34562[(9)]);
var inst_34526__$1 = (state_34562[(2)]);
var inst_34527 = (inst_34526__$1 == null);
var inst_34528 = cljs.core.not.call(null,inst_34527);
var state_34562__$1 = (function (){var statearr_34567 = state_34562;
(statearr_34567[(9)] = inst_34526__$1);

return statearr_34567;
})();
if(inst_34528){
var statearr_34568_34599 = state_34562__$1;
(statearr_34568_34599[(1)] = (5));

} else {
var statearr_34569_34600 = state_34562__$1;
(statearr_34569_34600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (15))){
var inst_34552 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34570_34601 = state_34562__$1;
(statearr_34570_34601[(2)] = inst_34552);

(statearr_34570_34601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (13))){
var state_34562__$1 = state_34562;
var statearr_34571_34602 = state_34562__$1;
(statearr_34571_34602[(2)] = null);

(statearr_34571_34602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (6))){
var inst_34522 = (state_34562[(8)]);
var inst_34547 = inst_34522.length;
var inst_34548 = (inst_34547 > (0));
var state_34562__$1 = state_34562;
if(cljs.core.truth_(inst_34548)){
var statearr_34572_34603 = state_34562__$1;
(statearr_34572_34603[(1)] = (12));

} else {
var statearr_34573_34604 = state_34562__$1;
(statearr_34573_34604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (3))){
var inst_34560 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34562__$1,inst_34560);
} else {
if((state_val_34563 === (12))){
var inst_34522 = (state_34562[(8)]);
var inst_34550 = cljs.core.vec.call(null,inst_34522);
var state_34562__$1 = state_34562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34562__$1,(15),out,inst_34550);
} else {
if((state_val_34563 === (2))){
var state_34562__$1 = state_34562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34562__$1,(4),ch);
} else {
if((state_val_34563 === (11))){
var inst_34526 = (state_34562[(9)]);
var inst_34530 = (state_34562[(10)]);
var inst_34540 = (state_34562[(2)]);
var inst_34541 = [];
var inst_34542 = inst_34541.push(inst_34526);
var inst_34522 = inst_34541;
var inst_34523 = inst_34530;
var state_34562__$1 = (function (){var statearr_34574 = state_34562;
(statearr_34574[(11)] = inst_34542);

(statearr_34574[(12)] = inst_34540);

(statearr_34574[(7)] = inst_34523);

(statearr_34574[(8)] = inst_34522);

return statearr_34574;
})();
var statearr_34575_34605 = state_34562__$1;
(statearr_34575_34605[(2)] = null);

(statearr_34575_34605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (9))){
var inst_34522 = (state_34562[(8)]);
var inst_34538 = cljs.core.vec.call(null,inst_34522);
var state_34562__$1 = state_34562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34562__$1,(11),out,inst_34538);
} else {
if((state_val_34563 === (5))){
var inst_34523 = (state_34562[(7)]);
var inst_34526 = (state_34562[(9)]);
var inst_34530 = (state_34562[(10)]);
var inst_34530__$1 = f.call(null,inst_34526);
var inst_34531 = cljs.core._EQ_.call(null,inst_34530__$1,inst_34523);
var inst_34532 = cljs.core.keyword_identical_QMARK_.call(null,inst_34523,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34533 = (inst_34531) || (inst_34532);
var state_34562__$1 = (function (){var statearr_34576 = state_34562;
(statearr_34576[(10)] = inst_34530__$1);

return statearr_34576;
})();
if(cljs.core.truth_(inst_34533)){
var statearr_34577_34606 = state_34562__$1;
(statearr_34577_34606[(1)] = (8));

} else {
var statearr_34578_34607 = state_34562__$1;
(statearr_34578_34607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (14))){
var inst_34555 = (state_34562[(2)]);
var inst_34556 = cljs.core.async.close_BANG_.call(null,out);
var state_34562__$1 = (function (){var statearr_34580 = state_34562;
(statearr_34580[(13)] = inst_34555);

return statearr_34580;
})();
var statearr_34581_34608 = state_34562__$1;
(statearr_34581_34608[(2)] = inst_34556);

(statearr_34581_34608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (10))){
var inst_34545 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34582_34609 = state_34562__$1;
(statearr_34582_34609[(2)] = inst_34545);

(statearr_34582_34609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (8))){
var inst_34526 = (state_34562[(9)]);
var inst_34522 = (state_34562[(8)]);
var inst_34530 = (state_34562[(10)]);
var inst_34535 = inst_34522.push(inst_34526);
var tmp34579 = inst_34522;
var inst_34522__$1 = tmp34579;
var inst_34523 = inst_34530;
var state_34562__$1 = (function (){var statearr_34583 = state_34562;
(statearr_34583[(14)] = inst_34535);

(statearr_34583[(7)] = inst_34523);

(statearr_34583[(8)] = inst_34522__$1);

return statearr_34583;
})();
var statearr_34584_34610 = state_34562__$1;
(statearr_34584_34610[(2)] = null);

(statearr_34584_34610[(1)] = (2));


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
});})(c__31784__auto___34596,out))
;
return ((function (switch__31672__auto__,c__31784__auto___34596,out){
return (function() {
var cljs$core$async$state_machine__31673__auto__ = null;
var cljs$core$async$state_machine__31673__auto____0 = (function (){
var statearr_34588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34588[(0)] = cljs$core$async$state_machine__31673__auto__);

(statearr_34588[(1)] = (1));

return statearr_34588;
});
var cljs$core$async$state_machine__31673__auto____1 = (function (state_34562){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_34562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e34589){if((e34589 instanceof Object)){
var ex__31676__auto__ = e34589;
var statearr_34590_34611 = state_34562;
(statearr_34590_34611[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34612 = state_34562;
state_34562 = G__34612;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
cljs$core$async$state_machine__31673__auto__ = function(state_34562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31673__auto____1.call(this,state_34562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31673__auto____0;
cljs$core$async$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31673__auto____1;
return cljs$core$async$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___34596,out))
})();
var state__31786__auto__ = (function (){var statearr_34591 = f__31785__auto__.call(null);
(statearr_34591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___34596);

return statearr_34591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___34596,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496284143907