
if (typeof gdjs.evtsExt__ThirdPersonCamera__RotatedY !== "undefined") {
  gdjs.evtsExt__ThirdPersonCamera__RotatedY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThirdPersonCamera__RotatedY = {};


gdjs.evtsExt__ThirdPersonCamera__RotatedY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Cos", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Sin", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.cos(gdjs.toRad(eventsFunctionContext.getArgument("RotationAngle"))));
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(Math.sin(gdjs.toRad(eventsFunctionContext.getArgument("RotationAngle"))));
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() * eventsFunctionContext.getArgument("X") + eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() * eventsFunctionContext.getArgument("Y"); }}}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__ThirdPersonCamera__RotatedY.func = function(runtimeScene, RotationAngle, X, Y, parentEventsFunctionContext) {
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
if (argName === "RotationAngle") return RotationAngle;
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ThirdPersonCamera__RotatedY.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ThirdPersonCamera__RotatedY.registeredGdjsCallbacks = [];