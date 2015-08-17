/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("file-html5",function(e,t){var n=e.Lang,r=e.bind,i=e.config.win,s=function(e){var t=null;s.isValidFile(e)?t=e:s.isValidFile(e.file)?t=e.file:t=!1,s.superclass.constructor.apply(this,arguments),t&&s.canUpload()&&(this.get("file")||this._set("file",t),this.get("name")||this._set("name",t.name||t.fileName),this.get("size")!=(t.size||t.fileSize)&&this._set("size",t.size||t.fileSize),this.get("type")||this._set("type",t.type),t.hasOwnProperty("lastModifiedDate")&&!this.get("dateModified")&&this._set("dateModified",t.lastModifiedDate))};e.extend(s,e.Base,{initializer:function(t){this.get("id")||this._set("id",e.guid("file"))},_uploadEventHandler:function(e){var t=this.get("xhr");switch(e.type){case"progress":this.fire("uploadprogress",{originEvent:e,bytesLoaded:e.loaded,bytesTotal:this.get("size"),percentLoaded:Math.min(100,Math.round(1e4*e.loaded/this.get("size"))/100)}),this._set("bytesUploaded",e.loaded);break;case"load":if(t.status>=200&&t.status<=299){this.fire("uploadcomplete",{originEvent:e,data:e.target.responseText});var n=t.upload,r=this.get("boundEventHandler");n.removeEventListener("progress",r),n.removeEventListener("error",r),n.removeEventListener("abort",r),t.removeEventListener("load",r),t.removeEventListener("error",r),t.removeEventListener("readystatechange",r),this._set("xhr",null)}else this.fire("uploaderror",{originEvent:e,data:t.responseText,status:t.status,statusText:t.statusText,source:"http"});break;case"error":this.fire("uploaderror",{originEvent:e,data:t.responseText,status:t.status,statusText:t.statusText,source:"io"});break;case"abort":this.fire("uploadcancel",{originEvent:e});break;case"readystatechange":this.fire("readystatechange",{readyState:e.target.readyState,originEvent:e})}},startUpload:function(t,n,i){this._set("bytesUploaded",0),this._set("xhr",new XMLHttpRequest),this._set("boundEventHandler",r(this._uploadEventHandler,this));var s=new FormData,o=i||"Filedata",u=this.get("xhr"),a=this.get("xhr").upload,f=this.get("boundEventHandler");e.each(n,function(e,t){s.append(t,e)}),s.append(o,this.get("file")),u.addEventListener("loadstart",f,!1),a.addEventListener("progress",f,!1),u.addEventListener("load",f,!1),u.addEventListener("error",f,!1),a.addEventListener("error",f,!1),a.addEventListener("abort",f,!1),u.addEventListener("abort",f,!1),u.addEventListener("loadend",f,!1),u.addEventListener("readystatechange",f,!1),u.open("POST",t,!0),u.withCredentials=this.get("xhrWithCredentials"),e.each(this.get("xhrHeaders"),function(e,t){u.setRequestHeader(t,e)}),u.send(s),this.fire("uploadstart",{xhr:u})},cancelUpload:function(){var e=this.get("xhr");e&&e.abort()}},{NAME:"file",TYPE:"html5",ATTRS:{id:{writeOnce:"initOnly",value:null},size:{writeOnce:"initOnly",value:0},name:{writeOnce:"initOnly",value:null},dateCreated:{writeOnce:"initOnly",value:null},dateModified:{writeOnce:"initOnly",value:null},bytesUploaded:{readOnly:!0,value:0},type:{writeOnce:"initOnly",value:null},file:{writeOnce:"initOnly",value:null},xhr:{readOnly:!0,value:null},xhrHeaders:{value:{}},xhrWithCredentials:{value:!0},boundEventHandler:{readOnly:!0,value:null}},isValidFile:function(e){return i&&i.File&&e instanceof File},canUpload:function(){return i&&i.FormData&&i.XMLHttpRequest}}),e.FileHTML5=s},"3.18.0",{requires:["base"]});
