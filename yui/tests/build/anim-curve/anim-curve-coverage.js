/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/anim-curve/anim-curve.js']) {
   __coverage__['build/anim-curve/anim-curve.js'] = {"path":"build/anim-curve/anim-curve.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":41}}},"2":{"name":"(anonymous_2)","line":11,"loc":{"start":{"line":11,"column":9},"end":{"line":11,"column":62}}},"3":{"name":"(anonymous_3)","line":19,"loc":{"start":{"line":19,"column":9},"end":{"line":19,"column":24}}},"4":{"name":"(anonymous_4)","line":37,"loc":{"start":{"line":37,"column":19},"end":{"line":37,"column":39}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":59,"column":40}},"2":{"start":{"line":10,"column":0},"end":{"line":22,"column":2}},"3":{"start":{"line":12,"column":8},"end":{"line":12,"column":37}},"4":{"start":{"line":13,"column":8},"end":{"line":13,"column":31}},"5":{"start":{"line":14,"column":8},"end":{"line":14,"column":52}},"6":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}},"7":{"start":{"line":16,"column":8},"end":{"line":16,"column":50}},"8":{"start":{"line":20,"column":8},"end":{"line":20,"column":34}},"9":{"start":{"line":37,"column":0},"end":{"line":56,"column":2}},"10":{"start":{"line":38,"column":4},"end":{"line":41,"column":10}},"11":{"start":{"line":43,"column":4},"end":{"line":45,"column":5}},"12":{"start":{"line":44,"column":8},"end":{"line":44,"column":46}},"13":{"start":{"line":47,"column":4},"end":{"line":52,"column":5}},"14":{"start":{"line":48,"column":8},"end":{"line":51,"column":9}},"15":{"start":{"line":49,"column":12},"end":{"line":49,"column":78}},"16":{"start":{"line":50,"column":12},"end":{"line":50,"column":78}},"17":{"start":{"line":54,"column":4},"end":{"line":54,"column":36}}},"branchMap":{},"code":["(function () { YUI.add('anim-curve', function (Y, NAME) {","","/**"," * Adds support for the <code>curve</code> property for the <code>to</code>"," * attribute.  A curve is zero or more control points and an end point."," * @module anim"," * @submodule anim-curve"," */","","Y.Anim.behaviors.curve = {","    set: function(anim, att, from, to, elapsed, duration, fn) {","        from = from.slice.call(from);","        to = to.slice.call(to);","        var t = fn(elapsed, 0, 100, duration) / 100;","        to.unshift(from);","        anim._node.setXY(Y.Anim.getBezier(to, t));","    },","","    get: function(anim) {","        return anim._node.getXY();","    }","};","","/**"," * Get the current position of the animated element based on t."," * Each point is an array of \"x\" and \"y\" values (0 = x, 1 = y)"," * At least 2 points are required (start and end)."," * First point is start. Last point is end."," * Additional control points are optional."," * @for Anim"," * @method getBezier"," * @static"," * @param {Number[]} points An array containing Bezier points"," * @param {Number} t A number between 0 and 1 which is the basis for determining current position"," * @return {Number[]} An array containing int x and y member data"," */","Y.Anim.getBezier = function(points, t) {","    var n = points.length,","        tmp = [],","        i,","        j;","","    for (i = 0; i < n; ++i){","        tmp[i] = [points[i][0], points[i][1]]; // save input","    }","","    for (j = 1; j < n; ++j) {","        for (i = 0; i < n - j; ++i) {","            tmp[i][0] = (1 - t) * tmp[i][0] + t * tmp[parseInt(i + 1, 10)][0];","            tmp[i][1] = (1 - t) * tmp[i][1] + t * tmp[parseInt(i + 1, 10)][1];","        }","    }","","    return [ tmp[0][0], tmp[0][1] ];","","};","","","}, '3.18.0', {\"requires\": [\"anim-xy\"]});","","}());"]};
}
var __cov_KVxV32cezCVHOJVQ1PWnTw = __coverage__['build/anim-curve/anim-curve.js'];
__cov_KVxV32cezCVHOJVQ1PWnTw.s['1']++;YUI.add('anim-curve',function(Y,NAME){__cov_KVxV32cezCVHOJVQ1PWnTw.f['1']++;__cov_KVxV32cezCVHOJVQ1PWnTw.s['2']++;Y.Anim.behaviors.curve={set:function(anim,att,from,to,elapsed,duration,fn){__cov_KVxV32cezCVHOJVQ1PWnTw.f['2']++;__cov_KVxV32cezCVHOJVQ1PWnTw.s['3']++;from=from.slice.call(from);__cov_KVxV32cezCVHOJVQ1PWnTw.s['4']++;to=to.slice.call(to);__cov_KVxV32cezCVHOJVQ1PWnTw.s['5']++;var t=fn(elapsed,0,100,duration)/100;__cov_KVxV32cezCVHOJVQ1PWnTw.s['6']++;to.unshift(from);__cov_KVxV32cezCVHOJVQ1PWnTw.s['7']++;anim._node.setXY(Y.Anim.getBezier(to,t));},get:function(anim){__cov_KVxV32cezCVHOJVQ1PWnTw.f['3']++;__cov_KVxV32cezCVHOJVQ1PWnTw.s['8']++;return anim._node.getXY();}};__cov_KVxV32cezCVHOJVQ1PWnTw.s['9']++;Y.Anim.getBezier=function(points,t){__cov_KVxV32cezCVHOJVQ1PWnTw.f['4']++;__cov_KVxV32cezCVHOJVQ1PWnTw.s['10']++;var n=points.length,tmp=[],i,j;__cov_KVxV32cezCVHOJVQ1PWnTw.s['11']++;for(i=0;i<n;++i){__cov_KVxV32cezCVHOJVQ1PWnTw.s['12']++;tmp[i]=[points[i][0],points[i][1]];}__cov_KVxV32cezCVHOJVQ1PWnTw.s['13']++;for(j=1;j<n;++j){__cov_KVxV32cezCVHOJVQ1PWnTw.s['14']++;for(i=0;i<n-j;++i){__cov_KVxV32cezCVHOJVQ1PWnTw.s['15']++;tmp[i][0]=(1-t)*tmp[i][0]+t*tmp[parseInt(i+1,10)][0];__cov_KVxV32cezCVHOJVQ1PWnTw.s['16']++;tmp[i][1]=(1-t)*tmp[i][1]+t*tmp[parseInt(i+1,10)][1];}}__cov_KVxV32cezCVHOJVQ1PWnTw.s['17']++;return[tmp[0][0],tmp[0][1]];};},'3.18.0',{'requires':['anim-xy']});
