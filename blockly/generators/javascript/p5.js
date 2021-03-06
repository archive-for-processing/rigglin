'use strict';

goog.provide('Blockly.JavaScript.p5');
goog.require('Blockly.JavaScript');


Blockly.JavaScript['p5_createCanvas'] = function(block) {
    var value_width = Blockly.JavaScript.valueToCode(block,'width',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_height = Blockly.JavaScript.valueToCode(block,'height',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code =
	'P5.createCanvas('+ value_width + ',' + value_height + ');\n' +
	'onresize();\n'; // force the layout to go again
    return code;
    
};


Blockly.JavaScript['p5_background'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.background(' + value_color +  ');\n';
    return code;
};



Blockly.JavaScript['p5_stroke'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.stroke('+ value_color +');\n';
    return code;
};

Blockly.JavaScript['p5_fill'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block,'color',Blockly.JavaScript.ORDER_ATOMIC) || '\'#000000\'';
    var code = 'P5.fill('+ value_color +');\n';
    return code;
};




Blockly.JavaScript['p5_point'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,'x',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block,'y',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.point('
	+ value_x + ','
	+ value_y + ');\n';
    return code;
    
};



Blockly.JavaScript['p5_line'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block,'x1',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block,'y1',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block,'x2',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block,'y2',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.line('
	+ value_x1 + ','
	+ value_y1 + ','
	+ value_x2 + ','
	+ value_y2 + ');\n';
    
    return code;
};



Blockly.JavaScript['p5_rect'] = function(block) {
    
    var v1 = Blockly.JavaScript.valueToCode(block,'x',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v2 = Blockly.JavaScript.valueToCode(block,'y',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v3 = Blockly.JavaScript.valueToCode(block,'width',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var v4 = Blockly.JavaScript.valueToCode(block,'height',Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.rect('
	+ v1 + ','
	+ v2 + ','
	+ v3 + ','
	+ v4 + ');\n';
    
    return code;
};



Blockly.JavaScript['p5_width'] = function(block) {
    var code = 'P5.width';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_height'] = function(block) {
    var code = 'P5.height';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_frameCount'] = function(block) {
    var code = 'P5.frameCount';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mouseX'] = function(block) {
    var code = 'P5.mouseX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mouseY'] = function(block) {
    var code = 'P5.mouseY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pmouseX'] = function(block) {
    var code = 'P5.pmouseX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pmouseY'] = function(block) {
    var code = 'P5.pmouseY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_setup'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.setup = function() {\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_draw'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'P5.draw = function() {\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_dist'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.dist('
	+ value_x1 + ','
	+ value_y1 + ','
	+ value_x2 + ','
	+ value_y2
	+ ')';
    
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['p5_createvector'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.createVector('
	+ value_x + ','
	+ value_y + ','
	+ value_z +')';
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_vector_get'] = function(block) {
  var dropdown_varname = block.getFieldValue('varname');
  var value_that = Blockly.JavaScript.valueToCode(block, 'that', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_that + '.' + dropdown_varname;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_text'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.text(' + value_string + ',' + value_x + ',' + value_y + ')';
    return code;
};

Blockly.JavaScript['p5_loadfont'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);

    var code;
    if(value_url){
	code = 'P5.loadFont(' + value_url + ')';
    }else{
	code = 'P5.loadFont("' + dropdown_name + '")';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['p5_textfont'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var code = 'P5.textFont('+value_name+');\n';
  return code;
};




Blockly.JavaScript['p5_textalign'] = function(block) {
    var dropdown_horizalign = block.getFieldValue('horizAlign');
    var dropdown_vertalign = block.getFieldValue('vertAlign');
    var code = 'P5.textAlign('+dropdown_horizalign+','+dropdown_vertalign+');\n';
    return code;
};



Blockly.JavaScript['p5_textleading'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'P5.textLeading(' + value_name + ');\n';
  return code;
};


Blockly.JavaScript['p5_textsize'] = function(block) {
  var text_size = block.getFieldValue('size');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'P5.textSize('+value_name+');\n';
  return code;
};


Blockly.JavaScript['p5_set_textstyle'] = function(block) {
    var dropdown_style = block.getFieldValue('style');
    var code = 'P5.textStyle('+dropdown_style+');\n';
    return code;
};

Blockly.JavaScript['p5_get_textwidth'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var code = 'P5.textWidth('+value_name+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_textascent'] = function(block) {
    var code = 'P5.textAscent()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_textdescent'] = function(block) {
  var code = 'P5.textDescent()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_font_textbounds'] = function(block) {
    var value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_line = Blockly.JavaScript.valueToCode(block, 'line', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = value_font + '.textBounds('+value_line+','+value_x+','+value_y+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_font_texttopoints'] = function(block) {
    var value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_txt = Blockly.JavaScript.valueToCode(block, 'txt', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_fontsize = Blockly.JavaScript.valueToCode(block, 'fontsize', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = value_font + '.textToPoints('+value_txt+','+value_x+','+value_y+','+value_fontsize+')';

  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_clear'] = function(block) {
    
  var code = 'P5.clear();\n';
  return code;
};

Blockly.JavaScript['p5_colormode'] = function(block) {
    var dropdown_mode = block.getFieldValue('mode');
    var value_mode = Blockly.JavaScript.valueToCode(block, 'mode', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'P5.colorMode('+dropdown_mode+','+value_mode+');\n';
    return code;
};


Blockly.JavaScript['p5_nofill'] = function(block) {
    var code = 'P5.noFill();\n';
    return code;
};

Blockly.JavaScript['p5_nostroke'] = function(block) {
    var code = 'P5.noStroke();\n';
    return code;
};


Blockly.JavaScript['p5_color'] = function(block) {
    var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.color('+value_a+','+value_b+','+value_c+','+value_d+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_alpha'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.alpha('+value_color+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_blue'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.blue('+value_name+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_brightness'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.brightness('+value_name+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_green'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.green('+value_name+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_hue'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.hue('+value_name+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_lerpcolor'] = function(block) {
    var value_color1 = Blockly.JavaScript.valueToCode(block, 'color1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_color2 = Blockly.JavaScript.valueToCode(block, 'color2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_amt = Blockly.JavaScript.valueToCode(block, 'amt', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.lerpColor('+value_color1+','+value_color2+','+value_amt+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_lightness'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'P5.lightness('+value_name+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_red'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'P5.red('+value_color+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_saturation'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.saturation('+value_color+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_color_tostring'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_format = Blockly.JavaScript.valueToCode(block, 'format', Blockly.JavaScript.ORDER_ATOMIC) || '\'rgba\'';
    var code = value_color + '.toString('+value_format+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_color_set'] = function(block) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var dropdown_func = block.getFieldValue('func');
    var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = value_color + '.' + dropdown_func + '('+value_num+');\n';
    return code;
};

Blockly.JavaScript['p5_quad'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y4 = Blockly.JavaScript.valueToCode(block, 'y4', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.quad('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_x3+','+value_y3+','+value_x4+','+value_y4+');\n';
    return code;
};

/*
Blockly.JavaScript['p5_circle'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.circle('+value_x + ',' + value_y + ',' + value_d+');\n';
    return code;
};
*/

Blockly.JavaScript['p5_ellipse'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.ellipse('+value_x + ',' + value_y + ',' + value_w + ',' + value_h+');\n';
    return code;
};

Blockly.JavaScript['p5_arc'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_stop = Blockly.JavaScript.valueToCode(block, 'stop', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    var code = 'P5.arc('+value_x+','+value_y+','+value_w+','+value_h+','+value_start+','+value_stop+','+dropdown_mode+');\n';
    return code;
};


Blockly.JavaScript['p5_square'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'P5.square('+value_x+','+value_y+','+value_s+');\n';
    return code;
};


Blockly.JavaScript['p5_triangle'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'P5.triangle('+value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ',' + value_x3 + ',' + value_y3+');\n';
    return code;
};


Blockly.JavaScript['p5_rotate'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.rotate('+value_name+');\n';
    return code;
};

Blockly.JavaScript['p5_scale'] = function(block) {
    var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.scale('+value_s+','+value_y+','+value_z+');\n';
    return code;
};


Blockly.JavaScript['p5_translate'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.translate('+value_x+','+value_y+','+value_z+');\n';
    return code;
};

Blockly.JavaScript['p5_push'] = function(block) {
    var code = 'P5.push();\n';
    return code;
};

Blockly.JavaScript['p5_pop'] = function(block) {
    var code = 'P5.pop();\n';
    return code;
};


Blockly.JavaScript['p5_constant'] = function(block) {
    var dropdown_which = block.getFieldValue('which');
    var code = 'P5.'+dropdown_which;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['p5_vertex'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC)||0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC)||0;
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC)||0;
    var code = 'P5.vertex('+value_x+','+value_y+','+value_z+');\n';
    return code;
};


Blockly.JavaScript['p5_beginshape'] = function(block) {
  var dropdown_how = block.getFieldValue('how');
    var code = 'P5.beginShape('+dropdown_how+');\n';
  return code;
};


Blockly.JavaScript['p5_endshape'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = 'P5.endShape('+dropdown_name+');\n';
    return code;
};


Blockly.JavaScript['p5_curvevertex'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC)||0;
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC)||0;
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC)||0;
    var code = 'P5.curveVertex('+value_x+','+value_y+','+value_z+');\n';
    return code;
};


Blockly.JavaScript['p5_ellipsemode'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = 'P5.ellipseMode('+dropdown_name+');\n';
    return code;
};

Blockly.JavaScript['p5_nosmooth'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = 'P5.'+dropdown_name+'();\n';
    return code;
};

Blockly.JavaScript['p5_rectmode'] = function(block) {
    var dropdown_mode = block.getFieldValue('mode');
    var code = 'P5.rectMode('+dropdown_mode+');\n';
    return code;
};

Blockly.JavaScript['p5_strokecap'] = function(block) {
    var dropdown_mode = block.getFieldValue('mode');
    var code = 'P5.strokeCap(' + dropdown_mode + ');\n';
    return code;
};


Blockly.JavaScript['p5_strokejoin'] = function(block) {
    var dropdown_mode = block.getFieldValue('mode');
    var code = 'P5.strokeJoin('+dropdown_mode+');\n';
    return code;
};

Blockly.JavaScript['p5_strokeweight'] = function(block) {
    var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.strokeWeight('+value_val+');\n';
    return code;
};

Blockly.JavaScript['p5_bezier'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y4 = Blockly.JavaScript.valueToCode(block, 'y4', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.bezier(' +
	value_x1 + ',' +
	value_y1 + ',' +
	value_x2 + ',' +
	value_y2 + ',' +
	value_x3 + ',' +
	value_y3 + ',' +
	value_x4 + ',' +
	value_y4 +
	');\n';
    return code;
};


Blockly.JavaScript['p5_curve'] = function(block) {
    var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_y4 = Blockly.JavaScript.valueToCode(block, 'y4', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.curve(' +
	value_x1 + ',' +
	value_y1 + ',' +
	value_x2 + ',' +
	value_y2 + ',' +
	value_x3 + ',' +
	value_y3 + ',' +
	value_x4 + ',' +
	value_y4 +
	');\n';
    return code;
};


Blockly.JavaScript['p5_deltatime'] = function(block) {
  var code = 'P5.deltaTime';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['p5_focused'] = function(block) {
    var code = 'P5.focused';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['p5_framerate'] = function(block) {
    var value_rate = Blockly.JavaScript.valueToCode(block, 'rate', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.frameRate('+value_rate+');\n';
    return code;
};

Blockly.JavaScript['p5_framerate_get'] = function(block) {
    var code = 'P5.frameRate()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_keypressed'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.keyPressed = function() {\n'+statements_name+'};\n';
    return code;
};

Blockly.JavaScript['p5_keyreleased'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.keyReleased = function(){\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_keytyped'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = 'P5.keyTyped = function(){\n' + statements_name + '};\n';
  return code;
};

Blockly.JavaScript['p5_keyisdown'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.keyIsDown('+value_name+')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['p5_keycode'] = function(block) {
    var code = 'P5.keyCode';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['p5_key'] = function(block) {
    var code = 'P5.key';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['p5_keyispressed'] = function(block) {
    var code = 'P5.keyIsPressed';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['p5_noloop'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = 'P5.'+dropdown_name+'();\n';
    return code;
};


Blockly.JavaScript['p5_redraw'] = function(block) {
    var code = 'P5.redraw();\n';
    return code;
};

Blockly.JavaScript['p5_resizecanvas'] = function(block) {
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_noredraw = Blockly.JavaScript.valueToCode(block, 'noredraw', Blockly.JavaScript.ORDER_ATOMIC) || false;
    var code = 'P5.resizeCanvas(' +
	value_w + "," +
	value_h + "," +
	value_noredraw +
	');\n';
    return code;
};


Blockly.JavaScript['p5_nocanvas'] = function(block) {
    var code = 'P5.noCanvas();\n';
  return code;
};

Blockly.JavaScript['p5_blendmode'] = function(block) {
    var dropdown_mode = block.getFieldValue('mode');
    var code = 'P5.blendMode(P5.'+dropdown_mode+');\n';
    return code;
};

Blockly.JavaScript['p5_setattributes'] = function(block) {
    var dropdown_attribute = block.getFieldValue('attribute');
    var checkbox_checked = block.getFieldValue('checked') == 'TRUE';
    var code = 'P5.setAttributes(\''+dropdown_attribute+'\','+checkbox_checked+');\n';
    return code;
};


Blockly.JavaScript['p5_applymatrix'] = function(block) {
    var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_e = Blockly.JavaScript.valueToCode(block, 'e', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_f = Blockly.JavaScript.valueToCode(block, 'f', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = 'P5.applyMatrix('
	+ value_a + ','
	+ value_b + ','
	+ value_c + ','
	+ value_d + ','
	+ value_e + ','
	+ value_f + ');\n';
    return code;
};

Blockly.JavaScript['p5_resetmatrix'] = function(block) {
    var code = 'P5.resetMatrix();\n';
  return code;
};


Blockly.JavaScript['p5_rotatex'] = function(block) {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.rotateX('+value_angle+');\n';
    return code;
};


Blockly.JavaScript['p5_rotatey'] = function(block) {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    // TODO: Assemble JavaScript into code variable.
    var code = 'P5.rotateY('+value_angle+');\n';
    return code;
};


Blockly.JavaScript['p5_rotatez'] = function(block) {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.rotateZ('+value_angle+');\n';
    return code;
};

Blockly.JavaScript['p5_shearx'] = function(block) {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.shearX('+value_angle+');\n';
    return code;
};

Blockly.JavaScript['p5_sheary'] = function(block) {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.shearY('+value_angle+');\n';
    return code;
};


Blockly.JavaScript['p5_winmousex'] = function(block) {
    var code = 'P5.winMouseX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_winmousey'] = function(block) {
    var code = 'P5.winMouseY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pwinmousex'] = function(block) {
    var code = 'P5.pwinMouseX';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_pwinmousey'] = function(block) {
    var code = 'P5.pwinMouseY';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mousebutton'] = function(block) {
    var code = 'P5.mouseButton';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_mouseispressed'] = function(block) {
  var code = 'P5.mouseIsPressed';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_mousemoved'] = function(block) {
    var statements_block = Blockly.JavaScript.statementToCode(block, 'block');
    var code = 'P5.mouseMoved = function(){\n' + statements_block + '};\n';
    return code;
};

Blockly.JavaScript['p5_mousedragged'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.mouseDragged = function(){\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_mousepressed'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.mousePressed = function(){\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_mousereleased'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.mouseReleased = function(){\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_mouseclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.mouseClicked = function(){\n' + statements_name + '};\n';
    return code;
};


Blockly.JavaScript['p5_doubleclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'P5.doubleClicked = function(){\n' + statements_name + '};\n';
    return code;
};

Blockly.JavaScript['p5_constrain'] = function(block) {
    var value_n = Blockly.JavaScript.valueToCode(block, 'n', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_low = Blockly.JavaScript.valueToCode(block, 'low', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_high = Blockly.JavaScript.valueToCode(block, 'high', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.constrain('+value_n+','+value_low+','+value_high+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_exp'] = function(block) {
    var value_n = Blockly.JavaScript.valueToCode(block, 'n', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'P5.exp('+value_n+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['p5_lerp'] = function(block) {
    var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_stop = Blockly.JavaScript.valueToCode(block, 'stop', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_amt = Blockly.JavaScript.valueToCode(block, 'amt', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'P5.lerp('+value_start+','+value_stop+','+value_amt+')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['p5_mag'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'P5.mag('+value_a+','+value_b+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['modulo'] = function(block) {
    var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = value_a + " % " + value_b;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
