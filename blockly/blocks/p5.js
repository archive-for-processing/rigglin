'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.Constants.Colour.HUE = 20;

Blockly.defineBlocksWithJsonArray([


{
    "type": "p5_createCanvas",
    "message0": "createCanvas %1 width %2 height %3",
    "args0": [
	{
	    "type": "input_dummy"
	},
	{
	    "type": "input_value",
	    "name": "width",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "height",
	    "check": "Number",
	    "align": "RIGHT"
	}
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "create a canvas",
    "helpUrl": "call this function to create a processing canvas"
}
    ,
    

{
  "type": "p5_background",
  "message0": "background %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "clear canvas with color",
  "helpUrl": "clear canvas with color"
}    ,
    

{
  "type": "p5_point",
  "message0": "point %1 x %2 y %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "draw a point",
  "helpUrl": "call this function to draw a point"
}
    ,
    
{
    "type": "p5_line",
    "message0": "line %1 x1 %2 y1 %3 x2 %4 y2 %5",
    "args0": [
	{
	    "type": "input_dummy"
	},
	{
	    "type": "input_value",
	    "name": "x1",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "y1",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "x2",
	    "check": "Number",
	    "align": "RIGHT"
	},
	{
	    "type": "input_value",
	    "name": "y2",
	    "check": "Number",
	    "align": "RIGHT"
	}
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "draw a line",
    "helpUrl": "call this function to draw a line from x1,y1 to x2,y2"
}   
    ,
    {
	"type": "p5_width",
	"message0": "width",
	"output": null,
	"colour": 230,
	"tooltip": "width of canvas",
	"helpUrl": "width of canvas"
    }
    ,
    {
	"type": "p5_height",
	"message0": "height",
	"output": null,
	"colour": 230,
	"tooltip": "height of canvas",
	"helpUrl": "height of canvas"
    }
    
    ,
        {
	"type": "p5_frameCount",
	"message0": "frameCount",
	"output": null,
	"colour": 230,
	"tooltip": "number of frames since beginning of run",
	"helpUrl": "number of frames since beginning of run"
    }
    
    ,
        {
	"type": "p5_mouseX",
	"message0": "mouseX",
	"output": null,
	"colour": 230,
	"tooltip": "horizontal component of mouse position",
	"helpUrl": "horizontal component of mouse position"
    }
    
    ,
        {
	"type": "p5_mouseY",
	"message0": "mouseY",
	"output": null,
	"colour": 230,
	"tooltip": "vertical component of mouse position",
	"helpUrl": "vertical component of mouse position"
    }
    
    ,
        {
	"type": "p5_pmouseX",
	"message0": "pmouseX",
	"output": null,
	"colour": 230,
	"tooltip": "previous horizontal component of mouse position",
	"helpUrl": "previous horizontal component of mouse position"
    }
    
    ,
        {
	"type": "p5_pmouseY",
	"message0": "pmouseY",
	"output": null,
	"colour": 230,
	"tooltip": "previous vertical component of mouse position",
	"helpUrl": "previous vertical component of mouse position"
    }
    
    ,

    {
  "type": "p5_stroke",
  "message0": "stroke %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "change stroke color",
  "helpUrl": "change stroke color"
}
    ,

 {
  "type": "p5_fill",
  "message0": "fill %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "change fill color",
  "helpUrl": "change fill color"
 }

    ,

    {
	"type": "p5_setup",
	"message0": "setup %1 %2",
	"args0": [
	    {
		"type": "input_dummy"
	    },
	    {
		"type": "input_statement",
		"name": "NAME"
	    }
	],
	"colour": 230,
	"tooltip": "setup event",
	"helpUrl": "setup event"
    }
    
    ,
    {
	"type": "p5_draw",
	"message0": "draw %1 %2",
	"args0": [
	    {
		"type": "input_dummy"
	    },
	    {
		"type": "input_statement",
		"name": "NAME"
	    }
	],
	"colour": 230,
	"tooltip": "setup event",
	"helpUrl": "setup event"
    }
    
    ,
    {
  "type": "p5_rect",
  "message0": "rect %1 x %2 y %3 width %4 height %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "clear canvas with color",
  "helpUrl": "clear canvas with color"
    }
    
    ,

    {
  "type": "p5_dist",
  "message0": "dist %1 x1 %2 y1 %3 x2 %4 y2 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "calculate distance between two points",
  "helpUrl": "calculate distance between two points"
    }
    ,
    {
  "type": "p5_wantspvector",
  "message0": "wantspvector %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
	"check": "p5.Vector"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

    ,

    {
	"type": "p5_createvector",
	"message0": "createVector %1 x %2 y %3 z %4",
	"args0": [
	    {
		"type": "input_dummy"
	    },
	    {
		"type": "input_value",
		"name": "x",
		"check": "Number",
		"align": "RIGHT"
	    },
	    {
		"type": "input_value",
		"name": "y",
		"check": "Number",
		"align": "RIGHT"
	    },
	    {
		"type": "input_value",
		"name": "z",
		"check": "Number",
		"align": "RIGHT"
	    }
	],
	"output": "p5.Vector",
	"colour": 230,
	"tooltip": "create a new PVector",
	"helpUrl": "create a new PVector"
    }


    ,

    {
  "type": "p5_vector_get",
  "message0": "get %1 %2 of p5.Vector %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "varname",
      "options": [
        [
          "x",
          "x"
        ],
        [
          "y",
          "y"
        ],
        [
          "z",
          "z"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "that",
      "check": "p5.Vector"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "get a component of a p5.Vector",
  "helpUrl": "get a component of a p5.Vector"
    }
    
    ,

    {
  "type": "p5_text",
  "message0": "text %1 string %2 x %3 y %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "string",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "render text on the canvas",
  "helpUrl": "render text on the canvas"
    }

    ,

{
  "type": "p5_loadfont",
  "message0": "loadFont %1 or URL %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "assets/inconsolata.otf",
          "assets/inconsolata.otf"
        ],
        [
          "assets/AbrilFatface-Regular.otf",
          "assets/AbrilFatface-Regular.otf"
        ],
        [
          "assets/Compagnon-Light.otf",
          "assets/Compagnon-Light.otf"
        ],
        [
          "assets/Compagnon-Roman.otf",
          "assets/Compagnon-Roman.otf"
        ],
        [
          "assets/D-DINCondensed-Bold.otf",
          "assets/D-DINCondensed-Bold.otf"
        ],
        [
          "assets/GlacialIndifference-Regular.otf",
          "assets/GlacialIndifference-Regular.otf"
        ],
        [
          "assets/VictorMono-Medium.otf",
          "assets/VictorMono-Medium.otf"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "output": "p5.Font",
  "colour": 230,
  "tooltip": "load a font file",
  "helpUrl": "load a font file"
}
    ,
    {
  "type": "p5_textfont",
  "message0": "textFont %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "p5.Font"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "change the font of the rendered text",
  "helpUrl": "change the font of the rendered text"
}
    ,

    {
  "type": "p5_textalign",
  "message0": "textAlign %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "horizAlign",
      "options": [
        [
          "LEFT",
          "LEFT"
        ],
        [
          "CENTER",
          "CENTER"
        ],
        [
          "RIGHT",
          "RIGHT"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "vertAlign",
      "options": [
        [
          "TOP",
          "TOP"
        ],
        [
          "BOTTOM",
          "BOTTOM"
        ],
        [
          "CENTER",
          "CENTER"
        ],
        [
          "BASELINE",
          "BASELINE"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets the current alignment for drawing text.",
  "helpUrl": "https://p5js.org/reference/#/p5/textAlign"
}

    ,

    {
  "type": "p5_textleading",
  "message0": "textLeading %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets/gets the spacing, in pixels, between lines of text. This setting will be used in all subsequent calls to the text() function.",
  "helpUrl": "https://p5js.org/reference/#/p5/textLeading"
    }

    ,

    {
  "type": "p5_textsize",
  "message0": "textSize %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets/gets the current font size. This size will be used in all subsequent calls to the text() function. Font size is measured in pixels.",
  "helpUrl": "https://p5js.org/reference/#/p5/textSize"
    }
    ,

    {
  "type": "p5_set_textstyle",
  "message0": "textStyle %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "style",
      "options": [
        [
          "NORMAL",
          "NORMAL"
        ],
        [
          "ITALIC",
          "ITALIC"
        ],
        [
          "BOLD",
          "BOLD"
        ],
        [
          "BOLDITALIC",
          "BOLDITALIC"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sets/gets the style of the text for system fonts to NORMAL, ITALIC, BOLD or BOLDITALIC. Note: this may be is overridden by CSS styling. For non-system fonts (opentype, truetype, etc.) please load styled fonts instead.",
  "helpUrl": "https://p5js.org/reference/#/p5/textStyle"
    }
    ,
    {
  "type": "p5_get_textwidth",
  "message0": "textWidth %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "Calculates and returns the width of any character or text string.",
  "helpUrl": "https://p5js.org/reference/#/p5/textWidth"
}
    ,

    {
  "type": "p5_textascent",
  "message0": "textAscent",
  "output": "Number",
  "colour": 230,
  "tooltip": "Returns the ascent of the current font at its current size. The ascent represents the distance, in pixels, of the tallest character above the baseline.",
  "helpUrl": "https://p5js.org/reference/#/p5/textAscent"
    }

    ,

    {
  "type": "p5_textdescent",
  "message0": "textDescent",
  "output": "Number",
  "colour": 230,
  "tooltip": "Returns the descent of the current font at its current size. The descent represents the distance, in pixels, of the character with the longest descender below the baseline.",
  "helpUrl": "https://p5js.org/reference/#/p5/textDescent"
    }


    ,

{
  "type": "p5_font_textbounds",
  "message0": "textBounds %1 font %2 line %3 x %4 y %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "font",
      "check": "p5.Font",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "line",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Returns a tight bounding box for the given text string using this font (currently only supports single lines)",
  "helpUrl": "https://p5js.org/reference/#/p5.Font/textBounds"
}    

    ,

    {
  "type": "p5_font_texttopoints",
  "message0": "textToPoints %1 font %2 txt %3 x %4 y %5 fontsize %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "font",
      "check": "p5.Font",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "txt",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "fontsize",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Computes an array of points following the path for specified text",
  "helpUrl": "https://p5js.org/reference/#/p5.Font/textToPoints"
    }
    ,

    {
  "type": "p5_clear",
  "message0": "clear",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Clears the pixels within a buffer. This function only clears the canvas. ",
  "helpUrl": "https://p5js.org/reference/#/p5/clear"
    }
    ,

    {
  "type": "p5_colormode",
  "message0": "colorMode %1 with max %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "RGB",
          "RGB"
        ],
        [
          "HSB",
          "HSB"
        ],
        [
          "HSL",
          "HSL"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "mode",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "colorMode() changes the way p5.js interprets color data.",
  "helpUrl": "https://p5js.org/reference/#/p5/colorMode"
    }

    ,

    {
  "type": "p5_nofill",
  "message0": "noFill",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Disables filling geometry. If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
  "helpUrl": "https://p5js.org/reference/#/p5/noFill"
    }

    ,

    {
  "type": "p5_nostroke",
  "message0": "noStroke",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
  "helpUrl": "https://p5js.org/reference/#/p5/noStroke"
    }

    ,

    {
  "type": "p5_color",
  "message0": "color %1 a %2 b %3 c %4 d %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "a",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "c",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "d",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "p5.Color",
  "colour": 230,
  "tooltip": "Creates colors for storing in variables of the color datatype. ",
  "helpUrl": "https://p5js.org/reference/#/p5/color"
    }

    
    
]);  // END JSON EXTRACT (Do not delete this comment.)

