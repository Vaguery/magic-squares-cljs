// Compiled by ClojureScript 1.9.562 {}
goog.provide('magic_squares.generators');
goog.require('cljs.core');
magic_squares.generators.fill_square = (function magic_squares$generators$fill_square(side){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,side,cljs.core.range.call(null,(side * side))));
});
magic_squares.generators.transpose = (function magic_squares$generators$transpose(matrix){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,matrix);
});
magic_squares.generators.rotate_seq = (function magic_squares$generators$rotate_seq(how_many,seq){
var n = cljs.core.count.call(null,seq);
return cljs.core.concat.call(null,cljs.core.drop.call(null,cljs.core.mod.call(null,how_many,n),seq),cljs.core.take.call(null,cljs.core.mod.call(null,how_many,n),seq));
});
magic_squares.generators.rows_of_matrix = (function magic_squares$generators$rows_of_matrix(matrix,label){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (idx,row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))].join('')),cljs.core.set.call(null,row)], null);
}),matrix));
});
magic_squares.generators.diags_of_matrix = (function magic_squares$generators$diags_of_matrix(matrix,offset){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reduce_kv.call(null,(function (diag,idx,row){
return cljs.core.conj.call(null,diag,cljs.core.first.call(null,magic_squares.generators.rotate_seq.call(null,(offset + idx),row)));
}),cljs.core.PersistentHashSet.EMPTY,matrix),cljs.core.reduce_kv.call(null,(function (diag,idx,row){
return cljs.core.conj.call(null,diag,cljs.core.last.call(null,magic_squares.generators.rotate_seq.call(null,(offset + (- idx)),row)));
}),cljs.core.PersistentHashSet.EMPTY,matrix)],null));
});
magic_squares.generators.many_diags = (function magic_squares$generators$many_diags(matrix,howmany){
return cljs.core.reduce.call(null,(function (p1__40158_SHARP_,p2__40159_SHARP_){
return cljs.core.into.call(null,p1__40158_SHARP_,magic_squares.generators.diags_of_matrix.call(null,matrix,p2__40159_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,howmany));
});
magic_squares.generators.semimagic_square = (function magic_squares$generators$semimagic_square(side){
var nodes = magic_squares.generators.fill_square.call(null,side);
return cljs.core.merge.call(null,magic_squares.generators.rows_of_matrix.call(null,nodes,"r"),magic_squares.generators.rows_of_matrix.call(null,magic_squares.generators.transpose.call(null,nodes),"c"));
});
magic_squares.generators.magic_square = (function magic_squares$generators$magic_square(side,diag_count){
var nodes = magic_squares.generators.fill_square.call(null,side);
var diag_labels = cljs.core.map.call(null,((function (nodes){
return (function (p1__40160_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40160_SHARP_)].join(''));
});})(nodes))
,cljs.core.range.call(null,(1),(diag_count + (1))));
return cljs.core.merge.call(null,magic_squares.generators.semimagic_square.call(null,side),cljs.core.apply.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY,cljs.core.interleave.call(null,diag_labels,magic_squares.generators.many_diags.call(null,nodes,(diag_count / (2))))));
});

//# sourceMappingURL=generators.js.map?rel=1496237361586