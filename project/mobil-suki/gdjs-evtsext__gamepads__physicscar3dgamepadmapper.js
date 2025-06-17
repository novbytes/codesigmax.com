
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper || {};

/**
 * Behavior generated from 3D car gamepad mapper
 */
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper = class PhysicsCar3DGamepadMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCar3D = behaviorData.PhysicsCar3D !== undefined ? behaviorData.PhysicsCar3D : "";
    this._behaviorData.GamepadIdentifier = behaviorData.GamepadIdentifier !== undefined ? behaviorData.GamepadIdentifier : Number("1") || 0;
    this._behaviorData.UseArrows = behaviorData.UseArrows !== undefined ? behaviorData.UseArrows : true;
    this._behaviorData.UseLeftStick = behaviorData.UseLeftStick !== undefined ? behaviorData.UseLeftStick : true;
    this._behaviorData.UseRightStick = behaviorData.UseRightStick !== undefined ? behaviorData.UseRightStick : false;
    this._behaviorData.HandBrakeButton = behaviorData.HandBrakeButton !== undefined ? behaviorData.HandBrakeButton : "B or Circle";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsCar3D !== newBehaviorData.PhysicsCar3D)
      this._behaviorData.PhysicsCar3D = newBehaviorData.PhysicsCar3D;
    if (oldBehaviorData.GamepadIdentifier !== newBehaviorData.GamepadIdentifier)
      this._behaviorData.GamepadIdentifier = newBehaviorData.GamepadIdentifier;
    if (oldBehaviorData.UseArrows !== newBehaviorData.UseArrows)
      this._behaviorData.UseArrows = newBehaviorData.UseArrows;
    if (oldBehaviorData.UseLeftStick !== newBehaviorData.UseLeftStick)
      this._behaviorData.UseLeftStick = newBehaviorData.UseLeftStick;
    if (oldBehaviorData.UseRightStick !== newBehaviorData.UseRightStick)
      this._behaviorData.UseRightStick = newBehaviorData.UseRightStick;
    if (oldBehaviorData.HandBrakeButton !== newBehaviorData.HandBrakeButton)
      this._behaviorData.HandBrakeButton = newBehaviorData.HandBrakeButton;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PhysicsCar3D: this._behaviorData.PhysicsCar3D,
    GamepadIdentifier: this._behaviorData.GamepadIdentifier,
    UseArrows: this._behaviorData.UseArrows,
    UseLeftStick: this._behaviorData.UseLeftStick,
    UseRightStick: this._behaviorData.UseRightStick,
    HandBrakeButton: this._behaviorData.HandBrakeButton,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PhysicsCar3D !== undefined)
      this._behaviorData.PhysicsCar3D = networkSyncData.props.PhysicsCar3D;
    if (networkSyncData.props.GamepadIdentifier !== undefined)
      this._behaviorData.GamepadIdentifier = networkSyncData.props.GamepadIdentifier;
    if (networkSyncData.props.UseArrows !== undefined)
      this._behaviorData.UseArrows = networkSyncData.props.UseArrows;
    if (networkSyncData.props.UseLeftStick !== undefined)
      this._behaviorData.UseLeftStick = networkSyncData.props.UseLeftStick;
    if (networkSyncData.props.UseRightStick !== undefined)
      this._behaviorData.UseRightStick = networkSyncData.props.UseRightStick;
    if (networkSyncData.props.HandBrakeButton !== undefined)
      this._behaviorData.HandBrakeButton = networkSyncData.props.HandBrakeButton;
  }

  // Properties:
  
  _getPhysicsCar3D() {
    return this._behaviorData.PhysicsCar3D !== undefined ? this._behaviorData.PhysicsCar3D : "";
  }
  _setPhysicsCar3D(newValue) {
    this._behaviorData.PhysicsCar3D = newValue;
  }
  _getGamepadIdentifier() {
    return this._behaviorData.GamepadIdentifier !== undefined ? this._behaviorData.GamepadIdentifier : Number("1") || 0;
  }
  _setGamepadIdentifier(newValue) {
    this._behaviorData.GamepadIdentifier = newValue;
  }
  _getUseArrows() {
    return this._behaviorData.UseArrows !== undefined ? this._behaviorData.UseArrows : true;
  }
  _setUseArrows(newValue) {
    this._behaviorData.UseArrows = newValue;
  }
  _toggleUseArrows() {
    this._setUseArrows(!this._getUseArrows());
  }
  _getUseLeftStick() {
    return this._behaviorData.UseLeftStick !== undefined ? this._behaviorData.UseLeftStick : true;
  }
  _setUseLeftStick(newValue) {
    this._behaviorData.UseLeftStick = newValue;
  }
  _toggleUseLeftStick() {
    this._setUseLeftStick(!this._getUseLeftStick());
  }
  _getUseRightStick() {
    return this._behaviorData.UseRightStick !== undefined ? this._behaviorData.UseRightStick : false;
  }
  _setUseRightStick(newValue) {
    this._behaviorData.UseRightStick = newValue;
  }
  _toggleUseRightStick() {
    this._setUseRightStick(!this._getUseRightStick());
  }
  _getHandBrakeButton() {
    return this._behaviorData.HandBrakeButton !== undefined ? this._behaviorData.HandBrakeButton : "B or Circle";
  }
  _setHandBrakeButton(newValue) {
    this._behaviorData.HandBrakeButton = newValue;
  }
}

/**
 * Shared data generated from 3D car gamepad mapper
 */
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.SharedData = class PhysicsCar3DGamepadMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Gamepads_PhysicsCar3DGamepadMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Gamepads_PhysicsCar3DGamepadMapperSharedData = new gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._Gamepads_PhysicsCar3DGamepadMapperSharedData;
}

// Methods:
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateRightKey();
}
}}

}


};gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateSteeringStick(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Right", "Any", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateSteeringStick(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseArrows();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseLeftStick();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseRightStick();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateAcceleratorStick(gdjs.evtsExt__Gamepads__TriggerPressure.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "RT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - gdjs.evtsExt__Gamepads__TriggerPressure.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "LT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHandBrakeButton()).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateHandBrakeKey();
}
}}

}


};gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsCar3D": this._getPhysicsCar3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}


gdjs.registerBehavior("Gamepads::PhysicsCar3DGamepadMapper", gdjs.evtsExt__Gamepads__PhysicsCar3DGamepadMapper.PhysicsCar3DGamepadMapper);
