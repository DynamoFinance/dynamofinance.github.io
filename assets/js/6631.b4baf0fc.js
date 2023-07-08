"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[6631],{3349:(e,t,n)=>{n.d(t,{a:()=>l});var r=n(6225);function l(e,t){var n=e.append("foreignObject").attr("width","100000"),l=n.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}r.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return n.attr("width",a.width).attr("height",a.height),n}},6225:(e,t,n)=>{n.d(t,{$p:()=>d,O1:()=>a,WR:()=>p,bF:()=>o,bg:()=>c});var r=n(7514),l=n(3234);function o(e,t){return!!e.children(t).length}function a(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(r.Z(n)){var o=n.transition;if(l.Z(o))return o(e)}return e}},6631:(e,t,n)=>{n.d(t,{diagram:()=>i});var r=n(4796),l=(n(5625),n(4646));n(4231),n(7452),n(3688),n(870),n(2494),n(6225);n(3349);n(6749),n(4379);n(1666);l.c_6;var o=n(8937);n(7484),n(7967),n(7856),n(9354);const a={},s=function(e){const t=Object.keys(e);for(const n of t)a[n]=e[n]},i={parser:r.p,db:r.f,renderer:o.f,styles:o.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,s(e.flowchart),r.f.clear(),r.f.setGen("gen-1")}}},8937:(e,t,n)=>{n.d(t,{a:()=>g,f:()=>h});var r=n(5625),l=n(4646),o=n(4796),a=n(4231),s=n(2759),i=n(3349),c=n(1691),d=n(1610);const p=(e,t)=>c.Z.lang.round(d.Z.parse(e)[t]);var b=n(1117);const f={},w=function(e,t,n,r,l,o){const s=r.select(`[id="${n}"]`);Object.keys(e).forEach((function(n){const r=e[n];let c="default";r.classes.length>0&&(c=r.classes.join(" ")),c+=" flowchart-label";const d=(0,a.k)(r.styles);let p,b=void 0!==r.text?r.text:r.id;if(a.l.info("vertex",r,r.labelType),"markdown"===r.labelType)a.l.info("vertex",r,r.labelType);else if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};p=(0,i.a)(s,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=b.split(a.e.lineBreakRegex);for(const n of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}p=e}let f=0,w="";switch(r.type){case"round":f=5,w="rect";break;case"square":case"group":default:w="rect";break;case"diamond":w="question";break;case"hexagon":w="hexagon";break;case"odd":case"odd_right":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"doublecircle":w="doublecircle"}t.setNode(r.id,{labelStyle:d.labelStyle,shape:w,labelText:b,labelType:r.labelType,rx:f,ry:f,class:c,style:d.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:o.db.getTooltip(r.id)||"",domId:o.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,a.c)().flowchart.padding}),a.l.info("setNode",{labelStyle:d.labelStyle,labelType:r.labelType,shape:w,labelText:b,rx:f,ry:f,class:c,style:d.style,id:r.id,domId:o.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:(0,a.c)().flowchart.padding})}))},u=function(e,t,n){a.l.info("abc78 edges = ",e);let r,o,s=0,i={};if(void 0!==e.defaultStyle){const t=(0,a.k)(e.defaultStyle);r=t.style,o=t.labelStyle}e.forEach((function(n){s++;const c="L-"+n.start+"-"+n.end;void 0===i[c]?(i[c]=0,a.l.info("abc78 new entry",c,i[c])):(i[c]++,a.l.info("abc78 new entry",c,i[c]));let d=c+"-"+i[c];a.l.info("abc78 new link id to be used is",c,d,i[c]);const p="LS-"+n.start,b="LE-"+n.end,w={style:"",labelStyle:""};switch(w.minlen=n.length||1,"arrow_open"===n.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}let u="",h="";switch(n.stroke){case"normal":u="fill:none;",void 0!==r&&(u=r),void 0!==o&&(h=o),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;";break;case"invisible":w.thickness="invisible",w.pattern="solid",w.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){const e=(0,a.k)(n.style);u=e.style,h=e.labelStyle}w.style=w.style+=u,w.labelStyle=w.labelStyle+=h,void 0!==n.interpolate?w.curve=(0,a.o)(n.interpolate,l.c_6):void 0!==e.defaultInterpolate?w.curve=(0,a.o)(e.defaultInterpolate,l.c_6):w.curve=(0,a.o)(f.curve,l.c_6),void 0===n.text?void 0!==n.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType=n.labelType,w.label=n.text.replace(a.e.lineBreakRegex,"\n"),void 0===n.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=d,w.classes="flowchart-link "+p+" "+b,t.setEdge(n.start,n.end,w,s)}))},h={setConf:function(e){const t=Object.keys(e);for(const n of t)f[n]=e[n]},addVertices:w,addEdges:u,getClasses:function(e,t){a.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(n){return}},draw:async function(e,t,n,i){a.l.info("Drawing flowchart"),i.db.clear(),o.f.setGen("gen-2"),i.parser.parse(e);let c=i.db.getDirection();void 0===c&&(c="TD");const{securityLevel:d,flowchart:p}=(0,a.c)(),b=p.nodeSpacing||50,f=p.rankSpacing||50;let h;"sandbox"===d&&(h=(0,l.Ys)("#i"+t));const g="sandbox"===d?(0,l.Ys)(h.nodes()[0].contentDocument.body):(0,l.Ys)("body"),y="sandbox"===d?h.nodes()[0].contentDocument:document,k=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:b,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let x;const v=i.db.getSubGraphs();a.l.info("Subgraphs - ",v);for(let r=v.length-1;r>=0;r--)x=v[r],a.l.info("Subgraph - ",x),i.db.addVertex(x.id,{text:x.title,type:x.labelType},"group",void 0,x.classes,x.dir);const m=i.db.getVertices(),S=i.db.getEdges();a.l.info("Edges",S);let T=0;for(T=v.length-1;T>=0;T--){x=v[T],(0,l.td_)("cluster").append("text");for(let e=0;e<x.nodes.length;e++)a.l.info("Setting up subgraphs",x.nodes[e],x.id),k.setParent(x.nodes[e],x.id)}w(m,k,t,g,y,i),u(S,k);const _=g.select(`[id="${t}"]`),C=g.select("#"+t+" g");if(await(0,s.r)(C,k,["point","circle","cross"],"flowchart",t),a.u.insertTitle(_,"flowchartTitleText",p.titleTopMargin,i.db.getDiagramTitle()),(0,a.p)(k,_,p.diagramPadding,p.useMaxWidth),i.db.indexNodes("subGraph"+T),!p.htmlLabels){const e=y.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=y.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(m).forEach((function(e){const n=m[e];if(n.link){const r=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(r){const e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===d?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert((function(){return e}),":first-child"),l=r.select(".label-container");l&&t.append((function(){return l.node()}));const o=r.select(".label");o&&t.append((function(){return o.node()}))}}}))}},g=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const n=p,r=n(e,"r"),l=n(e,"g"),o=n(e,"b");return b.Z(r,l,o,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);