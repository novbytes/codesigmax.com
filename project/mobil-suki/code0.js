gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDGasObjects1= [];
gdjs.MenuCode.GDGasObjects2= [];
gdjs.MenuCode.GDGasObjects3= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects1= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects2= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects3= [];
gdjs.MenuCode.GDMultiplayerObjects1= [];
gdjs.MenuCode.GDMultiplayerObjects2= [];
gdjs.MenuCode.GDMultiplayerObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gas"), gdjs.MenuCode.GDGasObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGasObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGasObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGasObjects2[k] = gdjs.MenuCode.GDGasObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDGasObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MenuCode.GDMultiplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMultiplayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMultiplayerObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMultiplayerObjects2[k] = gdjs.MenuCode.GDMultiplayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMultiplayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDGasObjects1.length = 0;
gdjs.MenuCode.GDGasObjects2.length = 0;
gdjs.MenuCode.GDGasObjects3.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.MenuCode.GDMultiplayerObjects1.length = 0;
gdjs.MenuCode.GDMultiplayerObjects2.length = 0;
gdjs.MenuCode.GDMultiplayerObjects3.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDGasObjects1.length = 0;
gdjs.MenuCode.GDGasObjects2.length = 0;
gdjs.MenuCode.GDGasObjects3.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.MenuCode.GDMultiplayerObjects1.length = 0;
gdjs.MenuCode.GDMultiplayerObjects2.length = 0;
gdjs.MenuCode.GDMultiplayerObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
