/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datasource-function/datasource-function.js']) {
   __coverage__['build/datasource-function/datasource-function.js'] = {"path":"build/datasource-function/datasource-function.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":19,"loc":{"start":{"line":19,"column":11},"end":{"line":19,"column":22}}},"3":{"name":"(anonymous_3)","line":83,"loc":{"start":{"line":83,"column":19},"end":{"line":83,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":106,"column":49}},"2":{"start":{"line":17,"column":0},"end":{"line":21,"column":6}},"3":{"start":{"line":20,"column":8},"end":{"line":20,"column":59}},"4":{"start":{"line":29,"column":0},"end":{"line":60,"column":3}},"5":{"start":{"line":62,"column":0},"end":{"line":101,"column":3}},"6":{"start":{"line":84,"column":8},"end":{"line":85,"column":35}},"7":{"start":{"line":87,"column":8},"end":{"line":95,"column":9}},"8":{"start":{"line":88,"column":12},"end":{"line":92,"column":13}},"9":{"start":{"line":89,"column":16},"end":{"line":89,"column":54}},"10":{"start":{"line":91,"column":16},"end":{"line":91,"column":35}},"11":{"start":{"line":94,"column":12},"end":{"line":94,"column":63}},"12":{"start":{"line":97,"column":8},"end":{"line":97,"column":35}},"13":{"start":{"line":99,"column":8},"end":{"line":99,"column":21}},"14":{"start":{"line":103,"column":0},"end":{"line":103,"column":29}}},"branchMap":{"1":{"line":87,"type":"if","locations":[{"start":{"line":87,"column":8},"end":{"line":87,"column":8}},{"start":{"line":87,"column":8},"end":{"line":87,"column":8}}]}},"code":["(function () { YUI.add('datasource-function', function (Y, NAME) {","","/**"," * Provides a DataSource implementation which can be used to retrieve data from"," * a custom function."," *"," * @module datasource"," * @submodule datasource-function"," */","","/**"," * Function subclass for the DataSource Utility."," * @class DataSource.Function"," * @extends DataSource.Local"," * @constructor"," */","var LANG = Y.Lang,","","    DSFn = function() {","        DSFn.superclass.constructor.apply(this, arguments);","    };","","","    /////////////////////////////////////////////////////////////////////////////","    //","    // DataSource.Function static properties","    //","    /////////////////////////////////////////////////////////////////////////////","Y.mix(DSFn, {","    /**","     * Class name.","     *","     * @property NAME","     * @type String","     * @static","     * @final","     * @value \"dataSourceFunction\"","     */","    NAME: \"dataSourceFunction\",","","","    /////////////////////////////////////////////////////////////////////////////","    //","    // DataSource.Function Attributes","    //","    /////////////////////////////////////////////////////////////////////////////","","    ATTRS: {","        /**","        * Stores the function that will serve the response data.","        *","        * @attribute source","        * @type {Any}","        * @default null","        */","        source: {","            validator: LANG.isFunction","        }","    }","});","","Y.extend(DSFn, Y.DataSource.Local, {","    /**","     * Passes query data to the source function. Fires <code>response</code>","     * event with the function results (synchronously).","     *","     * @method _defRequestFn","     * @param e {EventFacade} Event Facade with the following properties:","     * <dl>","     * <dt>tId (Number)</dt> <dd>Unique transaction ID.</dd>","     * <dt>request (Object)</dt> <dd>The request.</dd>","     * <dt>callback (Object)</dt> <dd>The callback object with the following","     * properties:","     *     <dl>","     *         <dt>success (Function)</dt> <dd>Success handler.</dd>","     *         <dt>failure (Function)</dt> <dd>Failure handler.</dd>","     *     </dl>","     * </dd>","     * <dt>cfg (Object)</dt> <dd>Configuration object.</dd>","     * </dl>","     * @protected","     */","    _defRequestFn: function(e) {","        var fn = this.get(\"source\"),","            payload = e.details[0];","","        if (fn) {","            try {","                payload.data = fn(e.request, this, e);","            } catch (ex) {","                payload.error = ex;","            }","        } else {","            payload.error = new Error(\"Function data failure\");","        }","","        this.fire(\"data\", payload);","","        return e.tId;","    }","});","","Y.DataSource.Function = DSFn;","","","}, '3.18.0', {\"requires\": [\"datasource-local\"]});","","}());"]};
}
var __cov_nHWZO4hNA_OXHwR6RO7c8g = __coverage__['build/datasource-function/datasource-function.js'];
__cov_nHWZO4hNA_OXHwR6RO7c8g.s['1']++;YUI.add('datasource-function',function(Y,NAME){__cov_nHWZO4hNA_OXHwR6RO7c8g.f['1']++;__cov_nHWZO4hNA_OXHwR6RO7c8g.s['2']++;var LANG=Y.Lang,DSFn=function(){__cov_nHWZO4hNA_OXHwR6RO7c8g.f['2']++;__cov_nHWZO4hNA_OXHwR6RO7c8g.s['3']++;DSFn.superclass.constructor.apply(this,arguments);};__cov_nHWZO4hNA_OXHwR6RO7c8g.s['4']++;Y.mix(DSFn,{NAME:'dataSourceFunction',ATTRS:{source:{validator:LANG.isFunction}}});__cov_nHWZO4hNA_OXHwR6RO7c8g.s['5']++;Y.extend(DSFn,Y.DataSource.Local,{_defRequestFn:function(e){__cov_nHWZO4hNA_OXHwR6RO7c8g.f['3']++;__cov_nHWZO4hNA_OXHwR6RO7c8g.s['6']++;var fn=this.get('source'),payload=e.details[0];__cov_nHWZO4hNA_OXHwR6RO7c8g.s['7']++;if(fn){__cov_nHWZO4hNA_OXHwR6RO7c8g.b['1'][0]++;__cov_nHWZO4hNA_OXHwR6RO7c8g.s['8']++;try{__cov_nHWZO4hNA_OXHwR6RO7c8g.s['9']++;payload.data=fn(e.request,this,e);}catch(ex){__cov_nHWZO4hNA_OXHwR6RO7c8g.s['10']++;payload.error=ex;}}else{__cov_nHWZO4hNA_OXHwR6RO7c8g.b['1'][1]++;__cov_nHWZO4hNA_OXHwR6RO7c8g.s['11']++;payload.error=new Error('Function data failure');}__cov_nHWZO4hNA_OXHwR6RO7c8g.s['12']++;this.fire('data',payload);__cov_nHWZO4hNA_OXHwR6RO7c8g.s['13']++;return e.tId;}});__cov_nHWZO4hNA_OXHwR6RO7c8g.s['14']++;Y.DataSource.Function=DSFn;},'3.18.0',{'requires':['datasource-local']});
