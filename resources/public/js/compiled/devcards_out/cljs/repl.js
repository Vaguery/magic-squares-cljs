// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38360){
var map__38385 = p__38360;
var map__38385__$1 = ((((!((map__38385 == null)))?((((map__38385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38385):map__38385);
var m = map__38385__$1;
var n = cljs.core.get.call(null,map__38385__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38387_38409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38388_38410 = null;
var count__38389_38411 = (0);
var i__38390_38412 = (0);
while(true){
if((i__38390_38412 < count__38389_38411)){
var f_38413 = cljs.core._nth.call(null,chunk__38388_38410,i__38390_38412);
cljs.core.println.call(null,"  ",f_38413);

var G__38414 = seq__38387_38409;
var G__38415 = chunk__38388_38410;
var G__38416 = count__38389_38411;
var G__38417 = (i__38390_38412 + (1));
seq__38387_38409 = G__38414;
chunk__38388_38410 = G__38415;
count__38389_38411 = G__38416;
i__38390_38412 = G__38417;
continue;
} else {
var temp__4657__auto___38418 = cljs.core.seq.call(null,seq__38387_38409);
if(temp__4657__auto___38418){
var seq__38387_38419__$1 = temp__4657__auto___38418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38387_38419__$1)){
var c__27263__auto___38420 = cljs.core.chunk_first.call(null,seq__38387_38419__$1);
var G__38421 = cljs.core.chunk_rest.call(null,seq__38387_38419__$1);
var G__38422 = c__27263__auto___38420;
var G__38423 = cljs.core.count.call(null,c__27263__auto___38420);
var G__38424 = (0);
seq__38387_38409 = G__38421;
chunk__38388_38410 = G__38422;
count__38389_38411 = G__38423;
i__38390_38412 = G__38424;
continue;
} else {
var f_38425 = cljs.core.first.call(null,seq__38387_38419__$1);
cljs.core.println.call(null,"  ",f_38425);

var G__38426 = cljs.core.next.call(null,seq__38387_38419__$1);
var G__38427 = null;
var G__38428 = (0);
var G__38429 = (0);
seq__38387_38409 = G__38426;
chunk__38388_38410 = G__38427;
count__38389_38411 = G__38428;
i__38390_38412 = G__38429;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38430 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26444__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38430);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38430)))?cljs.core.second.call(null,arglists_38430):arglists_38430));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38391_38431 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38392_38432 = null;
var count__38393_38433 = (0);
var i__38394_38434 = (0);
while(true){
if((i__38394_38434 < count__38393_38433)){
var vec__38395_38435 = cljs.core._nth.call(null,chunk__38392_38432,i__38394_38434);
var name_38436 = cljs.core.nth.call(null,vec__38395_38435,(0),null);
var map__38398_38437 = cljs.core.nth.call(null,vec__38395_38435,(1),null);
var map__38398_38438__$1 = ((((!((map__38398_38437 == null)))?((((map__38398_38437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38398_38437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38398_38437):map__38398_38437);
var doc_38439 = cljs.core.get.call(null,map__38398_38438__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38440 = cljs.core.get.call(null,map__38398_38438__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38436);

cljs.core.println.call(null," ",arglists_38440);

if(cljs.core.truth_(doc_38439)){
cljs.core.println.call(null," ",doc_38439);
} else {
}

var G__38441 = seq__38391_38431;
var G__38442 = chunk__38392_38432;
var G__38443 = count__38393_38433;
var G__38444 = (i__38394_38434 + (1));
seq__38391_38431 = G__38441;
chunk__38392_38432 = G__38442;
count__38393_38433 = G__38443;
i__38394_38434 = G__38444;
continue;
} else {
var temp__4657__auto___38445 = cljs.core.seq.call(null,seq__38391_38431);
if(temp__4657__auto___38445){
var seq__38391_38446__$1 = temp__4657__auto___38445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38391_38446__$1)){
var c__27263__auto___38447 = cljs.core.chunk_first.call(null,seq__38391_38446__$1);
var G__38448 = cljs.core.chunk_rest.call(null,seq__38391_38446__$1);
var G__38449 = c__27263__auto___38447;
var G__38450 = cljs.core.count.call(null,c__27263__auto___38447);
var G__38451 = (0);
seq__38391_38431 = G__38448;
chunk__38392_38432 = G__38449;
count__38393_38433 = G__38450;
i__38394_38434 = G__38451;
continue;
} else {
var vec__38400_38452 = cljs.core.first.call(null,seq__38391_38446__$1);
var name_38453 = cljs.core.nth.call(null,vec__38400_38452,(0),null);
var map__38403_38454 = cljs.core.nth.call(null,vec__38400_38452,(1),null);
var map__38403_38455__$1 = ((((!((map__38403_38454 == null)))?((((map__38403_38454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38403_38454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38403_38454):map__38403_38454);
var doc_38456 = cljs.core.get.call(null,map__38403_38455__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38457 = cljs.core.get.call(null,map__38403_38455__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38453);

cljs.core.println.call(null," ",arglists_38457);

if(cljs.core.truth_(doc_38456)){
cljs.core.println.call(null," ",doc_38456);
} else {
}

var G__38458 = cljs.core.next.call(null,seq__38391_38446__$1);
var G__38459 = null;
var G__38460 = (0);
var G__38461 = (0);
seq__38391_38431 = G__38458;
chunk__38392_38432 = G__38459;
count__38393_38433 = G__38460;
i__38394_38434 = G__38461;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38405 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38406 = null;
var count__38407 = (0);
var i__38408 = (0);
while(true){
if((i__38408 < count__38407)){
var role = cljs.core._nth.call(null,chunk__38406,i__38408);
var temp__4657__auto___38462__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38462__$1)){
var spec_38463 = temp__4657__auto___38462__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_38463));
} else {
}

var G__38464 = seq__38405;
var G__38465 = chunk__38406;
var G__38466 = count__38407;
var G__38467 = (i__38408 + (1));
seq__38405 = G__38464;
chunk__38406 = G__38465;
count__38407 = G__38466;
i__38408 = G__38467;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38405);
if(temp__4657__auto____$1){
var seq__38405__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38405__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__38405__$1);
var G__38468 = cljs.core.chunk_rest.call(null,seq__38405__$1);
var G__38469 = c__27263__auto__;
var G__38470 = cljs.core.count.call(null,c__27263__auto__);
var G__38471 = (0);
seq__38405 = G__38468;
chunk__38406 = G__38469;
count__38407 = G__38470;
i__38408 = G__38471;
continue;
} else {
var role = cljs.core.first.call(null,seq__38405__$1);
var temp__4657__auto___38472__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38472__$2)){
var spec_38473 = temp__4657__auto___38472__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_38473));
} else {
}

var G__38474 = cljs.core.next.call(null,seq__38405__$1);
var G__38475 = null;
var G__38476 = (0);
var G__38477 = (0);
seq__38405 = G__38474;
chunk__38406 = G__38475;
count__38407 = G__38476;
i__38408 = G__38477;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1496186269412