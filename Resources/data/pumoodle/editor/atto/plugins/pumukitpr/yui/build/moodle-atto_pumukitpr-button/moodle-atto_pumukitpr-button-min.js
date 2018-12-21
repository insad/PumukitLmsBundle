YUI.add("moodle-atto_pumukitpr-button",function(e,t){var n="atto_pumukitpr",r="pumukitpr_flavor",i="atto_pumukitpr",s={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",FLAVORCONTROL:"flavorcontrol"},o={FLAVORCONTROL:".flavorcontrol"},u='<ul class="root nav nav-tabs" role="tablist">',a='<div class="root tab-content">',f='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_upload" role="tab" data-toggle="tab">{{button_upload}}</a></li>',l='<div class="tab-pane" id="{{elementid}}_upload"><iframe src="{{PUMUKITURL}}/openedx/sso/upload?hash={{HASH}}&username={{USERNAME}}&lang=en" frameborder="0" allowfullscreen style="width:100%;height:80vh" allow="microphone; camera"></iframe></div>';u+=f,a+=l;var c='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_personal_recorder" role="tab" data-toggle="tab">{{button_pr}}</a></li>',h='<div data-medium-type="personal_recorder" class="tab-pane" id="{{elementid}}_personal_recorder"><iframe id="pumukitpr_iframe_recorder" src="{{PUMUKITURL}}/openedx/sso/personal_recorder?hash={{HASH}}&username={{USERNAME}}&lang=en" frameborder="0" allowfullscreen style="width:100%;height:80vh" allow="microphone; camera"></iframe></div>',p='<li class="nav-item"><a class="nav-link active" href="#{{elementid}}_manager" role="tab" data-toggle="tab">{{button_myvideos}}</a></li>',d='<div class="tab-pane active" id="{{elementid}}_manager"><iframe src="{{PUMUKITURL}}/openedx/sso/manager?hash={{HASH}}&username={{USERNAME}}&lang=en" frameborder="0" allowfullscreen style="width:100%;height:80vh" allow="microphone; camera"></iframe></div>',v='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_playlists" role="tab" data-toggle="tab">{{button_playlists}}</a></li>',m='<div class="tab-pane" id="{{elementid}}_playlists"><iframe src="{{PUMUKITURL}}/openedx/sso/manager?hash={{HASH}}&username={{USERNAME}}&lang=en&playlist=true" frameborder="0" allowfullscreen style="width:100%;height:80vh" allow="microphone; camera"></iframe></div>',g='<li class="nav-item"><a class="nav-link" href="#{{elementid}}_public" role="tab" data-toggle="tab">{{button_sharevideos}}</a></li>',y='<div class="tab-pane" id="{{elementid}}_public"><iframe src="{{PUMUKITURL}}/openedx/search/public/multimediaobjects" frameborder="0" allowfullscreen style="width:100%;height:80vh" allow="microphone; camera"></iframe></div>';e.namespace("M.atto_pumukitpr").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_receiveMessageBind:null,initializer:function(){if(this.get("disabled"))return;this.addButton({icon:"e/insert_edit_video",buttonName:"pumukitpr",callback:this._displayDialogue,callbackArgs:"iconone"});var e="pumukitpr_iframe_sso";if(!document.getElementById(e)){var t=document.createElement("iframe");t.id=e,t.style.display="none",t.src=this.get("pumukitprurl")+"/openedx/sso/manager?hash="+this.get("hash")+"&username="+this.get("username")+"&email="+this.get("email")+"&lang=en",t.allow="microphone; camera",document.getElementsByTagName("body")[0].appendChild(t)}},_getFlavorControlName:function(){return this.get("host").get("elementid")+"_"+r},_displayDialogue:function(t,n){t.preventDefault();var r=900;this._receiveMessageBind=this._receiveMessage.bind(this),window.addEventListener("message",this._receiveMessageBind);var i=this.getDialogue({headerContent:this.get("dialogtitle"),widht:"70%",focusAfterHide:n});i.width!==r+"px"&&(i.set("width",r+"px"),i.set("max-width","550px"));var s=this._getFormContent(n),o=e.Node.create("<div></div>");o.append(s),i.set("bodyContent",o),i.show(),this.markUpdated();var u=document.getElementsByClassName("closebutton");u[0]&&u[0].addEventListener("click",this._closeSharedWindow)},_getFormContent:function(t){var i=u,o=a;this.get("showpr")!=="0"&&(i+=c,o+=h),i+=p,o+=d,this.get("showplaylist")!=="0"&&(i+=v,o+=m),this.get("showsharedvideos")!=="0"&&(i+=g,o+=y),i+="</ul>",o=o+"</div>"+'<form class="atto_form">'+'<input class="{{CSS.FLAVORCONTROL}}" id="{{elementid}}_{{FLAVORCONTROL}}" '+'name="{{elementid}}_{{FLAVORCONTROL}}" value="{{defaultflavor}}" '+'type="hidden" />'+"</form>",i+=o;var f=e.Handlebars.compile(i),l=e.Node.create(f({elementid:this.get("host").get("elementid"),CSS:s,FLAVORCONTROL:r,PUMUKITURL:this.get("pumukitprurl"),HASH:this.get("hash"),USERNAME:this.get("username"),component:n,defaultflavor:this.get("defaultflavor"),clickedicon:t,button_upload:M.util.get_string("button_upload",n),button_pr:M.util.get_string("button_pr",n),button_myvideos:M.util.get_string("button_myvideos",n),button_playlists:M.util.get_string("button_playlists",n),button_sharevideos:M.util.get_string("button_sharevideos",n)}));return this._form=l,l},_doInsert:function(e){e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var t=this._form.one(o.FLAVORCONTROL);if(!t.get("value"))return;this.editor.focus(),this.get("host").insertContentAtFocusPoint(t.get("value")),this.markUpdated()},_receiveMessage:function(e){e.data==="enableMoodlePRAdd?"&&e.source.postMessage({moodlepradd:"OK"},"*");if(!e.data.mmId&&!e.data.playlist&&!e.data.url)return;e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),this._closeSharedWindow(e);if(!e.data.mmId&&!e.data.playlist&&!e.data.url)return;window.removeEventListener("message",this._receiveMessageBind),this.editor.focus();var t="";e.data.playlist?t=this.get("pumukitprurl")+"/openedx/openedx/playlist/embed/?id="+e.data.playlist:e.data.url?t=e.data.url:t=this.get("pumukitprurl")+"/openedx/openedx/embed/?id="+e.data.mmId;var n='<iframe src="'+t+'" style="border:0px #FFFFFF none;box-shadow:0 3px 10px rgba(0,0,0,.23), 0 3px 10px rgba(0,0,0,.16);"'+' scrolling="no" frameborder="1" height="315" width="560" allowfullscreen allow="microphone; camera"></iframe>';this.get("host").insertContentAtFocusPoint(n),this.markUpdated()},_closeSharedWindow:function(e){var t=document.getElementById("pumukitpr_iframe_recorder");t.parentNode.removeChild(t)}},{ATTRS:{pumukitprurl:{value:""},hash:{value:""},username:
{value:""},email:{value:""},dialogtitle:{value:""},showpr:{value:""},showplaylist:{value:""},showsharedvideos:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
