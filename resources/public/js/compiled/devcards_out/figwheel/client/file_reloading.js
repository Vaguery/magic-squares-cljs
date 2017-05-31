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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35927_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35927_SHARP_));
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
var seq__35932 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35933 = null;
var count__35934 = (0);
var i__35935 = (0);
while(true){
if((i__35935 < count__35934)){
var n = cljs.core._nth.call(null,chunk__35933,i__35935);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35936 = seq__35932;
var G__35937 = chunk__35933;
var G__35938 = count__35934;
var G__35939 = (i__35935 + (1));
seq__35932 = G__35936;
chunk__35933 = G__35937;
count__35934 = G__35938;
i__35935 = G__35939;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35932);
if(temp__4657__auto__){
var seq__35932__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35932__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__35932__$1);
var G__35940 = cljs.core.chunk_rest.call(null,seq__35932__$1);
var G__35941 = c__27263__auto__;
var G__35942 = cljs.core.count.call(null,c__27263__auto__);
var G__35943 = (0);
seq__35932 = G__35940;
chunk__35933 = G__35941;
count__35934 = G__35942;
i__35935 = G__35943;
continue;
} else {
var n = cljs.core.first.call(null,seq__35932__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35944 = cljs.core.next.call(null,seq__35932__$1);
var G__35945 = null;
var G__35946 = (0);
var G__35947 = (0);
seq__35932 = G__35944;
chunk__35933 = G__35945;
count__35934 = G__35946;
i__35935 = G__35947;
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

var seq__35998_36009 = cljs.core.seq.call(null,deps);
var chunk__35999_36010 = null;
var count__36000_36011 = (0);
var i__36001_36012 = (0);
while(true){
if((i__36001_36012 < count__36000_36011)){
var dep_36013 = cljs.core._nth.call(null,chunk__35999_36010,i__36001_36012);
topo_sort_helper_STAR_.call(null,dep_36013,(depth + (1)),state);

var G__36014 = seq__35998_36009;
var G__36015 = chunk__35999_36010;
var G__36016 = count__36000_36011;
var G__36017 = (i__36001_36012 + (1));
seq__35998_36009 = G__36014;
chunk__35999_36010 = G__36015;
count__36000_36011 = G__36016;
i__36001_36012 = G__36017;
continue;
} else {
var temp__4657__auto___36018 = cljs.core.seq.call(null,seq__35998_36009);
if(temp__4657__auto___36018){
var seq__35998_36019__$1 = temp__4657__auto___36018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35998_36019__$1)){
var c__27263__auto___36020 = cljs.core.chunk_first.call(null,seq__35998_36019__$1);
var G__36021 = cljs.core.chunk_rest.call(null,seq__35998_36019__$1);
var G__36022 = c__27263__auto___36020;
var G__36023 = cljs.core.count.call(null,c__27263__auto___36020);
var G__36024 = (0);
seq__35998_36009 = G__36021;
chunk__35999_36010 = G__36022;
count__36000_36011 = G__36023;
i__36001_36012 = G__36024;
continue;
} else {
var dep_36025 = cljs.core.first.call(null,seq__35998_36019__$1);
topo_sort_helper_STAR_.call(null,dep_36025,(depth + (1)),state);

var G__36026 = cljs.core.next.call(null,seq__35998_36019__$1);
var G__36027 = null;
var G__36028 = (0);
var G__36029 = (0);
seq__35998_36009 = G__36026;
chunk__35999_36010 = G__36027;
count__36000_36011 = G__36028;
i__36001_36012 = G__36029;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36002){
var vec__36006 = p__36002;
var seq__36007 = cljs.core.seq.call(null,vec__36006);
var first__36008 = cljs.core.first.call(null,seq__36007);
var seq__36007__$1 = cljs.core.next.call(null,seq__36007);
var x = first__36008;
var xs = seq__36007__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36006,seq__36007,first__36008,seq__36007__$1,x,xs,get_deps__$1){
return (function (p1__35948_SHARP_){
return clojure.set.difference.call(null,p1__35948_SHARP_,x);
});})(vec__36006,seq__36007,first__36008,seq__36007__$1,x,xs,get_deps__$1))
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
var seq__36042 = cljs.core.seq.call(null,provides);
var chunk__36043 = null;
var count__36044 = (0);
var i__36045 = (0);
while(true){
if((i__36045 < count__36044)){
var prov = cljs.core._nth.call(null,chunk__36043,i__36045);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36046_36054 = cljs.core.seq.call(null,requires);
var chunk__36047_36055 = null;
var count__36048_36056 = (0);
var i__36049_36057 = (0);
while(true){
if((i__36049_36057 < count__36048_36056)){
var req_36058 = cljs.core._nth.call(null,chunk__36047_36055,i__36049_36057);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36058,prov);

var G__36059 = seq__36046_36054;
var G__36060 = chunk__36047_36055;
var G__36061 = count__36048_36056;
var G__36062 = (i__36049_36057 + (1));
seq__36046_36054 = G__36059;
chunk__36047_36055 = G__36060;
count__36048_36056 = G__36061;
i__36049_36057 = G__36062;
continue;
} else {
var temp__4657__auto___36063 = cljs.core.seq.call(null,seq__36046_36054);
if(temp__4657__auto___36063){
var seq__36046_36064__$1 = temp__4657__auto___36063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36046_36064__$1)){
var c__27263__auto___36065 = cljs.core.chunk_first.call(null,seq__36046_36064__$1);
var G__36066 = cljs.core.chunk_rest.call(null,seq__36046_36064__$1);
var G__36067 = c__27263__auto___36065;
var G__36068 = cljs.core.count.call(null,c__27263__auto___36065);
var G__36069 = (0);
seq__36046_36054 = G__36066;
chunk__36047_36055 = G__36067;
count__36048_36056 = G__36068;
i__36049_36057 = G__36069;
continue;
} else {
var req_36070 = cljs.core.first.call(null,seq__36046_36064__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36070,prov);

var G__36071 = cljs.core.next.call(null,seq__36046_36064__$1);
var G__36072 = null;
var G__36073 = (0);
var G__36074 = (0);
seq__36046_36054 = G__36071;
chunk__36047_36055 = G__36072;
count__36048_36056 = G__36073;
i__36049_36057 = G__36074;
continue;
}
} else {
}
}
break;
}

var G__36075 = seq__36042;
var G__36076 = chunk__36043;
var G__36077 = count__36044;
var G__36078 = (i__36045 + (1));
seq__36042 = G__36075;
chunk__36043 = G__36076;
count__36044 = G__36077;
i__36045 = G__36078;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36042);
if(temp__4657__auto__){
var seq__36042__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36042__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__36042__$1);
var G__36079 = cljs.core.chunk_rest.call(null,seq__36042__$1);
var G__36080 = c__27263__auto__;
var G__36081 = cljs.core.count.call(null,c__27263__auto__);
var G__36082 = (0);
seq__36042 = G__36079;
chunk__36043 = G__36080;
count__36044 = G__36081;
i__36045 = G__36082;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36042__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36050_36083 = cljs.core.seq.call(null,requires);
var chunk__36051_36084 = null;
var count__36052_36085 = (0);
var i__36053_36086 = (0);
while(true){
if((i__36053_36086 < count__36052_36085)){
var req_36087 = cljs.core._nth.call(null,chunk__36051_36084,i__36053_36086);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36087,prov);

var G__36088 = seq__36050_36083;
var G__36089 = chunk__36051_36084;
var G__36090 = count__36052_36085;
var G__36091 = (i__36053_36086 + (1));
seq__36050_36083 = G__36088;
chunk__36051_36084 = G__36089;
count__36052_36085 = G__36090;
i__36053_36086 = G__36091;
continue;
} else {
var temp__4657__auto___36092__$1 = cljs.core.seq.call(null,seq__36050_36083);
if(temp__4657__auto___36092__$1){
var seq__36050_36093__$1 = temp__4657__auto___36092__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36050_36093__$1)){
var c__27263__auto___36094 = cljs.core.chunk_first.call(null,seq__36050_36093__$1);
var G__36095 = cljs.core.chunk_rest.call(null,seq__36050_36093__$1);
var G__36096 = c__27263__auto___36094;
var G__36097 = cljs.core.count.call(null,c__27263__auto___36094);
var G__36098 = (0);
seq__36050_36083 = G__36095;
chunk__36051_36084 = G__36096;
count__36052_36085 = G__36097;
i__36053_36086 = G__36098;
continue;
} else {
var req_36099 = cljs.core.first.call(null,seq__36050_36093__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36099,prov);

var G__36100 = cljs.core.next.call(null,seq__36050_36093__$1);
var G__36101 = null;
var G__36102 = (0);
var G__36103 = (0);
seq__36050_36083 = G__36100;
chunk__36051_36084 = G__36101;
count__36052_36085 = G__36102;
i__36053_36086 = G__36103;
continue;
}
} else {
}
}
break;
}

var G__36104 = cljs.core.next.call(null,seq__36042__$1);
var G__36105 = null;
var G__36106 = (0);
var G__36107 = (0);
seq__36042 = G__36104;
chunk__36043 = G__36105;
count__36044 = G__36106;
i__36045 = G__36107;
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
var seq__36112_36116 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36113_36117 = null;
var count__36114_36118 = (0);
var i__36115_36119 = (0);
while(true){
if((i__36115_36119 < count__36114_36118)){
var ns_36120 = cljs.core._nth.call(null,chunk__36113_36117,i__36115_36119);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36120);

var G__36121 = seq__36112_36116;
var G__36122 = chunk__36113_36117;
var G__36123 = count__36114_36118;
var G__36124 = (i__36115_36119 + (1));
seq__36112_36116 = G__36121;
chunk__36113_36117 = G__36122;
count__36114_36118 = G__36123;
i__36115_36119 = G__36124;
continue;
} else {
var temp__4657__auto___36125 = cljs.core.seq.call(null,seq__36112_36116);
if(temp__4657__auto___36125){
var seq__36112_36126__$1 = temp__4657__auto___36125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36112_36126__$1)){
var c__27263__auto___36127 = cljs.core.chunk_first.call(null,seq__36112_36126__$1);
var G__36128 = cljs.core.chunk_rest.call(null,seq__36112_36126__$1);
var G__36129 = c__27263__auto___36127;
var G__36130 = cljs.core.count.call(null,c__27263__auto___36127);
var G__36131 = (0);
seq__36112_36116 = G__36128;
chunk__36113_36117 = G__36129;
count__36114_36118 = G__36130;
i__36115_36119 = G__36131;
continue;
} else {
var ns_36132 = cljs.core.first.call(null,seq__36112_36126__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36132);

var G__36133 = cljs.core.next.call(null,seq__36112_36126__$1);
var G__36134 = null;
var G__36135 = (0);
var G__36136 = (0);
seq__36112_36116 = G__36133;
chunk__36113_36117 = G__36134;
count__36114_36118 = G__36135;
i__36115_36119 = G__36136;
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
var G__36137__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36138__i = 0, G__36138__a = new Array(arguments.length -  0);
while (G__36138__i < G__36138__a.length) {G__36138__a[G__36138__i] = arguments[G__36138__i + 0]; ++G__36138__i;}
  args = new cljs.core.IndexedSeq(G__36138__a,0,null);
} 
return G__36137__delegate.call(this,args);};
G__36137.cljs$lang$maxFixedArity = 0;
G__36137.cljs$lang$applyTo = (function (arglist__36139){
var args = cljs.core.seq(arglist__36139);
return G__36137__delegate(args);
});
G__36137.cljs$core$IFn$_invoke$arity$variadic = G__36137__delegate;
return G__36137;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36140 = cljs.core._EQ_;
var expr__36141 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36140.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36141))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36140,expr__36141){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36140,expr__36141))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36140,expr__36141){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36143){if((e36143 instanceof Error)){
var e = e36143;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36143;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36140,expr__36141))
} else {
if(cljs.core.truth_(pred__36140.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36141))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36140.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36141))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36140.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36141))){
return ((function (pred__36140,expr__36141){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36144){if((e36144 instanceof Error)){
var e = e36144;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36144;

}
}})());
});
;})(pred__36140,expr__36141))
} else {
return ((function (pred__36140,expr__36141){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36140,expr__36141))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36145,callback){
var map__36148 = p__36145;
var map__36148__$1 = ((((!((map__36148 == null)))?((((map__36148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36148):map__36148);
var file_msg = map__36148__$1;
var request_url = cljs.core.get.call(null,map__36148__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36148,map__36148__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36148,map__36148__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__){
return (function (state_36172){
var state_val_36173 = (state_36172[(1)]);
if((state_val_36173 === (7))){
var inst_36168 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
var statearr_36174_36194 = state_36172__$1;
(statearr_36174_36194[(2)] = inst_36168);

(statearr_36174_36194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (1))){
var state_36172__$1 = state_36172;
var statearr_36175_36195 = state_36172__$1;
(statearr_36175_36195[(2)] = null);

(statearr_36175_36195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (4))){
var inst_36152 = (state_36172[(7)]);
var inst_36152__$1 = (state_36172[(2)]);
var state_36172__$1 = (function (){var statearr_36176 = state_36172;
(statearr_36176[(7)] = inst_36152__$1);

return statearr_36176;
})();
if(cljs.core.truth_(inst_36152__$1)){
var statearr_36177_36196 = state_36172__$1;
(statearr_36177_36196[(1)] = (5));

} else {
var statearr_36178_36197 = state_36172__$1;
(statearr_36178_36197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (6))){
var state_36172__$1 = state_36172;
var statearr_36179_36198 = state_36172__$1;
(statearr_36179_36198[(2)] = null);

(statearr_36179_36198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (3))){
var inst_36170 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36172__$1,inst_36170);
} else {
if((state_val_36173 === (2))){
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36172__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36173 === (11))){
var inst_36164 = (state_36172[(2)]);
var state_36172__$1 = (function (){var statearr_36180 = state_36172;
(statearr_36180[(8)] = inst_36164);

return statearr_36180;
})();
var statearr_36181_36199 = state_36172__$1;
(statearr_36181_36199[(2)] = null);

(statearr_36181_36199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (9))){
var inst_36158 = (state_36172[(9)]);
var inst_36156 = (state_36172[(10)]);
var inst_36160 = inst_36158.call(null,inst_36156);
var state_36172__$1 = state_36172;
var statearr_36182_36200 = state_36172__$1;
(statearr_36182_36200[(2)] = inst_36160);

(statearr_36182_36200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (5))){
var inst_36152 = (state_36172[(7)]);
var inst_36154 = figwheel.client.file_reloading.blocking_load.call(null,inst_36152);
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36172__$1,(8),inst_36154);
} else {
if((state_val_36173 === (10))){
var inst_36156 = (state_36172[(10)]);
var inst_36162 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36156);
var state_36172__$1 = state_36172;
var statearr_36183_36201 = state_36172__$1;
(statearr_36183_36201[(2)] = inst_36162);

(statearr_36183_36201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (8))){
var inst_36158 = (state_36172[(9)]);
var inst_36152 = (state_36172[(7)]);
var inst_36156 = (state_36172[(2)]);
var inst_36157 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36158__$1 = cljs.core.get.call(null,inst_36157,inst_36152);
var state_36172__$1 = (function (){var statearr_36184 = state_36172;
(statearr_36184[(9)] = inst_36158__$1);

(statearr_36184[(10)] = inst_36156);

return statearr_36184;
})();
if(cljs.core.truth_(inst_36158__$1)){
var statearr_36185_36202 = state_36172__$1;
(statearr_36185_36202[(1)] = (9));

} else {
var statearr_36186_36203 = state_36172__$1;
(statearr_36186_36203[(1)] = (10));

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
});})(c__30326__auto__))
;
return ((function (switch__30214__auto__,c__30326__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30215__auto__ = null;
var figwheel$client$file_reloading$state_machine__30215__auto____0 = (function (){
var statearr_36190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36190[(0)] = figwheel$client$file_reloading$state_machine__30215__auto__);

(statearr_36190[(1)] = (1));

return statearr_36190;
});
var figwheel$client$file_reloading$state_machine__30215__auto____1 = (function (state_36172){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_36172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e36191){if((e36191 instanceof Object)){
var ex__30218__auto__ = e36191;
var statearr_36192_36204 = state_36172;
(statearr_36192_36204[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36205 = state_36172;
state_36172 = G__36205;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30215__auto__ = function(state_36172){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30215__auto____1.call(this,state_36172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30215__auto____0;
figwheel$client$file_reloading$state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30215__auto____1;
return figwheel$client$file_reloading$state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_36193 = f__30327__auto__.call(null);
(statearr_36193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_36193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36206,callback){
var map__36209 = p__36206;
var map__36209__$1 = ((((!((map__36209 == null)))?((((map__36209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36209):map__36209);
var file_msg = map__36209__$1;
var namespace = cljs.core.get.call(null,map__36209__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36209,map__36209__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36209,map__36209__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36211){
var map__36214 = p__36211;
var map__36214__$1 = ((((!((map__36214 == null)))?((((map__36214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36214):map__36214);
var file_msg = map__36214__$1;
var namespace = cljs.core.get.call(null,map__36214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36216){
var map__36219 = p__36216;
var map__36219__$1 = ((((!((map__36219 == null)))?((((map__36219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36219):map__36219);
var file_msg = map__36219__$1;
var namespace = cljs.core.get.call(null,map__36219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36221,callback){
var map__36224 = p__36221;
var map__36224__$1 = ((((!((map__36224 == null)))?((((map__36224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36224):map__36224);
var file_msg = map__36224__$1;
var request_url = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30326__auto___36328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___36328,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___36328,out){
return (function (state_36310){
var state_val_36311 = (state_36310[(1)]);
if((state_val_36311 === (1))){
var inst_36284 = cljs.core.seq.call(null,files);
var inst_36285 = cljs.core.first.call(null,inst_36284);
var inst_36286 = cljs.core.next.call(null,inst_36284);
var inst_36287 = files;
var state_36310__$1 = (function (){var statearr_36312 = state_36310;
(statearr_36312[(7)] = inst_36285);

(statearr_36312[(8)] = inst_36286);

(statearr_36312[(9)] = inst_36287);

return statearr_36312;
})();
var statearr_36313_36329 = state_36310__$1;
(statearr_36313_36329[(2)] = null);

(statearr_36313_36329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (2))){
var inst_36293 = (state_36310[(10)]);
var inst_36287 = (state_36310[(9)]);
var inst_36292 = cljs.core.seq.call(null,inst_36287);
var inst_36293__$1 = cljs.core.first.call(null,inst_36292);
var inst_36294 = cljs.core.next.call(null,inst_36292);
var inst_36295 = (inst_36293__$1 == null);
var inst_36296 = cljs.core.not.call(null,inst_36295);
var state_36310__$1 = (function (){var statearr_36314 = state_36310;
(statearr_36314[(10)] = inst_36293__$1);

(statearr_36314[(11)] = inst_36294);

return statearr_36314;
})();
if(inst_36296){
var statearr_36315_36330 = state_36310__$1;
(statearr_36315_36330[(1)] = (4));

} else {
var statearr_36316_36331 = state_36310__$1;
(statearr_36316_36331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (3))){
var inst_36308 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36310__$1,inst_36308);
} else {
if((state_val_36311 === (4))){
var inst_36293 = (state_36310[(10)]);
var inst_36298 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36293);
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36310__$1,(7),inst_36298);
} else {
if((state_val_36311 === (5))){
var inst_36304 = cljs.core.async.close_BANG_.call(null,out);
var state_36310__$1 = state_36310;
var statearr_36317_36332 = state_36310__$1;
(statearr_36317_36332[(2)] = inst_36304);

(statearr_36317_36332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (6))){
var inst_36306 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
var statearr_36318_36333 = state_36310__$1;
(statearr_36318_36333[(2)] = inst_36306);

(statearr_36318_36333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (7))){
var inst_36294 = (state_36310[(11)]);
var inst_36300 = (state_36310[(2)]);
var inst_36301 = cljs.core.async.put_BANG_.call(null,out,inst_36300);
var inst_36287 = inst_36294;
var state_36310__$1 = (function (){var statearr_36319 = state_36310;
(statearr_36319[(9)] = inst_36287);

(statearr_36319[(12)] = inst_36301);

return statearr_36319;
})();
var statearr_36320_36334 = state_36310__$1;
(statearr_36320_36334[(2)] = null);

(statearr_36320_36334[(1)] = (2));


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
});})(c__30326__auto___36328,out))
;
return ((function (switch__30214__auto__,c__30326__auto___36328,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto____0 = (function (){
var statearr_36324 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36324[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto__);

(statearr_36324[(1)] = (1));

return statearr_36324;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto____1 = (function (state_36310){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_36310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e36325){if((e36325 instanceof Object)){
var ex__30218__auto__ = e36325;
var statearr_36326_36335 = state_36310;
(statearr_36326_36335[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36336 = state_36310;
state_36310 = G__36336;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto__ = function(state_36310){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto____1.call(this,state_36310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___36328,out))
})();
var state__30328__auto__ = (function (){var statearr_36327 = f__30327__auto__.call(null);
(statearr_36327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___36328);

return statearr_36327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___36328,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36337,opts){
var map__36341 = p__36337;
var map__36341__$1 = ((((!((map__36341 == null)))?((((map__36341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36341):map__36341);
var eval_body = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36343){var e = e36343;
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
return (function (p1__36344_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36344_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36353){
var vec__36354 = p__36353;
var k = cljs.core.nth.call(null,vec__36354,(0),null);
var v = cljs.core.nth.call(null,vec__36354,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36357){
var vec__36358 = p__36357;
var k = cljs.core.nth.call(null,vec__36358,(0),null);
var v = cljs.core.nth.call(null,vec__36358,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36364,p__36365){
var map__36613 = p__36364;
var map__36613__$1 = ((((!((map__36613 == null)))?((((map__36613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36613):map__36613);
var opts = map__36613__$1;
var before_jsload = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36614 = p__36365;
var map__36614__$1 = ((((!((map__36614 == null)))?((((map__36614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36614):map__36614);
var msg = map__36614__$1;
var files = cljs.core.get.call(null,map__36614__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36614__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36614__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36768){
var state_val_36769 = (state_36768[(1)]);
if((state_val_36769 === (7))){
var inst_36628 = (state_36768[(7)]);
var inst_36631 = (state_36768[(8)]);
var inst_36630 = (state_36768[(9)]);
var inst_36629 = (state_36768[(10)]);
var inst_36636 = cljs.core._nth.call(null,inst_36629,inst_36631);
var inst_36637 = figwheel.client.file_reloading.eval_body.call(null,inst_36636,opts);
var inst_36638 = (inst_36631 + (1));
var tmp36770 = inst_36628;
var tmp36771 = inst_36630;
var tmp36772 = inst_36629;
var inst_36628__$1 = tmp36770;
var inst_36629__$1 = tmp36772;
var inst_36630__$1 = tmp36771;
var inst_36631__$1 = inst_36638;
var state_36768__$1 = (function (){var statearr_36773 = state_36768;
(statearr_36773[(7)] = inst_36628__$1);

(statearr_36773[(8)] = inst_36631__$1);

(statearr_36773[(9)] = inst_36630__$1);

(statearr_36773[(11)] = inst_36637);

(statearr_36773[(10)] = inst_36629__$1);

return statearr_36773;
})();
var statearr_36774_36860 = state_36768__$1;
(statearr_36774_36860[(2)] = null);

(statearr_36774_36860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (20))){
var inst_36671 = (state_36768[(12)]);
var inst_36679 = figwheel.client.file_reloading.sort_files.call(null,inst_36671);
var state_36768__$1 = state_36768;
var statearr_36775_36861 = state_36768__$1;
(statearr_36775_36861[(2)] = inst_36679);

(statearr_36775_36861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (27))){
var state_36768__$1 = state_36768;
var statearr_36776_36862 = state_36768__$1;
(statearr_36776_36862[(2)] = null);

(statearr_36776_36862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (1))){
var inst_36620 = (state_36768[(13)]);
var inst_36617 = before_jsload.call(null,files);
var inst_36618 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36619 = (function (){return ((function (inst_36620,inst_36617,inst_36618,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36361_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36361_SHARP_);
});
;})(inst_36620,inst_36617,inst_36618,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36620__$1 = cljs.core.filter.call(null,inst_36619,files);
var inst_36621 = cljs.core.not_empty.call(null,inst_36620__$1);
var state_36768__$1 = (function (){var statearr_36777 = state_36768;
(statearr_36777[(14)] = inst_36617);

(statearr_36777[(13)] = inst_36620__$1);

(statearr_36777[(15)] = inst_36618);

return statearr_36777;
})();
if(cljs.core.truth_(inst_36621)){
var statearr_36778_36863 = state_36768__$1;
(statearr_36778_36863[(1)] = (2));

} else {
var statearr_36779_36864 = state_36768__$1;
(statearr_36779_36864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (24))){
var state_36768__$1 = state_36768;
var statearr_36780_36865 = state_36768__$1;
(statearr_36780_36865[(2)] = null);

(statearr_36780_36865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (39))){
var inst_36721 = (state_36768[(16)]);
var state_36768__$1 = state_36768;
var statearr_36781_36866 = state_36768__$1;
(statearr_36781_36866[(2)] = inst_36721);

(statearr_36781_36866[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (46))){
var inst_36763 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36782_36867 = state_36768__$1;
(statearr_36782_36867[(2)] = inst_36763);

(statearr_36782_36867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (4))){
var inst_36665 = (state_36768[(2)]);
var inst_36666 = cljs.core.List.EMPTY;
var inst_36667 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36666);
var inst_36668 = (function (){return ((function (inst_36665,inst_36666,inst_36667,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36362_SHARP_){
var and__26432__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36362_SHARP_);
if(cljs.core.truth_(and__26432__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36362_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36362_SHARP_)));
} else {
return and__26432__auto__;
}
});
;})(inst_36665,inst_36666,inst_36667,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36669 = cljs.core.filter.call(null,inst_36668,files);
var inst_36670 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36671 = cljs.core.concat.call(null,inst_36669,inst_36670);
var state_36768__$1 = (function (){var statearr_36783 = state_36768;
(statearr_36783[(12)] = inst_36671);

(statearr_36783[(17)] = inst_36667);

(statearr_36783[(18)] = inst_36665);

return statearr_36783;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36784_36868 = state_36768__$1;
(statearr_36784_36868[(1)] = (16));

} else {
var statearr_36785_36869 = state_36768__$1;
(statearr_36785_36869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (15))){
var inst_36655 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36786_36870 = state_36768__$1;
(statearr_36786_36870[(2)] = inst_36655);

(statearr_36786_36870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (21))){
var inst_36681 = (state_36768[(19)]);
var inst_36681__$1 = (state_36768[(2)]);
var inst_36682 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36681__$1);
var state_36768__$1 = (function (){var statearr_36787 = state_36768;
(statearr_36787[(19)] = inst_36681__$1);

return statearr_36787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36768__$1,(22),inst_36682);
} else {
if((state_val_36769 === (31))){
var inst_36766 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36768__$1,inst_36766);
} else {
if((state_val_36769 === (32))){
var inst_36721 = (state_36768[(16)]);
var inst_36726 = inst_36721.cljs$lang$protocol_mask$partition0$;
var inst_36727 = (inst_36726 & (64));
var inst_36728 = inst_36721.cljs$core$ISeq$;
var inst_36729 = (cljs.core.PROTOCOL_SENTINEL === inst_36728);
var inst_36730 = (inst_36727) || (inst_36729);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36730)){
var statearr_36788_36871 = state_36768__$1;
(statearr_36788_36871[(1)] = (35));

} else {
var statearr_36789_36872 = state_36768__$1;
(statearr_36789_36872[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (40))){
var inst_36743 = (state_36768[(20)]);
var inst_36742 = (state_36768[(2)]);
var inst_36743__$1 = cljs.core.get.call(null,inst_36742,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36744 = cljs.core.get.call(null,inst_36742,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36745 = cljs.core.not_empty.call(null,inst_36743__$1);
var state_36768__$1 = (function (){var statearr_36790 = state_36768;
(statearr_36790[(21)] = inst_36744);

(statearr_36790[(20)] = inst_36743__$1);

return statearr_36790;
})();
if(cljs.core.truth_(inst_36745)){
var statearr_36791_36873 = state_36768__$1;
(statearr_36791_36873[(1)] = (41));

} else {
var statearr_36792_36874 = state_36768__$1;
(statearr_36792_36874[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (33))){
var state_36768__$1 = state_36768;
var statearr_36793_36875 = state_36768__$1;
(statearr_36793_36875[(2)] = false);

(statearr_36793_36875[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (13))){
var inst_36641 = (state_36768[(22)]);
var inst_36645 = cljs.core.chunk_first.call(null,inst_36641);
var inst_36646 = cljs.core.chunk_rest.call(null,inst_36641);
var inst_36647 = cljs.core.count.call(null,inst_36645);
var inst_36628 = inst_36646;
var inst_36629 = inst_36645;
var inst_36630 = inst_36647;
var inst_36631 = (0);
var state_36768__$1 = (function (){var statearr_36794 = state_36768;
(statearr_36794[(7)] = inst_36628);

(statearr_36794[(8)] = inst_36631);

(statearr_36794[(9)] = inst_36630);

(statearr_36794[(10)] = inst_36629);

return statearr_36794;
})();
var statearr_36795_36876 = state_36768__$1;
(statearr_36795_36876[(2)] = null);

(statearr_36795_36876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (22))){
var inst_36684 = (state_36768[(23)]);
var inst_36681 = (state_36768[(19)]);
var inst_36685 = (state_36768[(24)]);
var inst_36689 = (state_36768[(25)]);
var inst_36684__$1 = (state_36768[(2)]);
var inst_36685__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36684__$1);
var inst_36686 = (function (){var all_files = inst_36681;
var res_SINGLEQUOTE_ = inst_36684__$1;
var res = inst_36685__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36684,inst_36681,inst_36685,inst_36689,inst_36684__$1,inst_36685__$1,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36363_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36363_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36684,inst_36681,inst_36685,inst_36689,inst_36684__$1,inst_36685__$1,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36687 = cljs.core.filter.call(null,inst_36686,inst_36684__$1);
var inst_36688 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36689__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36688);
var inst_36690 = cljs.core.not_empty.call(null,inst_36689__$1);
var state_36768__$1 = (function (){var statearr_36796 = state_36768;
(statearr_36796[(23)] = inst_36684__$1);

(statearr_36796[(26)] = inst_36687);

(statearr_36796[(24)] = inst_36685__$1);

(statearr_36796[(25)] = inst_36689__$1);

return statearr_36796;
})();
if(cljs.core.truth_(inst_36690)){
var statearr_36797_36877 = state_36768__$1;
(statearr_36797_36877[(1)] = (23));

} else {
var statearr_36798_36878 = state_36768__$1;
(statearr_36798_36878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (36))){
var state_36768__$1 = state_36768;
var statearr_36799_36879 = state_36768__$1;
(statearr_36799_36879[(2)] = false);

(statearr_36799_36879[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (41))){
var inst_36743 = (state_36768[(20)]);
var inst_36747 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36748 = cljs.core.map.call(null,inst_36747,inst_36743);
var inst_36749 = cljs.core.pr_str.call(null,inst_36748);
var inst_36750 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36749)].join('');
var inst_36751 = figwheel.client.utils.log.call(null,inst_36750);
var state_36768__$1 = state_36768;
var statearr_36800_36880 = state_36768__$1;
(statearr_36800_36880[(2)] = inst_36751);

(statearr_36800_36880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (43))){
var inst_36744 = (state_36768[(21)]);
var inst_36754 = (state_36768[(2)]);
var inst_36755 = cljs.core.not_empty.call(null,inst_36744);
var state_36768__$1 = (function (){var statearr_36801 = state_36768;
(statearr_36801[(27)] = inst_36754);

return statearr_36801;
})();
if(cljs.core.truth_(inst_36755)){
var statearr_36802_36881 = state_36768__$1;
(statearr_36802_36881[(1)] = (44));

} else {
var statearr_36803_36882 = state_36768__$1;
(statearr_36803_36882[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (29))){
var inst_36684 = (state_36768[(23)]);
var inst_36721 = (state_36768[(16)]);
var inst_36687 = (state_36768[(26)]);
var inst_36681 = (state_36768[(19)]);
var inst_36685 = (state_36768[(24)]);
var inst_36689 = (state_36768[(25)]);
var inst_36717 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36720 = (function (){var all_files = inst_36681;
var res_SINGLEQUOTE_ = inst_36684;
var res = inst_36685;
var files_not_loaded = inst_36687;
var dependencies_that_loaded = inst_36689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36721,inst_36687,inst_36681,inst_36685,inst_36689,inst_36717,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36719){
var map__36804 = p__36719;
var map__36804__$1 = ((((!((map__36804 == null)))?((((map__36804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36804):map__36804);
var namespace = cljs.core.get.call(null,map__36804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36721,inst_36687,inst_36681,inst_36685,inst_36689,inst_36717,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36721__$1 = cljs.core.group_by.call(null,inst_36720,inst_36687);
var inst_36723 = (inst_36721__$1 == null);
var inst_36724 = cljs.core.not.call(null,inst_36723);
var state_36768__$1 = (function (){var statearr_36806 = state_36768;
(statearr_36806[(16)] = inst_36721__$1);

(statearr_36806[(28)] = inst_36717);

return statearr_36806;
})();
if(inst_36724){
var statearr_36807_36883 = state_36768__$1;
(statearr_36807_36883[(1)] = (32));

} else {
var statearr_36808_36884 = state_36768__$1;
(statearr_36808_36884[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (44))){
var inst_36744 = (state_36768[(21)]);
var inst_36757 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36744);
var inst_36758 = cljs.core.pr_str.call(null,inst_36757);
var inst_36759 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36758)].join('');
var inst_36760 = figwheel.client.utils.log.call(null,inst_36759);
var state_36768__$1 = state_36768;
var statearr_36809_36885 = state_36768__$1;
(statearr_36809_36885[(2)] = inst_36760);

(statearr_36809_36885[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (6))){
var inst_36662 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36810_36886 = state_36768__$1;
(statearr_36810_36886[(2)] = inst_36662);

(statearr_36810_36886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (28))){
var inst_36687 = (state_36768[(26)]);
var inst_36714 = (state_36768[(2)]);
var inst_36715 = cljs.core.not_empty.call(null,inst_36687);
var state_36768__$1 = (function (){var statearr_36811 = state_36768;
(statearr_36811[(29)] = inst_36714);

return statearr_36811;
})();
if(cljs.core.truth_(inst_36715)){
var statearr_36812_36887 = state_36768__$1;
(statearr_36812_36887[(1)] = (29));

} else {
var statearr_36813_36888 = state_36768__$1;
(statearr_36813_36888[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (25))){
var inst_36685 = (state_36768[(24)]);
var inst_36701 = (state_36768[(2)]);
var inst_36702 = cljs.core.not_empty.call(null,inst_36685);
var state_36768__$1 = (function (){var statearr_36814 = state_36768;
(statearr_36814[(30)] = inst_36701);

return statearr_36814;
})();
if(cljs.core.truth_(inst_36702)){
var statearr_36815_36889 = state_36768__$1;
(statearr_36815_36889[(1)] = (26));

} else {
var statearr_36816_36890 = state_36768__$1;
(statearr_36816_36890[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (34))){
var inst_36737 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36737)){
var statearr_36817_36891 = state_36768__$1;
(statearr_36817_36891[(1)] = (38));

} else {
var statearr_36818_36892 = state_36768__$1;
(statearr_36818_36892[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (17))){
var state_36768__$1 = state_36768;
var statearr_36819_36893 = state_36768__$1;
(statearr_36819_36893[(2)] = recompile_dependents);

(statearr_36819_36893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (3))){
var state_36768__$1 = state_36768;
var statearr_36820_36894 = state_36768__$1;
(statearr_36820_36894[(2)] = null);

(statearr_36820_36894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (12))){
var inst_36658 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36821_36895 = state_36768__$1;
(statearr_36821_36895[(2)] = inst_36658);

(statearr_36821_36895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (2))){
var inst_36620 = (state_36768[(13)]);
var inst_36627 = cljs.core.seq.call(null,inst_36620);
var inst_36628 = inst_36627;
var inst_36629 = null;
var inst_36630 = (0);
var inst_36631 = (0);
var state_36768__$1 = (function (){var statearr_36822 = state_36768;
(statearr_36822[(7)] = inst_36628);

(statearr_36822[(8)] = inst_36631);

(statearr_36822[(9)] = inst_36630);

(statearr_36822[(10)] = inst_36629);

return statearr_36822;
})();
var statearr_36823_36896 = state_36768__$1;
(statearr_36823_36896[(2)] = null);

(statearr_36823_36896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (23))){
var inst_36684 = (state_36768[(23)]);
var inst_36687 = (state_36768[(26)]);
var inst_36681 = (state_36768[(19)]);
var inst_36685 = (state_36768[(24)]);
var inst_36689 = (state_36768[(25)]);
var inst_36692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36694 = (function (){var all_files = inst_36681;
var res_SINGLEQUOTE_ = inst_36684;
var res = inst_36685;
var files_not_loaded = inst_36687;
var dependencies_that_loaded = inst_36689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36687,inst_36681,inst_36685,inst_36689,inst_36692,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36693){
var map__36824 = p__36693;
var map__36824__$1 = ((((!((map__36824 == null)))?((((map__36824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36824):map__36824);
var request_url = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36687,inst_36681,inst_36685,inst_36689,inst_36692,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36695 = cljs.core.reverse.call(null,inst_36689);
var inst_36696 = cljs.core.map.call(null,inst_36694,inst_36695);
var inst_36697 = cljs.core.pr_str.call(null,inst_36696);
var inst_36698 = figwheel.client.utils.log.call(null,inst_36697);
var state_36768__$1 = (function (){var statearr_36826 = state_36768;
(statearr_36826[(31)] = inst_36692);

return statearr_36826;
})();
var statearr_36827_36897 = state_36768__$1;
(statearr_36827_36897[(2)] = inst_36698);

(statearr_36827_36897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (35))){
var state_36768__$1 = state_36768;
var statearr_36828_36898 = state_36768__$1;
(statearr_36828_36898[(2)] = true);

(statearr_36828_36898[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (19))){
var inst_36671 = (state_36768[(12)]);
var inst_36677 = figwheel.client.file_reloading.expand_files.call(null,inst_36671);
var state_36768__$1 = state_36768;
var statearr_36829_36899 = state_36768__$1;
(statearr_36829_36899[(2)] = inst_36677);

(statearr_36829_36899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (11))){
var state_36768__$1 = state_36768;
var statearr_36830_36900 = state_36768__$1;
(statearr_36830_36900[(2)] = null);

(statearr_36830_36900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (9))){
var inst_36660 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36831_36901 = state_36768__$1;
(statearr_36831_36901[(2)] = inst_36660);

(statearr_36831_36901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (5))){
var inst_36631 = (state_36768[(8)]);
var inst_36630 = (state_36768[(9)]);
var inst_36633 = (inst_36631 < inst_36630);
var inst_36634 = inst_36633;
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36634)){
var statearr_36832_36902 = state_36768__$1;
(statearr_36832_36902[(1)] = (7));

} else {
var statearr_36833_36903 = state_36768__$1;
(statearr_36833_36903[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (14))){
var inst_36641 = (state_36768[(22)]);
var inst_36650 = cljs.core.first.call(null,inst_36641);
var inst_36651 = figwheel.client.file_reloading.eval_body.call(null,inst_36650,opts);
var inst_36652 = cljs.core.next.call(null,inst_36641);
var inst_36628 = inst_36652;
var inst_36629 = null;
var inst_36630 = (0);
var inst_36631 = (0);
var state_36768__$1 = (function (){var statearr_36834 = state_36768;
(statearr_36834[(7)] = inst_36628);

(statearr_36834[(8)] = inst_36631);

(statearr_36834[(9)] = inst_36630);

(statearr_36834[(32)] = inst_36651);

(statearr_36834[(10)] = inst_36629);

return statearr_36834;
})();
var statearr_36835_36904 = state_36768__$1;
(statearr_36835_36904[(2)] = null);

(statearr_36835_36904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (45))){
var state_36768__$1 = state_36768;
var statearr_36836_36905 = state_36768__$1;
(statearr_36836_36905[(2)] = null);

(statearr_36836_36905[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (26))){
var inst_36684 = (state_36768[(23)]);
var inst_36687 = (state_36768[(26)]);
var inst_36681 = (state_36768[(19)]);
var inst_36685 = (state_36768[(24)]);
var inst_36689 = (state_36768[(25)]);
var inst_36704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36706 = (function (){var all_files = inst_36681;
var res_SINGLEQUOTE_ = inst_36684;
var res = inst_36685;
var files_not_loaded = inst_36687;
var dependencies_that_loaded = inst_36689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36687,inst_36681,inst_36685,inst_36689,inst_36704,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36705){
var map__36837 = p__36705;
var map__36837__$1 = ((((!((map__36837 == null)))?((((map__36837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36837):map__36837);
var namespace = cljs.core.get.call(null,map__36837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36837__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36687,inst_36681,inst_36685,inst_36689,inst_36704,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36707 = cljs.core.map.call(null,inst_36706,inst_36685);
var inst_36708 = cljs.core.pr_str.call(null,inst_36707);
var inst_36709 = figwheel.client.utils.log.call(null,inst_36708);
var inst_36710 = (function (){var all_files = inst_36681;
var res_SINGLEQUOTE_ = inst_36684;
var res = inst_36685;
var files_not_loaded = inst_36687;
var dependencies_that_loaded = inst_36689;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36687,inst_36681,inst_36685,inst_36689,inst_36704,inst_36706,inst_36707,inst_36708,inst_36709,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36684,inst_36687,inst_36681,inst_36685,inst_36689,inst_36704,inst_36706,inst_36707,inst_36708,inst_36709,state_val_36769,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36711 = setTimeout(inst_36710,(10));
var state_36768__$1 = (function (){var statearr_36839 = state_36768;
(statearr_36839[(33)] = inst_36709);

(statearr_36839[(34)] = inst_36704);

return statearr_36839;
})();
var statearr_36840_36906 = state_36768__$1;
(statearr_36840_36906[(2)] = inst_36711);

(statearr_36840_36906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (16))){
var state_36768__$1 = state_36768;
var statearr_36841_36907 = state_36768__$1;
(statearr_36841_36907[(2)] = reload_dependents);

(statearr_36841_36907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (38))){
var inst_36721 = (state_36768[(16)]);
var inst_36739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36721);
var state_36768__$1 = state_36768;
var statearr_36842_36908 = state_36768__$1;
(statearr_36842_36908[(2)] = inst_36739);

(statearr_36842_36908[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (30))){
var state_36768__$1 = state_36768;
var statearr_36843_36909 = state_36768__$1;
(statearr_36843_36909[(2)] = null);

(statearr_36843_36909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (10))){
var inst_36641 = (state_36768[(22)]);
var inst_36643 = cljs.core.chunked_seq_QMARK_.call(null,inst_36641);
var state_36768__$1 = state_36768;
if(inst_36643){
var statearr_36844_36910 = state_36768__$1;
(statearr_36844_36910[(1)] = (13));

} else {
var statearr_36845_36911 = state_36768__$1;
(statearr_36845_36911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (18))){
var inst_36675 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36675)){
var statearr_36846_36912 = state_36768__$1;
(statearr_36846_36912[(1)] = (19));

} else {
var statearr_36847_36913 = state_36768__$1;
(statearr_36847_36913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (42))){
var state_36768__$1 = state_36768;
var statearr_36848_36914 = state_36768__$1;
(statearr_36848_36914[(2)] = null);

(statearr_36848_36914[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (37))){
var inst_36734 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36849_36915 = state_36768__$1;
(statearr_36849_36915[(2)] = inst_36734);

(statearr_36849_36915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (8))){
var inst_36628 = (state_36768[(7)]);
var inst_36641 = (state_36768[(22)]);
var inst_36641__$1 = cljs.core.seq.call(null,inst_36628);
var state_36768__$1 = (function (){var statearr_36850 = state_36768;
(statearr_36850[(22)] = inst_36641__$1);

return statearr_36850;
})();
if(inst_36641__$1){
var statearr_36851_36916 = state_36768__$1;
(statearr_36851_36916[(1)] = (10));

} else {
var statearr_36852_36917 = state_36768__$1;
(statearr_36852_36917[(1)] = (11));

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
});})(c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30214__auto__,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto____0 = (function (){
var statearr_36856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36856[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto__);

(statearr_36856[(1)] = (1));

return statearr_36856;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto____1 = (function (state_36768){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_36768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e36857){if((e36857 instanceof Object)){
var ex__30218__auto__ = e36857;
var statearr_36858_36918 = state_36768;
(statearr_36858_36918[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36919 = state_36768;
state_36768 = G__36919;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto__ = function(state_36768){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto____1.call(this,state_36768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30328__auto__ = (function (){var statearr_36859 = f__30327__auto__.call(null);
(statearr_36859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_36859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__,map__36613,map__36613__$1,opts,before_jsload,on_jsload,reload_dependents,map__36614,map__36614__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30326__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36922,link){
var map__36925 = p__36922;
var map__36925__$1 = ((((!((map__36925 == null)))?((((map__36925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36925):map__36925);
var file = cljs.core.get.call(null,map__36925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36925,map__36925__$1,file){
return (function (p1__36920_SHARP_,p2__36921_SHARP_){
if(cljs.core._EQ_.call(null,p1__36920_SHARP_,p2__36921_SHARP_)){
return p1__36920_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36925,map__36925__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36931){
var map__36932 = p__36931;
var map__36932__$1 = ((((!((map__36932 == null)))?((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36932):map__36932);
var match_length = cljs.core.get.call(null,map__36932__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36932__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36927_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36927_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36934_SHARP_,p2__36935_SHARP_){
return cljs.core.assoc.call(null,p1__36934_SHARP_,cljs.core.get.call(null,p2__36935_SHARP_,key),p2__36935_SHARP_);
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
var loaded_f_datas_36936 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36936);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36936);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36937,p__36938){
var map__36943 = p__36937;
var map__36943__$1 = ((((!((map__36943 == null)))?((((map__36943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36943):map__36943);
var on_cssload = cljs.core.get.call(null,map__36943__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36944 = p__36938;
var map__36944__$1 = ((((!((map__36944 == null)))?((((map__36944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36944):map__36944);
var files_msg = map__36944__$1;
var files = cljs.core.get.call(null,map__36944__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1496186264810