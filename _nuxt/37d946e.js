(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{216:function(t,e,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("0805ce88",content,!0,{sourceMap:!1})},217:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("50be4bc3",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";n(216)},220:function(t,e,n){(e=n(48)(!1)).push([t.i,".modes[data-v-0d81ff77]{background-color:#1b3950;top:37px;position:absolute;left:-500px;width:100%;text-align:left;transition:.3s ease-in-out}.modes-item[data-v-0d81ff77]{cursor:pointer;color:#fff;font-size:14px;text-transform:uppercase;display:flex;justify-content:center;align-items:center;margin:0;padding:5px 0}.modes-subitem[data-v-0d81ff77]{font-size:10px}",""]),t.exports=e},221:function(t,e,n){"use strict";n(217)},222:function(t,e,n){(e=n(48)(!1)).push([t.i,"*[data-v-150cfaff]{padding:0;margin:0}ul[data-v-150cfaff]{list-style:none}.input_wrapper[data-v-150cfaff]{padding:30px 10px 10px}.name[data-v-150cfaff]{min-height:40px}.name p[data-v-150cfaff]:last-child{color:red;font-weight:700}.main[data-v-150cfaff]{height:70%;width:70%;margin:0 auto}.button[data-v-150cfaff]{background-color:#1b3950;color:#fff;position:relative;text-transform:uppercase;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;padding:0 10px}.button.rules__btn[data-v-150cfaff]{margin:0 10px}.play[data-v-150cfaff]{width:33%;background-color:#1b3950}.winners[data-v-150cfaff]{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:400px;overflow-y:scroll;padding:0 10px}.cell[data-v-150cfaff]{border:.1px solid #222}.cell[data-v-150cfaff],.cell_row[data-v-150cfaff]{transition:.3s ease-in-out}.field[data-v-150cfaff]{width:100%;height:100%;min-height:280px;background-color:#85d6ce}.active[data-v-150cfaff]{left:0}.computer_cell[data-v-150cfaff]{background-color:red}.catch_cell[data-v-150cfaff]{background-color:#00f}.date[data-v-150cfaff]{width:-webkit-max-content;width:-moz-max-content;width:max-content}.your__game[data-v-150cfaff]{color:red;font-weight:700;-webkit-animation:result-data-v-150cfaff .5s ease 15;animation:result-data-v-150cfaff .5s ease 15}@-webkit-keyframes result-data-v-150cfaff{0%{color:#222}50%{color:red;font-weight:900;text-shadow:3px 5px 9px red}to{color:#222}}@keyframes result-data-v-150cfaff{0%{color:#222}50%{color:red;font-weight:900;text-shadow:3px 5px 9px red}to{color:#222}}",""]),t.exports=e},225:function(t,e,n){"use strict";n.r(e);n(38);var o=n(10),r=(n(6),n(2),n(3),n(1),n(5),n(50),n(66),n(17),n(0)),c=n(60),l={},d=n(44),f=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-modal",{attrs:{id:"modal-scrollable",scrollable:"",title:"Rules"}},[e("p",{staticClass:"my-4"},[this._v("\n    Hello!"),e("br"),this._v("\n    You should be faster then computer! Pich the mode and enter your name,\n    after the game will be started. Random segment will be colloured in red,\n    your need to click this segment before time is up,\n    so you get point!\n    If you get 50% of segments - you is winner!\n    Good luck!\n  ")])])}),[],!1,null,"97cffbfe",null).exports;function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={props:{isShow:{type:Boolean,dafault:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({modes:function(t){return t.getmode.getmode}})),methods:{changeMode:function(t,e){this.$emit("change-mode",t,e)}}};n(219);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{modal:Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"modes",class:{active:t.isShow}},t._l(t.modes,(function(e,o){return n("li",{key:o,on:{click:function(n){return t.changeMode(o,e)}}},[n("p",{staticClass:"modes-item"},[t._v("\n      "+t._s(o)+"\n    ")])])})),0)}),[],!1,null,"0d81ff77",null).exports,modalRules:f},data:function(){return{isShow:!1,activeModeName:"",activeModeParams:{},name:"",timer:"",computerCell:[],userCell:[],activeCell:"",playButton:"Play",date:null}},computed:w(w({},Object(c.c)({winners:function(t){return t.winners.winners}})),{},{setWidth:function(){var t=this.activeModeParams.field;return 100/(void 0===t?1:t)},setHeight:function(){var t=this.activeModeParams.field;return 100/(void 0===t?1:t)}}),watch:{computerCell:{handler:function(){this.computerCell.length>this.activeModeParams.field*this.activeModeParams.field/2&&this.end("Computer")}},userCell:{handler:function(){this.userCell.length>this.activeModeParams.field*this.activeModeParams.field/2&&this.end(this.name)}}},created:function(){this.time()},methods:w(w({},Object(c.b)({add:"winners/add"})),{},{updateWinnres:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.add({id:Date.now(),winner:t.name,date:t.date});case 2:(n=e.sent)&&alert("error",n);case 4:case"end":return e.stop()}}),e)})))()},showModes:function(){this.isShow=!this.isShow},changeMode:function(title,t){this.activeModeName=title,this.activeModeParams=t},startPosition:function(){this.playButton="Play",this.computerCell=[],this.userCell=[],this.name="",this.activeModeParams={},this.activeModeName="",clearTimeout(this.timer)},end:function(t){clearTimeout(this.timer),this.name="".concat(t),this.playButton="Play again",this.activeModeName="",this.activeCell="",this.updateWinnres()},play:function(){"Play again"===this.playButton||"Stop"===this.playButton?this.startPosition():this.start()},start:function(){this.activeModeName?this.name?(this.$refs.input.value="",this.playButton="Stop",this.randomCell()):alert("Enter your name"):alert("Pick the mode")},included:function(t,e,n){n.includes(t)||e.push(t)},catchCell:function(t){var e=t.target.id;e===this.activeCell&&(this.included(e,this.userCell,this.computerCell),this.activeCell="")},randomNumber:function(){var t=this.activeModeParams.field,e=Math.floor(Math.random()*(t-1+1))+1,n=Math.floor(Math.random()*(t-1+1))+1;return"".concat(e).concat(n)},randomCell:function(){var t=this,e=this.randomNumber();this.computerCell.includes(e)||this.userCell.includes(e)?this.randomCell():this.activeModeName&&(this.activeCell=e,setTimeout((function(){return t.included(e,t.computerCell,t.userCell)}),this.activeModeParams.delay-50),this.timer=setTimeout((function(){return t.randomCell()}),this.activeModeParams.delay))},time:function(){var t=this;setInterval((function(){t.date=(new Date).toLocaleString().substr(0,20)}),1e3)}})},x=(n(221),{components:{game:Object(d.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"pt-4",attrs:{cols:"12",md:"8"}},[n("div",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-scrollable",modifiers:{"modal-scrollable":!0}}],staticClass:"button rules__btn"},[t._v("\n          Game rules\n        ")]),t._v(" "),n("modalRules")],1),t._v(" "),n("div",{staticClass:"d-flex input_wrapper"},[n("b-button",{staticClass:"button",attrs:{type:"button",name:"button"},on:{click:t.showModes}},[t._v("\n          "+t._s(t.activeModeName?t.activeModeName:"Pick the mode")+"\n          "),n("modal",{attrs:{"is-show":t.isShow},on:{"change-mode":t.changeMode}})],1),t._v(" "),n("b-form-input",{ref:"input",staticClass:"px-1",attrs:{type:"text",placeholder:"Please enter your name!"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("b-button",{staticClass:"play",attrs:{type:"button",name:"button"},on:{click:t.play}},[t._v("\n          "+t._s(t.playButton)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"name"},[n("div",{staticClass:"d-flex justify-content-between"},[n("p",{staticClass:"date pl-3"},[t._v("\n            "+t._s(t.date)+"\n          ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.name,expression:"name"}],staticClass:"pr-3"},[t._v("\n            "+t._s("Hello "+t.name)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"main"},[n("ul",{staticClass:"field"},t._l(t.activeModeParams.field,(function(e){return n("li",{key:e,staticClass:"cell_row",style:{height:t.setHeight+"%"}},[n("ul",{staticClass:"d-flex h-100",on:{click:t.catchCell}},t._l(t.activeModeParams.field,(function(o){return n("li",{key:o,ref:""+e+o,refInFor:!0,staticClass:"cell",class:[t.userCell.includes(""+e+o)?"catch_cell":t.computerCell.includes(""+e+o)||t.activeCell===""+e+o?"computer_cell":""],style:{width:t.setWidth+"%"},attrs:{id:""+e+o}})})),0)])})),0)])]),t._v(" "),n("b-col",{staticClass:"pt-4",attrs:{cols:"12",md:"4"}},[n("h2",{staticClass:"text-center mb-3"},[t._v("\n        Best players\n      ")]),t._v(" "),n("ul",{staticClass:"winners mx-auto"},t._l(t.winners,(function(e,o){return n("li",{key:e.id,class:{your__game:o===t.winners.length-1&&"Play again"===t.playButton}},[t._v("\n          "+t._s(e.winner)+" : "+t._s(e.date)+"\n        ")])})),0)])],1)],1)}),[],!1,null,"150cfaff",null).exports},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("getmode/fetch");case 3:return e.next=5,n.dispatch("winners/fetch");case 5:case"end":return e.stop()}}),e)})))()}}),_=Object(d.a)(x,(function(){var t=this.$createElement;return(this._self._c||t)("game")}),[],!1,null,"172203b0",null);e.default=_.exports}}]);