
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper = gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper || {};

/**
 * Behavior generated from 3D car multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper = class PhysicsCar3DMultitouchMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCar3D = behaviorData.PhysicsCar3D !== undefined ? behaviorData.PhysicsCar3D : "";
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.SteerJoystickIdentifier = behaviorData.SteerJoystickIdentifier !== undefined ? behaviorData.SteerJoystickIdentifier : "Primary";
    this._behaviorData.SpeedJoystickIdentifier = behaviorData.SpeedJoystickIdentifier !== undefined ? behaviorData.SpeedJoystickIdentifier : "Secondary";
    this._behaviorData.HandBrakeButton = behaviorData.HandBrakeButton !== undefined ? behaviorData.HandBrakeButton : "B";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsCar3D !== newBehaviorData.PhysicsCar3D)
      this._behaviorData.PhysicsCar3D = newBehaviorData.PhysicsCar3D;
    if (oldBehaviorData.ControllerIdentifier !== newBehaviorData.ControllerIdentifier)
      this._behaviorData.ControllerIdentifier = newBehaviorData.ControllerIdentifier;
    if (oldBehaviorData.SteerJoystickIdentifier !== newBehaviorData.SteerJoystickIdentifier)
      this._behaviorData.SteerJoystickIdentifier = newBehaviorData.SteerJoystickIdentifier;
    if (oldBehaviorData.SpeedJoystickIdentifier !== newBehaviorData.SpeedJoystickIdentifier)
      this._behaviorData.SpeedJoystickIdentifier = newBehaviorData.SpeedJoystickIdentifier;
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
    ControllerIdentifier: this._behaviorData.ControllerIdentifier,
    SteerJoystickIdentifier: this._behaviorData.SteerJoystickIdentifier,
    SpeedJoystickIdentifier: this._behaviorData.SpeedJoystickIdentifier,
    HandBrakeButton: this._behaviorData.HandBrakeButton,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PhysicsCar3D !== undefined)
      this._behaviorData.PhysicsCar3D = networkSyncData.props.PhysicsCar3D;
    if (networkSyncData.props.ControllerIdentifier !== undefined)
      this._behaviorData.ControllerIdentifier = networkSyncData.props.ControllerIdentifier;
    if (networkSyncData.props.SteerJoystickIdentifier !== undefined)
      this._behaviorData.SteerJoystickIdentifier = networkSyncData.props.SteerJoystickIdentifier;
    if (networkSyncData.props.SpeedJoystickIdentifier !== undefined)
      this._behaviorData.SpeedJoystickIdentifier = networkSyncData.props.SpeedJoystickIdentifier;
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
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getSteerJoystickIdentifier() {
    return this._behaviorData.SteerJoystickIdentifier !== undefined ? this._behaviorData.SteerJoystickIdentifier : "Primary";
  }
  _setSteerJoystickIdentifier(newValue) {
    this._behaviorData.SteerJoystickIdentifier = newValue;
  }
  _getSpeedJoystickIdentifier() {
    return this._behaviorData.SpeedJoystickIdentifier !== undefined ? this._behaviorData.SpeedJoystickIdentifier : "Secondary";
  }
  _setSpeedJoystickIdentifier(newValue) {
    this._behaviorData.SpeedJoystickIdentifier = newValue;
  }
  _getHandBrakeButton() {
    return this._behaviorData.HandBrakeButton !== undefined ? this._behaviorData.HandBrakeButton : "B";
  }
  _setHandBrakeButton(newValue) {
    this._behaviorData.HandBrakeButton = newValue;
  }
}

/**
 * Shared data generated from 3D car multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.SharedData = class PhysicsCar3DMultitouchMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteMultitouchJoystick_PhysicsCar3DMultitouchMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteMultitouchJoystick_PhysicsCar3DMultitouchMapperSharedData = new gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteMultitouchJoystick_PhysicsCar3DMultitouchMapperSharedData;
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteerJoystickIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateSteeringStick(gdjs.evtsExt__SpriteMultitouchJoystick__StickForceX.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), "Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedJoystickIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateAcceleratorStick(-(gdjs.evtsExt__SpriteMultitouchJoystick__StickForceY.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), "Secondary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsButtonPressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHandBrakeButton(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateHandBrakeKey();
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::PhysicsCar3DMultitouchMapper", gdjs.evtsExt__SpriteMultitouchJoystick__PhysicsCar3DMultitouchMapper.PhysicsCar3DMultitouchMapper);
