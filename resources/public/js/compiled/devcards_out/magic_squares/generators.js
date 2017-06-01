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
return cljs.core.reduce.call(null,(function (p1__27612_SHARP_,p2__27613_SHARP_){
return cljs.core.into.call(null,p1__27612_SHARP_,magic_squares.generators.diags_of_matrix.call(null,matrix,p2__27613_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,howmany));
});
magic_squares.generators.semimagic_square = (function magic_squares$generators$semimagic_square(side){
var nodes = magic_squares.generators.fill_square.call(null,side);
return cljs.core.merge.call(null,magic_squares.generators.rows_of_matrix.call(null,nodes,"r"),magic_squares.generators.rows_of_matrix.call(null,magic_squares.generators.transpose.call(null,nodes),"c"));
});
magic_squares.generators.magic_square = (function magic_squares$generators$magic_square(side,diag_count){
var nodes = magic_squares.generators.fill_square.call(null,side);
var diag_labels = cljs.core.map.call(null,((function (nodes){
return (function (p1__27614_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27614_SHARP_)].join(''));
});})(nodes))
,cljs.core.range.call(null,(1),(diag_count + (1))));
return cljs.core.merge.call(null,magic_squares.generators.semimagic_square.call(null,side),cljs.core.apply.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY,cljs.core.interleave.call(null,diag_labels,magic_squares.generators.many_diags.call(null,nodes,(diag_count / (2))))));
});
magic_squares.generators.sums_of_subsets = (function magic_squares$generators$sums_of_subsets(hypergraph,assignment_vector){
return cljs.core.reduce_kv.call(null,(function (scores,which,items){
return cljs.core.assoc.call(null,scores,which,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,assignment_vector,which.call(null,hypergraph))));
}),cljs.core.PersistentArrayMap.EMPTY,hypergraph);
});
magic_squares.generators.target_sum = (function magic_squares$generators$target_sum(hypergraph,assignment_vector){
return (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,magic_squares.generators.sums_of_subsets.call(null,hypergraph,assignment_vector))) / cljs.core.count.call(null,hypergraph));
});
magic_squares.generators.abs = (function magic_squares$generators$abs(n){
var x__26780__auto__ = n;
var y__26781__auto__ = (- n);
return ((x__26780__auto__ > y__26781__auto__) ? x__26780__auto__ : y__26781__auto__);
});
magic_squares.generators.subset_errors = (function magic_squares$generators$subset_errors(hypergraph,assignment_vector){
var target = magic_squares.generators.target_sum.call(null,hypergraph,assignment_vector);
var sums = magic_squares.generators.sums_of_subsets.call(null,hypergraph,assignment_vector);
var howmany = cljs.core.count.call(null,hypergraph);
return cljs.core.reduce_kv.call(null,((function (target,sums,howmany){
return (function (scores,subset,sum){
return cljs.core.assoc.call(null,scores,subset,magic_squares.generators.abs.call(null,(target - sum)));
});})(target,sums,howmany))
,cljs.core.PersistentArrayMap.EMPTY,sums);
});
magic_squares.generators.total_error = (function magic_squares$generators$total_error(hypergraph,assignment_vector){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,magic_squares.generators.subset_errors.call(null,hypergraph,assignment_vector)));
});

//# sourceMappingURL=generators.js.map?rel=1496284133480