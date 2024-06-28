gdjs.Boosts_32MenuCode = {};
gdjs.Boosts_32MenuCode.localVariables = [];
gdjs.Boosts_32MenuCode.GDXButtonObjects1= [];
gdjs.Boosts_32MenuCode.GDXButtonObjects2= [];
gdjs.Boosts_32MenuCode.GDTGButtonObjects1= [];
gdjs.Boosts_32MenuCode.GDTGButtonObjects2= [];
gdjs.Boosts_32MenuCode.GDMenuBackgroundObjects1= [];
gdjs.Boosts_32MenuCode.GDMenuBackgroundObjects2= [];
gdjs.Boosts_32MenuCode.GDCarrotObjects1= [];
gdjs.Boosts_32MenuCode.GDCarrotObjects2= [];
gdjs.Boosts_32MenuCode.GDRabbitoidVideoObjects1= [];
gdjs.Boosts_32MenuCode.GDRabbitoidVideoObjects2= [];
gdjs.Boosts_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Boosts_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Boosts_32MenuCode.GDBaclButtonObjects1= [];
gdjs.Boosts_32MenuCode.GDBaclButtonObjects2= [];
gdjs.Boosts_32MenuCode.GDFriendsButtonObjects1= [];
gdjs.Boosts_32MenuCode.GDFriendsButtonObjects2= [];
gdjs.Boosts_32MenuCode.GDCarrot_9595Lost_9595InfiniteObjects1= [];
gdjs.Boosts_32MenuCode.GDCarrot_9595Lost_9595InfiniteObjects2= [];


gdjs.Boosts_32MenuCode.eventsList0 = function(runtimeScene) {

{



}


};gdjs.Boosts_32MenuCode.mapOfGDgdjs_9546Boosts_959532MenuCode_9546GDBaclButtonObjects1Objects = Hashtable.newFrom({"BaclButton": gdjs.Boosts_32MenuCode.GDBaclButtonObjects1});
gdjs.Boosts_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RabbitoidVideo"), gdjs.Boosts_32MenuCode.GDRabbitoidVideoObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Farm Life Rock Start of the Day.mp3", true, 50, 1);
}{for(var i = 0, len = gdjs.Boosts_32MenuCode.GDRabbitoidVideoObjects1.length ;i < len;++i) {
    gdjs.Boosts_32MenuCode.GDRabbitoidVideoObjects1[i].play();
}
}
{ //Subevents
gdjs.Boosts_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaclButton"), gdjs.Boosts_32MenuCode.GDBaclButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Boosts_32MenuCode.mapOfGDgdjs_9546Boosts_959532MenuCode_9546GDBaclButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Boosts_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Boosts_32MenuCode.GDXButtonObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDXButtonObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDTGButtonObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDTGButtonObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDCarrotObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDCarrotObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDRabbitoidVideoObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDRabbitoidVideoObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDBaclButtonObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDBaclButtonObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDFriendsButtonObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDFriendsButtonObjects2.length = 0;
gdjs.Boosts_32MenuCode.GDCarrot_9595Lost_9595InfiniteObjects1.length = 0;
gdjs.Boosts_32MenuCode.GDCarrot_9595Lost_9595InfiniteObjects2.length = 0;

gdjs.Boosts_32MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['Boosts_32MenuCode'] = gdjs.Boosts_32MenuCode;
