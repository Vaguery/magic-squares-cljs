// Compiled by ClojureScript 1.9.562 {}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.labs.userAgent.device');
goog.require('devcards.util.utils');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.History');
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return f.call(null,e);
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
el.id = id;

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__4655__auto__ = node.firstChild;
if(cljs.core.truth_(temp__4655__auto__)){
var first_child = temp__4655__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__4655__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__4655__auto__)){
var heads = temp__4655__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-edn-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}

if(cljs.core.truth_((function (){var or__26444__auto__ = devcards.system.get_element_by_id.call(null,"com-rigsomelight-code-highlighting");
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return goog.labs.userAgent.device.isMobile();
}
})())){
return null;
} else {
return head.appendChild(devcards.system.create_script_element.call(null,"com-rigsomelight-code-highlighting","!function(e){\"undefined\"!=typeof exports?e(exports):(window.hljs=e({}),\"function\"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,\"&amp;\").replace(/</gm,\"&lt;\").replace(/>/gm,\"&gt;\")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+\" \"+(e.parentNode?e.parentNode.className:\"\")).split(/\\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,\"\")}),n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function o(e,n){var t={};for(var r in e)t[r]=e[r];if(n)for(var r in n)t[r]=n[r];return t}function i(e){var n=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(n.push({event:\"start\",offset:a,node:o}),a=r(o,a),t(o).match(/br|hr|img|input/)||n.push({event:\"stop\",offset:a,node:o}));return a}(e,0),n}function c(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:\"start\"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return\" \"+e.nodeName+'=\"'+n(e.value)+'\"'}l+=\"<\"+t(e)+Array.prototype.map.call(e.attributes,r).join(\"\")+\">\"}function c(e){l+=\"</\"+t(e)+\">\"}function u(e){(\"start\"==e.event?i:c)(e.node)}for(var s=0,l=\"\",f=[];e.length||r.length;){var g=o();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=o();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else\"start\"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return RegExp(n(t),\"m\"+(e.cI?\"i\":\"\")+(r?\"g\":\"\"))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(\" \").forEach(function(e){var t=e.split(\"|\");c[t[0]]=[n,t[1]?Number(t[1]):1]})};\"string\"==typeof a.k?u(\"keyword\",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=t(a.l||/\\b[A-Za-z0-9_]+\\b/,!0),i&&(a.bK&&(a.b=\"\\\\b(\"+a.bK.split(\" \").join(\"|\")+\")\\\\b\"),a.b||(a.b=/\\B|\\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\\B|\\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||\"\",a.eW&&i.tE&&(a.tE+=(a.e?\"|\":\"\")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push(\"self\"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?\"\\\\.?(\"+e.b+\")\\\\.?\":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join(\"|\"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,o){function i(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){return r(e.eR,n)?e:e.eW?c(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=x.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?\"\":E.classPrefix,o='<span class=\"'+a,i=t?\"\":\"</span>\";return o+=e+'\">',o+n+i}function d(){if(!w.k)return n(y);var e=\"\",t=0;w.lR.lastIndex=0;for(var r=w.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(w,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=w.lR.lastIndex,r=w.lR.exec(y)}return e+n(y.substr(t))}function h(){if(w.sL&&!R[w.sL])return n(y);var e=w.sL?s(w.sL,y,!0,L[w.sL]):l(y);return w.r>0&&(B+=e.r),\"continuous\"==w.subLanguageMode&&(L[w.sL]=e.top),p(e.language,e.value,!1,!0)}function v(){return void 0!==w.sL?h():d()}function b(e,t){var r=e.cN?p(e.cN,\"\",!0):\"\";e.rB?(M+=r,y=\"\"):e.eB?(M+=n(t)+r,y=\"\"):(M+=r,y=t),w=Object.create(e,{parent:{value:w}})}function m(e,t){if(y+=e,void 0===t)return M+=v(),0;var r=i(t,w);if(r)return M+=v(),b(r,t),r.rB?0:t.length;var a=c(w,t);if(a){var o=w;o.rE||o.eE||(y+=t),M+=v();do w.cN&&(M+=\"</span>\"),B+=w.r,w=w.parent;while(w!=a.parent);return o.eE&&(M+=n(t)),y=\"\",a.starts&&b(a.starts,\"\"),o.rE?0:t.length}if(f(t,w))throw new Error('Illegal lexeme \"'+t+'\" for mode \"'+(w.cN||\"<unnamed>\")+'\"');return y+=t,t.length||1}var x=N(e);if(!x)throw new Error('Unknown language: \"'+e+'\"');u(x);for(var w=o||x,L={},M=\"\",k=w;k!=x;k=k.parent)k.cN&&(M=p(k.cN,\"\",!0)+M);var y=\"\",B=0;try{for(var C,j,I=0;;){if(w.t.lastIndex=I,C=w.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}m(t.substr(I));for(var k=w;k.parent;k=k.parent)k.cN&&(M+=\"</span>\");return{r:B,value:M,language:e,top:w}}catch(A){if(-1!=A.message.indexOf(\"Illegal\"))return{r:0,value:n(t)};throw A}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\\t)+)/gm,function(e,n){return n.replace(/\\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\\n/g,\"<br>\")),e}function g(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/(\\s|^)hljs(\\s|$)/)||a.push(\"hljs\"),r&&a.push(r),a.join(\" \").trim()}function p(e){var n=a(e);if(!/no(-?)highlight/.test(n)){var t;E.useBR?(t=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\"),t.innerHTML=e.innerHTML.replace(/\\n/g,\"\").replace(/<br[ \\/]*>/g,\"\\n\")):t=e;var r=t.textContent,o=n?s(n,r,!0):l(r),u=i(t);if(u.length){var p=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\");p.innerHTML=o.value,o.value=c(u,i(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll(\"pre code\");Array.prototype.forEach.call(e,p)}}function v(){addEventListener(\"DOMContentLoaded\",h,!1),addEventListener(\"load\",h,!1)}function b(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function m(){return Object.keys(R)}function N(e){return R[e]||R[x[e]]}var E={classPrefix:\"hljs-\",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=b,e.listLanguages=m,e.getLanguage=N,e.inherit=o,e.IR=\"[a-zA-Z][a-zA-Z0-9_]*\",e.UIR=\"[a-zA-Z_][a-zA-Z0-9_]*\",e.NR=\"\\\\b\\\\d+(\\\\.\\\\d+)?\",e.CNR=\"(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)\",e.BNR=\"\\\\b(0b[01]+)\",e.RSR=\"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\",e.BE={b:\"\\\\\\\\[\\\\s\\\\S]\",r:0},e.ASM={cN:\"string\",b:\"'\",e:\"'\",i:\"\\\\n\",c:[e.BE]},e.QSM={cN:\"string\",b:'\"',e:'\"',i:\"\\\\n\",c:[e.BE]},e.PWM={b:/\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\\b/},e.CLCM={cN:\"comment\",b:\"//\",e:\"$\",c:[e.PWM]},e.CBCM={cN:\"comment\",b:\"/\\\\*\",e:\"\\\\*/\",c:[e.PWM]},e.HCM={cN:\"comment\",b:\"#\",e:\"$\",c:[e.PWM]},e.NM={cN:\"number\",b:e.NR,r:0},e.CNM={cN:\"number\",b:e.CNR,r:0},e.BNM={cN:\"number\",b:e.BNR,r:0},e.CSSNM={cN:\"number\",b:e.NR+\"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?\",r:0},e.RM={cN:\"regexp\",b:/\\//,e:/\\/[gimuy]*/,i:/\\n/,c:[e.BE,{b:/\\[/,e:/\\]/,r:0,c:[e.BE]}]},e.TM={cN:\"title\",b:e.IR,r:0},e.UTM={cN:\"title\",b:e.UIR,r:0},e});hljs.registerLanguage(\"ruby\",function(e){var b=\"[a-zA-Z_]\\\\w*[!?=]?|[-+~]\\\\@|<<|>>|=~|===?|<=>|[<>]=?|\\\\*\\\\*|[-/+%^&*~`|]|\\\\[\\\\]=?\",r=\"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor\",c={cN:\"yardoctag\",b:\"@[A-Za-z]+\"},a={cN:\"value\",b:\"#<\",e:\">\"},s={cN:\"comment\",v:[{b:\"#\",e:\"$\",c:[c]},{b:\"^\\\\=begin\",e:\"^\\\\=end\",c:[c],r:10},{b:\"^__END__\",e:\"\\\\n$\"}]},n={cN:\"subst\",b:\"#\\\\{\",e:\"}\",k:r},t={cN:\"string\",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/\"/,e:/\"/},{b:/`/,e:/`/},{b:\"%[qQwWx]?\\\\(\",e:\"\\\\)\"},{b:\"%[qQwWx]?\\\\[\",e:\"\\\\]\"},{b:\"%[qQwWx]?{\",e:\"}\"},{b:\"%[qQwWx]?<\",e:\">\"},{b:\"%[qQwWx]?/\",e:\"/\"},{b:\"%[qQwWx]?%\",e:\"%\"},{b:\"%[qQwWx]?-\",e:\"-\"},{b:\"%[qQwWx]?\\\\|\",e:\"\\\\|\"},{b:/\\B\\?(\\\\\\d{1,3}|\\\\x[A-Fa-f0-9]{1,2}|\\\\u[A-Fa-f0-9]{4}|\\\\?\\S)\\b/}]},i={cN:\"params\",b:\"\\\\(\",e:\"\\\\)\",k:r},d=[t,a,s,{cN:\"class\",bK:\"class module\",e:\"$|;\",i:/=/,c:[e.inherit(e.TM,{b:\"[A-Za-z_]\\\\w*(::\\\\w+)*(\\\\?|\\\\!)?\"}),{cN:\"inheritance\",b:\"<\\\\s*\",c:[{cN:\"parent\",b:\"(\"+e.IR+\"::)?\"+e.IR}]},s]},{cN:\"function\",bK:\"def\",e:\" |$|;\",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:\"constant\",b:\"(::)?(\\\\b[A-Z]\\\\w*(::)?)+\",r:0},{cN:\"symbol\",b:e.UIR+\"(\\\\!|\\\\?)?:\",r:0},{cN:\"symbol\",b:\":\",c:[t,{b:b}],r:0},{cN:\"number\",b:\"(\\\\b0[0-7_]+)|(\\\\b0x[0-9a-fA-F_]+)|(\\\\b[1-9][0-9_]*(\\\\.[0-9_]+)?)|[0_]\\\\b\",r:0},{cN:\"variable\",b:\"(\\\\$\\\\W)|((\\\\$|\\\\@\\\\@?)(\\\\w+))\"},{b:\"(\"+e.RSR+\")\\\\s*\",c:[a,s,{cN:\"regexp\",c:[e.BE,n],i:/\\n/,v:[{b:\"/\",e:\"/[a-z]*\"},{b:\"%r{\",e:\"}[a-z]*\"},{b:\"%r\\\\(\",e:\"\\\\)[a-z]*\"},{b:\"%r!\",e:\"![a-z]*\"},{b:\"%r\\\\[\",e:\"\\\\][a-z]*\"}]}],r:0}];n.c=d,i.c=d;var l=\"[>?]>\",u=\"[\\\\w#]+\\\\(\\\\w+\\\\):\\\\d+:\\\\d+>\",N=\"(\\\\w+-)?\\\\d+\\\\.\\\\d+\\\\.\\\\d(p\\\\d+)?[^>]+>\",o=[{b:/^\\s*=>/,cN:\"status\",starts:{e:\"$\",c:d}},{cN:\"prompt\",b:\"^(\"+l+\"|\"+u+\"|\"+N+\")\",starts:{e:\"$\",c:d}}];return{aliases:[\"rb\",\"gemspec\",\"podspec\",\"thor\",\"irb\"],k:r,c:[s].concat(o).concat(d)}});hljs.registerLanguage(\"javascript\",function(r){return{aliases:[\"js\"],k:{keyword:\"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class\",literal:\"true false null undefined NaN Infinity\",built_in:\"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document\"},c:[{cN:\"pi\",r:10,v:[{b:/^\\s*('|\")use strict('|\")/},{b:/^\\s*('|\")use asm('|\")/}]},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:\"(\"+r.RSR+\"|\\\\b(case|return|throw)\\\\b)\\\\s*\",k:\"return throw case\",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:\"xml\"}],r:0},{cN:\"function\",bK:\"function\",e:/\\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:\"params\",b:/\\(/,e:/\\)/,c:[r.CLCM,r.CBCM],i:/[\"'\\(]/}],i:/\\[|%/},{b:/\\$[(.]/},{b:\"\\\\.\"+r.IR,r:0}]}});hljs.registerLanguage(\"clojure\",function(e){var t={built_in:\"def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize\"},r=\"a-zA-Z_\\\\-!.?+*=<>&#'\",n=\"[\"+r+\"][\"+r+\"0-9/;:]*\",a=\"[-+]?\\\\d+(\\\\.\\\\d+)?\",o={b:n,r:0},s={cN:\"number\",b:a,r:0},c=e.inherit(e.QSM,{i:null}),i={cN:\"comment\",b:\";\",e:\"$\",r:0},d={cN:\"literal\",b:/\\b(true|false|nil)\\b/},l={cN:\"collection\",b:\"[\\\\[\\\\{]\",e:\"[\\\\]\\\\}]\"},m={cN:\"comment\",b:\"\\\\^\"+n},p={cN:\"comment\",b:\"\\\\^\\\\{\",e:\"\\\\}\"},u={cN:\"attribute\",b:\"[:]\"+n},f={cN:\"list\",b:\"\\\\(\",e:\"\\\\)\"},h={eW:!0,r:0},y={k:t,l:n,cN:\"keyword\",b:n,starts:h},b=[f,c,m,p,i,u,l,s,d,o];return f.c=[{cN:\"comment\",b:\"comment\"},y,h],h.c=b,l.c=b,{aliases:[\"clj\"],i:/\\S/,c:[f,c,m,p,i,u,l,s,d]}});hljs.registerLanguage(\"bash\",function(e){var t={cN:\"variable\",v:[{b:/\\$[\\w\\d#@][\\w\\d_]*/},{b:/\\$\\{(.*?)\\}/}]},s={cN:\"string\",b:/\"/,e:/\"/,c:[e.BE,t,{cN:\"variable\",b:/\\$\\(/,e:/\\)/,c:[e.BE]}]},a={cN:\"string\",b:/'/,e:/'/};return{aliases:[\"sh\",\"zsh\"],l:/-?[a-z\\.]+/,k:{keyword:\"if then else elif fi for while in do done case esac function\",literal:\"true false\",built_in:\"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp\",operator:\"-ne -eq -lt -gt -f -d -e -s -l -a\"},c:[{cN:\"shebang\",b:/^#![^\\n]+sh\\s*$/,r:10},{cN:\"function\",b:/\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,rB:!0,c:[e.inherit(e.TM,{b:/\\w[\\w\\d_]*/})],r:0},e.HCM,e.NM,s,a,t]}});hljs.registerLanguage(\"css\",function(e){var c=\"[a-zA-Z-][a-zA-Z0-9_-]*\",a={cN:\"function\",b:c+\"\\\\(\",rB:!0,eE:!0,e:\"\\\\(\"};return{cI:!0,i:\"[=/|']\",c:[e.CBCM,{cN:\"id\",b:\"\\\\#[A-Za-z0-9_-]+\"},{cN:\"class\",b:\"\\\\.[A-Za-z0-9_-]+\",r:0},{cN:\"attr_selector\",b:\"\\\\[\",e:\"\\\\]\",i:\"$\"},{cN:\"pseudo\",b:\":(:)?[a-zA-Z0-9\\\\_\\\\-\\\\+\\\\(\\\\)\\\\\\\"\\\\']+\"},{cN:\"at_rule\",b:\"@(font-face|page)\",l:\"[a-z-]+\",k:\"font-face page\"},{cN:\"at_rule\",b:\"@\",e:\"[{;]\",c:[{cN:\"keyword\",b:/\\S+/},{b:/\\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:\"tag\",b:c,r:0},{cN:\"rules\",b:\"{\",e:\"}\",i:\"[^\\\\s]\",r:0,c:[e.CBCM,{cN:\"rule\",b:\"[^\\\\s]\",rB:!0,e:\";\",eW:!0,c:[{cN:\"attribute\",b:\"[A-Z\\\\_\\\\.\\\\-]+\",e:\":\",eE:!0,i:\"[^\\\\s]\",starts:{cN:\"value\",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:\"hexcolor\",b:\"#[0-9A-Fa-f]+\"},{cN:\"important\",b:\"!important\"}]}}]}]}]}});hljs.registerLanguage(\"clojure-repl\",function(){return{c:[{cN:\"prompt\",b:/^([\\w.-]+|\\s*#_)=>/,starts:{e:/$/,sL:\"clojure\",subLanguageMode:\"continuous\"}}]}});hljs.registerLanguage(\"markdown\",function(){return{aliases:[\"md\",\"mkdown\",\"mkd\"],c:[{cN:\"header\",v:[{b:\"^#{1,6}\",e:\"$\"},{b:\"^.+?\\\\n[=-]{2,}$\"}]},{b:\"<\",e:\">\",sL:\"xml\",r:0},{cN:\"bullet\",b:\"^([*+-]|(\\\\d+\\\\.))\\\\s+\"},{cN:\"strong\",b:\"[*_]{2}.+?[*_]{2}\"},{cN:\"emphasis\",v:[{b:\"\\\\*.+?\\\\*\"},{b:\"_.+?_\",r:0}]},{cN:\"blockquote\",b:\"^>\\\\s+\",e:\"$\"},{cN:\"code\",v:[{b:\"`.+?`\"},{b:\"^( {4}|\t)\",e:\"$\",r:0}]},{cN:\"horizontal_rule\",b:\"^[-\\\\*]{3,}\",e:\"$\"},{b:\"\\\\[.+?\\\\][\\\\(\\\\[].*?[\\\\)\\\\]]\",rB:!0,c:[{cN:\"link_label\",b:\"\\\\[\",e:\"\\\\]\",eB:!0,rE:!0,r:0},{cN:\"link_url\",b:\"\\\\]\\\\(\",e:\"\\\\)\",eB:!0,eE:!0},{cN:\"link_reference\",b:\"\\\\]\\\\[\",e:\"\\\\]\",eB:!0,eE:!0}],r:10},{b:\"^\\\\[.+\\\\]:\",rB:!0,c:[{cN:\"link_reference\",b:\"\\\\[\",e:\"\\\\]:\",eB:!0,eE:!0,starts:{cN:\"link_url\",e:\"$\"}}]}]}});hljs.registerLanguage(\"xml\",function(){var t=\"[A-Za-z0-9\\\\._:-]+\",e={b:/<\\?(php)?(?!\\w)/,e:/\\?>/,sL:\"php\",subLanguageMode:\"continuous\"},c={eW:!0,i:/</,r:0,c:[e,{cN:\"attribute\",b:t,r:0},{b:\"=\",r:0,c:[{cN:\"value\",c:[e],v:[{b:/\"/,e:/\"/},{b:/'/,e:/'/},{b:/[^\\s\\/>]+/}]}]}]};return{aliases:[\"html\",\"xhtml\",\"rss\",\"atom\",\"xsl\",\"plist\"],cI:!0,c:[{cN:\"doctype\",b:\"<!DOCTYPE\",e:\">\",r:10,c:[{b:\"\\\\[\",e:\"\\\\]\"}]},{cN:\"comment\",b:\"<!--\",e:\"-->\",r:10},{cN:\"cdata\",b:\"<\\\\!\\\\[CDATA\\\\[\",e:\"\\\\]\\\\]>\",r:10},{cN:\"tag\",b:\"<style(?=\\\\s|>|$)\",e:\">\",k:{title:\"style\"},c:[c],starts:{e:\"</style>\",rE:!0,sL:\"css\"}},{cN:\"tag\",b:\"<script(?=\\\\s|>|$)\",e:\">\",k:{title:\"script\"},c:[c],starts:{e:\"</script>\",rE:!0,sL:\"javascript\"}},e,{cN:\"pi\",b:/<\\?\\w+/,e:/\\?>/,r:10},{cN:\"tag\",b:\"</?\",e:\"/?>\",c:[{cN:\"title\",b:/[^ \\/><\\n\\t]+/,r:0},c]}]}});hljs.registerLanguage(\"java\",function(e){var a=e.UIR+\"(<\"+e.UIR+\">)?\",t=\"false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private\",c=\"(\\\\b(0b[01_]+)|\\\\b0[xX][a-fA-F0-9_]+|(\\\\b[\\\\d_]+(\\\\.[\\\\d_]*)?|\\\\.[\\\\d_]+)([eE][-+]?\\\\d+)?)[lLfF]?\",r={cN:\"number\",b:c,r:0};return{aliases:[\"jsp\"],k:t,i:/<\\//,c:[{cN:\"javadoc\",b:\"/\\\\*\\\\*\",e:\"\\\\*/\",r:0,c:[{cN:\"javadoctag\",b:\"(^|\\\\s)@[A-Za-z]+\"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:\"class\",bK:\"class interface\",e:/[{;=]/,eE:!0,k:\"class interface\",i:/[:\"\\[\\]]/,c:[{bK:\"extends implements\"},e.UTM]},{bK:\"new throw return\",r:0},{cN:\"function\",b:\"(\"+a+\"\\\\s+)+\"+e.UIR+\"\\\\s*\\\\(\",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.UIR+\"\\\\s*\\\\(\",rB:!0,r:0,c:[e.UTM]},{cN:\"params\",b:/\\(/,e:/\\)/,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},r,{cN:\"annotation\",b:\"@[A-Za-z]+\"}]}});hljs.registerLanguage(\"json\",function(e){var t={literal:\"true false null\"},i=[e.QSM,e.CNM],l={cN:\"value\",e:\",\",eW:!0,eE:!0,c:i,k:t},c={b:\"{\",e:\"}\",c:[{cN:\"attribute\",b:'\\\\s*\"',e:'\"\\\\s*:\\\\s*',eB:!0,eE:!0,c:[e.BE],i:\"\\\\n\",starts:l}],i:\"\\\\S\"},n={b:\"\\\\[\",e:\"\\\\]\",c:[e.inherit(l,{cN:null})],i:\"\\\\S\"};return i.splice(i.length,0,c,n),{c:i,k:t,i:\"\\\\S\"}});"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_.call(null);

if(cljs.core.truth_(devcards.system.devcards_app_node.call(null))){
return null;
} else {
var el = document.createElement("div");
el.id = devcards.system.devcards_app_element_id;

return devcards.system.prepend_child.call(null,document.body,el);
}
});

if(typeof devcards.system.history !== 'undefined'){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("!/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__34671_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__34671_SHARP_.token));
}));

var temp__4657__auto__ = (location["hash"]);
if(cljs.core.truth_(temp__4657__auto__)){
var token = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__26432__auto__ = cljs.core.map_QMARK_.call(null,d);
if(and__26432__auto__){
var and__26432__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__26432__auto____$1)){
var and__26432__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__26432__auto____$2)){
var and__26432__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__26432__auto____$3)){
return d;
} else {
return and__26432__auto____$3;
}
} else {
return and__26432__auto____$2;
}
} else {
return and__26432__auto____$1;
}
} else {
return and__26432__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__4655__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.vec.call(null,path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.last.call(null,path))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if(typeof devcards.system.dev_trans !== 'undefined'){
} else {
devcards.system.dev_trans = (function (){var method_table__27377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27381__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27381__auto__,method_table__27377__auto__,prefer_table__27378__auto__,method_cache__27379__auto__,cached_hierarchy__27380__auto__));
})();
}
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__34672,state){
var vec__34673 = p__34672;
var _ = cljs.core.nth.call(null,vec__34673,(0),null);
var map__34676 = cljs.core.nth.call(null,vec__34673,(1),null);
var map__34676__$1 = ((((!((map__34676 == null)))?((((map__34676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34676):map__34676);
var path = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),((function (position,new_path,vec__34673,_,map__34676,map__34676__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
});})(position,new_path,vec__34673,_,map__34676,map__34676__$1,path,options,func))
),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if(typeof devcards.system.app_state !== 'undefined'){
} else {
devcards.system.app_state = cljs.core.atom.call(null,devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__26444__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__26444__auto__){
return or__26444__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__34678,path){
var map__34681 = p__34678;
var map__34681__$1 = ((((!((map__34681 == null)))?((((map__34681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34681):map__34681);
var state = map__34681__$1;
var current_path = cljs.core.get.call(null,map__34681__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__34683,path){
var map__34686 = p__34683;
var map__34686__$1 = ((((!((map__34686 == null)))?((((map__34686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34686):map__34686);
var state = map__34686__$1;
var current_path = cljs.core.get.call(null,map__34686__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,path));
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate.call(null,path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__26432__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__26432__auto__)){
var and__26432__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__26432__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__26432__auto____$1;
}
} else {
return and__26432__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_.call(null,devcards.system.current_page.call(null,state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__34688_SHARP_){
var and__26432__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__34688_SHARP_));
if(and__26432__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__34688_SHARP_);
} else {
return and__26432__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__34689){
var map__34693 = p__34689;
var map__34693__$1 = ((((!((map__34693 == null)))?((((map__34693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34693):map__34693);
var card = map__34693__$1;
var path = cljs.core.get.call(null,map__34693__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__34693__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__34693__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return React.createElement("div",({"key": devcards.system.path__GT_unique_card_id.call(null,path), "className": "com-rigsomelight-devcard"}),sablono.interpreter.interpret.call(null,(function (){var _STAR_devcard_data_STAR_34695 = devcards.system._STAR_devcard_data_STAR_;
devcards.system._STAR_devcard_data_STAR_ = card;

try{return func.call(null);
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR_34695;
}})()));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))){
return devcards.system.card_template.call(null,state_atom,devcards.system.current_page.call(null,data));
} else {
return devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,devcards.system.current_page.call(null,data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__34696){
var map__34699 = p__34696;
var map__34699__$1 = ((((!((map__34699 == null)))?((((map__34699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34699):map__34699);
var state = map__34699__$1;
var current_path = cljs.core.get.call(null,map__34699__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__34699,map__34699__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
});})(cpath,map__34699,map__34699__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.call(null,(0));
var sep_fn = ((function (counter){
return (function (_){
return React.createElement("span",({"key": (function (){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return cljs.core.deref.call(null,counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"}),"/");
});})(counter))
;
return React.createElement("div",({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.rest.call(null,cljs.core.interleave.call(null,cljs.core.iterate.call(null,sep_fn,sep_fn.call(null,null)),cljs.core.map.call(null,((function (counter,sep_fn){
return (function (p__34705){
var vec__34706 = p__34705;
var n = cljs.core.nth.call(null,vec__34706,(0),null);
var path = cljs.core.nth.call(null,vec__34706,(1),null);
return React.createElement("span",({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id.call(null,path)}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (vec__34706,n,path,counter,sep_fn){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
});})(vec__34706,n,path,counter,sep_fn))
), "className": "com-rigsomelight-devcards_set-current-path"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''))));
});})(counter,sep_fn))
,crumbs)))),sablono.interpreter.interpret.call(null,devcards.system.cljs_logo.call(null)));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.call(null,state_atom,(function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs34718 = cljs.core.map.call(null,(function (p__34719){
var vec__34720 = p__34719;
var key = cljs.core.nth.call(null,vec__34720,(0),null);
var child_tree = cljs.core.nth.call(null,vec__34720,(1),null);
return React.createElement("a",({"href": "#", "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''), "onClick": devcards.system.prevent__GT_.call(null,((function (vec__34720,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
});})(vec__34720,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"}),React.createElement("span",({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),React.createElement("span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__34723){
var vec__34724 = p__34723;
var key = cljs.core.nth.call(null,vec__34724,(0),null);
var _ = cljs.core.nth.call(null,vec__34724,(1),null);
return cljs.core.name.call(null,key);
}),dirs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34718))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs34718)):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_.call(null,attrs34718))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34718)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return React.createElement("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-base "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
return clojure.string.replace.call(null,cljs.core.name.call(null,n),".","-");
} else {
return null;
}
})())].join('')}),(function (){var attrs34730 = (function (){var temp__4657__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__4657__auto__)){
var crumbs = temp__4657__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34730))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs34730)):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_.call(null,attrs34730))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return devcards.system.dir_links.call(null,dir_paths,state_atom);
})())),(function (){var attrs34731 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34731))?sablono.interpreter.attributes.call(null,attrs34731):null),((cljs.core.map_QMARK_.call(null,attrs34731))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34731)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34730),sablono.interpreter.interpret.call(null,(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return devcards.system.dir_links.call(null,dir_paths,state_atom);
})())),(function (){var attrs34732 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34732))?sablono.interpreter.attributes.call(null,attrs34732):null),((cljs.core.map_QMARK_.call(null,attrs34732))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34732)], null)));
})()], null)));
})());
});
var base__34659__auto___34737 = ({"componentDidMount": (function (){
var this$ = this;
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),((function (this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(this$))
);
}), "render": (function (){
return devcards.system.main_template.call(null,devcards.system.app_state);
})});
if(typeof devcards.system.DevcardsRoot !== 'undefined'){
} else {
devcards.system.DevcardsRoot = React.createClass(base__34659__auto___34737);
}

var seq__34733_34738 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__34734_34739 = null;
var count__34735_34740 = (0);
var i__34736_34741 = (0);
while(true){
if((i__34736_34741 < count__34735_34740)){
var property__34660__auto___34742 = cljs.core._nth.call(null,chunk__34734_34739,i__34736_34741);
if(cljs.core.truth_((base__34659__auto___34737[property__34660__auto___34742]))){
(devcards.system.DevcardsRoot.prototype[property__34660__auto___34742] = (base__34659__auto___34737[property__34660__auto___34742]));
} else {
}

var G__34743 = seq__34733_34738;
var G__34744 = chunk__34734_34739;
var G__34745 = count__34735_34740;
var G__34746 = (i__34736_34741 + (1));
seq__34733_34738 = G__34743;
chunk__34734_34739 = G__34744;
count__34735_34740 = G__34745;
i__34736_34741 = G__34746;
continue;
} else {
var temp__4657__auto___34747 = cljs.core.seq.call(null,seq__34733_34738);
if(temp__4657__auto___34747){
var seq__34733_34748__$1 = temp__4657__auto___34747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34733_34748__$1)){
var c__27263__auto___34749 = cljs.core.chunk_first.call(null,seq__34733_34748__$1);
var G__34750 = cljs.core.chunk_rest.call(null,seq__34733_34748__$1);
var G__34751 = c__27263__auto___34749;
var G__34752 = cljs.core.count.call(null,c__27263__auto___34749);
var G__34753 = (0);
seq__34733_34738 = G__34750;
chunk__34734_34739 = G__34751;
count__34735_34740 = G__34752;
i__34736_34741 = G__34753;
continue;
} else {
var property__34660__auto___34754 = cljs.core.first.call(null,seq__34733_34748__$1);
if(cljs.core.truth_((base__34659__auto___34737[property__34660__auto___34754]))){
(devcards.system.DevcardsRoot.prototype[property__34660__auto___34754] = (base__34659__auto___34737[property__34660__auto___34754]));
} else {
}

var G__34755 = cljs.core.next.call(null,seq__34733_34748__$1);
var G__34756 = null;
var G__34757 = (0);
var G__34758 = (0);
seq__34733_34738 = G__34755;
chunk__34734_34739 = G__34756;
count__34735_34740 = G__34757;
i__34736_34741 = G__34758;
continue;
}
} else {
}
}
break;
}
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return ReactDOM.render(React.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node.call(null));
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__,initial_data){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__,initial_data){
return (function (state_34885){
var state_val_34886 = (state_34885[(1)]);
if((state_val_34886 === (7))){
var inst_34881 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34887_34917 = state_34885__$1;
(statearr_34887_34917[(2)] = inst_34881);

(statearr_34887_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (1))){
var inst_34838 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_34839 = inst_34838;
var state_34885__$1 = (function (){var statearr_34888 = state_34885;
(statearr_34888[(7)] = inst_34839);

return statearr_34888;
})();
var statearr_34889_34918 = state_34885__$1;
(statearr_34889_34918[(2)] = null);

(statearr_34889_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (4))){
var inst_34846 = (state_34885[(8)]);
var inst_34846__$1 = (state_34885[(2)]);
var state_34885__$1 = (function (){var statearr_34890 = state_34885;
(statearr_34890[(8)] = inst_34846__$1);

return statearr_34890;
})();
if(cljs.core.truth_(inst_34846__$1)){
var statearr_34891_34919 = state_34885__$1;
(statearr_34891_34919[(1)] = (5));

} else {
var statearr_34892_34920 = state_34885__$1;
(statearr_34892_34920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (15))){
var state_34885__$1 = state_34885;
var statearr_34893_34921 = state_34885__$1;
(statearr_34893_34921[(2)] = null);

(statearr_34893_34921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (13))){
var inst_34876 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34894_34922 = state_34885__$1;
(statearr_34894_34922[(2)] = inst_34876);

(statearr_34894_34922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (6))){
var state_34885__$1 = state_34885;
var statearr_34895_34923 = state_34885__$1;
(statearr_34895_34923[(2)] = null);

(statearr_34895_34923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (3))){
var inst_34883 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34885__$1,inst_34883);
} else {
if((state_val_34886 === (12))){
var state_34885__$1 = state_34885;
var statearr_34896_34924 = state_34885__$1;
(statearr_34896_34924[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (2))){
var inst_34841 = (state_34885[(9)]);
var inst_34841__$1 = cljs.core.async.timeout.call(null,(500));
var inst_34842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34843 = [channel,inst_34841__$1];
var inst_34844 = (new cljs.core.PersistentVector(null,2,(5),inst_34842,inst_34843,null));
var state_34885__$1 = (function (){var statearr_34898 = state_34885;
(statearr_34898[(9)] = inst_34841__$1);

return statearr_34898;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34885__$1,(4),inst_34844);
} else {
if((state_val_34886 === (11))){
var inst_34839 = (state_34885[(7)]);
var inst_34864 = devcards.system.merge_in_new_data.call(null,start_data,inst_34839);
var state_34885__$1 = state_34885;
var statearr_34899_34925 = state_34885__$1;
(statearr_34899_34925[(2)] = inst_34864);

(statearr_34899_34925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (9))){
var inst_34855 = (state_34885[(10)]);
var inst_34862 = cljs.core._EQ_.call(null,inst_34855,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_34885__$1 = state_34885;
if(inst_34862){
var statearr_34900_34926 = state_34885__$1;
(statearr_34900_34926[(1)] = (11));

} else {
var statearr_34901_34927 = state_34885__$1;
(statearr_34901_34927[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (5))){
var inst_34846 = (state_34885[(8)]);
var inst_34841 = (state_34885[(9)]);
var inst_34854 = cljs.core.nth.call(null,inst_34846,(0),null);
var inst_34855 = cljs.core.nth.call(null,inst_34854,(0),null);
var inst_34856 = cljs.core.nth.call(null,inst_34854,(1),null);
var inst_34857 = cljs.core.nth.call(null,inst_34846,(1),null);
var inst_34858 = cljs.core._EQ_.call(null,inst_34857,inst_34841);
var state_34885__$1 = (function (){var statearr_34902 = state_34885;
(statearr_34902[(11)] = inst_34856);

(statearr_34902[(10)] = inst_34855);

return statearr_34902;
})();
if(inst_34858){
var statearr_34903_34928 = state_34885__$1;
(statearr_34903_34928[(1)] = (8));

} else {
var statearr_34904_34929 = state_34885__$1;
(statearr_34904_34929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (14))){
var inst_34856 = (state_34885[(11)]);
var inst_34855 = (state_34885[(10)]);
var inst_34839 = (state_34885[(7)]);
var inst_34867 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34868 = [inst_34855,inst_34856];
var inst_34869 = (new cljs.core.PersistentVector(null,2,(5),inst_34867,inst_34868,null));
var inst_34870 = devcards.system.dev_trans.call(null,inst_34869,inst_34839);
var inst_34839__$1 = inst_34870;
var state_34885__$1 = (function (){var statearr_34905 = state_34885;
(statearr_34905[(7)] = inst_34839__$1);

return statearr_34905;
})();
var statearr_34906_34930 = state_34885__$1;
(statearr_34906_34930[(2)] = null);

(statearr_34906_34930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (16))){
var inst_34874 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34907_34931 = state_34885__$1;
(statearr_34907_34931[(2)] = inst_34874);

(statearr_34907_34931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (10))){
var inst_34878 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34908_34932 = state_34885__$1;
(statearr_34908_34932[(2)] = inst_34878);

(statearr_34908_34932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (8))){
var inst_34839 = (state_34885[(7)]);
var inst_34860 = devcards.system.merge_in_new_data.call(null,start_data,inst_34839);
var state_34885__$1 = state_34885;
var statearr_34909_34933 = state_34885__$1;
(statearr_34909_34933[(2)] = inst_34860);

(statearr_34909_34933[(1)] = (10));


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
});})(c__31784__auto__,initial_data))
;
return ((function (switch__31672__auto__,c__31784__auto__,initial_data){
return (function() {
var devcards$system$off_the_books_$_state_machine__31673__auto__ = null;
var devcards$system$off_the_books_$_state_machine__31673__auto____0 = (function (){
var statearr_34913 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34913[(0)] = devcards$system$off_the_books_$_state_machine__31673__auto__);

(statearr_34913[(1)] = (1));

return statearr_34913;
});
var devcards$system$off_the_books_$_state_machine__31673__auto____1 = (function (state_34885){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_34885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e34914){if((e34914 instanceof Object)){
var ex__31676__auto__ = e34914;
var statearr_34915_34934 = state_34885;
(statearr_34915_34934[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34935 = state_34885;
state_34885 = G__34935;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__31673__auto__ = function(state_34885){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__31673__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__31673__auto____1.call(this,state_34885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$off_the_books_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__31673__auto____0;
devcards$system$off_the_books_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__31673__auto____1;
return devcards$system$off_the_books_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__,initial_data))
})();
var state__31786__auto__ = (function (){var statearr_34916 = f__31785__auto__.call(null);
(statearr_34916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_34916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__,initial_data))
);

return c__31784__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__){
return (function (state_34959){
var state_val_34960 = (state_34959[(1)]);
if((state_val_34960 === (1))){
var inst_34952 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_34953 = cljs.core.PersistentVector.EMPTY;
var inst_34954 = devcards.system.off_the_books.call(null,channel,inst_34952,inst_34953);
var state_34959__$1 = state_34959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34959__$1,(2),inst_34954);
} else {
if((state_val_34960 === (2))){
var inst_34956 = (state_34959[(2)]);
var inst_34957 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_34956);
var state_34959__$1 = state_34959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34959__$1,inst_34957);
} else {
return null;
}
}
});})(c__31784__auto__))
;
return ((function (switch__31672__auto__,c__31784__auto__){
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto____0 = (function (){
var statearr_34964 = [null,null,null,null,null,null,null];
(statearr_34964[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto__);

(statearr_34964[(1)] = (1));

return statearr_34964;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto____1 = (function (state_34959){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_34959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e34965){if((e34965 instanceof Object)){
var ex__31676__auto__ = e34965;
var statearr_34966_34968 = state_34959;
(statearr_34966_34968[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34969 = state_34959;
state_34959 = G__34969;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto__ = function(state_34959){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto____1.call(this,state_34959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__))
})();
var state__31786__auto__ = (function (){var statearr_34967 = f__31785__auto__.call(null);
(statearr_34967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_34967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__))
);

return c__31784__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

var c__31784__auto___35054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___35054){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___35054){
return (function (state_35036){
var state_val_35037 = (state_35036[(1)]);
if((state_val_35037 === (1))){
var inst_35012 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_35036__$1 = state_35036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35036__$1,(2),inst_35012);
} else {
if((state_val_35037 === (2))){
var inst_35014 = (state_35036[(2)]);
var inst_35015 = (function (){return ((function (inst_35014,state_val_35037,c__31784__auto___35054){
return (function (){
return renderer.call(null,devcards.system.app_state);
});
;})(inst_35014,state_val_35037,c__31784__auto___35054))
})();
var inst_35016 = setTimeout(inst_35015,(0));
var inst_35017 = (function (){return ((function (inst_35014,inst_35015,inst_35016,state_val_35037,c__31784__auto___35054){
return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),((function (inst_35014,inst_35015,inst_35016,state_val_35037,c__31784__auto___35054){
return (function (_,___$1,___$2,___$3){
return renderer.call(null,devcards.system.app_state);
});})(inst_35014,inst_35015,inst_35016,state_val_35037,c__31784__auto___35054))
);
});
;})(inst_35014,inst_35015,inst_35016,state_val_35037,c__31784__auto___35054))
})();
var inst_35018 = setTimeout(inst_35017,(0));
var state_35036__$1 = (function (){var statearr_35038 = state_35036;
(statearr_35038[(7)] = inst_35018);

(statearr_35038[(8)] = inst_35014);

(statearr_35038[(9)] = inst_35016);

return statearr_35038;
})();
var statearr_35039_35055 = state_35036__$1;
(statearr_35039_35055[(2)] = null);

(statearr_35039_35055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35037 === (3))){
var state_35036__$1 = state_35036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35036__$1,(5),channel);
} else {
if((state_val_35037 === (4))){
var inst_35034 = (state_35036[(2)]);
var state_35036__$1 = state_35036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35036__$1,inst_35034);
} else {
if((state_val_35037 === (5))){
var inst_35021 = (state_35036[(10)]);
var inst_35021__$1 = (state_35036[(2)]);
var state_35036__$1 = (function (){var statearr_35040 = state_35036;
(statearr_35040[(10)] = inst_35021__$1);

return statearr_35040;
})();
if(cljs.core.truth_(inst_35021__$1)){
var statearr_35041_35056 = state_35036__$1;
(statearr_35041_35056[(1)] = (6));

} else {
var statearr_35042_35057 = state_35036__$1;
(statearr_35042_35057[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35037 === (6))){
var inst_35021 = (state_35036[(10)]);
var inst_35023 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_35024 = devcards.system.off_the_books.call(null,channel,inst_35023,inst_35021);
var state_35036__$1 = state_35036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35036__$1,(9),inst_35024);
} else {
if((state_val_35037 === (7))){
var state_35036__$1 = state_35036;
var statearr_35043_35058 = state_35036__$1;
(statearr_35043_35058[(2)] = null);

(statearr_35043_35058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35037 === (8))){
var inst_35032 = (state_35036[(2)]);
var state_35036__$1 = state_35036;
var statearr_35044_35059 = state_35036__$1;
(statearr_35044_35059[(2)] = inst_35032);

(statearr_35044_35059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35037 === (9))){
var inst_35021 = (state_35036[(10)]);
var inst_35026 = (state_35036[(2)]);
var inst_35027 = (function (){var temp__4657__auto__ = inst_35021;
var v = inst_35021;
var new_state = inst_35026;
return ((function (temp__4657__auto__,v,new_state,inst_35021,inst_35026,state_val_35037,c__31784__auto___35054){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__4657__auto__,v,new_state,inst_35021,inst_35026,state_val_35037,c__31784__auto___35054))
})();
var inst_35028 = setTimeout(inst_35027,(0));
var state_35036__$1 = (function (){var statearr_35045 = state_35036;
(statearr_35045[(11)] = inst_35028);

return statearr_35045;
})();
var statearr_35046_35060 = state_35036__$1;
(statearr_35046_35060[(2)] = null);

(statearr_35046_35060[(1)] = (3));


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
});})(c__31784__auto___35054))
;
return ((function (switch__31672__auto__,c__31784__auto___35054){
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__31673__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__31673__auto____0 = (function (){
var statearr_35050 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35050[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__31673__auto__);

(statearr_35050[(1)] = (1));

return statearr_35050;
});
var devcards$system$start_ui_with_renderer_$_state_machine__31673__auto____1 = (function (state_35036){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_35036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e35051){if((e35051 instanceof Object)){
var ex__31676__auto__ = e35051;
var statearr_35052_35061 = state_35036;
(statearr_35052_35061[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35062 = state_35036;
state_35036 = G__35062;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__31673__auto__ = function(state_35036){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__31673__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__31673__auto____1.call(this,state_35036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$start_ui_with_renderer_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__31673__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__31673__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___35054))
})();
var state__31786__auto__ = (function (){var statearr_35053 = f__31785__auto__.call(null);
(statearr_35053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___35054);

return statearr_35053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___35054))
);


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_.call(null);

var c__31784__auto___35147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___35147){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___35147){
return (function (state_35129){
var state_val_35130 = (state_35129[(1)]);
if((state_val_35130 === (1))){
var inst_35105 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35129__$1,(2),inst_35105);
} else {
if((state_val_35130 === (2))){
var inst_35107 = (state_35129[(2)]);
var inst_35108 = (function (){return ((function (inst_35107,state_val_35130,c__31784__auto___35147){
return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
;})(inst_35107,state_val_35130,c__31784__auto___35147))
})();
var inst_35109 = setTimeout(inst_35108,(0));
var inst_35110 = (function (){return ((function (inst_35107,inst_35108,inst_35109,state_val_35130,c__31784__auto___35147){
return (function (){
return devcards.system.hash_routing_init.call(null,devcards.system.app_state);
});
;})(inst_35107,inst_35108,inst_35109,state_val_35130,c__31784__auto___35147))
})();
var inst_35111 = setTimeout(inst_35110,(0));
var state_35129__$1 = (function (){var statearr_35131 = state_35129;
(statearr_35131[(7)] = inst_35109);

(statearr_35131[(8)] = inst_35107);

(statearr_35131[(9)] = inst_35111);

return statearr_35131;
})();
var statearr_35132_35148 = state_35129__$1;
(statearr_35132_35148[(2)] = null);

(statearr_35132_35148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (3))){
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35129__$1,(5),channel);
} else {
if((state_val_35130 === (4))){
var inst_35127 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35129__$1,inst_35127);
} else {
if((state_val_35130 === (5))){
var inst_35114 = (state_35129[(10)]);
var inst_35114__$1 = (state_35129[(2)]);
var state_35129__$1 = (function (){var statearr_35133 = state_35129;
(statearr_35133[(10)] = inst_35114__$1);

return statearr_35133;
})();
if(cljs.core.truth_(inst_35114__$1)){
var statearr_35134_35149 = state_35129__$1;
(statearr_35134_35149[(1)] = (6));

} else {
var statearr_35135_35150 = state_35129__$1;
(statearr_35135_35150[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (6))){
var inst_35114 = (state_35129[(10)]);
var inst_35116 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_35117 = devcards.system.off_the_books.call(null,channel,inst_35116,inst_35114);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35129__$1,(9),inst_35117);
} else {
if((state_val_35130 === (7))){
var state_35129__$1 = state_35129;
var statearr_35136_35151 = state_35129__$1;
(statearr_35136_35151[(2)] = null);

(statearr_35136_35151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (8))){
var inst_35125 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35137_35152 = state_35129__$1;
(statearr_35137_35152[(2)] = inst_35125);

(statearr_35137_35152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (9))){
var inst_35114 = (state_35129[(10)]);
var inst_35119 = (state_35129[(2)]);
var inst_35120 = (function (){var temp__4657__auto__ = inst_35114;
var v = inst_35114;
var new_state = inst_35119;
return ((function (temp__4657__auto__,v,new_state,inst_35114,inst_35119,state_val_35130,c__31784__auto___35147){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__4657__auto__,v,new_state,inst_35114,inst_35119,state_val_35130,c__31784__auto___35147))
})();
var inst_35121 = setTimeout(inst_35120,(0));
var state_35129__$1 = (function (){var statearr_35138 = state_35129;
(statearr_35138[(11)] = inst_35121);

return statearr_35138;
})();
var statearr_35139_35153 = state_35129__$1;
(statearr_35139_35153[(2)] = null);

(statearr_35139_35153[(1)] = (3));


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
});})(c__31784__auto___35147))
;
return ((function (switch__31672__auto__,c__31784__auto___35147){
return (function() {
var devcards$system$start_ui_$_state_machine__31673__auto__ = null;
var devcards$system$start_ui_$_state_machine__31673__auto____0 = (function (){
var statearr_35143 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35143[(0)] = devcards$system$start_ui_$_state_machine__31673__auto__);

(statearr_35143[(1)] = (1));

return statearr_35143;
});
var devcards$system$start_ui_$_state_machine__31673__auto____1 = (function (state_35129){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_35129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e35144){if((e35144 instanceof Object)){
var ex__31676__auto__ = e35144;
var statearr_35145_35154 = state_35129;
(statearr_35145_35154[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35155 = state_35129;
state_35129 = G__35155;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__31673__auto__ = function(state_35129){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__31673__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__31673__auto____1.call(this,state_35129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$start_ui_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__31673__auto____0;
devcards$system$start_ui_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__31673__auto____1;
return devcards$system$start_ui_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___35147))
})();
var state__31786__auto__ = (function (){var statearr_35146 = f__31785__auto__.call(null);
(statearr_35146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___35147);

return statearr_35146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___35147))
);


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cljs-logo",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),devcards.system.cljs_logo_svg], null)], null)));
});

//# sourceMappingURL=system.js.map?rel=1496284144775