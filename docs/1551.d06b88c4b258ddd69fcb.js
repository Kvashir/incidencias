(self.webpackChunkincidencias=self.webpackChunkincidencias||[]).push([[1551],{1551:(e,t,n)=>{"use strict";n.r(t),n.d(t,{pwa_camera_modal_instance:()=>h});var i=n(6304),o=n(2879);const h=class{constructor(e){var t=this;(0,o.r)(this,e),this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.handlePhoto=function(){var e=(0,i.Z)(function*(e){t.onPhoto.emit(e)});return function(t){return e.apply(this,arguments)}}(),this.handleNoDeviceError=function(){var e=(0,i.Z)(function*(e){t.noDeviceError.emit(e)});return function(t){return e.apply(this,arguments)}}(),this.onPhoto=(0,o.c)(this,"onPhoto",7),this.noDeviceError=(0,o.c)(this,"noDeviceError",7)}handleBackdropClick(e){e.target!==this.el&&this.onPhoto.emit(null)}handleComponentClick(e){e.stopPropagation()}handleBackdropKeyUp(e){"Escape"===e.key&&this.onPhoto.emit(null)}render(){return(0,o.h)("div",{class:"wrapper",onClick:e=>this.handleBackdropClick(e)},(0,o.h)("div",{class:"content"},(0,o.h)("pwa-camera",{onClick:e=>this.handleComponentClick(e),handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}get el(){return(0,o.g)(this)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"}}}}]);