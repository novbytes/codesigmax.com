
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker || {};

/**
 * Object generated from Screen Orientation Checker
 */
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker = class ScreenOrientationChecker extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.IsShown = false;
    this._objectData.IsForceShown = objectData.content.IsForceShown !== undefined ? objectData.content.IsForceShown : false;
    this._objectData.Padding = objectData.content.Padding !== undefined ? objectData.content.Padding : Number("5") || 0;
    this._objectData.CornerRadius = objectData.content.CornerRadius !== undefined ? objectData.content.CornerRadius : Number("10") || 0;
    this._objectData.BackgroundColor = objectData.content.BackgroundColor !== undefined ? objectData.content.BackgroundColor : "0;0;0";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.IsShown !== newObjectData.content.IsShown)
      this._objectData.IsShown = newObjectData.content.IsShown;
    if (oldObjectData.content.IsForceShown !== newObjectData.content.IsForceShown)
      this._objectData.IsForceShown = newObjectData.content.IsForceShown;
    if (oldObjectData.content.Padding !== newObjectData.content.Padding)
      this._objectData.Padding = newObjectData.content.Padding;
    if (oldObjectData.content.CornerRadius !== newObjectData.content.CornerRadius)
      this._objectData.CornerRadius = newObjectData.content.CornerRadius;
    if (oldObjectData.content.BackgroundColor !== newObjectData.content.BackgroundColor)
      this._objectData.BackgroundColor = newObjectData.content.BackgroundColor;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getIsShown() {
    return this._objectData.IsShown !== undefined ? this._objectData.IsShown : false;
  }
  _setIsShown(newValue) {
    this._objectData.IsShown = newValue;
  }
  _toggleIsShown() {
    this._setIsShown(!this._getIsShown());
  }
  _getIsForceShown() {
    return this._objectData.IsForceShown !== undefined ? this._objectData.IsForceShown : false;
  }
  _setIsForceShown(newValue) {
    this._objectData.IsForceShown = newValue;
  }
  _toggleIsForceShown() {
    this._setIsForceShown(!this._getIsForceShown());
  }
  _getPadding() {
    return this._objectData.Padding !== undefined ? this._objectData.Padding : Number("5") || 0;
  }
  _setPadding(newValue) {
    this._objectData.Padding = newValue;
  }
  _getCornerRadius() {
    return this._objectData.CornerRadius !== undefined ? this._objectData.CornerRadius : Number("10") || 0;
  }
  _setCornerRadius(newValue) {
    this._objectData.CornerRadius = newValue;
  }
  _getBackgroundColor() {
    return this._objectData.BackgroundColor !== undefined ? this._objectData.BackgroundColor : "0;0;0";
  }
  _setBackgroundColor(newValue) {
    this._objectData.BackgroundColor = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects3= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects4= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects3= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects4= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects3= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects4= [];


gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsString() == "portrait");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects3[i]._setIsShown(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsString() != "portrait");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[i]._setIsShown(false);
}
}}

}


};gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsString() == "landscape");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[i]._setIsShown(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsString() == "portrait");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[i]._setIsShown(false);
}
}}

}


};gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) <= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[i]._getIsShown() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[i]._getIsForceShown() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BackgroundPainter"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1);
/* Reuse gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1[i].setFillColor(eventsFunctionContext.getObjects("Object")[0]._getBackgroundColor());
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1[i].drawRoundedRectangle(eventsFunctionContext.getObjects("Object")[0]._getPadding(), eventsFunctionContext.getObjects("Object")[0]._getPadding(), (( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()) - eventsFunctionContext.getObjects("Object")[0]._getPadding(), (( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()) - eventsFunctionContext.getObjects("Object")[0]._getPadding(), eventsFunctionContext.getObjects("Object")[0]._getCornerRadius());
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[i]._getIsShown()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[i]._getIsForceShown()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Text"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].setY((( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects1[0].getY()) - 100);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).exists("Rotate")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).exists("RotateBack")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("Rotate", 8, "easeInOutQuad", 2, false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).hasFinished("RotateBack") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("Rotate", 8, "easeInOutQuad", 2, false);
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).removeTween("RotateBack");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).hasFinished("Rotate") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween2("RotateBack", -(8), "easeInOutQuad", 2, false);
}
}{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).removeTween("Rotate");
}
}}

}


};

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextObjectsList = [...runtimeScene.getObjects("Text")];
var GDTextObjects = Hashtable.newFrom({"Text": thisGDTextObjectsList});
var thisGDBackgroundPainterObjectsList = [...runtimeScene.getObjects("BackgroundPainter")];
var GDBackgroundPainterObjects = Hashtable.newFrom({"BackgroundPainter": thisGDBackgroundPainterObjectsList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Text": GDTextObjects
, "BackgroundPainter": GDBackgroundPainterObjects
, "Icon": GDIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Text": thisGDTextObjectsList
, "BackgroundPainter": thisGDBackgroundPainterObjectsList
, "Icon": thisGDIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenOrientationChecker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenOrientationChecker"),
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

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects4.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects4.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects4.length = 0;

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDTextObjects4.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDBackgroundPainterObjects4.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects3.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPostEventsContext.GDIconObjects4.length = 0;


return;
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext = {};
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDTextObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDTextObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDBackgroundPainterObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDBackgroundPainterObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDIconObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDIconObjects2= [];


gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1[i]._getIsForceShown() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShown = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextObjectsList = [...runtimeScene.getObjects("Text")];
var GDTextObjects = Hashtable.newFrom({"Text": thisGDTextObjectsList});
var thisGDBackgroundPainterObjectsList = [...runtimeScene.getObjects("BackgroundPainter")];
var GDBackgroundPainterObjects = Hashtable.newFrom({"BackgroundPainter": thisGDBackgroundPainterObjectsList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Text": GDTextObjects
, "BackgroundPainter": GDBackgroundPainterObjects
, "Icon": GDIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Text": thisGDTextObjectsList
, "BackgroundPainter": thisGDBackgroundPainterObjectsList
, "Icon": thisGDIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenOrientationChecker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenOrientationChecker"),
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

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDTextObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDTextObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDBackgroundPainterObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDBackgroundPainterObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDIconObjects2.length = 0;

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDTextObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDTextObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDBackgroundPainterObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDBackgroundPainterObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.IsForceShownContext.GDIconObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext = {};
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDTextObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDTextObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDBackgroundPainterObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDBackgroundPainterObjects2= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDIconObjects1= [];
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDIconObjects2= [];


gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1[i]._setIsForceShown(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1[i]._setIsForceShown(true);
}
}}

}


};

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShown = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextObjectsList = [...runtimeScene.getObjects("Text")];
var GDTextObjects = Hashtable.newFrom({"Text": thisGDTextObjectsList});
var thisGDBackgroundPainterObjectsList = [...runtimeScene.getObjects("BackgroundPainter")];
var GDBackgroundPainterObjects = Hashtable.newFrom({"BackgroundPainter": thisGDBackgroundPainterObjectsList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Text": GDTextObjects
, "BackgroundPainter": GDBackgroundPainterObjects
, "Icon": GDIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Text": thisGDTextObjectsList
, "BackgroundPainter": thisGDBackgroundPainterObjectsList
, "Icon": thisGDIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScreenOrientationChecker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScreenOrientationChecker"),
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

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDTextObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDTextObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDBackgroundPainterObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDBackgroundPainterObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDIconObjects2.length = 0;

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDTextObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDTextObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDBackgroundPainterObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDBackgroundPainterObjects2.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.SetIsForceShownContext.GDIconObjects2.length = 0;


return;
}

gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("ScreenOrientationChecker::ScreenOrientationChecker", gdjs.evtsExt__ScreenOrientationChecker__ScreenOrientationChecker.ScreenOrientationChecker);
