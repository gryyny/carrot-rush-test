gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDBoostButtonObjects1= [];
gdjs.MenuCode.GDBoostButtonObjects2= [];
gdjs.MenuCode.GDLeaderboardButtonObjects1= [];
gdjs.MenuCode.GDLeaderboardButtonObjects2= [];
gdjs.MenuCode.GDMenuBackgroundObjects1= [];
gdjs.MenuCode.GDMenuBackgroundObjects2= [];
gdjs.MenuCode.GDCarrotObjects1= [];
gdjs.MenuCode.GDCarrotObjects2= [];
gdjs.MenuCode.GDRabbitoidVideoObjects1= [];
gdjs.MenuCode.GDRabbitoidVideoObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{



}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MenuCode.GDPlayButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBoostButtonObjects1Objects = Hashtable.newFrom({"BoostButton": gdjs.MenuCode.GDBoostButtonObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RabbitoidVideo"), gdjs.MenuCode.GDRabbitoidVideoObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Farm Life Rock Start of the Day.mp3", true, 50, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDRabbitoidVideoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRabbitoidVideoObjects1[i].play();
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Carrot Rush Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BoostButton"), gdjs.MenuCode.GDBoostButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBoostButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boosts Menu", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDBoostButtonObjects1.length = 0;
gdjs.MenuCode.GDBoostButtonObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.MenuCode.GDCarrotObjects1.length = 0;
gdjs.MenuCode.GDCarrotObjects2.length = 0;
gdjs.MenuCode.GDRabbitoidVideoObjects1.length = 0;
gdjs.MenuCode.GDRabbitoidVideoObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
