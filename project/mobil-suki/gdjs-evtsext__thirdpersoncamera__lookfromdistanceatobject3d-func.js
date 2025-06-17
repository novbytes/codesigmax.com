
if (typeof gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D !== "undefined") {
  gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D = {};
gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1);
{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.func(runtimeScene, (( gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1[0].getCenterYInScene()), (( gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getCenterZInScene()), eventsFunctionContext.getArgument("Distance"), eventsFunctionContext.getArgument("RotationAngle"), eventsFunctionContext.getArgument("ElevationAngle"), eventsFunctionContext.getArgument("Layer"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.func = function(runtimeScene, Object, Object3D, Distance, RotationAngle, ElevationAngle, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Object3D": Object3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ThirdPersonCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ThirdPersonCamera"),
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
if (argName === "RotationAngle") return RotationAngle;
if (argName === "ElevationAngle") return ElevationAngle;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.registeredGdjsCallbacks = [];