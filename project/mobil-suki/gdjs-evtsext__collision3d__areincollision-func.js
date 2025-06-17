
if (typeof gdjs.evtsExt__Collision3D__AreInCollision !== "undefined") {
  gdjs.evtsExt__Collision3D__AreInCollision.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Collision3D__AreInCollision = {};
gdjs.evtsExt__Collision3D__AreInCollision.GDObjectObjects1= [];
gdjs.evtsExt__Collision3D__AreInCollision.GDOtherObjectObjects1= [];


gdjs.evtsExt__Collision3D__AreInCollision.userFunc0xf350c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// TODO If the condition is inverted, the object farthest from the specified position is picked instead.
const inverted = false;

eventsFunctionContext.returnValue = gdjs._collision3DExtension.pickObjectsInCollision(
    eventsFunctionContext.getObjectsLists("Object"),
    eventsFunctionContext.getObjectsLists("OtherObject"),
    eventsFunctionContext.getArgument("IgnoreEdges"),
    inverted
);
};
gdjs.evtsExt__Collision3D__AreInCollision.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Collision3D__AreInCollision.userFunc0xf350c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Collision3D__AreInCollision.func = function(runtimeScene, Object, Object3D, OtherObject, OtherObjectCapability, IgnoreEdges, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "OtherObject": OtherObject
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "OtherObject": gdjs.objectsListsToArray(OtherObject)
},
  _behaviorNamesMap: {
"Object3D": Object3D
, "OtherObjectCapability": OtherObjectCapability
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
if (argName === "IgnoreEdges") return IgnoreEdges;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Collision3D__AreInCollision.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collision3D__AreInCollision.GDOtherObjectObjects1.length = 0;

gdjs.evtsExt__Collision3D__AreInCollision.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collision3D__AreInCollision.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collision3D__AreInCollision.GDOtherObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Collision3D__AreInCollision.registeredGdjsCallbacks = [];