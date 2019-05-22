/** !
@license
Copyright (c) 2019 The Contrast Tool Authors. All rights reserved.
This code may only be used under the BSD style license found at https://contrast-tool.github.io/docs/LICENSE.md
The complete set of authors may be found at https://contrast-tool.github.io/docs/AUTHORS.md
The complete set of contributors may be found at https://acontrast-tool.github.io/static/CONTRIBUTORS.md
*/applic.__proto__.import={};var _toBlobUri=function _toBlobUri(_file){var _reader=window.URL||window.webkitURL;return"".concat(_reader.createObjectURL(_file))};// const _toBlobUri = (_file) => {
//    const _reader = window.URL || window.webkitURL;
//    // const _suffix = '--THIS-IS-NOT-A-SHAREABLE-URL--';
//    // return `${_reader.createObjectURL(_file)}#${_suffix}`;
// };
applic.import.traverse=function(_params){return new(/*#__PURE__*/function(){function _class(){var _this=this;babelHelpers.classCallCheck(this,_class);this.types=_params.types||[];this.blobs={};this.onRegistered=function(){};this.onChanged=function(){};this.onResolved=function(){};this.onRejected=function(){};// console.debug('applic-import:traverse-new', _params)
Promise.resolve().then(function(){// let _files = 0; for (const _file of _params.files) {
//    if (_file.type && '' != _file.type) _files++
// };
if(_params.entries){// if (_files < _params.files.length && _params.items) {
// console.debug('applic-import:traverse-deep-search');
babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _this._traverse({entries:_params.entries});case 2:// await this._traverse({ items: _params.items });
applic.utils.buffer(_this._resolve.bind(_this));case 3:case"end":return _context.stop();}}},_callee)}))()}else{// console.debug('applic-import:traverse-files-only');
_this._resolveFiles({files:_params.files})};})}babelHelpers.createClass(_class,[{key:"_traverse",value:function _traverse(_iteration){var _this2=this;return new Promise(/*#__PURE__*/function(){var _ref2=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve){var _iteratorNormalCompletion,_didIteratorError,_iteratorError,_loop,_iterator,_step,_ret;return regeneratorRuntime.wrap(function _callee3$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!_iteration.entries)_iteration.entries=[];if(!_iteration.depth)_iteration.depth=0;// if (_iteration.items) {
//    console.log('get entries')
//    for (const _item of _iteration.items) {
//       const _entry = _item.webkitGetAsEntry()
//       console.log('_entry', _entry)
//       _iteration.entries.push(_entry);
//    };
// };
_iteratorNormalCompletion=!0;_didIteratorError=!1;_iteratorError=void 0;_context4.prev=5;_loop=/*#__PURE__*/regeneratorRuntime.mark(function _loop(){var _entry;return regeneratorRuntime.wrap(function _loop$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_entry=_step.value;if(_entry){_context3.next=3;break}return _context3.abrupt("return",{v:void 0});case 3:if(!_entry.isFile){_context3.next=11;break}_context3.t0=_this2;_context3.next=7;return new Promise(function(resolve){_entry.file(function(_file){resolve(_file)})});case 7:_context3.t1=_context3.sent;_context3.t0._register.call(_context3.t0,_context3.t1);_context3.next=16;break;case 11:if(!(_entry.isDirectory&&5>_iteration.depth)){_context3.next=16;break}_context3.next=14;return new Promise(function(resolve){_entry.createReader().readEntries(/*#__PURE__*/function(){var _ref3=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(_entries){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this2._traverse({entries:_entries,depth:1+_iteration.depth});case 2:resolve();case 3:case"end":return _context2.stop();}}},_callee2)}));return function(_x2){return _ref3.apply(this,arguments)}}())});case 14:_context3.next=16;break;case 16:case"end":return _context3.stop();}}},_loop)});_iterator=_iteration.entries[Symbol.iterator]();case 8:if(_iteratorNormalCompletion=(_step=_iterator.next()).done){_context4.next=16;break}return _context4.delegateYield(_loop(),"t0",10);case 10:_ret=_context4.t0;if(!("object"===babelHelpers.typeof(_ret))){_context4.next=13;break}return _context4.abrupt("return",_ret.v);case 13:_iteratorNormalCompletion=!0;_context4.next=8;break;case 16:_context4.next=22;break;case 18:_context4.prev=18;_context4.t1=_context4["catch"](5);_didIteratorError=!0;_iteratorError=_context4.t1;case 22:_context4.prev=22;_context4.prev=23;if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}case 25:_context4.prev=25;if(!_didIteratorError){_context4.next=28;break}throw _iteratorError;case 28:return _context4.finish(25);case 29:return _context4.finish(22);case 30:;resolve();case 32:case"end":return _context4.stop();}}},_callee3,null,[[5,18,22,30],[23,,25,29]])}));return function(_x){return _ref2.apply(this,arguments)}}())}},{key:"_register",value:function _register(_file){var _nonce=applic.utils.nonce();if(-1==this.types.indexOf(_file.type)){this.onRejected({type:_file.type,name:escape(_file.name)})}else{this.blobs[_nonce]={file:_file,nonce:_nonce,detail:{name:escape(_file.name),type:escape(_file.type),lastModified:new Date(_file.lastModified),created:new Date}};this.onRegistered({blob:this.blobs[_nonce]})}}},{key:"_resolve",value:function(){var _resolve2=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(){var _nonce;return regeneratorRuntime.wrap(function _callee4$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.t0=regeneratorRuntime.keys(this.blobs);case 1:if((_context5.t1=_context5.t0()).done){_context5.next=9;break}_nonce=_context5.t1.value;_context5.next=5;return _toBlobUri(this.blobs[_nonce].file);case 5:this.blobs[_nonce].uri=_context5.sent;this.onChanged({blob:this.blobs[_nonce]});_context5.next=1;break;case 9:;this.onResolved();case 11:case"end":return _context5.stop();}}},_callee4,this)}));function _resolve(){return _resolve2.apply(this,arguments)}return _resolve}()},{key:"_resolveFiles",value:function _resolveFiles(_iteration){var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=_iteration.files[Symbol.iterator](),_step2,_file;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){_file=_step2.value;this._register(_file)}}catch(err){_didIteratorError2=!0;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&null!=_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}};this._resolve()}}]);return _class}())};/** !
   @license
   Copyright (c) 2019 The Contrast Tool Authors. All rights reserved.
   This code may only be used under the BSD style license found at https://contrast-tool.github.io/docs/LICENSE.md
   The complete set of authors may be found at https://contrast-tool.github.io/docs/AUTHORS.md
   The complete set of contributors may be found at https://contrast-tool.github.io/docs/CONTRIBUTORS.md
   */var GRAPHIC_STATE={};applic.graphic=new(/*#__PURE__*/function(){function _class2(){babelHelpers.classCallCheck(this,_class2)}return _class2}());applic.graphic.__proto__.updated=function(){};applic.graphic.types=[{nonce:"twitch:emote",name:"Emoticon"},{nonce:"twitch:badge",name:"Badge"}];applic.graphic.get=function(_nonce){if("*"==_nonce){return applic.utils.arrayify(GRAPHIC_STATE)}else if("object"==babelHelpers.typeof(_nonce)){var _list=applic.utils.arrayify(GRAPHIC_STATE);_list=_list.filter(function(_node){var _match=!0;Object.keys(_nonce).forEach(function(_key){if(_node[_key]!=_nonce[_key])_match=!1});return _match});return _list}else{return GRAPHIC_STATE[_nonce]||!1}};applic.graphic.update=function(_nonce,_value){if(!GRAPHIC_STATE[_nonce])return;GRAPHIC_STATE[_nonce].update(_value)};applic.graphic.remove=function(_nonce){if(!GRAPHIC_STATE[_nonce])return;delete GRAPHIC_STATE[_nonce];applic.utils.buffer(function(){applic.dispatch("applic:changed")})};applic.graphic.create=function(_params){return new(/*#__PURE__*/function(){function ApplicGraphic(){babelHelpers.classCallCheck(this,ApplicGraphic);this.nonce=applic.utils.nonce();this.alias=applic.utils.alias();this.blob=_params.blob;this.detail=_params.blob.detail;this.selected=!1;this.section=_params.section;this.type=_params.type;this.uri="";GRAPHIC_STATE[this.nonce]=this;// console.debug('applic-fs:cached-graphic', {
//    graphic: this,
//    section: this.section
// })
applic.dispatch("applic:changed")}babelHelpers.createClass(ApplicGraphic,[{key:"update",value:function update(_params){var _defined=function _defined(_key){return _params[_key]!=void 0};if(_defined("selected"))this.selected=_params.selected;if(_defined("section"))this.section=_params.section;if(_defined("blob"))this.blob=_params.blob;this._changed()}},{key:"_changed",value:function _changed(){// this.uri = this.uri || this.blob.uri || false;
applic.utils.buffer(function(){// console.debug('applic-fs:update-graphic', {
//    graphic: this,
//    section: this.section
// })
applic.dispatch("applic:changed")})}}]);return ApplicGraphic}())};/** !
   @license
   Copyright (c) 2019 The Contrast Tool Authors. All rights reserved.
   This code may only be used under the BSD style license found at https://contrast-tool.github.io/docs/LICENSE.md
   The complete set of authors may be found at https://contrast-tool.github.io/docs/AUTHORS.md
   The complete set of contributors may be found at https://contrast-tool.github.io/docs/CONTRIBUTORS.md
   */var SECTION_STATE={};applic.section=new(/*#__PURE__*/function(){function _class3(){babelHelpers.classCallCheck(this,_class3)}return _class3}());applic.section.active=null;applic.section.get=function(_nonce){if("*"==_nonce){return applic.utils.arrayify(SECTION_STATE)}else if("~"==_nonce){return SECTION_STATE[applic.section.active]||!1}else{return SECTION_STATE[_nonce]||!1}};applic.section.select=function(_nonce){if(applic.section.active==_nonce||!SECTION_STATE[_nonce])return;if(SECTION_STATE[applic.section.active]){SECTION_STATE[applic.section.active].active=!1};SECTION_STATE[_nonce].active=!0;applic.section.active=_nonce;applic.utils.buffer(applic.dispatch.bind(null,"applic:changed"))};applic.section.remove=function(_nonce){if(!SECTION_STATE[_nonce])return;delete SECTION_STATE[_nonce];Promise.resolve().then(function(){if(applic.section.active==_nonce){var _first=applic.section.get("*")[0];if(_first)applic.section.select(_first.nonce)};applic.utils.buffer(applic.dispatch.bind(null,"applic:changed"))})};applic.section.create=function(){new function ApplicSection(){babelHelpers.classCallCheck(this,ApplicSection);this.nonce=applic.utils.nonce();this.name="Untitled";this.active=!1;SECTION_STATE[this.nonce]=this;applic.section.select(this.nonce);applic.utils.buffer(applic.dispatch.bind(null,"applic:changed"))}};new(/*#__PURE__*/function(){function _class4(){babelHelpers.classCallCheck(this,_class4)}// applic.graphic.__proto__.updated = this.updated.bind(this);
// applic.section.__proto__.updated = this.updated.bind(this);
// applic.utils.buffer(this.updated.bind(this));
// applic.on('applic:changed', this.updated.bind(this));
// console.debug('applic:ready', `${Date.now() - applic.created}ms`);
// updated() {
//   this.sections = applic.section.get('*');
//   this.graphics = applic.graphic.get('*');
//   if (this._debug()) {
//     applic.dispatch('applic:updated', this);
//     // console.debug('applic:updated')
//   };
// }
// _debug() {
//   if (1 > this.sections.length) {
//     console.debug('applic:debug', `'No collections'`)
//     applic.section.create(); return false;
//   };
//   return true;
// }
return _class4}());// applic.__proto__.newImport = (_params) => {
//   return new class {
//     constructor() {
//       if (!_params.section) throw 'Require section for import';
//       this.graphic = {};
//       this.section = _params.section;œ
//       this.type = _params.type;
//       // console.log('importer-created', _params)
//     }
//     add(_blob) {
//       this.graphic[_blob.nonce] = applic.graphic.create({
//         section: this.section,
//         type: this.type,
//         blob: _blob
//       })
//     }
//     update(_blob) {
//       this.graphic[_blob.nonce].update({
//         blob: _blob
//       })
//     }
//     resolved() {
//       // console.log('importer-resolved')
//     }
//   }
// };
console.info("applic:loaded","".concat(Date.now()-applic.created,"ms"));