/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datasource-xmlschema/datasource-xmlschema.js']) {
   __coverage__['build/datasource-xmlschema/datasource-xmlschema.js'] = {"path":"build/datasource-xmlschema/datasource-xmlschema.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":15,"loc":{"start":{"line":15,"column":26},"end":{"line":15,"column":37}}},"3":{"name":"(anonymous_3)","line":64,"loc":{"start":{"line":64,"column":17},"end":{"line":64,"column":34}}},"4":{"name":"(anonymous_4)","line":82,"loc":{"start":{"line":82,"column":22},"end":{"line":82,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":102,"column":93}},"2":{"start":{"line":15,"column":0},"end":{"line":17,"column":2}},"3":{"start":{"line":16,"column":4},"end":{"line":16,"column":70}},"4":{"start":{"line":19,"column":0},"end":{"line":54,"column":3}},"5":{"start":{"line":56,"column":0},"end":{"line":97,"column":3}},"6":{"start":{"line":65,"column":8},"end":{"line":65,"column":59}},"7":{"start":{"line":83,"column":8},"end":{"line":86,"column":62}},"8":{"start":{"line":88,"column":8},"end":{"line":91,"column":10}},"9":{"start":{"line":93,"column":8},"end":{"line":93,"column":51}},"10":{"start":{"line":95,"column":8},"end":{"line":95,"column":77}},"11":{"start":{"line":99,"column":0},"end":{"line":99,"column":64}}},"branchMap":{"1":{"line":86,"type":"binary-expr","locations":[{"start":{"line":86,"column":19},"end":{"line":86,"column":51}},{"start":{"line":86,"column":55},"end":{"line":86,"column":61}}]},"2":{"line":88,"type":"binary-expr","locations":[{"start":{"line":88,"column":27},"end":{"line":88,"column":74}},{"start":{"line":88,"column":78},"end":{"line":91,"column":9}}]}},"code":["(function () { YUI.add('datasource-xmlschema', function (Y, NAME) {","","/**"," * Extends DataSource with schema-parsing on XML data."," *"," * @module datasource"," * @submodule datasource-xmlschema"," */","","/**"," * Adds schema-parsing to the DataSource Utility."," * @class DataSourceXMLSchema"," * @extends Plugin.Base"," */","var DataSourceXMLSchema = function() {","    DataSourceXMLSchema.superclass.constructor.apply(this, arguments);","};","","Y.mix(DataSourceXMLSchema, {","    /**","     * The namespace for the plugin. This will be the property on the host which","     * references the plugin instance.","     *","     * @property NS","     * @type String","     * @static","     * @final","     * @value \"schema\"","     */","    NS: \"schema\",","","    /**","     * Class name.","     *","     * @property NAME","     * @type String","     * @static","     * @final","     * @value \"dataSourceXMLSchema\"","     */","    NAME: \"dataSourceXMLSchema\",","","    /////////////////////////////////////////////////////////////////////////////","    //","    // DataSourceXMLSchema Attributes","    //","    /////////////////////////////////////////////////////////////////////////////","","    ATTRS: {","        schema: {","            //value: {}","        }","    }","});","","Y.extend(DataSourceXMLSchema, Y.Plugin.Base, {","    /**","    * Internal init() handler.","    *","    * @method initializer","    * @param config {Object} Config object.","    * @private","    */","    initializer: function(config) {","        this.doBefore(\"_defDataFn\", this._beforeDefDataFn);","    },","","    /**","     * Parses raw data into a normalized response.","     *","     * @method _beforeDefDataFn","     * @param tId {Number} Unique transaction ID.","     * @param request {Object} The request.","     * @param callback {Object} The callback object with the following properties:","     *     <dl>","     *         <dt>success (Function)</dt> <dd>Success handler.</dd>","     *         <dt>failure (Function)</dt> <dd>Failure handler.</dd>","     *     </dl>","     * @param data {Object} Raw data.","     * @protected","     */","    _beforeDefDataFn: function(e) {","        var schema = this.get('schema'),","            payload = e.details[0],","            // TODO: Do I need to sniff for DS.IO + responseXML.nodeType 9?","            data = Y.XML.parse(e.data.responseText) || e.data;","","        payload.response = Y.DataSchema.XML.apply.call(this, schema, data) || {","            meta: {},","            results: data","        };","","        this.get(\"host\").fire(\"response\", payload);","","        return new Y.Do.Halt(\"DataSourceXMLSchema plugin halted _defDataFn\");","    }","});","","Y.namespace('Plugin').DataSourceXMLSchema = DataSourceXMLSchema;","","","}, '3.18.0', {\"requires\": [\"datasource-local\", \"plugin\", \"datatype-xml\", \"dataschema-xml\"]});","","}());"]};
}
var __cov_MRZJnkZJfhNEcQemtwcRNQ = __coverage__['build/datasource-xmlschema/datasource-xmlschema.js'];
__cov_MRZJnkZJfhNEcQemtwcRNQ.s['1']++;YUI.add('datasource-xmlschema',function(Y,NAME){__cov_MRZJnkZJfhNEcQemtwcRNQ.f['1']++;__cov_MRZJnkZJfhNEcQemtwcRNQ.s['2']++;var DataSourceXMLSchema=function(){__cov_MRZJnkZJfhNEcQemtwcRNQ.f['2']++;__cov_MRZJnkZJfhNEcQemtwcRNQ.s['3']++;DataSourceXMLSchema.superclass.constructor.apply(this,arguments);};__cov_MRZJnkZJfhNEcQemtwcRNQ.s['4']++;Y.mix(DataSourceXMLSchema,{NS:'schema',NAME:'dataSourceXMLSchema',ATTRS:{schema:{}}});__cov_MRZJnkZJfhNEcQemtwcRNQ.s['5']++;Y.extend(DataSourceXMLSchema,Y.Plugin.Base,{initializer:function(config){__cov_MRZJnkZJfhNEcQemtwcRNQ.f['3']++;__cov_MRZJnkZJfhNEcQemtwcRNQ.s['6']++;this.doBefore('_defDataFn',this._beforeDefDataFn);},_beforeDefDataFn:function(e){__cov_MRZJnkZJfhNEcQemtwcRNQ.f['4']++;__cov_MRZJnkZJfhNEcQemtwcRNQ.s['7']++;var schema=this.get('schema'),payload=e.details[0],data=(__cov_MRZJnkZJfhNEcQemtwcRNQ.b['1'][0]++,Y.XML.parse(e.data.responseText))||(__cov_MRZJnkZJfhNEcQemtwcRNQ.b['1'][1]++,e.data);__cov_MRZJnkZJfhNEcQemtwcRNQ.s['8']++;payload.response=(__cov_MRZJnkZJfhNEcQemtwcRNQ.b['2'][0]++,Y.DataSchema.XML.apply.call(this,schema,data))||(__cov_MRZJnkZJfhNEcQemtwcRNQ.b['2'][1]++,{meta:{},results:data});__cov_MRZJnkZJfhNEcQemtwcRNQ.s['9']++;this.get('host').fire('response',payload);__cov_MRZJnkZJfhNEcQemtwcRNQ.s['10']++;return new Y.Do.Halt('DataSourceXMLSchema plugin halted _defDataFn');}});__cov_MRZJnkZJfhNEcQemtwcRNQ.s['11']++;Y.namespace('Plugin').DataSourceXMLSchema=DataSourceXMLSchema;},'3.18.0',{'requires':['datasource-local','plugin','datatype-xml','dataschema-xml']});
