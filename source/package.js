enyo.depends(
	// Layout library
	"$lib/layout",
	// Onyx UI library
	"$lib/onyx",	// To theme Onyx using Theme.less, change this line to $lib/onyx/source,
        // ilib, locale for date
        "$lib/enyo-ilib",
        //g11n lib
        "$lib/g11n",
	//"Theme.less",	// uncomment this line, and follow the steps described in Theme.less
	// CSS/LESS style files
	"style",
	// Model and data definitions
	"data",
	// View kind definitions
	"views",
	// Include our default entry point
	"app.js"
);