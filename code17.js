gdjs.scene18Code = {};
gdjs.scene18Code.localVariables = [];
gdjs.scene18Code.GDNewPanelSpriteObjects1= [];
gdjs.scene18Code.GDNewPanelSpriteObjects2= [];
gdjs.scene18Code.GDGreenDotBarObjects1= [];
gdjs.scene18Code.GDGreenDotBarObjects2= [];
gdjs.scene18Code.GDRedDotBarObjects1= [];
gdjs.scene18Code.GDRedDotBarObjects2= [];
gdjs.scene18Code.GDYellowDotBarObjects1= [];
gdjs.scene18Code.GDYellowDotBarObjects2= [];
gdjs.scene18Code.GDBlueDotBarObjects1= [];
gdjs.scene18Code.GDBlueDotBarObjects2= [];
gdjs.scene18Code.GDNewPanelSprite3Objects1= [];
gdjs.scene18Code.GDNewPanelSprite3Objects2= [];
gdjs.scene18Code.GDNewPanelSprite4Objects1= [];
gdjs.scene18Code.GDNewPanelSprite4Objects2= [];
gdjs.scene18Code.GDStoryText2Objects1= [];
gdjs.scene18Code.GDStoryText2Objects2= [];
gdjs.scene18Code.GDStoryText3Objects1= [];
gdjs.scene18Code.GDStoryText3Objects2= [];
gdjs.scene18Code.GDNewTextObjects1= [];
gdjs.scene18Code.GDNewTextObjects2= [];
gdjs.scene18Code.GDNewText2Objects1= [];
gdjs.scene18Code.GDNewText2Objects2= [];
gdjs.scene18Code.GDNewText3Objects1= [];
gdjs.scene18Code.GDNewText3Objects2= [];
gdjs.scene18Code.GDNewText4Objects1= [];
gdjs.scene18Code.GDNewText4Objects2= [];
gdjs.scene18Code.GDchooseObjects1= [];
gdjs.scene18Code.GDchooseObjects2= [];


gdjs.scene18Code.mapOfGDgdjs_9546scene18Code_9546GDNewPanelSprite3Objects1Objects = Hashtable.newFrom({"NewPanelSprite3": gdjs.scene18Code.GDNewPanelSprite3Objects1});
gdjs.scene18Code.mapOfGDgdjs_9546scene18Code_9546GDNewPanelSprite4Objects1Objects = Hashtable.newFrom({"NewPanelSprite4": gdjs.scene18Code.GDNewPanelSprite4Objects1});
gdjs.scene18Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.scene18Code.GDNewPanelSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("StoryText2"), gdjs.scene18Code.GDStoryText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene18Code.mapOfGDgdjs_9546scene18Code_9546GDNewPanelSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene18Code.GDStoryText2Objects1.length;i<l;++i) {
    if ( gdjs.scene18Code.GDStoryText2Objects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene18Code.GDStoryText2Objects1[k] = gdjs.scene18Code.GDStoryText2Objects1[i];
        ++k;
    }
}
gdjs.scene18Code.GDStoryText2Objects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene20", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.scene18Code.GDNewPanelSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("StoryText3"), gdjs.scene18Code.GDStoryText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene18Code.mapOfGDgdjs_9546scene18Code_9546GDNewPanelSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene18Code.GDStoryText3Objects1.length;i<l;++i) {
    if ( gdjs.scene18Code.GDStoryText3Objects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene18Code.GDStoryText3Objects1[k] = gdjs.scene18Code.GDStoryText3Objects1[i];
        ++k;
    }
}
gdjs.scene18Code.GDStoryText3Objects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene19", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.scene18Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene18Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene18Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene18Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene18Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene18Code.GDRedDotBarObjects1.length = 0;
gdjs.scene18Code.GDRedDotBarObjects2.length = 0;
gdjs.scene18Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene18Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene18Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene18Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene18Code.GDNewPanelSprite3Objects1.length = 0;
gdjs.scene18Code.GDNewPanelSprite3Objects2.length = 0;
gdjs.scene18Code.GDNewPanelSprite4Objects1.length = 0;
gdjs.scene18Code.GDNewPanelSprite4Objects2.length = 0;
gdjs.scene18Code.GDStoryText2Objects1.length = 0;
gdjs.scene18Code.GDStoryText2Objects2.length = 0;
gdjs.scene18Code.GDStoryText3Objects1.length = 0;
gdjs.scene18Code.GDStoryText3Objects2.length = 0;
gdjs.scene18Code.GDNewTextObjects1.length = 0;
gdjs.scene18Code.GDNewTextObjects2.length = 0;
gdjs.scene18Code.GDNewText2Objects1.length = 0;
gdjs.scene18Code.GDNewText2Objects2.length = 0;
gdjs.scene18Code.GDNewText3Objects1.length = 0;
gdjs.scene18Code.GDNewText3Objects2.length = 0;
gdjs.scene18Code.GDNewText4Objects1.length = 0;
gdjs.scene18Code.GDNewText4Objects2.length = 0;
gdjs.scene18Code.GDchooseObjects1.length = 0;
gdjs.scene18Code.GDchooseObjects2.length = 0;

gdjs.scene18Code.eventsList0(runtimeScene);
gdjs.scene18Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene18Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene18Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene18Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene18Code.GDRedDotBarObjects1.length = 0;
gdjs.scene18Code.GDRedDotBarObjects2.length = 0;
gdjs.scene18Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene18Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene18Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene18Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene18Code.GDNewPanelSprite3Objects1.length = 0;
gdjs.scene18Code.GDNewPanelSprite3Objects2.length = 0;
gdjs.scene18Code.GDNewPanelSprite4Objects1.length = 0;
gdjs.scene18Code.GDNewPanelSprite4Objects2.length = 0;
gdjs.scene18Code.GDStoryText2Objects1.length = 0;
gdjs.scene18Code.GDStoryText2Objects2.length = 0;
gdjs.scene18Code.GDStoryText3Objects1.length = 0;
gdjs.scene18Code.GDStoryText3Objects2.length = 0;
gdjs.scene18Code.GDNewTextObjects1.length = 0;
gdjs.scene18Code.GDNewTextObjects2.length = 0;
gdjs.scene18Code.GDNewText2Objects1.length = 0;
gdjs.scene18Code.GDNewText2Objects2.length = 0;
gdjs.scene18Code.GDNewText3Objects1.length = 0;
gdjs.scene18Code.GDNewText3Objects2.length = 0;
gdjs.scene18Code.GDNewText4Objects1.length = 0;
gdjs.scene18Code.GDNewText4Objects2.length = 0;
gdjs.scene18Code.GDchooseObjects1.length = 0;
gdjs.scene18Code.GDchooseObjects2.length = 0;


return;

}

gdjs['scene18Code'] = gdjs.scene18Code;
