
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper = gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper || {};

/**
 * Behavior generated from 3D car keyboard mapper
 */
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper = class PhysicsCar3DKeyboardMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCar3D = behaviorData.PhysicsCar3D !== undefined ? behaviorData.PhysicsCar3D : "";
    this._behaviorData.HandBrake = behaviorData.HandBrake !== undefined ? behaviorData.HandBrake : "Space";
    this._behaviorData.Up = behaviorData.Up !== undefined ? behaviorData.Up : "Up";
    this._behaviorData.Left = behaviorData.Left !== undefined ? behaviorData.Left : "Left";
    this._behaviorData.Down = behaviorData.Down !== undefined ? behaviorData.Down : "Down";
    this._behaviorData.Right = behaviorData.Right !== undefined ? behaviorData.Right : "Right";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsCar3D !== newBehaviorData.PhysicsCar3D)
      this._behaviorData.PhysicsCar3D = newBehaviorData.PhysicsCar3D;
    if (oldBehaviorData.HandBrake !== newBehaviorData.HandBrake)
      this._behaviorData.HandBrake = newBehaviorData.HandBrake;
    if (oldBehaviorData.Up !== newBehaviorData.Up)
      this._behaviorData.Up = newBehaviorData.Up;
    if (oldBehaviorData.Left !== newBehaviorData.Left)
      this._behaviorData.Left = newBehaviorData.Left;
    if (oldBehaviorData.Down !== newBehaviorData.Down)
      this._behaviorData.Down = newBehaviorData.Down;
    if (oldBehaviorData.Right !== newBehaviorData.Right)
      this._behaviorData.Right = newBehaviorData.Right;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PhysicsCar3D: this._behaviorData.PhysicsCar3D,
    HandBrake: this._behaviorData.HandBrake,
    Up: this._behaviorData.Up,
    Left: this._behaviorData.Left,
    Down: this._behaviorData.Down,
    Right: this._behaviorData.Right,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PhysicsCar3D !== undefined)
      this._behaviorData.PhysicsCar3D = networkSyncData.props.PhysicsCar3D;
    if (networkSyncData.props.HandBrake !== undefined)
      this._behaviorData.HandBrake = networkSyncData.props.HandBrake;
    if (networkSyncData.props.Up !== undefined)
      this._behaviorData.Up = networkSyncData.props.Up;
    if (networkSyncData.props.Left !== undefined)
      this._behaviorData.Left = networkSyncData.props.Left;
    if (networkSyncData.props.Down !== undefined)
      this._behaviorData.Down = networkSyncData.props.Down;
    if (networkSyncData.props.Right !== undefined)
      this._behaviorData.Right = networkSyncData.props.Right;
  }

  // Properties:
  
  _getPhysicsCar3D() {
    return this._behaviorData.PhysicsCar3D !== undefined ? this._behaviorData.PhysicsCar3D : "";
  }
  _setPhysicsCar3D(newValue) {
    this._behaviorData.PhysicsCar3D = newValue;
  }
  _getHandBrake() {
    return this._behaviorData.HandBrake !== undefined ? this._behaviorData.HandBrake : "Space";
  }
  _setHandBrake(newValue) {
    this._behaviorData.HandBrake = newValue;
  }
  _getUp() {
    return this._behaviorData.Up !== undefined ? this._behaviorData.Up : "Up";
  }
  _setUp(newValue) {
    this._behaviorData.Up = newValue;
  }
  _getLeft() {
    return this._behaviorData.Left !== undefined ? this._behaviorData.Left : "Left";
  }
  _setLeft(newValue) {
    this._behaviorData.Left = newValue;
  }
  _getDown() {
    return this._behaviorData.Down !== undefined ? this._behaviorData.Down : "Down";
  }
  _setDown(newValue) {
    this._behaviorData.Down = newValue;
  }
  _getRight() {
    return this._behaviorData.Right !== undefined ? this._behaviorData.Right : "Right";
  }
  _setRight(newValue) {
    this._behaviorData.Right = newValue;
  }
}

/**
 * Shared data generated from 3D car keyboard mapper
 */
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.SharedData = class PhysicsCar3DKeyboardMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsCar3DKeyMapper_PhysicsCar3DKeyboardMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsCar3DKeyMapper_PhysicsCar3DKeyboardMapperSharedData = new gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsCar3DKeyMapper_PhysicsCar3DKeyboardMapperSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateBackwardKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateForwardKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHandBrake());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar3D")).simulateHandBrakeKey();
}
}}

}


};

gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar3DKeyMapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar3DKeyMapper"),
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

gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PhysicsCar3DKeyMapper::PhysicsCar3DKeyboardMapper", gdjs.evtsExt__PhysicsCar3DKeyMapper__PhysicsCar3DKeyboardMapper.PhysicsCar3DKeyboardMapper);
