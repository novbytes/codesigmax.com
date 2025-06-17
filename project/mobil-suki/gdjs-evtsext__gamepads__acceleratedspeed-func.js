
if (typeof gdjs.evtsExt__Gamepads__AcceleratedSpeed !== "undefined") {
  gdjs.evtsExt__Gamepads__AcceleratedSpeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__AcceleratedSpeed = {};


gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") < eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.min(eventsFunctionContext.getArgument("TargetedSpeed"), eventsFunctionContext.getArgument("CurrentSpeed") + eventsFunctionContext.getArgument("Acceleration") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") > eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") < 0);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).sub(eventsFunctionContext.getArgument("Acceleration") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") >= 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.max(eventsFunctionContext.getArgument("TargetedSpeed"), eventsFunctionContext.getArgument("CurrentSpeed") - Math.max(eventsFunctionContext.getArgument("Acceleration"), eventsFunctionContext.getArgument("Deceleration")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


};gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") > eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.max(eventsFunctionContext.getArgument("TargetedSpeed"), eventsFunctionContext.getArgument("CurrentSpeed") - eventsFunctionContext.getArgument("Acceleration") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") < eventsFunctionContext.getArgument("TargetedSpeed"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") > 0);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(eventsFunctionContext.getArgument("Acceleration") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") <= 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.min(eventsFunctionContext.getArgument("TargetedSpeed"), eventsFunctionContext.getArgument("CurrentSpeed") + Math.max(eventsFunctionContext.getArgument("Acceleration"), eventsFunctionContext.getArgument("Deceleration")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


};gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") < 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.min(0, eventsFunctionContext.getArgument("CurrentSpeed") + eventsFunctionContext.getArgument("Acceleration") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("CurrentSpeed") > 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.max(0, eventsFunctionContext.getArgument("CurrentSpeed") - eventsFunctionContext.getArgument("Acceleration") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


};gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("TargetedSpeed") < 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("TargetedSpeed") > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("TargetedSpeed") == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.clamp(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), -(eventsFunctionContext.getArgument("SpeedMax")), eventsFunctionContext.getArgument("SpeedMax")); }}}

}


};gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AcceleratedSpeed", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.getArgument("CurrentSpeed"));
}
{ //Subevents
gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Gamepads__AcceleratedSpeed.func = function(runtimeScene, CurrentSpeed, TargetedSpeed, SpeedMax, Acceleration, Deceleration, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gamepads"),
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
if (argName === "CurrentSpeed") return CurrentSpeed;
if (argName === "TargetedSpeed") return TargetedSpeed;
if (argName === "SpeedMax") return SpeedMax;
if (argName === "Acceleration") return Acceleration;
if (argName === "Deceleration") return Deceleration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__AcceleratedSpeed.eventsList4(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Gamepads__AcceleratedSpeed.registeredGdjsCallbacks = [];