
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera || {};

/**
 * Behavior generated from Third person camera
 */
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera = class ThirdPersonCamera extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.RotationHalfwayDuration = behaviorData.RotationHalfwayDuration !== undefined ? behaviorData.RotationHalfwayDuration : Number("0.125") || 0;
    this._behaviorData.ElevationHalfwayDuration = behaviorData.ElevationHalfwayDuration !== undefined ? behaviorData.ElevationHalfwayDuration : Number("0") || 0;
    this._behaviorData.TranslationZHalfwayDuration = behaviorData.TranslationZHalfwayDuration !== undefined ? behaviorData.TranslationZHalfwayDuration : Number("0.125") || 0;
    this._behaviorData.Distance = behaviorData.Distance !== undefined ? behaviorData.Distance : Number("500") || 0;
    this._behaviorData.OffsetX = behaviorData.OffsetX !== undefined ? behaviorData.OffsetX : Number("0") || 0;
    this._behaviorData.OffsetY = behaviorData.OffsetY !== undefined ? behaviorData.OffsetY : Number("0") || 0;
    this._behaviorData.OffsetZ = behaviorData.OffsetZ !== undefined ? behaviorData.OffsetZ : Number("0") || 0;
    this._behaviorData.RotationAngleOffset = behaviorData.RotationAngleOffset !== undefined ? behaviorData.RotationAngleOffset : Number("0") || 0;
    this._behaviorData.ElevationAngleOffset = behaviorData.ElevationAngleOffset !== undefined ? behaviorData.ElevationAngleOffset : Number("20") || 0;
    this._behaviorData.FollowFreeAreaZMax = behaviorData.FollowFreeAreaZMax !== undefined ? behaviorData.FollowFreeAreaZMax : Number("0") || 0;
    this._behaviorData.FollowFreeAreaZMin = behaviorData.FollowFreeAreaZMin !== undefined ? behaviorData.FollowFreeAreaZMin : Number("0") || 0;
    this._behaviorData.RotationLogSpeed = Number("") || 0;
    this._behaviorData.ElevationLogSpeed = Number("") || 0;
    this._behaviorData.TranslationZLogSpeed = Number("") || 0;
    this._behaviorData.IsCalledManually = false;
    this._behaviorData.CameraZ = Number("0") || 0;
    this._behaviorData.HasJustBeenCreated = true;
    this._behaviorData.IsRotatingWithObject = behaviorData.IsRotatingWithObject !== undefined ? behaviorData.IsRotatingWithObject : true;
    this._behaviorData.IsElevatingWithObject = behaviorData.IsElevatingWithObject !== undefined ? behaviorData.IsElevatingWithObject : false;
    this._behaviorData.TargetedRotationAngle = Number("0") || 0;
    this._behaviorData.TargetedElevationAngle = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Object3D !== newBehaviorData.Object3D)
      this._behaviorData.Object3D = newBehaviorData.Object3D;
    if (oldBehaviorData.RotationHalfwayDuration !== newBehaviorData.RotationHalfwayDuration)
      this._behaviorData.RotationHalfwayDuration = newBehaviorData.RotationHalfwayDuration;
    if (oldBehaviorData.ElevationHalfwayDuration !== newBehaviorData.ElevationHalfwayDuration)
      this._behaviorData.ElevationHalfwayDuration = newBehaviorData.ElevationHalfwayDuration;
    if (oldBehaviorData.TranslationZHalfwayDuration !== newBehaviorData.TranslationZHalfwayDuration)
      this._behaviorData.TranslationZHalfwayDuration = newBehaviorData.TranslationZHalfwayDuration;
    if (oldBehaviorData.Distance !== newBehaviorData.Distance)
      this._behaviorData.Distance = newBehaviorData.Distance;
    if (oldBehaviorData.OffsetX !== newBehaviorData.OffsetX)
      this._behaviorData.OffsetX = newBehaviorData.OffsetX;
    if (oldBehaviorData.OffsetY !== newBehaviorData.OffsetY)
      this._behaviorData.OffsetY = newBehaviorData.OffsetY;
    if (oldBehaviorData.OffsetZ !== newBehaviorData.OffsetZ)
      this._behaviorData.OffsetZ = newBehaviorData.OffsetZ;
    if (oldBehaviorData.RotationAngleOffset !== newBehaviorData.RotationAngleOffset)
      this._behaviorData.RotationAngleOffset = newBehaviorData.RotationAngleOffset;
    if (oldBehaviorData.ElevationAngleOffset !== newBehaviorData.ElevationAngleOffset)
      this._behaviorData.ElevationAngleOffset = newBehaviorData.ElevationAngleOffset;
    if (oldBehaviorData.FollowFreeAreaZMax !== newBehaviorData.FollowFreeAreaZMax)
      this._behaviorData.FollowFreeAreaZMax = newBehaviorData.FollowFreeAreaZMax;
    if (oldBehaviorData.FollowFreeAreaZMin !== newBehaviorData.FollowFreeAreaZMin)
      this._behaviorData.FollowFreeAreaZMin = newBehaviorData.FollowFreeAreaZMin;
    if (oldBehaviorData.RotationLogSpeed !== newBehaviorData.RotationLogSpeed)
      this._behaviorData.RotationLogSpeed = newBehaviorData.RotationLogSpeed;
    if (oldBehaviorData.ElevationLogSpeed !== newBehaviorData.ElevationLogSpeed)
      this._behaviorData.ElevationLogSpeed = newBehaviorData.ElevationLogSpeed;
    if (oldBehaviorData.TranslationZLogSpeed !== newBehaviorData.TranslationZLogSpeed)
      this._behaviorData.TranslationZLogSpeed = newBehaviorData.TranslationZLogSpeed;
    if (oldBehaviorData.IsCalledManually !== newBehaviorData.IsCalledManually)
      this._behaviorData.IsCalledManually = newBehaviorData.IsCalledManually;
    if (oldBehaviorData.CameraZ !== newBehaviorData.CameraZ)
      this._behaviorData.CameraZ = newBehaviorData.CameraZ;
    if (oldBehaviorData.HasJustBeenCreated !== newBehaviorData.HasJustBeenCreated)
      this._behaviorData.HasJustBeenCreated = newBehaviorData.HasJustBeenCreated;
    if (oldBehaviorData.IsRotatingWithObject !== newBehaviorData.IsRotatingWithObject)
      this._behaviorData.IsRotatingWithObject = newBehaviorData.IsRotatingWithObject;
    if (oldBehaviorData.IsElevatingWithObject !== newBehaviorData.IsElevatingWithObject)
      this._behaviorData.IsElevatingWithObject = newBehaviorData.IsElevatingWithObject;
    if (oldBehaviorData.TargetedRotationAngle !== newBehaviorData.TargetedRotationAngle)
      this._behaviorData.TargetedRotationAngle = newBehaviorData.TargetedRotationAngle;
    if (oldBehaviorData.TargetedElevationAngle !== newBehaviorData.TargetedElevationAngle)
      this._behaviorData.TargetedElevationAngle = newBehaviorData.TargetedElevationAngle;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    RotationHalfwayDuration: this._behaviorData.RotationHalfwayDuration,
    ElevationHalfwayDuration: this._behaviorData.ElevationHalfwayDuration,
    TranslationZHalfwayDuration: this._behaviorData.TranslationZHalfwayDuration,
    Distance: this._behaviorData.Distance,
    OffsetX: this._behaviorData.OffsetX,
    OffsetY: this._behaviorData.OffsetY,
    OffsetZ: this._behaviorData.OffsetZ,
    RotationAngleOffset: this._behaviorData.RotationAngleOffset,
    ElevationAngleOffset: this._behaviorData.ElevationAngleOffset,
    FollowFreeAreaZMax: this._behaviorData.FollowFreeAreaZMax,
    FollowFreeAreaZMin: this._behaviorData.FollowFreeAreaZMin,
    RotationLogSpeed: this._behaviorData.RotationLogSpeed,
    ElevationLogSpeed: this._behaviorData.ElevationLogSpeed,
    TranslationZLogSpeed: this._behaviorData.TranslationZLogSpeed,
    IsCalledManually: this._behaviorData.IsCalledManually,
    CameraZ: this._behaviorData.CameraZ,
    HasJustBeenCreated: this._behaviorData.HasJustBeenCreated,
    IsRotatingWithObject: this._behaviorData.IsRotatingWithObject,
    IsElevatingWithObject: this._behaviorData.IsElevatingWithObject,
    TargetedRotationAngle: this._behaviorData.TargetedRotationAngle,
    TargetedElevationAngle: this._behaviorData.TargetedElevationAngle,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.RotationHalfwayDuration !== undefined)
      this._behaviorData.RotationHalfwayDuration = networkSyncData.props.RotationHalfwayDuration;
    if (networkSyncData.props.ElevationHalfwayDuration !== undefined)
      this._behaviorData.ElevationHalfwayDuration = networkSyncData.props.ElevationHalfwayDuration;
    if (networkSyncData.props.TranslationZHalfwayDuration !== undefined)
      this._behaviorData.TranslationZHalfwayDuration = networkSyncData.props.TranslationZHalfwayDuration;
    if (networkSyncData.props.Distance !== undefined)
      this._behaviorData.Distance = networkSyncData.props.Distance;
    if (networkSyncData.props.OffsetX !== undefined)
      this._behaviorData.OffsetX = networkSyncData.props.OffsetX;
    if (networkSyncData.props.OffsetY !== undefined)
      this._behaviorData.OffsetY = networkSyncData.props.OffsetY;
    if (networkSyncData.props.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = networkSyncData.props.OffsetZ;
    if (networkSyncData.props.RotationAngleOffset !== undefined)
      this._behaviorData.RotationAngleOffset = networkSyncData.props.RotationAngleOffset;
    if (networkSyncData.props.ElevationAngleOffset !== undefined)
      this._behaviorData.ElevationAngleOffset = networkSyncData.props.ElevationAngleOffset;
    if (networkSyncData.props.FollowFreeAreaZMax !== undefined)
      this._behaviorData.FollowFreeAreaZMax = networkSyncData.props.FollowFreeAreaZMax;
    if (networkSyncData.props.FollowFreeAreaZMin !== undefined)
      this._behaviorData.FollowFreeAreaZMin = networkSyncData.props.FollowFreeAreaZMin;
    if (networkSyncData.props.RotationLogSpeed !== undefined)
      this._behaviorData.RotationLogSpeed = networkSyncData.props.RotationLogSpeed;
    if (networkSyncData.props.ElevationLogSpeed !== undefined)
      this._behaviorData.ElevationLogSpeed = networkSyncData.props.ElevationLogSpeed;
    if (networkSyncData.props.TranslationZLogSpeed !== undefined)
      this._behaviorData.TranslationZLogSpeed = networkSyncData.props.TranslationZLogSpeed;
    if (networkSyncData.props.IsCalledManually !== undefined)
      this._behaviorData.IsCalledManually = networkSyncData.props.IsCalledManually;
    if (networkSyncData.props.CameraZ !== undefined)
      this._behaviorData.CameraZ = networkSyncData.props.CameraZ;
    if (networkSyncData.props.HasJustBeenCreated !== undefined)
      this._behaviorData.HasJustBeenCreated = networkSyncData.props.HasJustBeenCreated;
    if (networkSyncData.props.IsRotatingWithObject !== undefined)
      this._behaviorData.IsRotatingWithObject = networkSyncData.props.IsRotatingWithObject;
    if (networkSyncData.props.IsElevatingWithObject !== undefined)
      this._behaviorData.IsElevatingWithObject = networkSyncData.props.IsElevatingWithObject;
    if (networkSyncData.props.TargetedRotationAngle !== undefined)
      this._behaviorData.TargetedRotationAngle = networkSyncData.props.TargetedRotationAngle;
    if (networkSyncData.props.TargetedElevationAngle !== undefined)
      this._behaviorData.TargetedElevationAngle = networkSyncData.props.TargetedElevationAngle;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getRotationHalfwayDuration() {
    return this._behaviorData.RotationHalfwayDuration !== undefined ? this._behaviorData.RotationHalfwayDuration : Number("0.125") || 0;
  }
  _setRotationHalfwayDuration(newValue) {
    this._behaviorData.RotationHalfwayDuration = newValue;
  }
  _getElevationHalfwayDuration() {
    return this._behaviorData.ElevationHalfwayDuration !== undefined ? this._behaviorData.ElevationHalfwayDuration : Number("0") || 0;
  }
  _setElevationHalfwayDuration(newValue) {
    this._behaviorData.ElevationHalfwayDuration = newValue;
  }
  _getTranslationZHalfwayDuration() {
    return this._behaviorData.TranslationZHalfwayDuration !== undefined ? this._behaviorData.TranslationZHalfwayDuration : Number("0.125") || 0;
  }
  _setTranslationZHalfwayDuration(newValue) {
    this._behaviorData.TranslationZHalfwayDuration = newValue;
  }
  _getDistance() {
    return this._behaviorData.Distance !== undefined ? this._behaviorData.Distance : Number("500") || 0;
  }
  _setDistance(newValue) {
    this._behaviorData.Distance = newValue;
  }
  _getOffsetX() {
    return this._behaviorData.OffsetX !== undefined ? this._behaviorData.OffsetX : Number("0") || 0;
  }
  _setOffsetX(newValue) {
    this._behaviorData.OffsetX = newValue;
  }
  _getOffsetY() {
    return this._behaviorData.OffsetY !== undefined ? this._behaviorData.OffsetY : Number("0") || 0;
  }
  _setOffsetY(newValue) {
    this._behaviorData.OffsetY = newValue;
  }
  _getOffsetZ() {
    return this._behaviorData.OffsetZ !== undefined ? this._behaviorData.OffsetZ : Number("0") || 0;
  }
  _setOffsetZ(newValue) {
    this._behaviorData.OffsetZ = newValue;
  }
  _getRotationAngleOffset() {
    return this._behaviorData.RotationAngleOffset !== undefined ? this._behaviorData.RotationAngleOffset : Number("0") || 0;
  }
  _setRotationAngleOffset(newValue) {
    this._behaviorData.RotationAngleOffset = newValue;
  }
  _getElevationAngleOffset() {
    return this._behaviorData.ElevationAngleOffset !== undefined ? this._behaviorData.ElevationAngleOffset : Number("20") || 0;
  }
  _setElevationAngleOffset(newValue) {
    this._behaviorData.ElevationAngleOffset = newValue;
  }
  _getFollowFreeAreaZMax() {
    return this._behaviorData.FollowFreeAreaZMax !== undefined ? this._behaviorData.FollowFreeAreaZMax : Number("0") || 0;
  }
  _setFollowFreeAreaZMax(newValue) {
    this._behaviorData.FollowFreeAreaZMax = newValue;
  }
  _getFollowFreeAreaZMin() {
    return this._behaviorData.FollowFreeAreaZMin !== undefined ? this._behaviorData.FollowFreeAreaZMin : Number("0") || 0;
  }
  _setFollowFreeAreaZMin(newValue) {
    this._behaviorData.FollowFreeAreaZMin = newValue;
  }
  _getRotationLogSpeed() {
    return this._behaviorData.RotationLogSpeed !== undefined ? this._behaviorData.RotationLogSpeed : Number("") || 0;
  }
  _setRotationLogSpeed(newValue) {
    this._behaviorData.RotationLogSpeed = newValue;
  }
  _getElevationLogSpeed() {
    return this._behaviorData.ElevationLogSpeed !== undefined ? this._behaviorData.ElevationLogSpeed : Number("") || 0;
  }
  _setElevationLogSpeed(newValue) {
    this._behaviorData.ElevationLogSpeed = newValue;
  }
  _getTranslationZLogSpeed() {
    return this._behaviorData.TranslationZLogSpeed !== undefined ? this._behaviorData.TranslationZLogSpeed : Number("") || 0;
  }
  _setTranslationZLogSpeed(newValue) {
    this._behaviorData.TranslationZLogSpeed = newValue;
  }
  _getIsCalledManually() {
    return this._behaviorData.IsCalledManually !== undefined ? this._behaviorData.IsCalledManually : false;
  }
  _setIsCalledManually(newValue) {
    this._behaviorData.IsCalledManually = newValue;
  }
  _toggleIsCalledManually() {
    this._setIsCalledManually(!this._getIsCalledManually());
  }
  _getCameraZ() {
    return this._behaviorData.CameraZ !== undefined ? this._behaviorData.CameraZ : Number("0") || 0;
  }
  _setCameraZ(newValue) {
    this._behaviorData.CameraZ = newValue;
  }
  _getHasJustBeenCreated() {
    return this._behaviorData.HasJustBeenCreated !== undefined ? this._behaviorData.HasJustBeenCreated : true;
  }
  _setHasJustBeenCreated(newValue) {
    this._behaviorData.HasJustBeenCreated = newValue;
  }
  _toggleHasJustBeenCreated() {
    this._setHasJustBeenCreated(!this._getHasJustBeenCreated());
  }
  _getIsRotatingWithObject() {
    return this._behaviorData.IsRotatingWithObject !== undefined ? this._behaviorData.IsRotatingWithObject : true;
  }
  _setIsRotatingWithObject(newValue) {
    this._behaviorData.IsRotatingWithObject = newValue;
  }
  _toggleIsRotatingWithObject() {
    this._setIsRotatingWithObject(!this._getIsRotatingWithObject());
  }
  _getIsElevatingWithObject() {
    return this._behaviorData.IsElevatingWithObject !== undefined ? this._behaviorData.IsElevatingWithObject : false;
  }
  _setIsElevatingWithObject(newValue) {
    this._behaviorData.IsElevatingWithObject = newValue;
  }
  _toggleIsElevatingWithObject() {
    this._setIsElevatingWithObject(!this._getIsElevatingWithObject());
  }
  _getTargetedRotationAngle() {
    return this._behaviorData.TargetedRotationAngle !== undefined ? this._behaviorData.TargetedRotationAngle : Number("0") || 0;
  }
  _setTargetedRotationAngle(newValue) {
    this._behaviorData.TargetedRotationAngle = newValue;
  }
  _getTargetedElevationAngle() {
    return this._behaviorData.TargetedElevationAngle !== undefined ? this._behaviorData.TargetedElevationAngle : Number("0") || 0;
  }
  _setTargetedElevationAngle(newValue) {
    this._behaviorData.TargetedElevationAngle = newValue;
  }
}

/**
 * Shared data generated from Third person camera
 */
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.SharedData = class ThirdPersonCameraSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ThirdPersonCamera_ThirdPersonCameraSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ThirdPersonCamera_ThirdPersonCameraSharedData = new gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.SharedData(
      initialData
    );
  }
  return instanceContainer._ThirdPersonCamera_ThirdPersonCameraSharedData;
}

// Methods:
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetRotationHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationHalfwayDuration(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetElevationHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationHalfwayDuration(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTranslationZHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationZHalfwayDuration(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustBeenCreated();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustBeenCreated(false)
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraZ((( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getCenterZInScene()))
}{for(var i = 0, len = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpToTargetedRotation((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCalledManually();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DoMoveCameraCloser((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("Behavior")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1[k] = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCalledManually(false)
}{for(var i = 0, len = gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DoMoveCameraCloser((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloser = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.MoveCameraCloserContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects3= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZ() < (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaZMin((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraZ((( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaZMin((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZ() - (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaZMin((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationZLogSpeed()))
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZ() > (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaZMax((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraZ((( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaZMax((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZ() - (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaZMax((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationZLogSpeed()))
}}

}


};gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsRotatingWithObject();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedRotationAngle((( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getAngle()))
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsElevatingWithObject();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedElevationAngle((( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY()))
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CameraRotationAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CameraElevationAngle", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationAngle() + 90 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAngleOffset() + gdjs.evtTools.common.angleDifference(gdjs.evtTools.camera.getCameraRotation(runtimeScene, (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationAngle() + 90 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAngleOffset()) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationLogSpeed()));
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedElevationAngle() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationAngleOffset() + gdjs.evtTools.common.angleDifference(90 - gdjs.scene3d.camera.getCameraRotationX(runtimeScene, (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedElevationAngle() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationAngleOffset()) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationLogSpeed()));
}{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.func(runtimeScene, (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getCenterXInScene()) + gdjs.evtsExt__ThirdPersonCamera__RotatedX.func(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getCenterYInScene()) + gdjs.evtsExt__ThirdPersonCamera__RotatedY.func(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZ() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance(), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloser = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsRotatingWithObject();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedRotationAngle((( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1[0].getAngle()))
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsElevatingWithObject();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedElevationAngle((( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY()))
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CameraAngle", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationAngle() + 90 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAngleOffset());
}{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.func(runtimeScene, (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1[0].getCenterXInScene()) + gdjs.evtsExt__ThirdPersonCamera__RotatedX.func(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1[0].getCenterYInScene()) + gdjs.evtsExt__ThirdPersonCamera__RotatedY.func(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZ() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance(), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationAngleOffset(), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotation = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.JumpToTargetedRotationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.camera.getCameraRotation(runtimeScene, (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects1[0].getLayer()), 0); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngle = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1);
{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.func(runtimeScene, (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1[0].getCenterXInScene()) + gdjs.evtsExt__ThirdPersonCamera__RotatedX.func(runtimeScene, eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1[0].getCenterYInScene()) + gdjs.evtsExt__ThirdPersonCamera__RotatedY.func(runtimeScene, eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraZ() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance(), eventsFunctionContext.getArgument("Value"), (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationAngleOffset(), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotation = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetCameraRotationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationHalfwayDuration(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDuration = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationHalfwayDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotationHalfwayDuration(eventsFunctionContext.getArgument("Value"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotationLogSpeed(Math.log(0.5) / eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDuration = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationHalfwayDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationHalfwayDuration(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDuration = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationHalfwayDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setElevationHalfwayDuration(eventsFunctionContext.getArgument("Value"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setElevationLogSpeed(Math.log(0.5) / eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDuration = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationHalfwayDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationZHalfwayDuration(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDuration = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TranslationZHalfwayDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTranslationZHalfwayDuration(eventsFunctionContext.getArgument("Value"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTranslationZLogSpeed(Math.log(0.5) / eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDuration = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTranslationZHalfwayDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getCenterZInScene()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaZMin(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMin = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMinContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getCenterZInScene()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaZMax(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMax = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FreeAreaZMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaZMax(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMax = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowFreeAreaZMax(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMax = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaZMin(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMin = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.FollowFreeAreaZMinContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowFreeAreaZMin(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMin = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetFollowFreeAreaZMinContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.Distance = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.DistanceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDistance(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistance = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetDistanceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetX = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetX(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetX = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetY = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetY(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetY = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZ = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.OffsetZContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetZ(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZ = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetOffsetZContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAngleOffset(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffset = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.RotationAngleOffsetContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotationAngleOffset(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffset = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetRotationAngleOffsetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElevationAngleOffset(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffset = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.ElevationAngleOffsetContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setElevationAngleOffset(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffset = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetElevationAngleOffsetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedRotationAngle(); }}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngle = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.TargetedRotationAngleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext = {};
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedRotationAngle(eventsFunctionContext.getArgument("Value"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsRotatingWithObject(false)
}}

}


};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngle = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera.prototype.SetTargetedRotationAngleContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ThirdPersonCamera::ThirdPersonCamera", gdjs.evtsExt__ThirdPersonCamera__ThirdPersonCamera.ThirdPersonCamera);
