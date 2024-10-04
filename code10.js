gdjs.scene11Code = {};
gdjs.scene11Code.localVariables = [];
gdjs.scene11Code.GDNewPanelSpriteObjects1= [];
gdjs.scene11Code.GDNewPanelSpriteObjects2= [];
gdjs.scene11Code.GDGreenDotBarObjects1= [];
gdjs.scene11Code.GDGreenDotBarObjects2= [];
gdjs.scene11Code.GDRedDotBarObjects1= [];
gdjs.scene11Code.GDRedDotBarObjects2= [];
gdjs.scene11Code.GDYellowDotBarObjects1= [];
gdjs.scene11Code.GDYellowDotBarObjects2= [];
gdjs.scene11Code.GDBlueDotBarObjects1= [];
gdjs.scene11Code.GDBlueDotBarObjects2= [];
gdjs.scene11Code.GDNewPanelSprite5Objects1= [];
gdjs.scene11Code.GDNewPanelSprite5Objects2= [];
gdjs.scene11Code.GDStoryText4Objects1= [];
gdjs.scene11Code.GDStoryText4Objects2= [];
gdjs.scene11Code.GDRightAnswerObjects1= [];
gdjs.scene11Code.GDRightAnswerObjects2= [];
gdjs.scene11Code.GDNewText5Objects1= [];
gdjs.scene11Code.GDNewText5Objects2= [];
gdjs.scene11Code.GDNewTextObjects1= [];
gdjs.scene11Code.GDNewTextObjects2= [];
gdjs.scene11Code.GDNewText2Objects1= [];
gdjs.scene11Code.GDNewText2Objects2= [];
gdjs.scene11Code.GDNewText3Objects1= [];
gdjs.scene11Code.GDNewText3Objects2= [];
gdjs.scene11Code.GDNewText4Objects1= [];
gdjs.scene11Code.GDNewText4Objects2= [];
gdjs.scene11Code.GDchooseObjects1= [];
gdjs.scene11Code.GDchooseObjects2= [];


gdjs.scene11Code.mapOfGDgdjs_9546scene11Code_9546GDNewText5Objects1Objects = Hashtable.newFrom({"NewText5": gdjs.scene11Code.GDNewText5Objects1});
gdjs.scene11Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.scene11Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs.scene11Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.scene11Code.GDNewText5Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryText4"), gdjs.scene11Code.GDStoryText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene11Code.GDStoryText4Objects1.length;i<l;++i) {
    if ( gdjs.scene11Code.GDStoryText4Objects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene11Code.GDStoryText4Objects1[k] = gdjs.scene11Code.GDStoryText4Objects1[i];
        ++k;
    }
}
gdjs.scene11Code.GDStoryText4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.scene11Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs.scene11Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.scene11Code.GDNewText5Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.scene11Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene11Code.mapOfGDgdjs_9546scene11Code_9546GDNewText5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene13", false);
}}

}


};

gdjs.scene11Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene11Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene11Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene11Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene11Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene11Code.GDRedDotBarObjects1.length = 0;
gdjs.scene11Code.GDRedDotBarObjects2.length = 0;
gdjs.scene11Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene11Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene11Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene11Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene11Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.scene11Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.scene11Code.GDStoryText4Objects1.length = 0;
gdjs.scene11Code.GDStoryText4Objects2.length = 0;
gdjs.scene11Code.GDRightAnswerObjects1.length = 0;
gdjs.scene11Code.GDRightAnswerObjects2.length = 0;
gdjs.scene11Code.GDNewText5Objects1.length = 0;
gdjs.scene11Code.GDNewText5Objects2.length = 0;
gdjs.scene11Code.GDNewTextObjects1.length = 0;
gdjs.scene11Code.GDNewTextObjects2.length = 0;
gdjs.scene11Code.GDNewText2Objects1.length = 0;
gdjs.scene11Code.GDNewText2Objects2.length = 0;
gdjs.scene11Code.GDNewText3Objects1.length = 0;
gdjs.scene11Code.GDNewText3Objects2.length = 0;
gdjs.scene11Code.GDNewText4Objects1.length = 0;
gdjs.scene11Code.GDNewText4Objects2.length = 0;
gdjs.scene11Code.GDchooseObjects1.length = 0;
gdjs.scene11Code.GDchooseObjects2.length = 0;

gdjs.scene11Code.eventsList0(runtimeScene);
gdjs.scene11Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene11Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene11Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene11Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene11Code.GDRedDotBarObjects1.length = 0;
gdjs.scene11Code.GDRedDotBarObjects2.length = 0;
gdjs.scene11Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene11Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene11Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene11Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene11Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.scene11Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.scene11Code.GDStoryText4Objects1.length = 0;
gdjs.scene11Code.GDStoryText4Objects2.length = 0;
gdjs.scene11Code.GDRightAnswerObjects1.length = 0;
gdjs.scene11Code.GDRightAnswerObjects2.length = 0;
gdjs.scene11Code.GDNewText5Objects1.length = 0;
gdjs.scene11Code.GDNewText5Objects2.length = 0;
gdjs.scene11Code.GDNewTextObjects1.length = 0;
gdjs.scene11Code.GDNewTextObjects2.length = 0;
gdjs.scene11Code.GDNewText2Objects1.length = 0;
gdjs.scene11Code.GDNewText2Objects2.length = 0;
gdjs.scene11Code.GDNewText3Objects1.length = 0;
gdjs.scene11Code.GDNewText3Objects2.length = 0;
gdjs.scene11Code.GDNewText4Objects1.length = 0;
gdjs.scene11Code.GDNewText4Objects2.length = 0;
gdjs.scene11Code.GDchooseObjects1.length = 0;
gdjs.scene11Code.GDchooseObjects2.length = 0;


return;

}

gdjs['scene11Code'] = gdjs.scene11Code;
