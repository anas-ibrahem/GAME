gdjs.scene_321Code = {};
gdjs.scene_321Code.localVariables = [];
gdjs.scene_321Code.GDNewPanelSpriteObjects1= [];
gdjs.scene_321Code.GDNewPanelSpriteObjects2= [];
gdjs.scene_321Code.GDNewPanelSprite2Objects1= [];
gdjs.scene_321Code.GDNewPanelSprite2Objects2= [];
gdjs.scene_321Code.GDStoryTextObjects1= [];
gdjs.scene_321Code.GDStoryTextObjects2= [];
gdjs.scene_321Code.GDGreenDotBarObjects1= [];
gdjs.scene_321Code.GDGreenDotBarObjects2= [];
gdjs.scene_321Code.GDRedDotBarObjects1= [];
gdjs.scene_321Code.GDRedDotBarObjects2= [];
gdjs.scene_321Code.GDYellowDotBarObjects1= [];
gdjs.scene_321Code.GDYellowDotBarObjects2= [];
gdjs.scene_321Code.GDBlueDotBarObjects1= [];
gdjs.scene_321Code.GDBlueDotBarObjects2= [];
gdjs.scene_321Code.GDNewTextObjects1= [];
gdjs.scene_321Code.GDNewTextObjects2= [];
gdjs.scene_321Code.GDNewText2Objects1= [];
gdjs.scene_321Code.GDNewText2Objects2= [];
gdjs.scene_321Code.GDNewText3Objects1= [];
gdjs.scene_321Code.GDNewText3Objects2= [];
gdjs.scene_321Code.GDNewText4Objects1= [];
gdjs.scene_321Code.GDNewText4Objects2= [];
gdjs.scene_321Code.GDchooseObjects1= [];
gdjs.scene_321Code.GDchooseObjects2= [];


gdjs.scene_321Code.mapOfGDgdjs_9546scene_9595321Code_9546GDNewPanelSprite2Objects1Objects = Hashtable.newFrom({"NewPanelSprite2": gdjs.scene_321Code.GDNewPanelSprite2Objects1});
gdjs.scene_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.scene_321Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs.scene_321Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.scene_321Code.GDNewText4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.scene_321Code.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene_321Code.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.scene_321Code.GDStoryTextObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene_321Code.GDStoryTextObjects1[k] = gdjs.scene_321Code.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.scene_321Code.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.scene_321Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs.scene_321Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.scene_321Code.GDNewText4Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite2"), gdjs.scene_321Code.GDNewPanelSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.scene_321Code.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene_321Code.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.scene_321Code.GDStoryTextObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene_321Code.GDStoryTextObjects1[k] = gdjs.scene_321Code.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.scene_321Code.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene_321Code.mapOfGDgdjs_9546scene_9595321Code_9546GDNewPanelSprite2Objects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene2", false);
}}

}


};

gdjs.scene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene_321Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene_321Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene_321Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.scene_321Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.scene_321Code.GDStoryTextObjects1.length = 0;
gdjs.scene_321Code.GDStoryTextObjects2.length = 0;
gdjs.scene_321Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene_321Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene_321Code.GDRedDotBarObjects1.length = 0;
gdjs.scene_321Code.GDRedDotBarObjects2.length = 0;
gdjs.scene_321Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene_321Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene_321Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene_321Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene_321Code.GDNewTextObjects1.length = 0;
gdjs.scene_321Code.GDNewTextObjects2.length = 0;
gdjs.scene_321Code.GDNewText2Objects1.length = 0;
gdjs.scene_321Code.GDNewText2Objects2.length = 0;
gdjs.scene_321Code.GDNewText3Objects1.length = 0;
gdjs.scene_321Code.GDNewText3Objects2.length = 0;
gdjs.scene_321Code.GDNewText4Objects1.length = 0;
gdjs.scene_321Code.GDNewText4Objects2.length = 0;
gdjs.scene_321Code.GDchooseObjects1.length = 0;
gdjs.scene_321Code.GDchooseObjects2.length = 0;

gdjs.scene_321Code.eventsList0(runtimeScene);
gdjs.scene_321Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene_321Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene_321Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.scene_321Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.scene_321Code.GDStoryTextObjects1.length = 0;
gdjs.scene_321Code.GDStoryTextObjects2.length = 0;
gdjs.scene_321Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene_321Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene_321Code.GDRedDotBarObjects1.length = 0;
gdjs.scene_321Code.GDRedDotBarObjects2.length = 0;
gdjs.scene_321Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene_321Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene_321Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene_321Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene_321Code.GDNewTextObjects1.length = 0;
gdjs.scene_321Code.GDNewTextObjects2.length = 0;
gdjs.scene_321Code.GDNewText2Objects1.length = 0;
gdjs.scene_321Code.GDNewText2Objects2.length = 0;
gdjs.scene_321Code.GDNewText3Objects1.length = 0;
gdjs.scene_321Code.GDNewText3Objects2.length = 0;
gdjs.scene_321Code.GDNewText4Objects1.length = 0;
gdjs.scene_321Code.GDNewText4Objects2.length = 0;
gdjs.scene_321Code.GDchooseObjects1.length = 0;
gdjs.scene_321Code.GDchooseObjects2.length = 0;


return;

}

gdjs['scene_321Code'] = gdjs.scene_321Code;
