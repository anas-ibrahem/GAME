gdjs.scene3Code = {};
gdjs.scene3Code.localVariables = [];
gdjs.scene3Code.GDNewPanelSpriteObjects1= [];
gdjs.scene3Code.GDNewPanelSpriteObjects2= [];
gdjs.scene3Code.GDGreenDotBarObjects1= [];
gdjs.scene3Code.GDGreenDotBarObjects2= [];
gdjs.scene3Code.GDRedDotBarObjects1= [];
gdjs.scene3Code.GDRedDotBarObjects2= [];
gdjs.scene3Code.GDYellowDotBarObjects1= [];
gdjs.scene3Code.GDYellowDotBarObjects2= [];
gdjs.scene3Code.GDBlueDotBarObjects1= [];
gdjs.scene3Code.GDBlueDotBarObjects2= [];
gdjs.scene3Code.GDNewPanelSprite5Objects1= [];
gdjs.scene3Code.GDNewPanelSprite5Objects2= [];
gdjs.scene3Code.GDStoryText4Objects1= [];
gdjs.scene3Code.GDStoryText4Objects2= [];
gdjs.scene3Code.GDRightAnswerObjects1= [];
gdjs.scene3Code.GDRightAnswerObjects2= [];
gdjs.scene3Code.GDNewText5Objects1= [];
gdjs.scene3Code.GDNewText5Objects2= [];
gdjs.scene3Code.GDNewTextObjects1= [];
gdjs.scene3Code.GDNewTextObjects2= [];
gdjs.scene3Code.GDNewText2Objects1= [];
gdjs.scene3Code.GDNewText2Objects2= [];
gdjs.scene3Code.GDNewText3Objects1= [];
gdjs.scene3Code.GDNewText3Objects2= [];
gdjs.scene3Code.GDNewText4Objects1= [];
gdjs.scene3Code.GDNewText4Objects2= [];
gdjs.scene3Code.GDchooseObjects1= [];
gdjs.scene3Code.GDchooseObjects2= [];


gdjs.scene3Code.mapOfGDgdjs_9546scene3Code_9546GDNewText5Objects1Objects = Hashtable.newFrom({"NewText5": gdjs.scene3Code.GDNewText5Objects1});
gdjs.scene3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.scene3Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs.scene3Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.scene3Code.GDNewText5Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryText4"), gdjs.scene3Code.GDStoryText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scene3Code.GDStoryText4Objects1.length;i<l;++i) {
    if ( gdjs.scene3Code.GDStoryText4Objects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scene3Code.GDStoryText4Objects1[k] = gdjs.scene3Code.GDStoryText4Objects1[i];
        ++k;
    }
}
gdjs.scene3Code.GDStoryText4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.scene3Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs.scene3Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.scene3Code.GDNewText5Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.scene3Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene3Code.mapOfGDgdjs_9546scene3Code_9546GDNewText5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene5", false);
}}

}


};

gdjs.scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene3Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene3Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene3Code.GDRedDotBarObjects1.length = 0;
gdjs.scene3Code.GDRedDotBarObjects2.length = 0;
gdjs.scene3Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene3Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene3Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene3Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene3Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.scene3Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.scene3Code.GDStoryText4Objects1.length = 0;
gdjs.scene3Code.GDStoryText4Objects2.length = 0;
gdjs.scene3Code.GDRightAnswerObjects1.length = 0;
gdjs.scene3Code.GDRightAnswerObjects2.length = 0;
gdjs.scene3Code.GDNewText5Objects1.length = 0;
gdjs.scene3Code.GDNewText5Objects2.length = 0;
gdjs.scene3Code.GDNewTextObjects1.length = 0;
gdjs.scene3Code.GDNewTextObjects2.length = 0;
gdjs.scene3Code.GDNewText2Objects1.length = 0;
gdjs.scene3Code.GDNewText2Objects2.length = 0;
gdjs.scene3Code.GDNewText3Objects1.length = 0;
gdjs.scene3Code.GDNewText3Objects2.length = 0;
gdjs.scene3Code.GDNewText4Objects1.length = 0;
gdjs.scene3Code.GDNewText4Objects2.length = 0;
gdjs.scene3Code.GDchooseObjects1.length = 0;
gdjs.scene3Code.GDchooseObjects2.length = 0;

gdjs.scene3Code.eventsList0(runtimeScene);
gdjs.scene3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.scene3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.scene3Code.GDGreenDotBarObjects1.length = 0;
gdjs.scene3Code.GDGreenDotBarObjects2.length = 0;
gdjs.scene3Code.GDRedDotBarObjects1.length = 0;
gdjs.scene3Code.GDRedDotBarObjects2.length = 0;
gdjs.scene3Code.GDYellowDotBarObjects1.length = 0;
gdjs.scene3Code.GDYellowDotBarObjects2.length = 0;
gdjs.scene3Code.GDBlueDotBarObjects1.length = 0;
gdjs.scene3Code.GDBlueDotBarObjects2.length = 0;
gdjs.scene3Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.scene3Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.scene3Code.GDStoryText4Objects1.length = 0;
gdjs.scene3Code.GDStoryText4Objects2.length = 0;
gdjs.scene3Code.GDRightAnswerObjects1.length = 0;
gdjs.scene3Code.GDRightAnswerObjects2.length = 0;
gdjs.scene3Code.GDNewText5Objects1.length = 0;
gdjs.scene3Code.GDNewText5Objects2.length = 0;
gdjs.scene3Code.GDNewTextObjects1.length = 0;
gdjs.scene3Code.GDNewTextObjects2.length = 0;
gdjs.scene3Code.GDNewText2Objects1.length = 0;
gdjs.scene3Code.GDNewText2Objects2.length = 0;
gdjs.scene3Code.GDNewText3Objects1.length = 0;
gdjs.scene3Code.GDNewText3Objects2.length = 0;
gdjs.scene3Code.GDNewText4Objects1.length = 0;
gdjs.scene3Code.GDNewText4Objects2.length = 0;
gdjs.scene3Code.GDchooseObjects1.length = 0;
gdjs.scene3Code.GDchooseObjects2.length = 0;


return;

}

gdjs['scene3Code'] = gdjs.scene3Code;
