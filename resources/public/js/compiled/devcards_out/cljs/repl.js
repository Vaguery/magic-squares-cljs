// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38535){
var map__38560 = p__38535;
var map__38560__$1 = ((((!((map__38560 == null)))?((((map__38560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38560):map__38560);
var m = map__38560__$1;
var n = cljs.core.get.call(null,map__38560__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38560__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38562_38584 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38563_38585 = null;
var count__38564_38586 = (0);
var i__38565_38587 = (0);
while(true){
if((i__38565_38587 < count__38564_38586)){
var f_38588 = cljs.core._nth.call(null,chunk__38563_38585,i__38565_38587);
cljs.core.println.call(null,"  ",f_38588);

var G__38589 = seq__38562_38584;
var G__38590 = chunk__38563_38585;
var G__38591 = count__38564_38586;
var G__38592 = (i__38565_38587 + (1));
seq__38562_38584 = G__38589;
chunk__38563_38585 = G__38590;
count__38564_38586 = G__38591;
i__38565_38587 = G__38592;
continue;
} else {
var temp__4657__auto___38593 = cljs.core.seq.call(null,seq__38562_38584);
if(temp__4657__auto___38593){
var seq__38562_38594__$1 = temp__4657__auto___38593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38562_38594__$1)){
var c__27263__auto___38595 = cljs.core.chunk_first.call(null,seq__38562_38594__$1);
var G__38596 = cljs.core.chunk_rest.call(null,seq__38562_38594__$1);
var G__38597 = c__27263__auto___38595;
var G__38598 = cljs.core.count.call(null,c__27263__auto___38595);
var G__38599 = (0);
seq__38562_38584 = G__38596;
chunk__38563_38585 = G__38597;
count__38564_38586 = G__38598;
i__38565_38587 = G__38599;
continue;
} else {
var f_38600 = cljs.core.first.call(null,seq__38562_38594__$1);
cljs.core.println.call(null,"  ",f_38600);

var G__38601 = cljs.core.next.call(null,seq__38562_38594__$1);
var G__38602 = null;
var G__38603 = (0);
var G__38604 = (0);
seq__38562_38584 = G__38601;
chunk__38563_38585 = G__38602;
count__38564_38586 = G__38603;
i__38565_38587 = G__38604;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38605 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26444__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38605);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38605)))?cljs.core.second.call(null,arglists_38605):arglists_38605));
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
var seq__38566_38606 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38567_38607 = null;
var count__38568_38608 = (0);
var i__38569_38609 = (0);
while(true){
if((i__38569_38609 < count__38568_38608)){
var vec__38570_38610 = cljs.core._nth.call(null,chunk__38567_38607,i__38569_38609);
var name_38611 = cljs.core.nth.call(null,vec__38570_38610,(0),null);
var map__38573_38612 = cljs.core.nth.call(null,vec__38570_38610,(1),null);
var map__38573_38613__$1 = ((((!((map__38573_38612 == null)))?((((map__38573_38612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38573_38612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38573_38612):map__38573_38612);
var doc_38614 = cljs.core.get.call(null,map__38573_38613__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38615 = cljs.core.get.call(null,map__38573_38613__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38611);

cljs.core.println.call(null," ",arglists_38615);

if(cljs.core.truth_(doc_38614)){
cljs.core.println.call(null," ",doc_38614);
} else {
}

var G__38616 = seq__38566_38606;
var G__38617 = chunk__38567_38607;
var G__38618 = count__38568_38608;
var G__38619 = (i__38569_38609 + (1));
seq__38566_38606 = G__38616;
chunk__38567_38607 = G__38617;
count__38568_38608 = G__38618;
i__38569_38609 = G__38619;
continue;
} else {
var temp__4657__auto___38620 = cljs.core.seq.call(null,seq__38566_38606);
if(temp__4657__auto___38620){
var seq__38566_38621__$1 = temp__4657__auto___38620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38566_38621__$1)){
var c__27263__auto___38622 = cljs.core.chunk_first.call(null,seq__38566_38621__$1);
var G__38623 = cljs.core.chunk_rest.call(null,seq__38566_38621__$1);
var G__38624 = c__27263__auto___38622;
var G__38625 = cljs.core.count.call(null,c__27263__auto___38622);
var G__38626 = (0);
seq__38566_38606 = G__38623;
chunk__38567_38607 = G__38624;
count__38568_38608 = G__38625;
i__38569_38609 = G__38626;
continue;
} else {
var vec__38575_38627 = cljs.core.first.call(null,seq__38566_38621__$1);
var name_38628 = cljs.core.nth.call(null,vec__38575_38627,(0),null);
var map__38578_38629 = cljs.core.nth.call(null,vec__38575_38627,(1),null);
var map__38578_38630__$1 = ((((!((map__38578_38629 == null)))?((((map__38578_38629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38578_38629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38578_38629):map__38578_38629);
var doc_38631 = cljs.core.get.call(null,map__38578_38630__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38632 = cljs.core.get.call(null,map__38578_38630__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38628);

cljs.core.println.call(null," ",arglists_38632);

if(cljs.core.truth_(doc_38631)){
cljs.core.println.call(null," ",doc_38631);
} else {
}

var G__38633 = cljs.core.next.call(null,seq__38566_38621__$1);
var G__38634 = null;
var G__38635 = (0);
var G__38636 = (0);
seq__38566_38606 = G__38633;
chunk__38567_38607 = G__38634;
count__38568_38608 = G__38635;
i__38569_38609 = G__38636;
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

var seq__38580 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38581 = null;
var count__38582 = (0);
var i__38583 = (0);
while(true){
if((i__38583 < count__38582)){
var role = cljs.core._nth.call(null,chunk__38581,i__38583);
var temp__4657__auto___38637__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38637__$1)){
var spec_38638 = temp__4657__auto___38637__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_38638));
} else {
}

var G__38639 = seq__38580;
var G__38640 = chunk__38581;
var G__38641 = count__38582;
var G__38642 = (i__38583 + (1));
seq__38580 = G__38639;
chunk__38581 = G__38640;
count__38582 = G__38641;
i__38583 = G__38642;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38580);
if(temp__4657__auto____$1){
var seq__38580__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38580__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__38580__$1);
var G__38643 = cljs.core.chunk_rest.call(null,seq__38580__$1);
var G__38644 = c__27263__auto__;
var G__38645 = cljs.core.count.call(null,c__27263__auto__);
var G__38646 = (0);
seq__38580 = G__38643;
chunk__38581 = G__38644;
count__38582 = G__38645;
i__38583 = G__38646;
continue;
} else {
var role = cljs.core.first.call(null,seq__38580__$1);
var temp__4657__auto___38647__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38647__$2)){
var spec_38648 = temp__4657__auto___38647__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_38648));
} else {
}

var G__38649 = cljs.core.next.call(null,seq__38580__$1);
var G__38650 = null;
var G__38651 = (0);
var G__38652 = (0);
seq__38580 = G__38649;
chunk__38581 = G__38650;
count__38582 = G__38651;
i__38583 = G__38652;
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

//# sourceMappingURL=repl.js.map?rel=1496284151466