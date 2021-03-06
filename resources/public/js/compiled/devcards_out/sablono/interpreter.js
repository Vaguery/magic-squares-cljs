// Compiled by ClojureScript 1.9.562 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');
goog.require('cljsjs.react');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__27112__auto__ = (((this$ == null))?null:this$);
var m__27113__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__27112__auto__)]);
if(!((m__27113__auto__ == null))){
return m__27113__auto__.call(null,this$);
} else {
var m__27113__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__27113__auto____$1 == null))){
return m__27113__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var next_state = ({});
goog.object.extend(next_state,next_props,({"onChange": goog.object.get(component,"onChange")}));

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
return React.createClass(({"displayName": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("wrapped-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''), "getInitialState": (function (){
var this$ = this;
var state = ({});
goog.object.extend(state,this$.props,({"onChange": goog.object.get(this$,"onChange")}));

return state;
}), "onChange": (function (event){
var this$ = this;
var temp__4657__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__4657__auto__)){
var handler = temp__4657__auto__;
handler.call(null,event);

return sablono.interpreter.update_state.call(null,this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = goog.object.get(ReactDOM.findDOMNode(this$),property);
if(cljs.core.not_EQ_.call(null,state_value,element_value)){
return sablono.interpreter.update_state.call(null,this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state.call(null,this$,new_props,property,goog.object.get(new_props,property));
}
}), "render": (function (){
var this$ = this;
return React.createElement(element,this$.state);
})}));
});
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element.call(null,"input","value");
sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element.call(null,"input","checked");
sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element.call(null,"select","value");
sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element.call(null,"textarea","value");
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__26432__auto__ = cljs.core.object_QMARK_.call(null,props);
if(and__26432__auto__){
var G__27805 = type;
switch (G__27805) {
case "input":
return (typeof props.checked !== 'undefined') || (typeof props.value !== 'undefined');

break;
case "select":
return typeof props.value !== 'undefined';

break;
case "textarea":
return typeof props.value !== 'undefined';

break;
default:
return false;

}
} else {
return and__26432__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_.call(null,type,props)){
var G__27809 = type;
switch (G__27809) {
case "input":
var G__27810 = (function (){var and__26432__auto__ = cljs.core.object_QMARK_.call(null,props);
if(and__26432__auto__){
return props.type;
} else {
return and__26432__auto__;
}
})();
switch (G__27810) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__27564__auto__ = [];
var len__27557__auto___27816 = arguments.length;
var i__27558__auto___27817 = (0);
while(true){
if((i__27558__auto___27817 < len__27557__auto___27816)){
args__27564__auto__.push((arguments[i__27558__auto___27817]));

var G__27818 = (i__27558__auto___27817 + (1));
i__27558__auto___27817 = G__27818;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((2) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27565__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var class$ = sablono.interpreter.element_class.call(null,type,props);
var children__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,children);
if(cljs.core.empty_QMARK_.call(null,children__$1)){
return React.createElement(class$,props);
} else {
return cljs.core.apply.call(null,React.createElement,class$,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq27813){
var G__27814 = cljs.core.first.call(null,seq27813);
var seq27813__$1 = cljs.core.next.call(null,seq27813);
var G__27815 = cljs.core.first.call(null,seq27813__$1);
var seq27813__$2 = cljs.core.next.call(null,seq27813__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__27814,G__27815,seq27813__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__4657__auto__ = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
if(cljs.core.truth_(temp__4657__auto__)){
var js_attrs = temp__4657__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__27822 = sablono.normalize.element.call(null,element);
var type = cljs.core.nth.call(null,vec__27822,(0),null);
var attrs = cljs.core.nth.call(null,vec__27822,(1),null);
var content = cljs.core.nth.call(null,vec__27822,(2),null);
return cljs.core.apply.call(null,sablono.interpreter.create_element,type,sablono.interpreter.attributes.call(null,attrs),sablono.interpreter.interpret_seq.call(null,content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of
 *   an element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))){
return sablono.interpreter.element.call(null,x);
} else {
return sablono.interpreter.interpret_seq.call(null,x);
}
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

//# sourceMappingURL=interpreter.js.map?rel=1496284134307