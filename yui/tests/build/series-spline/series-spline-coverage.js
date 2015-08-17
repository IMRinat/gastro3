/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/series-spline/series-spline.js']) {
   __coverage__['build/series-spline/series-spline.js'] = {"path":"build/series-spline/series-spline.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":16},"end":{"line":29,"column":4}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":82,"column":65}},"2":{"start":{"line":20,"column":0},"end":{"line":73,"column":3}},"3":{"start":{"line":30,"column":8},"end":{"line":30,"column":26}}},"branchMap":{},"code":["(function () { YUI.add('series-spline', function (Y, NAME) {","","/**"," * Provides functionality for creating a spline series."," *"," * @module charts"," * @submodule series-spline"," */","/**"," * SplineSeries renders a graph with data points connected by a curve."," *"," * @class SplineSeries"," * @extends LineSeries"," * @uses CurveUtil"," * @uses Lines"," * @constructor"," * @param {Object} config (optional) Configuration parameters."," * @submodule series-spline"," */","Y.SplineSeries = Y.Base.create(\"splineSeries\",  Y.LineSeries, [Y.CurveUtil, Y.Lines], {","    /**","     * @protected","     *","     * Draws the series.","     *","     * @method drawSeries","     */","    drawSeries: function()","    {","        this.drawSpline();","    }","}, {","\tATTRS : {","        /**","         * Read-only attribute indicating the type of series.","         *","         * @attribute type","         * @type String","         * @default spline","         */","        type : {","            value:\"spline\"","        }","","        /**","         * Style properties used for drawing lines. This attribute is inherited from `Renderer`.","         * Below are the default values:","         *  <dl>","         *      <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series on","         *      the graph. The color will be retrieved from the following array:","         *      `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`","         *      <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>","         *      <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>","         *      <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd>","         *      <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default value","         *      is 10.</dd>","         *      <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default value is","         *      10.</dd>","         *      <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing or null","         *      value between points. The default value is true.</dd>","         *      <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed. The","         *      default value is solid.</dd>","         *      <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the dash.","         *      The default value is 10.</dd>","         *      <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between dashes.","         *      The default value is 10.</dd>","         *  </dl>","         *","         * @attribute styles","         * @type Object","         */","    }","});","","","","","","","","","}, '3.18.0', {\"requires\": [\"series-line\", \"series-curve-util\"]});","","}());"]};
}
var __cov_ci2Q0RhiaxC8Ql7UgRTbaw = __coverage__['build/series-spline/series-spline.js'];
__cov_ci2Q0RhiaxC8Ql7UgRTbaw.s['1']++;YUI.add('series-spline',function(Y,NAME){__cov_ci2Q0RhiaxC8Ql7UgRTbaw.f['1']++;__cov_ci2Q0RhiaxC8Ql7UgRTbaw.s['2']++;Y.SplineSeries=Y.Base.create('splineSeries',Y.LineSeries,[Y.CurveUtil,Y.Lines],{drawSeries:function(){__cov_ci2Q0RhiaxC8Ql7UgRTbaw.f['2']++;__cov_ci2Q0RhiaxC8Ql7UgRTbaw.s['3']++;this.drawSpline();}},{ATTRS:{type:{value:'spline'}}});},'3.18.0',{'requires':['series-line','series-curve-util']});
