# Rigglin

How easy and fun can we make learning to program for artists?

Rigglin is a bridge between p5js and Blockly. It implements a language
binding to the actual p5js engine.

Rigglin is a Blockly-leaning Processing, which means it's not an attempt
at bringing reduntant stuff over from Processing. Since Blockly
already has a color system, we will use that instead. Precise color
control can also be provided through additional implementation, but
both should be available. One for ease of use, and one for advanced
control.

![](screenshot1.png)



## Installing
visit http://rigglin.appspot.com
or launch `index.html` in a browser

---

## Compiling:
	cd to blockly/ and run `gulp`
	copy to static:
		/msg
		/media
		/demo
		/*_compressed.js
	
## Developing:
	cd into blockly/appengine
	run `gcloud app deploy`

## Adding New Blocks

todo: write this
