
if (typeof gdjs.evtsExt__Collision3D__PickNearest !== "undefined") {
  gdjs.evtsExt__Collision3D__PickNearest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Collision3D__PickNearest = {};
gdjs.evtsExt__Collision3D__PickNearest.GDObjectObjects1= [];


gdjs.evtsExt__Collision3D__PickNearest.userFunc0xf41308 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// TODO If the condition is inverted, the object farthest from the specified position is picked instead.
const inverted = false;

eventsFunctionContext.returnValue = gdjs._collision3DExtension.pickNearestObject(
    eventsFunctionContext.getObjectsLists("Object"),
    eventsFunctionContext.getArgument("PositionX"),
    eventsFunctionContext.getArgument("PositionY"),
    eventsFunctionContext.getArgument("PositionZ"),
    inverted
);
};
gdjs.evtsExt__Collision3D__PickNearest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Collision3D__PickNearest.userFunc0xf41308(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Collision3D__PickNearest.func = function(runtimeScene, Object, PositionX, PositionY, PositionZ, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Collision3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Collision3D"),
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "PositionZ") return PositionZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Collision3D__PickNearest.GDObjectObjects1.length = 0;

gdjs.evtsExt__Collision3D__PickNearest.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collision3D__PickNearest.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Collision3D__PickNearest.registeredGdjsCallbacks = [];