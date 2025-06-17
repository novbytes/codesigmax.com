
if (typeof gdjs.evtsExt__Collision3D__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__Collision3D__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Collision3D__DefineHelperClasses = {};


gdjs.evtsExt__Collision3D__DefineHelperClasses.userFunc0xf350c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._collision3DExtension) {
    return;
}

/**
 * @param {gdjs.RuntimeObject} object
 * @param {boolean} shouldUseCustomCenter
 * @return {number}
 */
const getCenterX = (object, shouldUseCustomCenter) =>
    shouldUseCustomCenter ?
        object.getCenterXInScene() :
        object.getDrawableX() + object.getWidth() / 2

/**
 * @param {gdjs.RuntimeObject} object
 * @param {boolean} shouldUseCustomCenter
 * @return {number}
 */
const getCenterY = (object, shouldUseCustomCenter) =>
    shouldUseCustomCenter ?
        object.getCenterYInScene() :
        object.getDrawableY() + object.getHeight() / 2

/**
 * @param {gdjs.RuntimeObject3D} object
 * @param {boolean} shouldUseCustomCenter
 * @return {number}
 */
const getCenterZ = (object, shouldUseCustomCenter) =>
    !object.getCenterZInScene ? 0 :
    shouldUseCustomCenter ?
        object.getCenterZInScene() :
        object.getDrawableZ() + object.getDepth() / 2

/**
 * @param {gdjs.RuntimeObject} object
 * @param {float} x
 * @param {float} y
 * @param {float} z
 * @param {boolean} shouldUseCustomCenter
 * @return {number}
 */
const getSqDistanceToPosition = (object, x, y, z, shouldUseCustomCenter = true) => {
    const deltaX = getCenterX(object, shouldUseCustomCenter) - x;
    const deltaY = getCenterY(object, shouldUseCustomCenter) - y;
    const deltaZ = getCenterZ(object, shouldUseCustomCenter) - z;
    return deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ;
};

/**
 * @param {gdjs.RuntimeObject} object
 * @param {float} x
 * @param {float} y
 * @param {float} z
 * @return {number}
 */
const getDistanceToPosition = (object, x, y, z) => Math.sqrt(getSqDistanceToPosition(object, x, y, z));

/**
 * @param {gdjs.RuntimeObject} object
 * @param {gdjs.RuntimeObject} otherObject
 * @param {boolean} shouldUseCustomCenter
 * @return {number}
 */
const getSqDistanceToObject = (object, otherObject, shouldUseCustomCenter = true) => {
    return getSqDistanceToPosition(
        object,
        getCenterX(otherObject, shouldUseCustomCenter),
        getCenterY(otherObject, shouldUseCustomCenter),
        getCenterZ(otherObject, shouldUseCustomCenter)
    );
};

/**
 * @param {gdjs.RuntimeObject} object
 * @param {gdjs.RuntimeObject} otherObject
 * @return {number}
 */
const getDistanceToObject = (object, otherObject) => Math.sqrt(getSqDistanceToObject(object, otherObject));

/**
 * @param {gdjs.RuntimeObject} object
 * @param {gdjs.RuntimeObject} otherObject
 * @param {{distanceSq: number, shouldUseCustomCenter: boolean}} distanceSettings
 * @return {boolean}
 */
const areObjectsWithinDistance = (object, otherObject, distanceSettings) => {
    return getSqDistanceToObject(
        object, otherObject, distanceSettings.shouldUseCustomCenter) <= distanceSettings.distanceSq;
};

const distanceSettings = {distanceSq: 0, shouldUseCustomCenter: true};

/**
 * @param {Hashtable<gdjs.RuntimeObject[]>} objectsLists1
 * @param {Hashtable<gdjs.RuntimeObject[]>} objectsLists2
 * @param {number} distance
 * @param {boolean} shouldUseCustomCenter
 * @param {boolean} inverted
 * @return {boolean}
 */
const pickObjectsWithinDistance = (objectsLists1, objectsLists2, distance, shouldUseCustomCenter, inverted) => {
    distanceSettings.distanceSq = distance * distance;
    distanceSettings.shouldUseCustomCenter = shouldUseCustomCenter;
    return gdjs.evtTools.object.twoListsTest(
        areObjectsWithinDistance,
        objectsLists1,
        objectsLists2,
        inverted,
        distanceSettings
    );
}

/**
 * @param {Hashtable<gdjs.RuntimeObject[]>} objectsLists
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} inverted
 * @return {boolean}
 */
const pickNearestObject = function (objectsLists, x, y, z, inverted) {
    let bestObject = null;
    let best = 0;
    let first = true;
    const lists = gdjs.staticArray(gdjs._collision3DExtension.pickNearestObject);
    objectsLists.values(lists);
    for (let i = 0, len = lists.length; i < len; ++i) {
        const list = lists[i];
        for (let j = 0; j < list.length; ++j) {
            const object = list[j];
            const distance = getSqDistanceToPosition(object, x, y, z);
            // @ts-ignore
            if (first || (distance < best) ^ inverted) {
                best = distance;
                bestObject = object;
            }
            first = false;
        }
    }
    if (bestObject) {
        gdjs.evtTools.object.pickOnly(objectsLists, bestObject);
    }
    return !!bestObject;
}

/**
 * @param {gdjs.RuntimeObject} object
 * @return {float}
 */
const getObjectMinZ = (object) =>
    object.getDrawableZ ? object.getDrawableZ() : 0

/**
 * @param {gdjs.RuntimeObject} object
 * @return {float}
 */
const getObjectMaxZ = (object) =>
    object.getDrawableZ ? object.getDrawableZ() + object.getDepth() : 0;

/**
 * @param {gdjs.RuntimeObject} object1
 * @param {gdjs.RuntimeObject} object2
 * @param {boolean} ignoreTouchingEdges If true, then edges that are touching each other, without the hitbox polygons actually overlapping, won't be considered in collision.
 * @return {boolean}
 */
const areObjectsInCollision = (
    object1,
    object2,
    ignoreTouchingEdges,
) => {
    const object1MinZ = getObjectMinZ(object1);
    const object1MaxZ = getObjectMaxZ(object1);
    const object2MinZ = getObjectMinZ(object2);
    const object2MaxZ = getObjectMaxZ(object2);

    const canObjectsOverlapOnZ = ignoreTouchingEdges ?
        (object1MinZ < object2MaxZ && object1MaxZ > object2MinZ) :
        (object1MinZ <= object2MaxZ && object1MaxZ >= object2MinZ);

    return canObjectsOverlapOnZ &&
        gdjs.RuntimeObject.collisionTest(
            object1,
            object2,
            ignoreTouchingEdges
        );
}

/**
 * @param {Hashtable<gdjs.RuntimeObject[]>} objectsLists1
 * @param {Hashtable<gdjs.RuntimeObject[]>} objectsLists2
 * @param {boolean} inverted
 * @return {boolean}
 */
const pickObjectsInCollision = (
    objectsLists1,
    objectsLists2,
    inverted,
) => {
    return gdjs.evtTools.object.twoListsTest(
        areObjectsInCollision,
        objectsLists1,
        objectsLists2,
        inverted,
        false
    );
}

/**
 * @param {gdjs.RuntimeObject} movingObject
 * @param {gdjs.RuntimeObject} object
 * @return {float}
 */
const getSeparationDeltaZ = (
    movingObject,
    object,
) => {
    const movingObjectMinZ = getObjectMinZ(movingObject);
    const movingObjectMaxZ = getObjectMaxZ(movingObject);
    const objectMinZ = getObjectMinZ(object);
    const objectMaxZ = getObjectMaxZ(object);

    const downwardDeltaZ = Math.min(0, objectMinZ - movingObjectMaxZ);
    const upwardDeltaZ = Math.max(0, objectMaxZ - movingObjectMinZ);

    return -downwardDeltaZ < upwardDeltaZ ? downwardDeltaZ : upwardDeltaZ
}

// This function is an exact copy from GDJS/Runtime/runtimeobject.ts
/**
 * Move the object using the results from collisionTest call.
 * This moves the object according to the direction of the longest vector,
 * and projects the others on the orthogonal vector.
 *
 * See {@link RuntimeObject.separateFromObjects}
 *
 * @param {gdjs.RuntimeObject} object The object to move.
 * @param {float[]} moveXArray The X coordinates of the vectors to move the object.
 * @param {float[]} moveYArray The Y coordinates of the vectors to move the object.
 * @return {boolean} true if the object was moved.
 */
const moveFollowingSeparatingVectors = (
    object,
    moveXArray,
    moveYArray
) => {
    if (moveXArray.length === 0) {
        moveXArray.length = 0;
        moveYArray.length = 0;
        return false;
    }
    if (moveXArray.length === 1) {
        // Move according to the results returned by the collision algorithm.
        object.setPosition(
            object.getX() + moveXArray[0],
            object.getY() + moveYArray[0]
        );
        moveXArray.length = 0;
        moveYArray.length = 0;
        return true;
    }

    // Find the longest vector
    let squaredDistanceMax = 0;
    let distanceMaxIndex = 0;
    for (let index = 0; index < moveXArray.length; index++) {
        const moveX = moveXArray[index];
        const moveY = moveYArray[index];

        const squaredDistance = moveX * moveX + moveY * moveY;
        if (squaredDistance > squaredDistanceMax) {
            squaredDistanceMax = squaredDistance;
            distanceMaxIndex = index;
        }
    }

    const distanceMax = Math.sqrt(squaredDistanceMax);
    // unit vector of the longest vector
    const uX = moveXArray[distanceMaxIndex] / distanceMax;
    const uY = moveYArray[distanceMaxIndex] / distanceMax;

    // normal vector of the longest vector
    const vX = -uY;
    const vY = uX;

    // Project other vectors on the normal
    let scalarProductMin = 0;
    let scalarProductMax = 0;
    for (let index = 0; index < moveXArray.length; index++) {
        const moveX = moveXArray[index];
        const moveY = moveYArray[index];

        const scalarProduct = moveX * vX + moveY * vY;
        scalarProductMin = Math.min(scalarProductMin, scalarProduct);
        scalarProductMax = Math.max(scalarProductMax, scalarProduct);
    }

    // Apply the longest vector
    let deltaX = moveXArray[distanceMaxIndex];
    let deltaY = moveYArray[distanceMaxIndex];

    // Apply the longest projected vector if they all are in the same direction
    // Some projections could have rounding errors,
    // they are considered negligible under a 1 for 1,000,000 ratio.
    const scalarProductMinIsNegligible =
        -scalarProductMin < scalarProductMax / 1048576;
    const scalarProductMaxIsNegligible =
        scalarProductMax < -scalarProductMin / 1048576;
    if (scalarProductMinIsNegligible !== scalarProductMaxIsNegligible) {
        if (scalarProductMaxIsNegligible) {
            deltaX += scalarProductMin * vX;
            deltaY += scalarProductMin * vY;
        } else {
            deltaX += scalarProductMax * vX;
            deltaY += scalarProductMax * vY;
        }
    }
    object.setPosition(object.getX() + deltaX, object.getY() + deltaY);
    moveXArray.length = 0;
    moveYArray.length = 0;
    return true;
};

/**
 * Arrays and data structure that are (re)used by
 * {@link separateFromObjects} to avoid any allocation.
 * @type {{moveXArray: float[], moveYArray: float[], moveZArray: float[]}}
 */
const separateFromObjectsStatics = {
    moveXArray: [],
    moveYArray: [],
    moveZArray: [],
};

/**
 * Separate the object from others objects, using their hitboxes.
 * @param {gdjs.RuntimeObject} object The object that moves.
 * @param {gdjs.RuntimeObject[]} objects The objects that stay still.
 * @return {boolean} true if the object was moved
 */
const separateFromObjects = (
    object,
    objects
) => {
    const moveXArray = separateFromObjectsStatics.moveXArray;
    const moveYArray = separateFromObjectsStatics.moveYArray;
    moveXArray.length = 0;
    moveYArray.length = 0;
    let moveZMax = 0;

    // We can assume that the moving object is not grid based,
    // so there is no need for optimization:
    // getHitBoxes can be called directly.
    const hitBoxes = object.getHitBoxes();
    /** @type {gdjs.AABB | null} */
    let aabb = null;

    // Check if there is a collision with each object
    for (const otherObject of objects) {
        if (otherObject.id === object.id) {
            continue;
        }
        const moveZ = getSeparationDeltaZ(object, otherObject);
        if (moveZ === 0) {
            continue;
        }
        const moveZSq = moveZ * moveZ;

        let otherHitBoxesArray = otherObject.getHitBoxes();
        /** @type {Iterable<gdjs.Polygon>} */
        let otherHitBoxes = otherHitBoxesArray;
        if (otherHitBoxesArray.length > 4) {
            // The other object has a lot of hit boxes.
            // Try to reduce the amount of hitboxes to check.
            if (!aabb) {
                aabb = object.getAABB();
            }
            otherHitBoxes = otherObject.getHitBoxesAround(
                aabb.min[0],
                aabb.min[1],
                aabb.max[0],
                aabb.max[1]
            );
        }
        for (const hitBox of hitBoxes) {
            for (const otherHitBox of otherHitBoxes) {
                const result = gdjs.Polygon.collisionTest(
                    hitBox,
                    otherHitBox,
                    true
                );
                if (result.collision) {
                    const moveX = result.move_axis[0];
                    const moveY = result.move_axis[1];
                    if (moveZSq < moveX * moveX + moveY * moveY) {
                        if (Math.abs(moveZ) > Math.abs(moveZMax)) {
                            moveZMax = moveZ;
                        }
                    }
                    else {
                        moveXArray.push(moveX);
                        moveYArray.push(moveY);
                    }
                }
            }
        }
    }
    const hasObjectMovedOnZ = moveZMax !== 0;
    if (hasObjectMovedOnZ) {
        object.setZ(object.getZ() + moveZMax);
    }
    const hasObjectMovedOnXY = moveFollowingSeparatingVectors(object, moveXArray, moveYArray);
    return hasObjectMovedOnXY || hasObjectMovedOnZ;
}

gdjs._collision3DExtension = {
    getSqDistanceToPosition,
    getDistanceToPosition,
    getSqDistanceToObject,
    getDistanceToObject,
    pickObjectsWithinDistance,
    pickNearestObject,
    pickObjectsInCollision,
    separateFromObjects
}
};
gdjs.evtsExt__Collision3D__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Collision3D__DefineHelperClasses.userFunc0xf350c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Collision3D__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Collision3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Collision3D"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Collision3D__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Collision3D__DefineHelperClasses.registeredGdjsCallbacks = [];