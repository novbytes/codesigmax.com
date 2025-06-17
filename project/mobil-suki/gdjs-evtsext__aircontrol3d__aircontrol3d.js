
gdjs.evtsExt__AirControl3D__AirControl3D = gdjs.evtsExt__AirControl3D__AirControl3D || {};

/**
 * Behavior generated from 3D air control
 */
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D = class AirControl3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Physics3D = behaviorData.Physics3D !== undefined ? behaviorData.Physics3D : "";
    this._behaviorData.Force = behaviorData.Force !== undefined ? behaviorData.Force : Number("4000") || 0;
    this._behaviorData.HasPressedMoveForward = false;
    this._behaviorData.HasPressedMoveBackward = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Physics3D !== newBehaviorData.Physics3D)
      this._behaviorData.Physics3D = newBehaviorData.Physics3D;
    if (oldBehaviorData.Force !== newBehaviorData.Force)
      this._behaviorData.Force = newBehaviorData.Force;
    if (oldBehaviorData.HasPressedMoveForward !== newBehaviorData.HasPressedMoveForward)
      this._behaviorData.HasPressedMoveForward = newBehaviorData.HasPressedMoveForward;
    if (oldBehaviorData.HasPressedMoveBackward !== newBehaviorData.HasPressedMoveBackward)
      this._behaviorData.HasPressedMoveBackward = newBehaviorData.HasPressedMoveBackward;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Physics3D: this._behaviorData.Physics3D,
    Force: this._behaviorData.Force,
    HasPressedMoveForward: this._behaviorData.HasPressedMoveForward,
    HasPressedMoveBackward: this._behaviorData.HasPressedMoveBackward,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Physics3D !== undefined)
      this._behaviorData.Physics3D = networkSyncData.props.Physics3D;
    if (networkSyncData.props.Force !== undefined)
      this._behaviorData.Force = networkSyncData.props.Force;
    if (networkSyncData.props.HasPressedMoveForward !== undefined)
      this._behaviorData.HasPressedMoveForward = networkSyncData.props.HasPressedMoveForward;
    if (networkSyncData.props.HasPressedMoveBackward !== undefined)
      this._behaviorData.HasPressedMoveBackward = networkSyncData.props.HasPressedMoveBackward;
  }

  // Properties:
  
  _getPhysics3D() {
    return this._behaviorData.Physics3D !== undefined ? this._behaviorData.Physics3D : "";
  }
  _setPhysics3D(newValue) {
    this._behaviorData.Physics3D = newValue;
  }
  _getForce() {
    return this._behaviorData.Force !== undefined ? this._behaviorData.Force : Number("4000") || 0;
  }
  _setForce(newValue) {
    this._behaviorData.Force = newValue;
  }
  _getHasPressedMoveForward() {
    return this._behaviorData.HasPressedMoveForward !== undefined ? this._behaviorData.HasPressedMoveForward : false;
  }
  _setHasPressedMoveForward(newValue) {
    this._behaviorData.HasPressedMoveForward = newValue;
  }
  _toggleHasPressedMoveForward() {
    this._setHasPressedMoveForward(!this._getHasPressedMoveForward());
  }
  _getHasPressedMoveBackward() {
    return this._behaviorData.HasPressedMoveBackward !== undefined ? this._behaviorData.HasPressedMoveBackward : false;
  }
  _setHasPressedMoveBackward(newValue) {
    this._behaviorData.HasPressedMoveBackward = newValue;
  }
  _toggleHasPressedMoveBackward() {
    this._setHasPressedMoveBackward(!this._getHasPressedMoveBackward());
  }
}

/**
 * Shared data generated from 3D air control
 */
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.SharedData = class AirControl3DSharedData {
  constructor(sharedData) {
    
    this.Cos = Number("0") || 0;
    this.Sin = sharedData.Sin !== undefined ? sharedData.Sin : Number("0") || 0;
  }
  
  // Shared properties:
  
  _getCos() {
    return this.Cos !== undefined ? this.Cos : Number("0") || 0;
  }
  _setCos(newValue) {
    this.Cos = newValue;
  }
  _getSin() {
    return this.Sin !== undefined ? this.Sin : Number("0") || 0;
  }
  _setSin(newValue) {
    this.Sin = newValue;
  }
}

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AirControl3D_AirControl3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AirControl3D_AirControl3DSharedData = new gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.SharedData(
      initialData
    );
  }
  return instanceContainer._AirControl3D_AirControl3DSharedData;
}

// Methods:
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveBackward();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForce()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveForward();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForce());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).applyForceAtCenter(gdjs.evtTools.common.getXFromAngleAndDistance((gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), gdjs.evtTools.common.getYFromAngleAndDistance((gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), 0);
}
}}

}


};gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CurrentForce", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveBackward();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasPressedMoveForward();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AirControl3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AirControl3D"),
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

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext = {};
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !gdjs.VariablesContainer.badVariable.getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.VariablesContainer.badVariable.setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveBackward(true)
}}

}


};

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKey = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AirControl3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AirControl3D"),
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

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveBackwardKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext = {};
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !gdjs.VariablesContainer.badVariable.getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.VariablesContainer.badVariable.setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasPressedMoveForward(true)
}}

}


};

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKey = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AirControl3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AirControl3D"),
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

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D.prototype.SimulateMoveForwardKeyContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("AirControl3D::AirControl3D", gdjs.evtsExt__AirControl3D__AirControl3D.AirControl3D);
