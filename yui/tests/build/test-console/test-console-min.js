/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("test-console",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}e.namespace("Test").Console=e.extend(n,e.Console,{initializer:function(t){this.on("entry",this._onEntry),this.plug(e.Plugin.ConsoleFilters,{category:e.merge({info:!0,pass:!1,fail:!0,status:!1},t&&t.filters||{}),defaultVisibility:!1,source:{TestRunner:!0}}),e.Test.Runner.on("complete",e.bind(this._parseCoverage,this))},_isIstanbul:function(t){var n=e.Object.keys(t)[0],r=!1;return t[n].s!==undefined&&t[n].fnMap!==undefined&&(r=!0),t.s!==undefined&&t.fnMap!==undefined&&(r=!0),r},parseYUITestCoverage:function(t){var n={lines:{hit:0,miss:0,total:0,percent:0},functions:{hit:0,miss:0,total:0,percent:0}},r;e.Object.each(t,function(e){n.lines.total+=e.coveredLines,n.lines.hit+=e.calledLines,n.lines.miss+=e.coveredLines-e.calledLines,n.lines.percent=Math.floor(n.lines.hit/n.lines.total*100),n.functions.total+=e.coveredFunctions,n.functions.hit+=e.calledFunctions,n.functions.miss+=e.coveredFunctions-e.calledFunctions,n.functions.percent=Math.floor(n.functions.hit/n.functions.total*100)}),r="Lines: Hit:"+n.lines.hit+" Missed:"+n.lines.miss+" Total:"+n.lines.total+" Percent:"+n.lines.percent+"%\n",r+="Functions: Hit:"+n.functions.hit+" Missed:"+n.functions.miss+" Total:"+n.functions.total+" Percent:"+n.functions.percent+"%",this.log("Coverage: "+r,"info","TestRunner")},_blankSummary:function(){return{lines:{total:0,covered:0,pct:"Unknown"},statements:{total:0,covered:0,pct:"Unknown"},functions:{total:0,covered:0,pct:"Unknown"},branches:{total:0,covered:0,pct:"Unknown"}}},_addDerivedInfoForFile:function(t){var n=t.statementMap,r=t.s,i;t.l||(t.l=i={},e.Object.each(r,function(e,t){var s=n[t].start.line,o=r[t],u=i[s];if(typeof u=="undefined"||u<o)i[s]=o}))},_percent:function(e,t){var n,r=100;return t>0&&(n=1e5*e/t+5,r=Math.floor(n/10)/100),r},_computeSimpleTotals:function(t,n){var r=t[n],i={total:0,covered:0};return e.Object.each(r,function(e){i.total+=1,e&&(i.covered+=1)}),i.pct=this._percent(i.covered,i.total),i},_computeBranchTotals:function(t){var n=t.b,r={total:0,covered:0};return e.Object.each(n,function(t){var n=e.Array.filter(t,function(e){return e>0});r.total+=t.length,r.covered+=n.length}),r.pct=this._percent(r.covered,r.total),r},parseIstanbul:function(t){var n=this,r="Coverage Report:\n";e.Object.each(t,function(t,i){var s=n._blankSummary();n._addDerivedInfoForFile(t),s.lines=n._computeSimpleTotals(t,"l"),s.functions=n._computeSimpleTotals(t,"f"),s.statements=n._computeSimpleTotals(t,"s"),s.branches=n._computeBranchTotals(t),r+=i+":\n",e.Array.each(["lines","functions","statements","branches"],function(e){r+="    "+e+": "+s[e].covered+"/"+s[e].total+" : "+s[e].pct+"%\n"})}),this.log(r,"info","TestRunner")},_parseCoverage:function(){var t=e.Test.Runner.getCoverage();if(!t)return;this._isIstanbul(t)?this.parseIstanbul(t):this.parseYUITestCoverage(t)},_onEntry:function(e){var t=e.message;t.category==="info"&&/\s(?:case|suite)\s|yuitests\d+|began/.test(t.message)?t.category="status":t.category==="fail"&&this.printBuffer()}},{NAME:"testConsole",ATTRS:{entryTemplate:{value:'<div class="{entry_class} {cat_class} {src_class}"><div class="{entry_content_class}">{message}</div></div>'},height:{value:"350px"},newestOnTop:{value:!1},style:{value:"block"},width:{value:e.UA.ie&&e.UA.ie<9?"100%":"inherit"}}})},"3.18.0",{requires:["console-filters","test","array-extras"],skinnable:!0});
