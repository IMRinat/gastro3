/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("event-move",function(e,t){var n=e.Event._GESTURE_MAP,r={start:n.start,end:n.end,move:n.move},i="start",s="move",o="end",u="gesture"+s,a=u+o,f=u+i,l="_msh",c="_mh",h="_meh",p="_dmsh",d="_dmh",v="_dmeh",m="_ms",g="_m",y="minTime",b="minDistance",w="preventDefault",E="button",S="ownerDocument",x="currentTarget",T="target",N="nodeType",C=function(e){var t;return e&&("PointerEvent"in e?t="touchAction":"msPointerEnabled"in e.navigator&&(t="msTouchAction")),t},k=C(e.config.win),L=k==="msTouchAction"||k==="touchAction",A="msTouchActionCount",O="msInitTouchAction",M=function(t,n,r){var i=r?4:3,s=n.length>i?e.merge(n.splice(i,1)[0]):{};return w in s||(s[w]=t.PREVENT_DEFAULT),s},_=function(e,t){return t._extra.root||e.get(N)===9?e:e.get(S)},D=function(t){var n=t.getDOMNode();return t.compareTo(e.config.doc)&&n.documentElement?n.documentElement:!1},P=function(e,t,n){e.pageX=t.pageX,e.pageY=t.pageY,e.screenX=t.screenX,e.screenY=t.screenY,e.clientX=t.clientX,e.clientY=t.clientY,e[T]=e[T]||t[T],e[x]=e[x]||t[x],e[E]=n&&n[E]||1},H=function(t){var n=t.getDOMNode(),r=t.getData(A);L&&(r||(r=0,t.setData(O,n.style[k])),n.style[k]=e.Event._DEFAULT_TOUCH_ACTION,r++,t.setData(A,r))},B=function(e){var t=e.getDOMNode(),n=e.getData(A),r=e.getData(O);L&&(n--,e.setData(A,n),n===0&&t.style[k]!==r&&(t.style[k]=r))},j=function(e,t){t&&(!t.call||t(e))&&e.preventDefault()},F=e.Event.define;e.Event._DEFAULT_TOUCH_ACTION="none",F(f,{on:function(e,t,n){D(e)||H(e),t[l]=e.on(r[i],this._onStart,this,e,t,n)},delegate:function(e,t,n,s){var o=this;t[p]=e.delegate(r[i],function(r){o._onStart(r,e,t,n,!0)},s)},detachDelegate:function(e,t,n,r){var i=t[p];i&&(i.detach(),t[p]=null),D(e)||B(e)},detach:function(e,t,n){var r=t[l];r&&(r.detach(),t[l]=null),D(e)||B(e)},processArgs:function(e,t){var n=M(this,e,t);return y in n||(n[y]=this.MIN_TIME),b in n||(n[b]=this.MIN_DISTANCE),n},_onStart:function(t,n,i,u,a){a&&(n=t[x]);var f=i._extra,l=!0,c=f[y],h=f[b],p=f.button,d=f[w],v=_(n,i),m;t.touches?t.touches.length===1?P(t,t.touches[0],f):l=!1:l=p===undefined||p===t.button,l&&(j(t,d),c===0||h===0?this._start(t,n,u,f):(m=[t.pageX,t.pageY],c>0&&(f._ht=e.later(c,this,this._start,[t,n,u,f]),f._hme=v.on(r[o],e.bind(function(){this._cancel(f)},this))),h>0&&(f._hm=v.on(r[s],e.bind(function(e){(Math.abs(e.pageX-m[0])>h||Math.abs(e.pageY-m[1])>h)&&this._start(t,n,u,f)},this)))))},_cancel:function(e){e._ht&&(e._ht.cancel(),e._ht=null),e._hme&&(e._hme.detach(),e._hme=null),e._hm&&(e._hm.detach(),e._hm=null)},_start:function(e,t,n,r){r&&this._cancel(r),e.type=f,t.setData(m,e),n.fire(e)},MIN_TIME:0,MIN_DISTANCE:0,PREVENT_DEFAULT:!1}),F(u,{on:function(e,t,n){var i,o;D(e)||H(e),o=_(e,t,r[s]),i=o.on(r[s],this._onMove,this,e,t,n),t[c]=i},delegate:function(e,t,n,i){var o=this;t[d]=e.delegate(r[s],function(r){o._onMove(r,e,t,n,!0)},i)},detach:function(e,t,n){var r=t[c];r&&(r.detach(),t[c]=null),D(e)||B(e)},detachDelegate:function(e,t,n,r){var i=t[d];i&&(i.detach(),t[d]=null),D(e)||B(e)},processArgs:function(e,t){return M(this,e,t)},_onMove:function(e,t,n,r,i){i&&(t=e[x]);var s=n._extra.standAlone||t.getData(m),o=n._extra.preventDefault;s&&(e.touches&&(e.touches.length===1?P(e,e.touches[0]):s=!1),s&&(j(e,o),e.type=u,r.fire(e)))},PREVENT_DEFAULT:!1}),F(a,{on:function(e,t,n){var i,s;D(e)||H(e),s=_(e,t),i=s.on(r[o],this._onEnd,this,e,t,n),t[h]=i},delegate:function(e,t,n,i){var s=this;t[v]=e.delegate(r[o],function(r){s._onEnd(r,e,t,n,!0)},i)},detachDelegate:function(e,t,n,r){var i=t[v];i&&(i.detach(),t[v]=null),D(e)||B(e)},detach:function(e,t,n){var r=t[h];r&&(r.detach(),t[h]=null),D(e)||B(e)},processArgs:function(e,t){return M(this,e,t)},_onEnd:function(e,t,n,r,i){i&&(t=e[x]);var s=n._extra.standAlone||t.getData(g)||t.getData(m),o=n._extra.preventDefault;s&&(e.changedTouches&&(e.changedTouches.length===1?P(e,e.changedTouches[0]):s=!1),s&&(j(e,o),e.type=a,r.fire(e),t.clearData(m),t.clearData(g)))},PREVENT_DEFAULT:!1})},"3.18.0",{requires:["node-base","event-touch","event-synthetic"]});
