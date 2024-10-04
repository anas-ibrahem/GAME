gdjs.scene13Code = {};
gdjs.scene13Code.localVariables = [];
gdjs.scene13Code.GDNewPanelSpriteObjects1= [];
gdjs.scene13Code.GDNewPanelSpriteObjects2= [];
gdjs.scene13Code.GDNewPanelSprite2Objects1= [];
gdjs.scene13Code.GDNewPanelSprite2Objects2= [];
gdjs.scene13Code.GDStoryTextObjects1= [];
gdjs.scene13Code.GDStoryTextObjects2= [];
gdjs.scene13Code.GDGreenDotBarObjects1= [];
gdjs.scene13Code.GDGreenDotBarObjects2= [];
gdjs.scene13Code.GDRedDotBarObjects1= [];
gdjs.scene13Code.GDRedDotBarObjects2= [];
gdjs.scene13Code.GDYellowDotBarObjects1= [];
gdjs.scene13Code.GDYellowDotBarObjects2= [];
gdjs.scene13Code.GDBlueDotBarObjects1= [];
gdjs.scene13Code.GDBlueDotBarObjects2= [];
gdjs.scene13Code.GDNewTextObjects1= [];
gdjs.scene13Code.GDNewTextObjects2= [];
gdjs.scene13Code.GDNewText2Objects1= [];
gdjs.scene13Code.GDNewText2Objects2= [];
gdjs.scene13Code.GDNewText3Objects1= [];
gdjs.scene13Code.GDNewText3Objects2= [];
gdjs.scene13Code.GDNewText4Objects1= [];
gdjs.scene13Code.GDNewText4Objects2= [];
gdjs.scene13Code.GDchooseObjects1= [];
gdjs.scene13Code.GDchooseObjects2= [];


gdjs.scene13Code.mapOfGDgdjs_9546scene13Code_9546GDNewPanelSprite2Objects1Objects = Hashtable.newFrom({"NewPanelSprite2": gdjs.scene13Code.GDNewPanelSprite2Objects1});
gdjs.scene13Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.scene13Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs.scene13Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.scene13Code.GDNewText4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.scene13Code.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene13Code.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.scene13Code.GDStoryTextObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene13Code.GDStoryTextObjects1[k] = gdjs.scene13Code.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.scene13Code.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.scene13Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs.scene13Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.scene13Code.GDNewText4Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite2"), gdjs.scene13Code.GDNewPanelSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.scene13Code.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene13Code.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.scene13Code.GDStoryTextObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene13Code.GDStoryTextObjects1[k] = gdjs.scene13Code.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.scene13Code.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene13Code.mapOfGDgdjs_9546scene13Code_9546GDNewPanelSprite2Objects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene14", false);
}}

}


};

gdjs.scene13Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene13Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene13Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene13Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.scene13Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.scene13Code.GDStoryTextObjects1.length = 0;
gdjs.scene13Code.GDStoryTextObjects2.length = 0;
gdjs.scene13Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene13Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene13Code.GDRedDotBarObjects1.length = 0;
gdjs.scene13Code.GDRedDotBarObjects2.length = 0;
gdjs.scene13Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene13Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene13Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene13Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene13Code.GDNewTextObjects1.length = 0;
gdjs.scene13Code.GDNewTextObjects2.length = 0;
gdjs.scene13Code.GDNewText2Objects1.length = 0;
gdjs.scene13Code.GDNewText2Objects2.length = 0;
gdjs.scene13Code.GDNewText3Objects1.length = 0;
gdjs.scene13Code.GDNewText3Objects2.length = 0;
gdjs.scene13Code.GDNewText4Objects1.length = 0;
gdjs.scene13Code.GDNewText4Objects2.length = 0;
gdjs.scene13Code.GDchooseObjects1.length = 0;
gdjs.scene13Code.GDchooseObjects2.length = 0;

gdjs.scene13Code.eventsList0(runtimeScene);
gdjs.scene13Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene13Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene13Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.scene13Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.scene13Code.GDStoryTextObjects1.length = 0;
gdjs.scene13Code.GDStoryTextObjects2.length = 0;
gdjs.scene13Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene13Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene13Code.GDRedDotBarObjects1.length = 0;
gdjs.scene13Code.GDRedDotBarObjects2.length = 0;
gdjs.scene13Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene13Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene13Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene13Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene13Code.GDNewTextObjects1.length = 0;
gdjs.scene13Code.GDNewTextObjects2.length = 0;
gdjs.scene13Code.GDNewText2Objects1.length = 0;
gdjs.scene13Code.GDNewText2Objects2.length = 0;
gdjs.scene13Code.GDNewText3Objects1.length = 0;
gdjs.scene13Code.GDNewText3Objects2.length = 0;
gdjs.scene13Code.GDNewText4Objects1.length = 0;
gdjs.scene13Code.GDNewText4Objects2.length = 0;
gdjs.scene13Code.GDchooseObjects1.length = 0;
gdjs.scene13Code.GDchooseObjects2.length = 0;


return;

}

gdjs['scene13Code'] = gdjs.scene13Code;
