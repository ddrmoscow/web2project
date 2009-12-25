/* $Id$ $URL$ */
if(navigator.userAgent.indexOf('MSIE')!=-1){var undefined=null}navigator.family='ie';if(window.navigator.userAgent.toLowerCase().match(/gecko/)){navigator.family='gecko'}if(navigator.userAgent.toLowerCase().indexOf('opera')+1||window.opera){navigator.family='opera'}function getInternetExplorerVersion(){var a=-1;if(navigator.appName=='Microsoft Internet Explorer'){var b=navigator.userAgent;var c=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(c.exec(b)!=null)a=parseFloat(RegExp.$1)}return a}var ver=getInternetExplorerVersion();if(ver>-1){if(ver>=8.0){navigator.family='ie8'}}function center_window(a,b){var c=window.outerWidth;var d=window.outerHeight;var e=window.screenX;var f=window.screenY;var g;var h;var i;if(a<=0){a=c;h=e}else{e+=(c/2);e-=(a/2);h=Math.round(e)}if(b<=0){i=f;b=d}else{f+=(d/2);f-=(b/2);i=Math.round(f)}g='screenX='+h+',screenY='+i+',outerHeight='+b+',outerWidth='+a;return g}function CompItem(a,b){this.key=a;this.data=b;this.compare=comp_keys;this.equals=comp_equal}function comp_keys(a){if(this.key==a.key)return 0;if(this.key<a.key)return-1;return 1}function comp_equal(a){if(this.key==a)return true;return false}function Comparable(){this.list=new Array();this.add=ca_add;this.find=ca_find;this.length=ca_length;this.get=ca_get;this.search=ca_search;this.count=0}function ca_add(a,b){var c=this.search(a);if(c!=-1){this.list[c]=new CompItem(a,b)}else{this.list[this.count]=new CompItem(a,b);this.count++}}function ca_find(a){var b=this.list.length;for(var i=0;i<b;i++){cp=this.list[i];if(cp.equals(a)){return cp.data}}return undefined}function ca_search(a){var b=this.list.length;for(var i=0;i<b;i++){cp=this.list[i];if(cp.equals(a)){return i}}return-1}function ca_length(){return this.list.length}function ca_get(a){return this.list[a]}function HTMLex(){this.addTable=_HTMLaddTable;this.addRow=_HTMLaddRow;this.addHeader=_HTMLaddHeader;this.addHeaderNode=_HTMLaddHeaderNode;this.addCell=_HTMLaddCell;this.addCellNode=_HTMLaddCellNode;this.addTextInput=_HTMLaddTextInput;this.addHidden=_HTMLaddHidden;this.addTextNode=_HTMLaddTextNode;this.addNode=_HTMLaddNode;this.addSpan=_HTMLaddSpan;this.addSelect=_HTMLaddSelect;this.addOption=_HTMLaddOption}function _HTMLaddTable(a,b,d){var c=new Comparable;if(b){c.add('width',b)}if(d){c.add('border',d)}if(a){c.add('id',a)}return this.addNode('table',false,c)}function _HTMLaddRow(a){var b=document.createElement('tr');if(a){b.setAttribute('id',a)}return b}function _HTMLaddHeaderNode(a,b,d){var c=new Comparable;if(b){c.add('id',b)}if(d){c.add('width',d)}return this.addNode('th',a,c)}function _HTMLaddHeader(a,b,d){var c=new Comparable;if(b){c.add('id',b)}if(d){c.add('width',d)}return this.addTextNode('th',a,c)}function _HTMLaddCell(a,b,d,e){var c=new Comparable;if(b){c.add('id',b)}if(d){c.add('width',d)}return this.addTextNode('td',a,c,e)}function _HTMLaddSpan(a,b){var c=new Comparable;if(b){c.add('id',b)}return this.addTextNode('span',a,c)}function _HTMLaddCellNode(a,b,d){var c=new Comparable;if(b){c.add('id',b)}if(d){c.add('width',d)}return this.addNode('td',a,c)}function _HTMLaddTextNode(a,c,d,e){var f=document.createElement(a);if(e){var b=f.appendChild(document.createElement('b'));if(c){b.appendChild(document.createTextNode(c))}}else{if(c){f.appendChild(document.createTextNode(c))}}var i;if(d){for(i=d.length()-1;i>=0;i--){var g=d.get(i);f.setAttribute(g.key,g.data)}}return f}function _HTMLaddNode(a,b,c){var d=document.createElement(a);if(b){d.appendChild(b)}var i;for(i=c.length()-1;i>=0;i--){var e=c.get(i);d.setAttribute(e.key,e.data)}return d}function _HTMLaddTextInput(a,b,d,e){var c=new Comparable;c.add('id',a);c.add('name',a);c.add('type','text');if(d){c.add('size',d)}if(e){c.add('maxlength',e)}if(b){c.add('value',b)}return this.addNode('input',false,c)}function _HTMLaddHidden(a,b){var c=new Comparable;c.add('id',a);c.add('name',a);if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){c.add('type','hidden');type='input'}else{type='textarea';c.add('className','hidden')}c.add('value',b);return this.addNode(type,false,c)}function _HTMLaddSelect(a,b,d){var c=new Comparable;c.add('id',a);c.add('name',a);if(b){c.add('class',b)}if(d){c.add('multiple','multiple')}return this.addNode('select',false,c)}function _HTMLaddOption(a,b,d){var c=new Comparable;c.add('value',a);if(d){c.add('selected','selected')}return this.addTextNode('option',b,c)}function CommonEvent(e){var a=null;var x=0;var y=0;var b=null;var c=null;var d=null;var f=false;var g=false;var h=false;var i=false;if(e){if(e.target){this.target=e.target;this.type=e.type;this.x=e.x;this.y=e.y;if(e.modifiers){this.altKey=(e.modifiers&ALT_MASK)?true:false;this.ctrlKey=(e.modifiers&CONTROL_MASK)?true:false;this.shiftKey=(e.modifiers&SHIFT_MASK)?true:false;this.metaKey=(e.modifiers&META_MASK)?true:false}else{if(e.altKey)this.altKey=true;if(e.shiftKey)this.shiftKey=true;if(e.ctrlKey)this.ctrlKey=true;if(e.metaKey)this.metaKey=true}if(e.type.substr(0,3).toLowerCase()=='key'){this.keycode=e.which}else{this.button=e.which}}else{this.target=e;this.type='field'}}else if(event){this.target=event.srcElement;this.type=event.type;this.x=event.x;this.y=event.y;this.button=event.button;this.keycode=event.keyCode;this.altKey=event.altKey;this.shiftKey=event.shiftKey;this.ctrlKey=event.ctrlKey}}function ucfirst(s,b){if(!b){b=' '}var a=s.split(b);var c='';var d=false;for(var i=0;i<a.length;i++){if(d){c+=' '}else{d=true}c+=a[i].substr(0,1).toUpperCase()+a[i].substr(1)}return c}function clear_span(a){var b=document.getElementById(a);if(b){if(b.hasChildNodes()){for(var i=b.childNodes.length-1;i>=0;i--){b.removeChild(b.childNodes.item(i))}}}return b}function show_message(a,b){display_message(b,a+'_message')}function show_instruction(a){display_message(a,'instruct')}function display_message(a,b){var c=document.getElementById(b);if(c==null){return}var d;if(c.hasChildNodes()){d=c.childNodes.item(0);d.nodeValue=a}else{d=c.appendChild(document.createTextNode(a))}}function clear_message(a){reset_message(a+'_message')}function clear_instruction(){reset_message('instruct')}function reset_message(a){var b=document.getElementById(a);if(b==null){return}var c;if(b.hasChildNodes()){c=b.childNodes.item(0);c.nodeValue=''}else{c=b.appendChild(document.createTextNode(''))}}function find_anchor(a){for(var i=0;i<document.anchors.length;i++){if(document.anchors[i].name==a){return true}}return false}function getInnerHeight(a){var b;if(a.innerHeight){b=a.innerHeight}else if(a.document.documentElement&&a.document.documentElement.clientHeight){b=a.document.documentElement.clientHeight}else if(a.document.body){b=a.document.body.clientHeight}else{b=0}return b}var saved_rows=new Comparable;function toggle_collapse(a,b){var c=document.getElementById('image_'+a);if(!c){return false}var d=document.getElementById('r_'+a);var e=d.parentNode;var f=c.name.substr(c.name.length-2,2);if(f=='_0'){if(b){return false}var g=saved_rows.find(a);if(g){var h=d.nextSibling;for(var j=0,j_cmp=g.length;j<j_cmp;j++)e.insertBefore(g[j],h);c.name=c.id+'_1';c.src='./images/arrow-down.gif'}}else{c.name=c.id+'_0';c.src='./images/arrow-right.gif';var i=new Array();var k=0;var l=d.nextSibling;var m=document.getElementById('rl_'+a);var n=m.value;while(l){if(!l.id){l=l.nextSibling;continue}var o=l.id.substr(2);var p=document.getElementById('rl_'+o).value;if(p<=n)break;var q=l.nextSibling;i[k++]=e.removeChild(l);l=q}saved_rows.add(a,i)}return true}function collapse_all(a){var b=document.getElementById(a);for(var i=0,i_cmp=b.childNodes.length;i<i_cmp;i++){if(b.childNodes[i].tagName=='TR'&&b.childNodes[i].id){toggle_collapse(b.childNodes[i].id.substr(2),true)}}}var show_tab_function=null;var hide_tab_function=null;function show_tab(i){hide_tabs();if(show_tab_function){show_tab_function(i);return}var a=document.getElementById('tab_'+i);a.style.display='block';a=document.getElementById('toptab_'+i);a.className='tabon';a.style='font-style:bold;'}function hide_tabs(){if(hide_tab_function){hide_tab_function();return}var a=document.getElementsByTagName('td');var i;for(i=0;i<a.length;i++){if(a[i].className=='tabon'){a[i].className='taboff';a[i].style='font-style:normal;'}}a=document.getElementsByTagName('div');for(i=0;i<a.length;i++){if(a[i].className=='tab'){a[i].style.display='none'}}}hide_tab_function=gt_hide_tabs;show_tab_function=gt_show_tab;function expand_collapse(a,b,c,d,e){var f=(c=='expand'?1:0);var g=(c=='collapse'?1:0);var h=(d==0?0:(d>0?d:-1));var j=(e?e:0);var k=false;var l=false;var m=document.getElementsByTagName('tr');for(var i=0;i<m.length;i++){var n=m.item(i).id;if((n.indexOf(a)>=0)&&h<0){var o=document.getElementById(n);if(g||f){if(g){if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){o.style.visibility='collapse';o.style.display='none';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}q.style.display='none';p.style.display='inline'}else{o.style.display='none';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}q.style.display='none';p.style.display='inline'}}else{if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){o.style.visibility='visible';o.style.display='';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}q.style.display='inline';p.style.display='none'}else{o.style.display='';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}q.style.display='inline';p.style.display='none'}}}else{if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){o.style.visibility=(o.style.visibility==''||o.style.visibility=='collapse')?'visible':'collapse';o.style.display=(o.style.display=='none')?'':'none';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}q.style.display=(o.style.visibility=='visible')?'inline':'none';p.style.display=(o.style.visibility==''||o.style.visibility=='collapse')?'inline':'none'}else{o.style.display=(o.style.display=='none')?'':'none';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}q.style.display=(o.style.display=='')?'inline':'none';p.style.display=(o.style.display=='none')?'inline':'none'}}}else if((n.indexOf(a)>=0)&&h>=0&&!k&&!l&&!j){l=true;var o=document.getElementById(n);var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display=(q.style.display=='none')?'inline':'none'}if(!(p==null)){p.style.display=(p.style.display=='none')?'inline':'none';opt=(p.style.display=='inline')?'collapse':'expand';g=(opt=='collapse'?1:0);f=(opt=='expand'?1:0)}}else if((n.indexOf(a)>=0)&&h>=0&&j){l=true;var o=document.getElementById(n);current_level=parseInt(n.substr(n.indexOf('>')+1,n.indexOf('<')-n.indexOf('>')-1));if(g){if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){if((j==1&&h==0)||(current_level>0)){o.style.visibility='collapse';o.style.display='none'}var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='none'}if(!(p==null)){p.style.display='inline'}}else{if((j==1&&h==0)||(current_level>0)){o.style.display='none'}var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='none'}if(!(p==null)){p.style.display='inline'}}}else{if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){if((j==1&&h==0)||(current_level>0)){o.style.visibility='visible';o.style.display=''}var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='inline'}if(!(p==null)){p.style.display='none'}}else{if((j==1&&h==0)||(current_level>0)){o.style.display=''}var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='inline'}if(!(p==null)){p.style.display='none'}}}}else if(h>0&&!k&&(l||h==0)){current_level=parseInt(n.substr(n.indexOf('>')+1,n.indexOf('<')-n.indexOf('>')-1));if(current_level<h){k=true;return}else{var o=document.getElementById(n);if(g){if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){o.style.visibility='collapse';o.style.display='none';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='none'}if(!(p==null)){p.style.display='inline'}}else{o.style.display='none';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='none'}if(!(p==null)){p.style.display='inline'}}}else{if(navigator.family=='gecko'||navigator.family=='opera'||navigator.family=='ie8'){o.style.visibility='visible';o.style.display='';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='inline'}if(!(p==null)){p.style.display='none'}}else{o.style.display='';var p=document.getElementById(n+'_expand');var q=document.getElementById(n+'_collapse');if(p==null){var p=document.getElementById(a+'_expand')}if(q==null){var q=document.getElementById(a+'_collapse')}if(!(q==null)){q.style.display='inline'}if(!(p==null)){p.style.display='none'}}}}}}}function expandAll(a,b){expand_collapse(a,b,'expand')}function collapseAll(a,b){expand_collapse(a,b,'collapse')}function addOption(a,b,c){var d=new Option(c,b);document.getElementById(a).options.add(d)}if(typeof(xajax)!='undefined'){xajax.callback.global.onRequest=function(){xajax.$('loadingMessage').style.display='block';if(navigator.userAgent.indexOf('MSIE')!=-1){document.body.style['filter']='alpha(opacity=80)'}else{document.body.style.opacity=.8}};function hideLoadingMessage(){xajax.$('loadingMessage').style.display='none';if(navigator.userAgent.indexOf('MSIE')!=-1){document.body.style['filter']='alpha(opacity=100)'}else{document.body.style.opacity=1}}xajax.callback.global.onComplete=hideLoadingMessage}function emptyCombo(a){a.options.length=0}function AllByTag(){}AllByTag.setStyleDisplay=function(a,b){var c=document.getElementsByTagName(a);for(var i=0;i<c.length;i++){c[i].style.display=b}};AllByTag.show=function(a,b){AllByTag.setStyleDisplay(a,b?b:'inline')};AllByTag.hide=function(a,b){AllByTag.setStyleDisplay(a,'none')};