/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/series-marker/series-marker.js']) {
   __coverage__['build/series-marker/series-marker.js'] = {"path":"build/series-marker/series-marker.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":30,"loc":{"start":{"line":30,"column":16},"end":{"line":31,"column":4}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":89,"column":69}},"2":{"start":{"line":20,"column":0},"end":{"line":85,"column":3}},"3":{"start":{"line":32,"column":8},"end":{"line":35,"column":9}},"4":{"start":{"line":34,"column":12},"end":{"line":34,"column":31}},"5":{"start":{"line":36,"column":8},"end":{"line":36,"column":43}},"6":{"start":{"line":37,"column":8},"end":{"line":37,"column":99}}},"branchMap":{"1":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":8},"end":{"line":32,"column":8}},{"start":{"line":32,"column":8},"end":{"line":32,"column":8}}]}},"code":["(function () { YUI.add('series-marker', function (Y, NAME) {","","/**"," * Provides functionality for creating a marker series."," *"," * @module charts"," * @submodule series-marker"," */","/**"," * The MarkerSeries class renders quantitative data by plotting relevant data points"," * on a graph."," *"," * @class MarkerSeries"," * @extends CartesianSeries"," * @uses Plots"," * @constructor"," * @param {Object} config (optional) Configuration parameters."," * @submodule series-marker"," */","Y.MarkerSeries = Y.Base.create(\"markerSeries\", Y.CartesianSeries, [Y.Plots], {","    /**","     * @protected","     *","     * Method used by `styles` setter. Overrides base implementation.","     *","     * @method _setStyles","     * @param {Object} newStyles Hash of properties to update.","     * @return Object","     */","    _setStyles: function(val)","    {","        if(!val.marker)","        {","            val = {marker:val};","        }","        val = this._parseMarkerStyles(val);","        return Y.MarkerSeries.superclass._mergeStyles.apply(this, [val, this._getDefaultStyles()]);","    }","},{","    ATTRS : {","        /**","         * Read-only attribute indicating the type of series.","         *","         * @attribute type","         * @type String","         * @default marker","         */","        type: {","            value:\"marker\"","        }","","        /**","         * Style properties used for drawing markers. This attribute is inherited from `Renderer`. Below are the default","         * values:","         *  <dl>","         *      <dt>fill</dt><dd>A hash containing the following values:","         *          <dl>","         *              <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on","         *              the graph. The color will be retrieved from the below array:<br/>","         *              `[\"#6084d0\", \"#eeb647\", \"#6c6b5f\", \"#d6484f\", \"#ce9ed1\", \"#ff9f3b\", \"#93b7ff\", \"#e0ddd0\", \"#94ecba\", \"#309687\"]`","         *              </dd>","         *              <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>","         *          </dl>","         *      </dd>","         *      <dt>border</dt><dd>A hash containing the following values:","         *          <dl>","         *              <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on","         *              the graph. The color will be retrieved from the below array:<br/>","         *              `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`","         *              <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>","         *              <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>","         *          </dl>","         *      </dd>","         *      <dt>width</dt><dd>indicates the width of the marker. The default value is 10.</dd>","         *      <dt>height</dt><dd>indicates the height of the marker The default value is 10.</dd>","         *      <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default","         *      values for each style is null. When an over style is not set, the non-over value will be used. For example,","         *      the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>","         *  </dl>","         *","         * @attribute styles","         * @type Object","         */","    }","});","","","","}, '3.18.0', {\"requires\": [\"series-cartesian\", \"series-plot-util\"]});","","}());"]};
}
var __cov_uNO8E1nYHnWykqyvxhjPcQ = __coverage__['build/series-marker/series-marker.js'];
__cov_uNO8E1nYHnWykqyvxhjPcQ.s['1']++;YUI.add('series-marker',function(Y,NAME){__cov_uNO8E1nYHnWykqyvxhjPcQ.f['1']++;__cov_uNO8E1nYHnWykqyvxhjPcQ.s['2']++;Y.MarkerSeries=Y.Base.create('markerSeries',Y.CartesianSeries,[Y.Plots],{_setStyles:function(val){__cov_uNO8E1nYHnWykqyvxhjPcQ.f['2']++;__cov_uNO8E1nYHnWykqyvxhjPcQ.s['3']++;if(!val.marker){__cov_uNO8E1nYHnWykqyvxhjPcQ.b['1'][0]++;__cov_uNO8E1nYHnWykqyvxhjPcQ.s['4']++;val={marker:val};}else{__cov_uNO8E1nYHnWykqyvxhjPcQ.b['1'][1]++;}__cov_uNO8E1nYHnWykqyvxhjPcQ.s['5']++;val=this._parseMarkerStyles(val);__cov_uNO8E1nYHnWykqyvxhjPcQ.s['6']++;return Y.MarkerSeries.superclass._mergeStyles.apply(this,[val,this._getDefaultStyles()]);}},{ATTRS:{type:{value:'marker'}}});},'3.18.0',{'requires':['series-cartesian','series-plot-util']});
