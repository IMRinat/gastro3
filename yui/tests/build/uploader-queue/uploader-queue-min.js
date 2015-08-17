/*
YUI 3.18.0 (build 790466e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("uploader-queue",function(e,t){var n=function(){this.queuedFiles=[],this.uploadRetries={},this.numberOfUploads=0,this.currentUploadedByteValues={},this.currentFiles={},this.totalBytesUploaded=0,this.totalBytes=0,n.superclass.constructor.apply(this,arguments)};e.extend(n,e.Base,{_currentState:n.STOPPED,initializer:function(){},_uploadStartHandler:function(e){var t=e;t.file=e.target,t.originEvent=e,this.fire("uploadstart",t)},_uploadErrorHandler:function(e){var t=this.get("errorAction"),r=e,i,s;r.file=e.target,r.originEvent=e,this.numberOfUploads-=1,delete this.currentFiles[e.target.get("id")],this._detachFileEvents(e.target),e.target.cancelUpload(),t===n.STOP?this.pauseUpload():t===n.RESTART_ASAP?(i=e.target.get("id"),s=this.uploadRetries[i]||0,s<this.get("retryCount")&&(this.uploadRetries[i]=s+1,this.addToQueueTop(e.target)),this._startNextFile()):t===n.RESTART_AFTER&&(i=e.target.get("id"),s=this.uploadRetries[i]||0,s<this.get("retryCount")&&(this.uploadRetries[i]=s+1,this.addToQueueBottom(e.target)),this._startNextFile()),this.fire("uploaderror",r)},_startNextFile:function(){if(this.queuedFiles.length>0){var e=this.queuedFiles.shift(),t=e.get("id"),n=this.get("perFileParameters"),r=n.hasOwnProperty(t)?n[t]:n;this.currentUploadedByteValues[t]=0,e.on("uploadstart",this._uploadStartHandler,this),e.on("uploadprogress",this._uploadProgressHandler,this),e.on("uploadcomplete",this._uploadCompleteHandler,this),e.on("uploaderror",this._uploadErrorHandler,this),e.on("uploadcancel",this._uploadCancelHandler,this),e.set("xhrHeaders",this.get("uploadHeaders")),e.set("xhrWithCredentials",this.get("withCredentials")),e.startUpload(this.get("uploadURL"),r,this.get("fileFieldName")),this._registerUpload(e)}},_registerUpload:function(e){this.numberOfUploads+=1,this.currentFiles[e.get("id")]=e},_unregisterUpload:function(e){this.numberOfUploads>0&&(this.numberOfUploads-=1),delete this.currentFiles[e.get("id")],delete this.uploadRetries[e.get("id")],this._detachFileEvents(e)},_detachFileEvents:function(e){e.detach("uploadstart",this._uploadStartHandler),e.detach("uploadprogress",this._uploadProgressHandler),e.detach("uploadcomplete",this._uploadCompleteHandler),e.detach("uploaderror",this._uploadErrorHandler),e.detach("uploadcancel",this._uploadCancelHandler)},_uploadCompleteHandler:function(t){this._unregisterUpload(t.target),this.totalBytesUploaded+=t.target.get("size"),delete this.currentUploadedByteValues[t.target.get("id")],this.queuedFiles.length>0&&this._currentState===n.UPLOADING&&this._startNextFile();var r=t,i=this.totalBytesUploaded,s=Math.min(100,Math.round(1e4*i/this.totalBytes)/100);r.file=t.target,r.originEvent=t,e.each(this.currentUploadedByteValues,function(e){i+=e}),this.fire("totaluploadprogress",{bytesLoaded:i,bytesTotal:this.totalBytes,percentLoaded:s}),this.fire("uploadcomplete",r),this.queuedFiles.length===0&&this.numberOfUploads<=0&&(this.fire("alluploadscomplete"),this._currentState=n.STOPPED)},_uploadCancelHandler:function(e){var t=e;t.originEvent=e,t.file=e.target,this.fire("uploadcancel",t)},_uploadProgressHandler:function(t){this.currentUploadedByteValues[t.target.get("id")]=t.bytesLoaded;var n=t,r=this.totalBytesUploaded,i=Math.min(100,Math.round(1e4*r/this.totalBytes)/100);n.originEvent=t,n.file=t.target,this.fire("uploadprogress",n),e.each(this.currentUploadedByteValues,function(e){r+=e}),this.fire("totaluploadprogress",{bytesLoaded:r,bytesTotal:this.totalBytes,percentLoaded:i})},startUpload:function(){this.queuedFiles=this.get("fileList").slice(0),this.numberOfUploads=0,this.currentUploadedByteValues={},this.currentFiles={},this.totalBytesUploaded=0,this._currentState=n.UPLOADING;while(this.numberOfUploads<this.get("simUploads")&&this.queuedFiles.length>0)this._startNextFile()},pauseUpload:function(){this._currentState=n.STOPPED},restartUpload:function(){this._currentState=n.UPLOADING;while(this.numberOfUploads<this.get("simUploads"))this._startNextFile()},forceReupload:function(e){var t=e.get("id");this.currentFiles.hasOwnProperty(t)&&(e.cancelUpload(),this._unregisterUpload(e),this.addToQueueTop(e),this._startNextFile())},addToQueueTop:function(e){this.queuedFiles.unshift(e)},addToQueueBottom:function(e){this.queuedFiles.push(e)},cancelUpload:function(e){var t,r,i;if(e){t=e.get("id");if(this.currentFiles[t])this.currentFiles[t].cancelUpload(),this._unregisterUpload(this.currentFiles[t]),this._currentState===n.UPLOADING&&this._startNextFile();else for(r=0,len=this.queuedFiles.length;r<len;r++)if(this.queuedFiles[r].get("id")===t){this.queuedFiles.splice(r,1);break}}else{for(i in this.currentFiles)this.currentFiles[i].cancelUpload(),this._unregisterUpload(this.currentFiles[i]);this.currentUploadedByteValues={},this.currentFiles={},this.totalBytesUploaded=0,this.fire("alluploadscancelled"),this._currentState=n.STOPPED}}},{CONTINUE:"continue",STOP:"stop",RESTART_ASAP:"restartasap",RESTART_AFTER:"restartafter",STOPPED:"stopped",UPLOADING:"uploading",NAME:"uploaderqueue",ATTRS:{simUploads:{value:2,validator:function(e){return e>=1&&e<=5}},errorAction:{value:"continue",validator:function(e){return e===n.CONTINUE||e===n.STOP||e===n.RESTART_ASAP||e===n.RESTART_AFTER}},bytesUploaded:{readOnly:!0,value:0},bytesTotal:{readOnly:!0,value:0},fileList:{value:[],lazyAdd:!1,setter:function(t){var n=t;return e.Array.each(n,function(e){this.totalBytes+=e.get("size")},this),t}},fileFieldName:{value:"Filedata"},uploadURL:{value:""},uploadHeaders:{value:{}},withCredentials:{value:!0},perFileParameters:{value:{}},retryCount:{value:3}}}),e.namespace("Uploader"),e.Uploader.Queue=n},"3.18.0",{requires:["base"]});
