/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("calendar",function(e,t){function b(){b.superclass.constructor.apply(this,arguments)}var n=e.ClassNameManager.getClassName,r="calendar",i=40,s=38,o=37,u=39,a=13,f=32,l=n(r,"day-selected"),c=n(r,"day-highlighted"),h=n(r,"day"),p=n(r,"prevmonth-day"),d=n(r,"nextmonth-day"),v=n(r,"grid"),m=e.DataType.Date,g=n(r,"pane"),y=e.UA.os;e.Calendar=e.extend(b,e.CalendarBase,{_keyEvents:[],_highlightedDateNode:null,_lastSelectedDate:null,initializer:function(){this.plug(e.Plugin.CalendarNavigator),this._keyEvents=[],this._highlightedDateNode=null,this._lastSelectedDate=null},_bindCalendarEvents:function(){var e=this.get("contentBox"),t=e.one("."+g);t.on("selectstart",this._preventSelectionStart),t.delegate("click",this._clickCalendar,"."+h+", ."+p+", ."+d,this),t.delegate("keydown",this._keydownCalendar,"."+v,this),t.delegate("focus",this._focusCalendarGrid,"."+v,this),t.delegate("focus",this._focusCalendarCell,"."+h,this),t.delegate("blur",this._blurCalendarGrid,"."+v+",."+h,this),this.after(["minimumDateChange","maximumDateChange"],this._afterCustomRendererChange)},_preventSelectionStart:function(e){e.preventDefault()},_highlightDateNode:function(e){this._unhighlightCurrentDateNode();var t=this._dateToNode(e);t.focus(),t.addClass(c)},_unhighlightCurrentDateNode:function(){var e=this.get("contentBox").all("."+c);e&&e.removeClass(c)},_getGridNumber:function(e){var t=e.get("id").split("_").reverse();return parseInt(t[0],10)},_blurCalendarGrid:function(){this._unhighlightCurrentDateNode()},_focusCalendarCell:function(e){this._highlightedDateNode=e.target,e.stopPropagation()},_focusCalendarGrid:function(){this._unhighlightCurrentDateNode(),this._highlightedDateNode=null},_keydownCalendar:function(e){var t=this._getGridNumber(e.target),n=this._highlightedDateNode?this._nodeToDate(this._highlightedDateNode):null,r=e.keyCode,c=0,h="",p,d,v,g,y;switch(r){case i:c=7,h="s";break;case s:c=-7,h="n";break;case o:c=-1,h="w";break;case u:c=1,h="e";break;case f:case a:e.preventDefault();if(this._highlightedDateNode){p=this.get("selectionMode");if(p==="single"&&!this._highlightedDateNode.hasClass(l))this._clearSelection(!0),this._addDateToSelection(n);else if(p==="multiple"||p==="multiple-sticky")this._highlightedDateNode.hasClass(l)?this._removeDateFromSelection(n):this._addDateToSelection(n)}}if(r===i||r===s||r===o||r===u)n||(n=m.addMonths(this.get("date"),t),c=0),e.preventDefault(),d=m.addDays(n,c),v=this.get("date"),g=m.addMonths(this.get("date"),this._paneNumber-1),y=new Date(g),g.setDate(m.daysInMonth(g)),m.isInRange(d,v,g)?this._highlightDateNode(d):m.isGreater(v,d)?m.isGreaterOrEqual(this.get("minimumDate"),v)||(this.set("date",m.addMonths(v,-1)),this._highlightDateNode(d)):m.isGreater(d,g)&&(m.isGreaterOrEqual(y,this.get("maximumDate"))||(this.set("date",m.addMonths(v,1)),this._highlightDateNode(d)))},_clickCalendar:function(e){var t=e.currentTarget,n=t.hasClass(h)&&!t.hasClass(p)&&!t.hasClass(d),r=t.hasClass(l),i;switch(this.get("selectionMode")){case"single":n&&(r||(this._clearSelection(!0),this._addDateToSelection(this._nodeToDate(t))));break;case"multiple-sticky":n&&(r?this._removeDateFromSelection(this._nodeToDate(t)):this._addDateToSelection(this._nodeToDate(t)));break;case"multiple":n&&(!e.metaKey&&!e.ctrlKey&&!e.shiftKey?(this._clearSelection(!0),this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate)):(y==="macintosh"&&e.metaKey||y!=="macintosh"&&e.ctrlKey)&&!e.shiftKey?r?(this._removeDateFromSelection(this._nodeToDate(t)),this._lastSelectedDate=null):(this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate)):(y==="macintosh"&&e.metaKey||y!=="macintosh"&&e.ctrlKey)&&e.shiftKey?this._lastSelectedDate?(i=this._nodeToDate(t),this._addDateRangeToSelection(i,this._lastSelectedDate),this._lastSelectedDate=i):(this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate)):e.shiftKey&&(this._lastSelectedDate?(i=this._nodeToDate(t),this._clearSelection(!0),this._addDateRangeToSelection(i,this._lastSelectedDate),this._lastSelectedDate=i):(this._clearSelection(!0),this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate))))}n?this.fire("dateClick",{cell:t,date:this._nodeToDate(t)}):t.hasClass(p)?this.fire("prevMonthClick"):t.hasClass(d)&&this.fire("nextMonthClick")},_canBeSelected:function(e){var t=this.get("minimumDate"),n=this.get("maximumDate");return t&&!m.isGreaterOrEqual(e,t)||n&&m.isGreater(e,n)?!1:b.superclass._canBeSelected.call(this,e)},_renderCustomRules:function(){b.superclass._renderCustomRules.call(this);var e=this.get("minimumDate"),t=this.get("maximumDate"),n=[],r,i,s,o;if(!e&&!t)return;for(o=0;o<this._paneNumber;o++)s=m.addMonths(this.get("date"),o),n=n.concat(m.listOfDatesInMonth(s));if(e)for(r=0,i=n.length;r<i;r++){if(!!m.isGreaterOrEqual(n[r],e))break;this._disableDate(n[r])}if(t)for(r=n.length-1;r>=0;r--){if(!m.isGreater(n[r],t))break;this._disableDate(n[r])}},subtractMonth:function(e){return this.set("date",m.addMonths(this.get("date"),-1)),e&&e.halt(),this},subtractYear:function(e){return this.set("date",m.addYears(this.get("date"),-1)),e&&e.halt(),this},addMonth:function(e){return this.set("date",m.addMonths(this.get("date"),1)),e&&e.halt(),this},addYear:function(e){return this.set("date",m.addYears(this.get("date"),1)),e&&e.halt(),this}},{NAME:"calendar",ATTRS:{selectionMode:{value:"single"},date:{value:new Date,lazyAdd:!1,setter:function(e){var t=this._normalizeDate(e),n=m.addMonths(t,this._paneNumber-1),r=this.get("minimumDate"),i=this.get("maximumDate");if((!r||m.isGreaterOrEqual(t,r))&&(!i||m.isGreaterOrEqual(i,n)))return t;if(r&&m.isGreater(r,t))return this._normalizeDate(r);if(i&&m.isGreater(n,i))return m.addMonths(this._normalizeDate(i),1-this._paneNumber)}},minimumDate:{value:null,setter:function(t){if(e.Lang.isDate(t)){var n=this.get("date"),r=this._normalizeTime(t);return n&&!m.isGreaterOrEqual(n,r)&&this.set("date",t),r}return null}},
maximumDate:{value:null,setter:function(t){if(e.Lang.isDate(t)){var n=this.get("date");return n&&!m.isGreaterOrEqual(t,m.addMonths(n,this._paneNumber-1))&&this.set("date",m.addMonths(this._normalizeDate(t),1-this._paneNumber)),this._normalizeTime(t)}return null}}}})},"3.18.0",{requires:["calendar-base","calendarnavigator"],skinnable:!0});
