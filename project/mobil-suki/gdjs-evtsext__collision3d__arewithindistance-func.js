
if (typeof gdjs.evtsExt__Collision3D__AreWithinDistance !== "undefined") {
  gdjs.evtsExt__Collision3D__AreWithinDistance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Collision3D__AreWithinDistance = {};
gdjs.evtsExt__Collision3D__AreWithinDistance.GDObjectObjects1= [];
gdjs.evtsExt__Collision3D__AreWithinDistance.GDOtherObjectObjects1= [];


gdjs.evtsExt__Collision3D__AreWithinDistance.userFunc0xf350c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// TODO If condition is inverted, only objects that have a distance greater than specified to any other object will be picked.
const inverted = false;

eventsFunctionContext.returnValue = gdjs._collision3DExtension.pickObjectsWithinDistance(
    eventsFunctionContext.getObjectsLists("Object"),
    eventsFunctionContext.getObjectsLists("OtherObject"),
    eventsFunctionContext.getArgument("Distance"),
    eventsFunctionContext.getArgument("ShouldUseCustomCenter"),
    inverted
);

};
gdjs.evtsExt__Collision3D__AreWithinDistance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Collision3D__AreWithinDistance.userFunc0xf350c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Collision3D__AreWithinDistance.func = function(runtimeScene, Object, OtherObject, Distance, ShouldUseCustomCenter, parentEventsFunctionContext) {
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
if (argName === "Distance") return Distance;
if (argName === "ShouldUseCustomCenter") return ShouldUseCustomCenter;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Collision3D__AreWithinDistance.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collision3D__AreWithinDistance.GDOtherObjectObjects1.length = 0;

gdjs.evtsExt__Collision3D__AreWithinDistance.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collision3D__AreWithinDistance.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collision3D__AreWithinDistance.GDOtherObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Collision3D__AreWithinDistance.registeredGdjsCallbacks = [];