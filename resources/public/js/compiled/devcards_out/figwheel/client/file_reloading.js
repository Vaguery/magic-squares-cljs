// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26444__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26444__auto__){
return or__26444__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26444__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36084_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36084_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36089 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36090 = null;
var count__36091 = (0);
var i__36092 = (0);
while(true){
if((i__36092 < count__36091)){
var n = cljs.core._nth.call(null,chunk__36090,i__36092);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36093 = seq__36089;
var G__36094 = chunk__36090;
var G__36095 = count__36091;
var G__36096 = (i__36092 + (1));
seq__36089 = G__36093;
chunk__36090 = G__36094;
count__36091 = G__36095;
i__36092 = G__36096;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36089);
if(temp__4657__auto__){
var seq__36089__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36089__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__36089__$1);
var G__36097 = cljs.core.chunk_rest.call(null,seq__36089__$1);
var G__36098 = c__27263__auto__;
var G__36099 = cljs.core.count.call(null,c__27263__auto__);
var G__36100 = (0);
seq__36089 = G__36097;
chunk__36090 = G__36098;
count__36091 = G__36099;
i__36092 = G__36100;
continue;
} else {
var n = cljs.core.first.call(null,seq__36089__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36101 = cljs.core.next.call(null,seq__36089__$1);
var G__36102 = null;
var G__36103 = (0);
var G__36104 = (0);
seq__36089 = G__36101;
chunk__36090 = G__36102;
count__36091 = G__36103;
i__36092 = G__36104;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36155_36166 = cljs.core.seq.call(null,deps);
var chunk__36156_36167 = null;
var count__36157_36168 = (0);
var i__36158_36169 = (0);
while(true){
if((i__36158_36169 < count__36157_36168)){
var dep_36170 = cljs.core._nth.call(null,chunk__36156_36167,i__36158_36169);
topo_sort_helper_STAR_.call(null,dep_36170,(depth + (1)),state);

var G__36171 = seq__36155_36166;
var G__36172 = chunk__36156_36167;
var G__36173 = count__36157_36168;
var G__36174 = (i__36158_36169 + (1));
seq__36155_36166 = G__36171;
chunk__36156_36167 = G__36172;
count__36157_36168 = G__36173;
i__36158_36169 = G__36174;
continue;
} else {
var temp__4657__auto___36175 = cljs.core.seq.call(null,seq__36155_36166);
if(temp__4657__auto___36175){
var seq__36155_36176__$1 = temp__4657__auto___36175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36155_36176__$1)){
var c__27263__auto___36177 = cljs.core.chunk_first.call(null,seq__36155_36176__$1);
var G__36178 = cljs.core.chunk_rest.call(null,seq__36155_36176__$1);
var G__36179 = c__27263__auto___36177;
var G__36180 = cljs.core.count.call(null,c__27263__auto___36177);
var G__36181 = (0);
seq__36155_36166 = G__36178;
chunk__36156_36167 = G__36179;
count__36157_36168 = G__36180;
i__36158_36169 = G__36181;
continue;
} else {
var dep_36182 = cljs.core.first.call(null,seq__36155_36176__$1);
topo_sort_helper_STAR_.call(null,dep_36182,(depth + (1)),state);

var G__36183 = cljs.core.next.call(null,seq__36155_36176__$1);
var G__36184 = null;
var G__36185 = (0);
var G__36186 = (0);
seq__36155_36166 = G__36183;
chunk__36156_36167 = G__36184;
count__36157_36168 = G__36185;
i__36158_36169 = G__36186;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36159){
var vec__36163 = p__36159;
var seq__36164 = cljs.core.seq.call(null,vec__36163);
var first__36165 = cljs.core.first.call(null,seq__36164);
var seq__36164__$1 = cljs.core.next.call(null,seq__36164);
var x = first__36165;
var xs = seq__36164__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36163,seq__36164,first__36165,seq__36164__$1,x,xs,get_deps__$1){
return (function (p1__36105_SHARP_){
return clojure.set.difference.call(null,p1__36105_SHARP_,x);
});})(vec__36163,seq__36164,first__36165,seq__36164__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36199 = cljs.core.seq.call(null,provides);
var chunk__36200 = null;
var count__36201 = (0);
var i__36202 = (0);
while(true){
if((i__36202 < count__36201)){
var prov = cljs.core._nth.call(null,chunk__36200,i__36202);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36203_36211 = cljs.core.seq.call(null,requires);
var chunk__36204_36212 = null;
var count__36205_36213 = (0);
var i__36206_36214 = (0);
while(true){
if((i__36206_36214 < count__36205_36213)){
var req_36215 = cljs.core._nth.call(null,chunk__36204_36212,i__36206_36214);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36215,prov);

var G__36216 = seq__36203_36211;
var G__36217 = chunk__36204_36212;
var G__36218 = count__36205_36213;
var G__36219 = (i__36206_36214 + (1));
seq__36203_36211 = G__36216;
chunk__36204_36212 = G__36217;
count__36205_36213 = G__36218;
i__36206_36214 = G__36219;
continue;
} else {
var temp__4657__auto___36220 = cljs.core.seq.call(null,seq__36203_36211);
if(temp__4657__auto___36220){
var seq__36203_36221__$1 = temp__4657__auto___36220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36203_36221__$1)){
var c__27263__auto___36222 = cljs.core.chunk_first.call(null,seq__36203_36221__$1);
var G__36223 = cljs.core.chunk_rest.call(null,seq__36203_36221__$1);
var G__36224 = c__27263__auto___36222;
var G__36225 = cljs.core.count.call(null,c__27263__auto___36222);
var G__36226 = (0);
seq__36203_36211 = G__36223;
chunk__36204_36212 = G__36224;
count__36205_36213 = G__36225;
i__36206_36214 = G__36226;
continue;
} else {
var req_36227 = cljs.core.first.call(null,seq__36203_36221__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36227,prov);

var G__36228 = cljs.core.next.call(null,seq__36203_36221__$1);
var G__36229 = null;
var G__36230 = (0);
var G__36231 = (0);
seq__36203_36211 = G__36228;
chunk__36204_36212 = G__36229;
count__36205_36213 = G__36230;
i__36206_36214 = G__36231;
continue;
}
} else {
}
}
break;
}

var G__36232 = seq__36199;
var G__36233 = chunk__36200;
var G__36234 = count__36201;
var G__36235 = (i__36202 + (1));
seq__36199 = G__36232;
chunk__36200 = G__36233;
count__36201 = G__36234;
i__36202 = G__36235;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36199);
if(temp__4657__auto__){
var seq__36199__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36199__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__36199__$1);
var G__36236 = cljs.core.chunk_rest.call(null,seq__36199__$1);
var G__36237 = c__27263__auto__;
var G__36238 = cljs.core.count.call(null,c__27263__auto__);
var G__36239 = (0);
seq__36199 = G__36236;
chunk__36200 = G__36237;
count__36201 = G__36238;
i__36202 = G__36239;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36199__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36207_36240 = cljs.core.seq.call(null,requires);
var chunk__36208_36241 = null;
var count__36209_36242 = (0);
var i__36210_36243 = (0);
while(true){
if((i__36210_36243 < count__36209_36242)){
var req_36244 = cljs.core._nth.call(null,chunk__36208_36241,i__36210_36243);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36244,prov);

var G__36245 = seq__36207_36240;
var G__36246 = chunk__36208_36241;
var G__36247 = count__36209_36242;
var G__36248 = (i__36210_36243 + (1));
seq__36207_36240 = G__36245;
chunk__36208_36241 = G__36246;
count__36209_36242 = G__36247;
i__36210_36243 = G__36248;
continue;
} else {
var temp__4657__auto___36249__$1 = cljs.core.seq.call(null,seq__36207_36240);
if(temp__4657__auto___36249__$1){
var seq__36207_36250__$1 = temp__4657__auto___36249__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36207_36250__$1)){
var c__27263__auto___36251 = cljs.core.chunk_first.call(null,seq__36207_36250__$1);
var G__36252 = cljs.core.chunk_rest.call(null,seq__36207_36250__$1);
var G__36253 = c__27263__auto___36251;
var G__36254 = cljs.core.count.call(null,c__27263__auto___36251);
var G__36255 = (0);
seq__36207_36240 = G__36252;
chunk__36208_36241 = G__36253;
count__36209_36242 = G__36254;
i__36210_36243 = G__36255;
continue;
} else {
var req_36256 = cljs.core.first.call(null,seq__36207_36250__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36256,prov);

var G__36257 = cljs.core.next.call(null,seq__36207_36250__$1);
var G__36258 = null;
var G__36259 = (0);
var G__36260 = (0);
seq__36207_36240 = G__36257;
chunk__36208_36241 = G__36258;
count__36209_36242 = G__36259;
i__36210_36243 = G__36260;
continue;
}
} else {
}
}
break;
}

var G__36261 = cljs.core.next.call(null,seq__36199__$1);
var G__36262 = null;
var G__36263 = (0);
var G__36264 = (0);
seq__36199 = G__36261;
chunk__36200 = G__36262;
count__36201 = G__36263;
i__36202 = G__36264;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36269_36273 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36270_36274 = null;
var count__36271_36275 = (0);
var i__36272_36276 = (0);
while(true){
if((i__36272_36276 < count__36271_36275)){
var ns_36277 = cljs.core._nth.call(null,chunk__36270_36274,i__36272_36276);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36277);

var G__36278 = seq__36269_36273;
var G__36279 = chunk__36270_36274;
var G__36280 = count__36271_36275;
var G__36281 = (i__36272_36276 + (1));
seq__36269_36273 = G__36278;
chunk__36270_36274 = G__36279;
count__36271_36275 = G__36280;
i__36272_36276 = G__36281;
continue;
} else {
var temp__4657__auto___36282 = cljs.core.seq.call(null,seq__36269_36273);
if(temp__4657__auto___36282){
var seq__36269_36283__$1 = temp__4657__auto___36282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36269_36283__$1)){
var c__27263__auto___36284 = cljs.core.chunk_first.call(null,seq__36269_36283__$1);
var G__36285 = cljs.core.chunk_rest.call(null,seq__36269_36283__$1);
var G__36286 = c__27263__auto___36284;
var G__36287 = cljs.core.count.call(null,c__27263__auto___36284);
var G__36288 = (0);
seq__36269_36273 = G__36285;
chunk__36270_36274 = G__36286;
count__36271_36275 = G__36287;
i__36272_36276 = G__36288;
continue;
} else {
var ns_36289 = cljs.core.first.call(null,seq__36269_36283__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36289);

var G__36290 = cljs.core.next.call(null,seq__36269_36283__$1);
var G__36291 = null;
var G__36292 = (0);
var G__36293 = (0);
seq__36269_36273 = G__36290;
chunk__36270_36274 = G__36291;
count__36271_36275 = G__36292;
i__36272_36276 = G__36293;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26444__auto__ = goog.require__;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36294__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36295__i = 0, G__36295__a = new Array(arguments.length -  0);
while (G__36295__i < G__36295__a.length) {G__36295__a[G__36295__i] = arguments[G__36295__i + 0]; ++G__36295__i;}
  args = new cljs.core.IndexedSeq(G__36295__a,0,null);
} 
return G__36294__delegate.call(this,args);};
G__36294.cljs$lang$maxFixedArity = 0;
G__36294.cljs$lang$applyTo = (function (arglist__36296){
var args = cljs.core.seq(arglist__36296);
return G__36294__delegate(args);
});
G__36294.cljs$core$IFn$_invoke$arity$variadic = G__36294__delegate;
return G__36294;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36297 = cljs.core._EQ_;
var expr__36298 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36298))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36297,expr__36298){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36297,expr__36298))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36297,expr__36298){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36300){if((e36300 instanceof Error)){
var e = e36300;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36300;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36297,expr__36298))
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36298))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36298))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36298))){
return ((function (pred__36297,expr__36298){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36301){if((e36301 instanceof Error)){
var e = e36301;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36301;

}
}})());
});
;})(pred__36297,expr__36298))
} else {
return ((function (pred__36297,expr__36298){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36297,expr__36298))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36302,callback){
var map__36305 = p__36302;
var map__36305__$1 = ((((!((map__36305 == null)))?((((map__36305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36305):map__36305);
var file_msg = map__36305__$1;
var request_url = cljs.core.get.call(null,map__36305__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36305,map__36305__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36305,map__36305__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__){
return (function (state_36329){
var state_val_36330 = (state_36329[(1)]);
if((state_val_36330 === (7))){
var inst_36325 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36331_36351 = state_36329__$1;
(statearr_36331_36351[(2)] = inst_36325);

(statearr_36331_36351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (1))){
var state_36329__$1 = state_36329;
var statearr_36332_36352 = state_36329__$1;
(statearr_36332_36352[(2)] = null);

(statearr_36332_36352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (4))){
var inst_36309 = (state_36329[(7)]);
var inst_36309__$1 = (state_36329[(2)]);
var state_36329__$1 = (function (){var statearr_36333 = state_36329;
(statearr_36333[(7)] = inst_36309__$1);

return statearr_36333;
})();
if(cljs.core.truth_(inst_36309__$1)){
var statearr_36334_36353 = state_36329__$1;
(statearr_36334_36353[(1)] = (5));

} else {
var statearr_36335_36354 = state_36329__$1;
(statearr_36335_36354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (6))){
var state_36329__$1 = state_36329;
var statearr_36336_36355 = state_36329__$1;
(statearr_36336_36355[(2)] = null);

(statearr_36336_36355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (3))){
var inst_36327 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36329__$1,inst_36327);
} else {
if((state_val_36330 === (2))){
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36329__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36330 === (11))){
var inst_36321 = (state_36329[(2)]);
var state_36329__$1 = (function (){var statearr_36337 = state_36329;
(statearr_36337[(8)] = inst_36321);

return statearr_36337;
})();
var statearr_36338_36356 = state_36329__$1;
(statearr_36338_36356[(2)] = null);

(statearr_36338_36356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (9))){
var inst_36315 = (state_36329[(9)]);
var inst_36313 = (state_36329[(10)]);
var inst_36317 = inst_36315.call(null,inst_36313);
var state_36329__$1 = state_36329;
var statearr_36339_36357 = state_36329__$1;
(statearr_36339_36357[(2)] = inst_36317);

(statearr_36339_36357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (5))){
var inst_36309 = (state_36329[(7)]);
var inst_36311 = figwheel.client.file_reloading.blocking_load.call(null,inst_36309);
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36329__$1,(8),inst_36311);
} else {
if((state_val_36330 === (10))){
var inst_36313 = (state_36329[(10)]);
var inst_36319 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36313);
var state_36329__$1 = state_36329;
var statearr_36340_36358 = state_36329__$1;
(statearr_36340_36358[(2)] = inst_36319);

(statearr_36340_36358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (8))){
var inst_36315 = (state_36329[(9)]);
var inst_36309 = (state_36329[(7)]);
var inst_36313 = (state_36329[(2)]);
var inst_36314 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36315__$1 = cljs.core.get.call(null,inst_36314,inst_36309);
var state_36329__$1 = (function (){var statearr_36341 = state_36329;
(statearr_36341[(9)] = inst_36315__$1);

(statearr_36341[(10)] = inst_36313);

return statearr_36341;
})();
if(cljs.core.truth_(inst_36315__$1)){
var statearr_36342_36359 = state_36329__$1;
(statearr_36342_36359[(1)] = (9));

} else {
var statearr_36343_36360 = state_36329__$1;
(statearr_36343_36360[(1)] = (10));

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
});})(c__31784__auto__))
;
return ((function (switch__31672__auto__,c__31784__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31673__auto__ = null;
var figwheel$client$file_reloading$state_machine__31673__auto____0 = (function (){
var statearr_36347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36347[(0)] = figwheel$client$file_reloading$state_machine__31673__auto__);

(statearr_36347[(1)] = (1));

return statearr_36347;
});
var figwheel$client$file_reloading$state_machine__31673__auto____1 = (function (state_36329){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_36329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e36348){if((e36348 instanceof Object)){
var ex__31676__auto__ = e36348;
var statearr_36349_36361 = state_36329;
(statearr_36349_36361[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36362 = state_36329;
state_36329 = G__36362;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31673__auto__ = function(state_36329){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31673__auto____1.call(this,state_36329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31673__auto____0;
figwheel$client$file_reloading$state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31673__auto____1;
return figwheel$client$file_reloading$state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__))
})();
var state__31786__auto__ = (function (){var statearr_36350 = f__31785__auto__.call(null);
(statearr_36350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_36350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__))
);

return c__31784__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36363,callback){
var map__36366 = p__36363;
var map__36366__$1 = ((((!((map__36366 == null)))?((((map__36366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36366):map__36366);
var file_msg = map__36366__$1;
var namespace = cljs.core.get.call(null,map__36366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36366,map__36366__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36366,map__36366__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36368){
var map__36371 = p__36368;
var map__36371__$1 = ((((!((map__36371 == null)))?((((map__36371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36371):map__36371);
var file_msg = map__36371__$1;
var namespace = cljs.core.get.call(null,map__36371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36373){
var map__36376 = p__36373;
var map__36376__$1 = ((((!((map__36376 == null)))?((((map__36376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36376):map__36376);
var file_msg = map__36376__$1;
var namespace = cljs.core.get.call(null,map__36376__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26432__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26432__auto__){
var or__26444__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
var or__26444__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26444__auto____$1)){
return or__26444__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26432__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36378,callback){
var map__36381 = p__36378;
var map__36381__$1 = ((((!((map__36381 == null)))?((((map__36381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36381):map__36381);
var file_msg = map__36381__$1;
var request_url = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31784__auto___36485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___36485,out){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___36485,out){
return (function (state_36467){
var state_val_36468 = (state_36467[(1)]);
if((state_val_36468 === (1))){
var inst_36441 = cljs.core.seq.call(null,files);
var inst_36442 = cljs.core.first.call(null,inst_36441);
var inst_36443 = cljs.core.next.call(null,inst_36441);
var inst_36444 = files;
var state_36467__$1 = (function (){var statearr_36469 = state_36467;
(statearr_36469[(7)] = inst_36442);

(statearr_36469[(8)] = inst_36444);

(statearr_36469[(9)] = inst_36443);

return statearr_36469;
})();
var statearr_36470_36486 = state_36467__$1;
(statearr_36470_36486[(2)] = null);

(statearr_36470_36486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36468 === (2))){
var inst_36444 = (state_36467[(8)]);
var inst_36450 = (state_36467[(10)]);
var inst_36449 = cljs.core.seq.call(null,inst_36444);
var inst_36450__$1 = cljs.core.first.call(null,inst_36449);
var inst_36451 = cljs.core.next.call(null,inst_36449);
var inst_36452 = (inst_36450__$1 == null);
var inst_36453 = cljs.core.not.call(null,inst_36452);
var state_36467__$1 = (function (){var statearr_36471 = state_36467;
(statearr_36471[(11)] = inst_36451);

(statearr_36471[(10)] = inst_36450__$1);

return statearr_36471;
})();
if(inst_36453){
var statearr_36472_36487 = state_36467__$1;
(statearr_36472_36487[(1)] = (4));

} else {
var statearr_36473_36488 = state_36467__$1;
(statearr_36473_36488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36468 === (3))){
var inst_36465 = (state_36467[(2)]);
var state_36467__$1 = state_36467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36467__$1,inst_36465);
} else {
if((state_val_36468 === (4))){
var inst_36450 = (state_36467[(10)]);
var inst_36455 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36450);
var state_36467__$1 = state_36467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36467__$1,(7),inst_36455);
} else {
if((state_val_36468 === (5))){
var inst_36461 = cljs.core.async.close_BANG_.call(null,out);
var state_36467__$1 = state_36467;
var statearr_36474_36489 = state_36467__$1;
(statearr_36474_36489[(2)] = inst_36461);

(statearr_36474_36489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36468 === (6))){
var inst_36463 = (state_36467[(2)]);
var state_36467__$1 = state_36467;
var statearr_36475_36490 = state_36467__$1;
(statearr_36475_36490[(2)] = inst_36463);

(statearr_36475_36490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36468 === (7))){
var inst_36451 = (state_36467[(11)]);
var inst_36457 = (state_36467[(2)]);
var inst_36458 = cljs.core.async.put_BANG_.call(null,out,inst_36457);
var inst_36444 = inst_36451;
var state_36467__$1 = (function (){var statearr_36476 = state_36467;
(statearr_36476[(8)] = inst_36444);

(statearr_36476[(12)] = inst_36458);

return statearr_36476;
})();
var statearr_36477_36491 = state_36467__$1;
(statearr_36477_36491[(2)] = null);

(statearr_36477_36491[(1)] = (2));


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
});})(c__31784__auto___36485,out))
;
return ((function (switch__31672__auto__,c__31784__auto___36485,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto____0 = (function (){
var statearr_36481 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36481[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto__);

(statearr_36481[(1)] = (1));

return statearr_36481;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto____1 = (function (state_36467){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_36467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e36482){if((e36482 instanceof Object)){
var ex__31676__auto__ = e36482;
var statearr_36483_36492 = state_36467;
(statearr_36483_36492[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36493 = state_36467;
state_36467 = G__36493;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto__ = function(state_36467){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto____1.call(this,state_36467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___36485,out))
})();
var state__31786__auto__ = (function (){var statearr_36484 = f__31785__auto__.call(null);
(statearr_36484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___36485);

return statearr_36484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___36485,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36494,opts){
var map__36498 = p__36494;
var map__36498__$1 = ((((!((map__36498 == null)))?((((map__36498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36498):map__36498);
var eval_body = cljs.core.get.call(null,map__36498__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26432__auto__ = eval_body;
if(cljs.core.truth_(and__26432__auto__)){
return typeof eval_body === 'string';
} else {
return and__26432__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36500){var e = e36500;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36501_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36501_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36510){
var vec__36511 = p__36510;
var k = cljs.core.nth.call(null,vec__36511,(0),null);
var v = cljs.core.nth.call(null,vec__36511,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36514){
var vec__36515 = p__36514;
var k = cljs.core.nth.call(null,vec__36515,(0),null);
var v = cljs.core.nth.call(null,vec__36515,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36521,p__36522){
var map__36770 = p__36521;
var map__36770__$1 = ((((!((map__36770 == null)))?((((map__36770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36770):map__36770);
var opts = map__36770__$1;
var before_jsload = cljs.core.get.call(null,map__36770__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36770__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36770__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36771 = p__36522;
var map__36771__$1 = ((((!((map__36771 == null)))?((((map__36771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36771):map__36771);
var msg = map__36771__$1;
var files = cljs.core.get.call(null,map__36771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36771__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36771__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36925){
var state_val_36926 = (state_36925[(1)]);
if((state_val_36926 === (7))){
var inst_36786 = (state_36925[(7)]);
var inst_36785 = (state_36925[(8)]);
var inst_36788 = (state_36925[(9)]);
var inst_36787 = (state_36925[(10)]);
var inst_36793 = cljs.core._nth.call(null,inst_36786,inst_36788);
var inst_36794 = figwheel.client.file_reloading.eval_body.call(null,inst_36793,opts);
var inst_36795 = (inst_36788 + (1));
var tmp36927 = inst_36786;
var tmp36928 = inst_36785;
var tmp36929 = inst_36787;
var inst_36785__$1 = tmp36928;
var inst_36786__$1 = tmp36927;
var inst_36787__$1 = tmp36929;
var inst_36788__$1 = inst_36795;
var state_36925__$1 = (function (){var statearr_36930 = state_36925;
(statearr_36930[(7)] = inst_36786__$1);

(statearr_36930[(11)] = inst_36794);

(statearr_36930[(8)] = inst_36785__$1);

(statearr_36930[(9)] = inst_36788__$1);

(statearr_36930[(10)] = inst_36787__$1);

return statearr_36930;
})();
var statearr_36931_37017 = state_36925__$1;
(statearr_36931_37017[(2)] = null);

(statearr_36931_37017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (20))){
var inst_36828 = (state_36925[(12)]);
var inst_36836 = figwheel.client.file_reloading.sort_files.call(null,inst_36828);
var state_36925__$1 = state_36925;
var statearr_36932_37018 = state_36925__$1;
(statearr_36932_37018[(2)] = inst_36836);

(statearr_36932_37018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (27))){
var state_36925__$1 = state_36925;
var statearr_36933_37019 = state_36925__$1;
(statearr_36933_37019[(2)] = null);

(statearr_36933_37019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (1))){
var inst_36777 = (state_36925[(13)]);
var inst_36774 = before_jsload.call(null,files);
var inst_36775 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36776 = (function (){return ((function (inst_36777,inst_36774,inst_36775,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36518_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36518_SHARP_);
});
;})(inst_36777,inst_36774,inst_36775,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36777__$1 = cljs.core.filter.call(null,inst_36776,files);
var inst_36778 = cljs.core.not_empty.call(null,inst_36777__$1);
var state_36925__$1 = (function (){var statearr_36934 = state_36925;
(statearr_36934[(14)] = inst_36774);

(statearr_36934[(13)] = inst_36777__$1);

(statearr_36934[(15)] = inst_36775);

return statearr_36934;
})();
if(cljs.core.truth_(inst_36778)){
var statearr_36935_37020 = state_36925__$1;
(statearr_36935_37020[(1)] = (2));

} else {
var statearr_36936_37021 = state_36925__$1;
(statearr_36936_37021[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (24))){
var state_36925__$1 = state_36925;
var statearr_36937_37022 = state_36925__$1;
(statearr_36937_37022[(2)] = null);

(statearr_36937_37022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (39))){
var inst_36878 = (state_36925[(16)]);
var state_36925__$1 = state_36925;
var statearr_36938_37023 = state_36925__$1;
(statearr_36938_37023[(2)] = inst_36878);

(statearr_36938_37023[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (46))){
var inst_36920 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36939_37024 = state_36925__$1;
(statearr_36939_37024[(2)] = inst_36920);

(statearr_36939_37024[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (4))){
var inst_36822 = (state_36925[(2)]);
var inst_36823 = cljs.core.List.EMPTY;
var inst_36824 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36823);
var inst_36825 = (function (){return ((function (inst_36822,inst_36823,inst_36824,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36519_SHARP_){
var and__26432__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36519_SHARP_);
if(cljs.core.truth_(and__26432__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36519_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36519_SHARP_)));
} else {
return and__26432__auto__;
}
});
;})(inst_36822,inst_36823,inst_36824,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36826 = cljs.core.filter.call(null,inst_36825,files);
var inst_36827 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36828 = cljs.core.concat.call(null,inst_36826,inst_36827);
var state_36925__$1 = (function (){var statearr_36940 = state_36925;
(statearr_36940[(17)] = inst_36824);

(statearr_36940[(18)] = inst_36822);

(statearr_36940[(12)] = inst_36828);

return statearr_36940;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36941_37025 = state_36925__$1;
(statearr_36941_37025[(1)] = (16));

} else {
var statearr_36942_37026 = state_36925__$1;
(statearr_36942_37026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (15))){
var inst_36812 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36943_37027 = state_36925__$1;
(statearr_36943_37027[(2)] = inst_36812);

(statearr_36943_37027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (21))){
var inst_36838 = (state_36925[(19)]);
var inst_36838__$1 = (state_36925[(2)]);
var inst_36839 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36838__$1);
var state_36925__$1 = (function (){var statearr_36944 = state_36925;
(statearr_36944[(19)] = inst_36838__$1);

return statearr_36944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36925__$1,(22),inst_36839);
} else {
if((state_val_36926 === (31))){
var inst_36923 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36925__$1,inst_36923);
} else {
if((state_val_36926 === (32))){
var inst_36878 = (state_36925[(16)]);
var inst_36883 = inst_36878.cljs$lang$protocol_mask$partition0$;
var inst_36884 = (inst_36883 & (64));
var inst_36885 = inst_36878.cljs$core$ISeq$;
var inst_36886 = (cljs.core.PROTOCOL_SENTINEL === inst_36885);
var inst_36887 = (inst_36884) || (inst_36886);
var state_36925__$1 = state_36925;
if(cljs.core.truth_(inst_36887)){
var statearr_36945_37028 = state_36925__$1;
(statearr_36945_37028[(1)] = (35));

} else {
var statearr_36946_37029 = state_36925__$1;
(statearr_36946_37029[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (40))){
var inst_36900 = (state_36925[(20)]);
var inst_36899 = (state_36925[(2)]);
var inst_36900__$1 = cljs.core.get.call(null,inst_36899,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36901 = cljs.core.get.call(null,inst_36899,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36902 = cljs.core.not_empty.call(null,inst_36900__$1);
var state_36925__$1 = (function (){var statearr_36947 = state_36925;
(statearr_36947[(20)] = inst_36900__$1);

(statearr_36947[(21)] = inst_36901);

return statearr_36947;
})();
if(cljs.core.truth_(inst_36902)){
var statearr_36948_37030 = state_36925__$1;
(statearr_36948_37030[(1)] = (41));

} else {
var statearr_36949_37031 = state_36925__$1;
(statearr_36949_37031[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (33))){
var state_36925__$1 = state_36925;
var statearr_36950_37032 = state_36925__$1;
(statearr_36950_37032[(2)] = false);

(statearr_36950_37032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (13))){
var inst_36798 = (state_36925[(22)]);
var inst_36802 = cljs.core.chunk_first.call(null,inst_36798);
var inst_36803 = cljs.core.chunk_rest.call(null,inst_36798);
var inst_36804 = cljs.core.count.call(null,inst_36802);
var inst_36785 = inst_36803;
var inst_36786 = inst_36802;
var inst_36787 = inst_36804;
var inst_36788 = (0);
var state_36925__$1 = (function (){var statearr_36951 = state_36925;
(statearr_36951[(7)] = inst_36786);

(statearr_36951[(8)] = inst_36785);

(statearr_36951[(9)] = inst_36788);

(statearr_36951[(10)] = inst_36787);

return statearr_36951;
})();
var statearr_36952_37033 = state_36925__$1;
(statearr_36952_37033[(2)] = null);

(statearr_36952_37033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (22))){
var inst_36842 = (state_36925[(23)]);
var inst_36846 = (state_36925[(24)]);
var inst_36841 = (state_36925[(25)]);
var inst_36838 = (state_36925[(19)]);
var inst_36841__$1 = (state_36925[(2)]);
var inst_36842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36841__$1);
var inst_36843 = (function (){var all_files = inst_36838;
var res_SINGLEQUOTE_ = inst_36841__$1;
var res = inst_36842__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36842,inst_36846,inst_36841,inst_36838,inst_36841__$1,inst_36842__$1,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36520_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36520_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36842,inst_36846,inst_36841,inst_36838,inst_36841__$1,inst_36842__$1,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36844 = cljs.core.filter.call(null,inst_36843,inst_36841__$1);
var inst_36845 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36846__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36845);
var inst_36847 = cljs.core.not_empty.call(null,inst_36846__$1);
var state_36925__$1 = (function (){var statearr_36953 = state_36925;
(statearr_36953[(23)] = inst_36842__$1);

(statearr_36953[(24)] = inst_36846__$1);

(statearr_36953[(25)] = inst_36841__$1);

(statearr_36953[(26)] = inst_36844);

return statearr_36953;
})();
if(cljs.core.truth_(inst_36847)){
var statearr_36954_37034 = state_36925__$1;
(statearr_36954_37034[(1)] = (23));

} else {
var statearr_36955_37035 = state_36925__$1;
(statearr_36955_37035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (36))){
var state_36925__$1 = state_36925;
var statearr_36956_37036 = state_36925__$1;
(statearr_36956_37036[(2)] = false);

(statearr_36956_37036[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (41))){
var inst_36900 = (state_36925[(20)]);
var inst_36904 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36905 = cljs.core.map.call(null,inst_36904,inst_36900);
var inst_36906 = cljs.core.pr_str.call(null,inst_36905);
var inst_36907 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36906)].join('');
var inst_36908 = figwheel.client.utils.log.call(null,inst_36907);
var state_36925__$1 = state_36925;
var statearr_36957_37037 = state_36925__$1;
(statearr_36957_37037[(2)] = inst_36908);

(statearr_36957_37037[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (43))){
var inst_36901 = (state_36925[(21)]);
var inst_36911 = (state_36925[(2)]);
var inst_36912 = cljs.core.not_empty.call(null,inst_36901);
var state_36925__$1 = (function (){var statearr_36958 = state_36925;
(statearr_36958[(27)] = inst_36911);

return statearr_36958;
})();
if(cljs.core.truth_(inst_36912)){
var statearr_36959_37038 = state_36925__$1;
(statearr_36959_37038[(1)] = (44));

} else {
var statearr_36960_37039 = state_36925__$1;
(statearr_36960_37039[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (29))){
var inst_36842 = (state_36925[(23)]);
var inst_36846 = (state_36925[(24)]);
var inst_36878 = (state_36925[(16)]);
var inst_36841 = (state_36925[(25)]);
var inst_36844 = (state_36925[(26)]);
var inst_36838 = (state_36925[(19)]);
var inst_36874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36877 = (function (){var all_files = inst_36838;
var res_SINGLEQUOTE_ = inst_36841;
var res = inst_36842;
var files_not_loaded = inst_36844;
var dependencies_that_loaded = inst_36846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36878,inst_36841,inst_36844,inst_36838,inst_36874,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36876){
var map__36961 = p__36876;
var map__36961__$1 = ((((!((map__36961 == null)))?((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var namespace = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36878,inst_36841,inst_36844,inst_36838,inst_36874,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36878__$1 = cljs.core.group_by.call(null,inst_36877,inst_36844);
var inst_36880 = (inst_36878__$1 == null);
var inst_36881 = cljs.core.not.call(null,inst_36880);
var state_36925__$1 = (function (){var statearr_36963 = state_36925;
(statearr_36963[(28)] = inst_36874);

(statearr_36963[(16)] = inst_36878__$1);

return statearr_36963;
})();
if(inst_36881){
var statearr_36964_37040 = state_36925__$1;
(statearr_36964_37040[(1)] = (32));

} else {
var statearr_36965_37041 = state_36925__$1;
(statearr_36965_37041[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (44))){
var inst_36901 = (state_36925[(21)]);
var inst_36914 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36901);
var inst_36915 = cljs.core.pr_str.call(null,inst_36914);
var inst_36916 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36915)].join('');
var inst_36917 = figwheel.client.utils.log.call(null,inst_36916);
var state_36925__$1 = state_36925;
var statearr_36966_37042 = state_36925__$1;
(statearr_36966_37042[(2)] = inst_36917);

(statearr_36966_37042[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (6))){
var inst_36819 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36967_37043 = state_36925__$1;
(statearr_36967_37043[(2)] = inst_36819);

(statearr_36967_37043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (28))){
var inst_36844 = (state_36925[(26)]);
var inst_36871 = (state_36925[(2)]);
var inst_36872 = cljs.core.not_empty.call(null,inst_36844);
var state_36925__$1 = (function (){var statearr_36968 = state_36925;
(statearr_36968[(29)] = inst_36871);

return statearr_36968;
})();
if(cljs.core.truth_(inst_36872)){
var statearr_36969_37044 = state_36925__$1;
(statearr_36969_37044[(1)] = (29));

} else {
var statearr_36970_37045 = state_36925__$1;
(statearr_36970_37045[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (25))){
var inst_36842 = (state_36925[(23)]);
var inst_36858 = (state_36925[(2)]);
var inst_36859 = cljs.core.not_empty.call(null,inst_36842);
var state_36925__$1 = (function (){var statearr_36971 = state_36925;
(statearr_36971[(30)] = inst_36858);

return statearr_36971;
})();
if(cljs.core.truth_(inst_36859)){
var statearr_36972_37046 = state_36925__$1;
(statearr_36972_37046[(1)] = (26));

} else {
var statearr_36973_37047 = state_36925__$1;
(statearr_36973_37047[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (34))){
var inst_36894 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
if(cljs.core.truth_(inst_36894)){
var statearr_36974_37048 = state_36925__$1;
(statearr_36974_37048[(1)] = (38));

} else {
var statearr_36975_37049 = state_36925__$1;
(statearr_36975_37049[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (17))){
var state_36925__$1 = state_36925;
var statearr_36976_37050 = state_36925__$1;
(statearr_36976_37050[(2)] = recompile_dependents);

(statearr_36976_37050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (3))){
var state_36925__$1 = state_36925;
var statearr_36977_37051 = state_36925__$1;
(statearr_36977_37051[(2)] = null);

(statearr_36977_37051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (12))){
var inst_36815 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36978_37052 = state_36925__$1;
(statearr_36978_37052[(2)] = inst_36815);

(statearr_36978_37052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (2))){
var inst_36777 = (state_36925[(13)]);
var inst_36784 = cljs.core.seq.call(null,inst_36777);
var inst_36785 = inst_36784;
var inst_36786 = null;
var inst_36787 = (0);
var inst_36788 = (0);
var state_36925__$1 = (function (){var statearr_36979 = state_36925;
(statearr_36979[(7)] = inst_36786);

(statearr_36979[(8)] = inst_36785);

(statearr_36979[(9)] = inst_36788);

(statearr_36979[(10)] = inst_36787);

return statearr_36979;
})();
var statearr_36980_37053 = state_36925__$1;
(statearr_36980_37053[(2)] = null);

(statearr_36980_37053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (23))){
var inst_36842 = (state_36925[(23)]);
var inst_36846 = (state_36925[(24)]);
var inst_36841 = (state_36925[(25)]);
var inst_36844 = (state_36925[(26)]);
var inst_36838 = (state_36925[(19)]);
var inst_36849 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36851 = (function (){var all_files = inst_36838;
var res_SINGLEQUOTE_ = inst_36841;
var res = inst_36842;
var files_not_loaded = inst_36844;
var dependencies_that_loaded = inst_36846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36841,inst_36844,inst_36838,inst_36849,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36850){
var map__36981 = p__36850;
var map__36981__$1 = ((((!((map__36981 == null)))?((((map__36981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36981):map__36981);
var request_url = cljs.core.get.call(null,map__36981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36841,inst_36844,inst_36838,inst_36849,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36852 = cljs.core.reverse.call(null,inst_36846);
var inst_36853 = cljs.core.map.call(null,inst_36851,inst_36852);
var inst_36854 = cljs.core.pr_str.call(null,inst_36853);
var inst_36855 = figwheel.client.utils.log.call(null,inst_36854);
var state_36925__$1 = (function (){var statearr_36983 = state_36925;
(statearr_36983[(31)] = inst_36849);

return statearr_36983;
})();
var statearr_36984_37054 = state_36925__$1;
(statearr_36984_37054[(2)] = inst_36855);

(statearr_36984_37054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (35))){
var state_36925__$1 = state_36925;
var statearr_36985_37055 = state_36925__$1;
(statearr_36985_37055[(2)] = true);

(statearr_36985_37055[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (19))){
var inst_36828 = (state_36925[(12)]);
var inst_36834 = figwheel.client.file_reloading.expand_files.call(null,inst_36828);
var state_36925__$1 = state_36925;
var statearr_36986_37056 = state_36925__$1;
(statearr_36986_37056[(2)] = inst_36834);

(statearr_36986_37056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (11))){
var state_36925__$1 = state_36925;
var statearr_36987_37057 = state_36925__$1;
(statearr_36987_37057[(2)] = null);

(statearr_36987_37057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (9))){
var inst_36817 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36988_37058 = state_36925__$1;
(statearr_36988_37058[(2)] = inst_36817);

(statearr_36988_37058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (5))){
var inst_36788 = (state_36925[(9)]);
var inst_36787 = (state_36925[(10)]);
var inst_36790 = (inst_36788 < inst_36787);
var inst_36791 = inst_36790;
var state_36925__$1 = state_36925;
if(cljs.core.truth_(inst_36791)){
var statearr_36989_37059 = state_36925__$1;
(statearr_36989_37059[(1)] = (7));

} else {
var statearr_36990_37060 = state_36925__$1;
(statearr_36990_37060[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (14))){
var inst_36798 = (state_36925[(22)]);
var inst_36807 = cljs.core.first.call(null,inst_36798);
var inst_36808 = figwheel.client.file_reloading.eval_body.call(null,inst_36807,opts);
var inst_36809 = cljs.core.next.call(null,inst_36798);
var inst_36785 = inst_36809;
var inst_36786 = null;
var inst_36787 = (0);
var inst_36788 = (0);
var state_36925__$1 = (function (){var statearr_36991 = state_36925;
(statearr_36991[(7)] = inst_36786);

(statearr_36991[(8)] = inst_36785);

(statearr_36991[(32)] = inst_36808);

(statearr_36991[(9)] = inst_36788);

(statearr_36991[(10)] = inst_36787);

return statearr_36991;
})();
var statearr_36992_37061 = state_36925__$1;
(statearr_36992_37061[(2)] = null);

(statearr_36992_37061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (45))){
var state_36925__$1 = state_36925;
var statearr_36993_37062 = state_36925__$1;
(statearr_36993_37062[(2)] = null);

(statearr_36993_37062[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (26))){
var inst_36842 = (state_36925[(23)]);
var inst_36846 = (state_36925[(24)]);
var inst_36841 = (state_36925[(25)]);
var inst_36844 = (state_36925[(26)]);
var inst_36838 = (state_36925[(19)]);
var inst_36861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36863 = (function (){var all_files = inst_36838;
var res_SINGLEQUOTE_ = inst_36841;
var res = inst_36842;
var files_not_loaded = inst_36844;
var dependencies_that_loaded = inst_36846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36841,inst_36844,inst_36838,inst_36861,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36862){
var map__36994 = p__36862;
var map__36994__$1 = ((((!((map__36994 == null)))?((((map__36994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36994):map__36994);
var namespace = cljs.core.get.call(null,map__36994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36841,inst_36844,inst_36838,inst_36861,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36864 = cljs.core.map.call(null,inst_36863,inst_36842);
var inst_36865 = cljs.core.pr_str.call(null,inst_36864);
var inst_36866 = figwheel.client.utils.log.call(null,inst_36865);
var inst_36867 = (function (){var all_files = inst_36838;
var res_SINGLEQUOTE_ = inst_36841;
var res = inst_36842;
var files_not_loaded = inst_36844;
var dependencies_that_loaded = inst_36846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36841,inst_36844,inst_36838,inst_36861,inst_36863,inst_36864,inst_36865,inst_36866,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36842,inst_36846,inst_36841,inst_36844,inst_36838,inst_36861,inst_36863,inst_36864,inst_36865,inst_36866,state_val_36926,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36868 = setTimeout(inst_36867,(10));
var state_36925__$1 = (function (){var statearr_36996 = state_36925;
(statearr_36996[(33)] = inst_36866);

(statearr_36996[(34)] = inst_36861);

return statearr_36996;
})();
var statearr_36997_37063 = state_36925__$1;
(statearr_36997_37063[(2)] = inst_36868);

(statearr_36997_37063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (16))){
var state_36925__$1 = state_36925;
var statearr_36998_37064 = state_36925__$1;
(statearr_36998_37064[(2)] = reload_dependents);

(statearr_36998_37064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (38))){
var inst_36878 = (state_36925[(16)]);
var inst_36896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36878);
var state_36925__$1 = state_36925;
var statearr_36999_37065 = state_36925__$1;
(statearr_36999_37065[(2)] = inst_36896);

(statearr_36999_37065[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (30))){
var state_36925__$1 = state_36925;
var statearr_37000_37066 = state_36925__$1;
(statearr_37000_37066[(2)] = null);

(statearr_37000_37066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (10))){
var inst_36798 = (state_36925[(22)]);
var inst_36800 = cljs.core.chunked_seq_QMARK_.call(null,inst_36798);
var state_36925__$1 = state_36925;
if(inst_36800){
var statearr_37001_37067 = state_36925__$1;
(statearr_37001_37067[(1)] = (13));

} else {
var statearr_37002_37068 = state_36925__$1;
(statearr_37002_37068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (18))){
var inst_36832 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
if(cljs.core.truth_(inst_36832)){
var statearr_37003_37069 = state_36925__$1;
(statearr_37003_37069[(1)] = (19));

} else {
var statearr_37004_37070 = state_36925__$1;
(statearr_37004_37070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (42))){
var state_36925__$1 = state_36925;
var statearr_37005_37071 = state_36925__$1;
(statearr_37005_37071[(2)] = null);

(statearr_37005_37071[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (37))){
var inst_36891 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_37006_37072 = state_36925__$1;
(statearr_37006_37072[(2)] = inst_36891);

(statearr_37006_37072[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (8))){
var inst_36798 = (state_36925[(22)]);
var inst_36785 = (state_36925[(8)]);
var inst_36798__$1 = cljs.core.seq.call(null,inst_36785);
var state_36925__$1 = (function (){var statearr_37007 = state_36925;
(statearr_37007[(22)] = inst_36798__$1);

return statearr_37007;
})();
if(inst_36798__$1){
var statearr_37008_37073 = state_36925__$1;
(statearr_37008_37073[(1)] = (10));

} else {
var statearr_37009_37074 = state_36925__$1;
(statearr_37009_37074[(1)] = (11));

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
}
});})(c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31672__auto__,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto____0 = (function (){
var statearr_37013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37013[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto__);

(statearr_37013[(1)] = (1));

return statearr_37013;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto____1 = (function (state_36925){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_36925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e37014){if((e37014 instanceof Object)){
var ex__31676__auto__ = e37014;
var statearr_37015_37075 = state_36925;
(statearr_37015_37075[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37076 = state_36925;
state_36925 = G__37076;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto__ = function(state_36925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto____1.call(this,state_36925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31786__auto__ = (function (){var statearr_37016 = f__31785__auto__.call(null);
(statearr_37016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_37016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__,map__36770,map__36770__$1,opts,before_jsload,on_jsload,reload_dependents,map__36771,map__36771__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31784__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37079,link){
var map__37082 = p__37079;
var map__37082__$1 = ((((!((map__37082 == null)))?((((map__37082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37082):map__37082);
var file = cljs.core.get.call(null,map__37082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37082,map__37082__$1,file){
return (function (p1__37077_SHARP_,p2__37078_SHARP_){
if(cljs.core._EQ_.call(null,p1__37077_SHARP_,p2__37078_SHARP_)){
return p1__37077_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37082,map__37082__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37088){
var map__37089 = p__37088;
var map__37089__$1 = ((((!((map__37089 == null)))?((((map__37089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37089):map__37089);
var match_length = cljs.core.get.call(null,map__37089__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37089__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37084_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37084_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37091_SHARP_,p2__37092_SHARP_){
return cljs.core.assoc.call(null,p1__37091_SHARP_,cljs.core.get.call(null,p2__37092_SHARP_,key),p2__37092_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37093 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37093);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37093);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37094,p__37095){
var map__37100 = p__37094;
var map__37100__$1 = ((((!((map__37100 == null)))?((((map__37100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37100):map__37100);
var on_cssload = cljs.core.get.call(null,map__37100__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37101 = p__37095;
var map__37101__$1 = ((((!((map__37101 == null)))?((((map__37101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37101):map__37101);
var files_msg = map__37101__$1;
var files = cljs.core.get.call(null,map__37101__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1496284148008