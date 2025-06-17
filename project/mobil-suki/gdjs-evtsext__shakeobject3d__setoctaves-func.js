
if (typeof gdjs.evtsExt__ShakeObject3D__SetOctaves !== "undefined") {
  gdjs.evtsExt__ShakeObject3D__SetOctaves.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ShakeObject3D__SetOctaves = {};


gdjs.evtsExt__ShakeObject3D__SetOctaves.userFunc0xf86268 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const name = eventsFunctionContext.getArgument("Name");

gdjs._shakeObjectExtension.noiseManager.getGenerator(name).octaves = eventsFunctionContext.getArgument("Octaves");
};
gdjs.evtsExt__ShakeObject3D__SetOctaves.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject3D__SetOctaves.userFunc0xf86268(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ShakeObject3D__SetOctaves.func = function(runtimeScene, Octaves, Name, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Octaves") return Octaves;
if (argName === "Name") return Name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ShakeObject3D__SetOctaves.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ShakeObject3D__SetOctaves.registeredGdjsCallbacks = [];