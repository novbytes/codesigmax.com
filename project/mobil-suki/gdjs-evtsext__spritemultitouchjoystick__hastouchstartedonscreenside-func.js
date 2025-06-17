
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide = {};
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects3= [];


gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Side") == "Left");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, 0), (( gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2[0].getLayer()), 0) < gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2[0].getLayer()), 0);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Side") == "Right");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, 0), (( gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1[0].getLayer()), 0) >= gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1[0].getLayer()), 0);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func = function(runtimeScene, Object, Side, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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
if (argName === "Side") return Side;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects3.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.GDObjectObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.registeredGdjsCallbacks = [];