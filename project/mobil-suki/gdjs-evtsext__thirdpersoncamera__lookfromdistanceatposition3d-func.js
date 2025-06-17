
if (typeof gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D !== "undefined") {
  gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D = {};


gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, eventsFunctionContext.getArgument("PositionX") + eventsFunctionContext.getArgument("Distance") * Math.cos(gdjs.toRad(eventsFunctionContext.getArgument("RotationAngle") + 90)) * Math.cos(gdjs.toRad(eventsFunctionContext.getArgument("ElevationAngle"))), eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, eventsFunctionContext.getArgument("PositionY") + eventsFunctionContext.getArgument("Distance") * Math.sin(gdjs.toRad(eventsFunctionContext.getArgument("RotationAngle") + 90)) * Math.cos(gdjs.toRad(eventsFunctionContext.getArgument("ElevationAngle"))), eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, eventsFunctionContext.getArgument("PositionZ") + eventsFunctionContext.getArgument("Distance") * Math.sin(gdjs.toRad(eventsFunctionContext.getArgument("ElevationAngle"))), eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, 90 - eventsFunctionContext.getArgument("ElevationAngle"), eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, 0, eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, eventsFunctionContext.getArgument("RotationAngle"), eventsFunctionContext.getArgument("Layer"), 0);
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.func = function(runtimeScene, PositionX, PositionY, PositionZ, Distance, RotationAngle, ElevationAngle, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "PositionZ") return PositionZ;
if (argName === "Distance") return Distance;
if (argName === "RotationAngle") return RotationAngle;
if (argName === "ElevationAngle") return ElevationAngle;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.registeredGdjsCallbacks = [];