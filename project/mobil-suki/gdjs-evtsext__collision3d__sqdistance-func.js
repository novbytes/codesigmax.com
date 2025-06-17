
if (typeof gdjs.evtsExt__Collision3D__SqDistance !== "undefined") {
  gdjs.evtsExt__Collision3D__SqDistance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Collision3D__SqDistance = {};
gdjs.evtsExt__Collision3D__SqDistance.GDObjectObjects1= [];
gdjs.evtsExt__Collision3D__SqDistance.GDOtherObjectObjects1= [];


gdjs.evtsExt__Collision3D__SqDistance.userFunc0xf350c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const otherObjects = eventsFunctionContext.getObjectsLists("OtherObject");

if (objects.length > 0 && otherObjects.length > 0) {
    eventsFunctionContext.returnValue = gdjs._collision3DExtension.getSqDistanceToObject(
        objects[0],
        otherObjects[0]
    );
}

};
gdjs.evtsExt__Collision3D__SqDistance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Collision3D__SqDistance.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Collision3D__SqDistance.GDObjectObjects1);
gdjs.evtsExt__Collision3D__SqDistance.userFunc0xf350c0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Collision3D__SqDistance.func = function(runtimeScene, Object, OtherObject, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Collision3D__SqDistance.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collision3D__SqDistance.GDOtherObjectObjects1.length = 0;

gdjs.evtsExt__Collision3D__SqDistance.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collision3D__SqDistance.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collision3D__SqDistance.GDOtherObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Collision3D__SqDistance.registeredGdjsCallbacks = [];