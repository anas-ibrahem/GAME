gdjs.scene5Code = {};
gdjs.scene5Code.localVariables = [];
gdjs.scene5Code.GDNewPanelSpriteObjects1= [];
gdjs.scene5Code.GDNewPanelSpriteObjects2= [];
gdjs.scene5Code.GDNewPanelSprite2Objects1= [];
gdjs.scene5Code.GDNewPanelSprite2Objects2= [];
gdjs.scene5Code.GDStoryTextObjects1= [];
gdjs.scene5Code.GDStoryTextObjects2= [];
gdjs.scene5Code.GDGreenDotBarObjects1= [];
gdjs.scene5Code.GDGreenDotBarObjects2= [];
gdjs.scene5Code.GDRedDotBarObjects1= [];
gdjs.scene5Code.GDRedDotBarObjects2= [];
gdjs.scene5Code.GDYellowDotBarObjects1= [];
gdjs.scene5Code.GDYellowDotBarObjects2= [];
gdjs.scene5Code.GDBlueDotBarObjects1= [];
gdjs.scene5Code.GDBlueDotBarObjects2= [];
gdjs.scene5Code.GDNewTextObjects1= [];
gdjs.scene5Code.GDNewTextObjects2= [];
gdjs.scene5Code.GDNewText2Objects1= [];
gdjs.scene5Code.GDNewText2Objects2= [];
gdjs.scene5Code.GDNewText3Objects1= [];
gdjs.scene5Code.GDNewText3Objects2= [];
gdjs.scene5Code.GDNewText4Objects1= [];
gdjs.scene5Code.GDNewText4Objects2= [];
gdjs.scene5Code.GDchooseObjects1= [];
gdjs.scene5Code.GDchooseObjects2= [];


gdjs.scene5Code.mapOfGDgdjs_9546scene5Code_9546GDNewPanelSprite2Objects1Objects = Hashtable.newFrom({"NewPanelSprite2": gdjs.scene5Code.GDNewPanelSprite2Objects1});
gdjs.scene5Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.scene5Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs.scene5Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.scene5Code.GDNewText4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.scene5Code.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene5Code.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.scene5Code.GDStoryTextObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene5Code.GDStoryTextObjects1[k] = gdjs.scene5Code.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.scene5Code.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.scene5Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs.scene5Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.scene5Code.GDNewText4Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite2"), gdjs.scene5Code.GDNewPanelSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.scene5Code.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene5Code.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.scene5Code.GDStoryTextObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene5Code.GDStoryTextObjects1[k] = gdjs.scene5Code.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.scene5Code.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene5Code.mapOfGDgdjs_9546scene5Code_9546GDNewPanelSprite2Objects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene6", false);
}}

}


};

gdjs.scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene5Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene5Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene5Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.scene5Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.scene5Code.GDStoryTextObjects1.length = 0;
gdjs.scene5Code.GDStoryTextObjects2.length = 0;
gdjs.scene5Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene5Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene5Code.GDRedDotBarObjects1.length = 0;
gdjs.scene5Code.GDRedDotBarObjects2.length = 0;
gdjs.scene5Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene5Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene5Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene5Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene5Code.GDNewTextObjects1.length = 0;
gdjs.scene5Code.GDNewTextObjects2.length = 0;
gdjs.scene5Code.GDNewText2Objects1.length = 0;
gdjs.scene5Code.GDNewText2Objects2.length = 0;
gdjs.scene5Code.GDNewText3Objects1.length = 0;
gdjs.scene5Code.GDNewText3Objects2.length = 0;
gdjs.scene5Code.GDNewText4Objects1.length = 0;
gdjs.scene5Code.GDNewText4Objects2.length = 0;
gdjs.scene5Code.GDchooseObjects1.length = 0;
gdjs.scene5Code.GDchooseObjects2.length = 0;

gdjs.scene5Code.eventsList0(runtimeScene);
gdjs.scene5Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene5Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene5Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.scene5Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.scene5Code.GDStoryTextObjects1.length = 0;
gdjs.scene5Code.GDStoryTextObjects2.length = 0;
gdjs.scene5Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene5Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene5Code.GDRedDotBarObjects1.length = 0;
gdjs.scene5Code.GDRedDotBarObjects2.length = 0;
gdjs.scene5Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene5Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene5Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene5Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene5Code.GDNewTextObjects1.length = 0;
gdjs.scene5Code.GDNewTextObjects2.length = 0;
gdjs.scene5Code.GDNewText2Objects1.length = 0;
gdjs.scene5Code.GDNewText2Objects2.length = 0;
gdjs.scene5Code.GDNewText3Objects1.length = 0;
gdjs.scene5Code.GDNewText3Objects2.length = 0;
gdjs.scene5Code.GDNewText4Objects1.length = 0;
gdjs.scene5Code.GDNewText4Objects2.length = 0;
gdjs.scene5Code.GDchooseObjects1.length = 0;
gdjs.scene5Code.GDchooseObjects2.length = 0;


return;

}

gdjs['scene5Code'] = gdjs.scene5Code;
