$(function() {

    const panelUtil = (function () {
      const ATTR_DISPLAY = "panel-display";
      let isExpanded = false;
      const body = $("body");
  
      return {
        toggle() {
          if (isExpanded === false) {
            body.attr(ATTR_DISPLAY, "");
          } else {
            body.removeAttr(ATTR_DISPLAY);
          }
  
          isExpanded = !isExpanded;
        }
      };
  
    }());
  
    $("#panel-trigger").click(panelUtil.toggle);
  
    $("#mask").click(panelUtil.toggle);
  
  });