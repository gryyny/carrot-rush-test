gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDPlayButtonObjects3= [];
gdjs.MenuCode.GDPlayButtonObjects4= [];
gdjs.MenuCode.GDBoostButtonObjects1= [];
gdjs.MenuCode.GDBoostButtonObjects2= [];
gdjs.MenuCode.GDBoostButtonObjects3= [];
gdjs.MenuCode.GDBoostButtonObjects4= [];
gdjs.MenuCode.GDEarnDropButtonObjects1= [];
gdjs.MenuCode.GDEarnDropButtonObjects2= [];
gdjs.MenuCode.GDEarnDropButtonObjects3= [];
gdjs.MenuCode.GDEarnDropButtonObjects4= [];
gdjs.MenuCode.GDMenuBackgroundObjects1= [];
gdjs.MenuCode.GDMenuBackgroundObjects2= [];
gdjs.MenuCode.GDMenuBackgroundObjects3= [];
gdjs.MenuCode.GDMenuBackgroundObjects4= [];
gdjs.MenuCode.GDCarrotObjects1= [];
gdjs.MenuCode.GDCarrotObjects2= [];
gdjs.MenuCode.GDCarrotObjects3= [];
gdjs.MenuCode.GDCarrotObjects4= [];
gdjs.MenuCode.GDRabbitoidVideoObjects1= [];
gdjs.MenuCode.GDRabbitoidVideoObjects2= [];
gdjs.MenuCode.GDRabbitoidVideoObjects3= [];
gdjs.MenuCode.GDRabbitoidVideoObjects4= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects3= [];
gdjs.MenuCode.GDNewSpriteObjects4= [];
gdjs.MenuCode.GDTransitionToGameObjects1= [];
gdjs.MenuCode.GDTransitionToGameObjects2= [];
gdjs.MenuCode.GDTransitionToGameObjects3= [];
gdjs.MenuCode.GDTransitionToGameObjects4= [];
gdjs.MenuCode.GDDeco_9595Rabbit3Objects1= [];
gdjs.MenuCode.GDDeco_9595Rabbit3Objects2= [];
gdjs.MenuCode.GDDeco_9595Rabbit3Objects3= [];
gdjs.MenuCode.GDDeco_9595Rabbit3Objects4= [];
gdjs.MenuCode.GDGoldenCarrotObjects1= [];
gdjs.MenuCode.GDGoldenCarrotObjects2= [];
gdjs.MenuCode.GDGoldenCarrotObjects3= [];
gdjs.MenuCode.GDGoldenCarrotObjects4= [];
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects1= [];
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects2= [];
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects3= [];
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects4= [];
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1= [];
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2= [];
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3= [];
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects4= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{



}


};gdjs.MenuCode.asyncCallback21868644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TOTALSCORE_Text"), gdjs.MenuCode.GDTOTALSCORE_9595TextObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects4[i].getBehavior("Tween").addObjectScaleTween3("Grow", 3, "linear", 0.2, false, true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects4[i].setTint("255;255;255");
}
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3) asyncObjectsList.addObject("TOTALSCORE_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback21868644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback21867684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TOTALSCORE_Text"), gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3[i].getBehavior("Tween").addObjectScaleTween3("Grow", 4, "linear", 0.2, false, true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3[i].setTint("255;213;0");
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2) asyncObjectsList.addObject("TOTALSCORE_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback21867684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback21866612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TOTALSCORE_Text"), gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2[i].getBehavior("Tween").addObjectScaleTween3("Grow", 3, "linear", 0.2, false, true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2[i].setTint("255;255;255");
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1) asyncObjectsList.addObject("TOTALSCORE_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback21866612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MenuCode.GDPlayButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionToGameObjects1Objects = Hashtable.newFrom({"TransitionToGame": gdjs.MenuCode.GDTransitionToGameObjects1});
gdjs.MenuCode.asyncCallback21876044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Carrot Rush Game", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.MenuCode.asyncCallback21876044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBoostButtonObjects1Objects = Hashtable.newFrom({"BoostButton": gdjs.MenuCode.GDBoostButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionToGameObjects1Objects = Hashtable.newFrom({"TransitionToGame": gdjs.MenuCode.GDTransitionToGameObjects1});
gdjs.MenuCode.asyncCallback21880100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boosts Menu", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.MenuCode.asyncCallback21880100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDEarnDropButtonObjects1Objects = Hashtable.newFrom({"EarnDropButton": gdjs.MenuCode.GDEarnDropButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionToGameObjects1Objects = Hashtable.newFrom({"TransitionToGame": gdjs.MenuCode.GDTransitionToGameObjects1});
gdjs.MenuCode.asyncCallback21883804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EarnDrop Menu", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.MenuCode.asyncCallback21883804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList7 = function(runtimeScene) {

};gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RabbitoidVideo"), gdjs.MenuCode.GDRabbitoidVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TOTALSCORE_Text"), gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "RS Farm Life Rock Menu.mp3", true, 50, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDRabbitoidVideoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRabbitoidVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TOTALSCORE_Text"), gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1[i].getWidth()) / 2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "RabbitPointsMovement", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TOTALSCORE_Text"), gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1[i].getBehavior("Tween").addObjectScaleTween3("Grow", 4, "linear", 0.2, false, true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1[i].setTint("255;213;0");
}
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21872084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MENU_DEBUG_TEXT"), gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1,2,3,4,5,6,7", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21873564);
}
}
}
if (isConditionTrue_0) {
gdjs.MenuCode.GDTransitionToGameObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionToGameObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MenuCode.GDTransitionToGameObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTransitionToGameObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.8, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BoostButton"), gdjs.MenuCode.GDBoostButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBoostButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21877532);
}
}
}
if (isConditionTrue_0) {
gdjs.MenuCode.GDTransitionToGameObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionToGameObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MenuCode.GDTransitionToGameObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTransitionToGameObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.8, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("EarnDropButton"), gdjs.MenuCode.GDEarnDropButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDEarnDropButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21881236);
}
}
}
if (isConditionTrue_0) {
gdjs.MenuCode.GDTransitionToGameObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionToGameObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MenuCode.GDTransitionToGameObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTransitionToGameObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.8, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21885052);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoldenCarrot"), gdjs.MenuCode.GDGoldenCarrotObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDGoldenCarrotObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGoldenCarrotObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21886284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Deco_Rabbit3"), gdjs.MenuCode.GDDeco_9595Rabbit3Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDDeco_9595Rabbit3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDDeco_9595Rabbit3Objects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21886836);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoldenCarrot"), gdjs.MenuCode.GDGoldenCarrotObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDGoldenCarrotObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGoldenCarrotObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21887964);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Deco_Rabbit3"), gdjs.MenuCode.GDDeco_9595Rabbit3Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDDeco_9595Rabbit3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDDeco_9595Rabbit3Objects1[i].hide();
}
}}

}


{


gdjs.MenuCode.eventsList7(runtimeScene);
}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MenuCode.GDBoostButtonObjects1.length = 0;
gdjs.MenuCode.GDBoostButtonObjects2.length = 0;
gdjs.MenuCode.GDBoostButtonObjects3.length = 0;
gdjs.MenuCode.GDBoostButtonObjects4.length = 0;
gdjs.MenuCode.GDEarnDropButtonObjects1.length = 0;
gdjs.MenuCode.GDEarnDropButtonObjects2.length = 0;
gdjs.MenuCode.GDEarnDropButtonObjects3.length = 0;
gdjs.MenuCode.GDEarnDropButtonObjects4.length = 0;
gdjs.MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.MenuCode.GDMenuBackgroundObjects3.length = 0;
gdjs.MenuCode.GDMenuBackgroundObjects4.length = 0;
gdjs.MenuCode.GDCarrotObjects1.length = 0;
gdjs.MenuCode.GDCarrotObjects2.length = 0;
gdjs.MenuCode.GDCarrotObjects3.length = 0;
gdjs.MenuCode.GDCarrotObjects4.length = 0;
gdjs.MenuCode.GDRabbitoidVideoObjects1.length = 0;
gdjs.MenuCode.GDRabbitoidVideoObjects2.length = 0;
gdjs.MenuCode.GDRabbitoidVideoObjects3.length = 0;
gdjs.MenuCode.GDRabbitoidVideoObjects4.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MenuCode.GDTransitionToGameObjects1.length = 0;
gdjs.MenuCode.GDTransitionToGameObjects2.length = 0;
gdjs.MenuCode.GDTransitionToGameObjects3.length = 0;
gdjs.MenuCode.GDTransitionToGameObjects4.length = 0;
gdjs.MenuCode.GDDeco_9595Rabbit3Objects1.length = 0;
gdjs.MenuCode.GDDeco_9595Rabbit3Objects2.length = 0;
gdjs.MenuCode.GDDeco_9595Rabbit3Objects3.length = 0;
gdjs.MenuCode.GDDeco_9595Rabbit3Objects4.length = 0;
gdjs.MenuCode.GDGoldenCarrotObjects1.length = 0;
gdjs.MenuCode.GDGoldenCarrotObjects2.length = 0;
gdjs.MenuCode.GDGoldenCarrotObjects3.length = 0;
gdjs.MenuCode.GDGoldenCarrotObjects4.length = 0;
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects1.length = 0;
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects2.length = 0;
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects3.length = 0;
gdjs.MenuCode.GDMENU_9595DEBUG_9595TEXTObjects4.length = 0;
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects1.length = 0;
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects2.length = 0;
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects3.length = 0;
gdjs.MenuCode.GDTOTALSCORE_9595TextObjects4.length = 0;

gdjs.MenuCode.eventsList8(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
