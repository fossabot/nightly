/** !
@license
Copyright (c) 2019 The Contrast Tool Authors. All rights reserved.
This code may only be used under the BSD style license found at https://contrast-tool.github.io/docs/LICENSE.md
The complete set of authors may be found at https://contrast-tool.github.io/docs/AUTHORS.md
The complete set of contributors may be found at https://contrast-tool.github.io/docs/CONTRIBUTORS.md
*/if(!0===self.navigator.standalone||self.matchMedia("(display-mode: standalone)").matches){console.debug("applic-a2hs:active")}else{self.addEventListener("beforeinstallprompt",function(_event){console.debug("applic-a2hs:available");applic.a2hs=_event;console.info("A2HS is available");applic.a2hs.preventDefault();applic.deferredInstall=function(){if(!applic.a2hs)return;applic.a2hs.prompt().catch(function(_error){return console.error});applic.a2hs.userChoice.then(function(_result){if("accepted"===_result.outcome){console.debug("User accepted the A2HS prompt")}else{console.debug("User dismissed the A2HS prompt")};applic.utils.buffer(function(){applic.a2hs=null;applic.deferredInstall=function(){}})})};// TODO: Add an in-app install prompt.
setTimeout(applic.deferredInstall,5*1e3)})}/** !
  @license
  Copyright (c) 2019 The Contrast Tool Authors. All rights reserved.
  This code may only be used under the BSD style license found at https://contrast-tool.github.io/docs/LICENSE.md
  The complete set of authors may be found at https://contrast-tool.github.io/docs/AUTHORS.md
  The complete set of contributors may be found at https://contrast-tool.github.io/docs/CONTRIBUTORS.md
  */if("serviceWorker"in navigator){navigator.serviceWorker.register("service-worker.js",{scope:applic.rootPath}).then(function(_sw){console.debug("applic-service-worker:active");applic.__proto__.sw=_sw}).catch(function(_err){return console.error})};/** !
  @license
  Copyright (c) 2019 The Contrast Tool Authors. All rights reserved.
  This code may only be used under the BSD style license found at https://contrast-tool.github.io/docs/LICENSE.md
  The complete set of authors may be found at https://contrast-tool.github.io/docs/AUTHORS.md
  The complete set of contributors may be found at https://contrast-tool.github.io/docs/CONTRIBUTORS.md
  */var WORKER={graphic:{editor:"/src/units/processing/workers/worker.graphic-editor.js",reader:"/src/units/processing/workers/worker.graphic-reader.js",writer:"/src/units/processing/workers/worker.graphic-writer.js"}};console.info("applic-lazies:loaded","".concat(Date.now()-applic.created,"ms"));