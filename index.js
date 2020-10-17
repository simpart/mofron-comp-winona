/**
 * @file mofron-comp-winona/index.js
 * @brief winona button component for mofron
 *        this source based on the codrops: https://github.com/codrops/ButtonStylesInspiration
 * @license MIT
 */
const Button = require("mofron-comp-button");
const Style  = require("mofron-event-style");
const css    = require("./winona.css");
const comutl = mofron.util.common;

module.exports = class extends Button {
    /**
     * initialize component
     * 
     * @param (mixed) text: button text contents
     *                dict: component config
     * @short text
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name("Winona");
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.childDom().class("winona");

            comutl.addstyle("winona", css, false);
	    
            this.text().event(new Style(
	        (fs1,fs2) => {
		    try {
		        comutl.addstyle(
			    "winona",
			    ".winona::after{font-size:" + fs2[0] + ";}"
			);
		    } catch (e) {
                        console.error(e.stack);
                        throw e;
		    }
		},
		"font-size"
	    ));
	    
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text contents
     * 
     * @param (mixed) string: button text contents
     *                mofron-comp-text: button text component
     * @param (mixed) text component config
     * @return (mofron-comp-text) button text
     * @type parameter
     */
    text (prm, cnf) {
        try {
	    if (undefined !== prm) {
                this.childDom().attrs({
		    "data-text" : (true === comutl.iscmp(prm)) ? prm.text() : prm
		});
	    }
	    return super.text(prm, cnf);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * button background color
     *
     * @param (mixed (color)) string: button background color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @return (mixed) button background color
     *                 null: not set yet
     * @type parameter
     */
    baseColor (prm) {
        try {
	    if (undefined !== prm) {
	        let style = comutl.obj2style(
	            "#" + this.childDom().id() + ":hover",
		    { "background-color" : comutl.getcolor(prm).toString() }
                );
                comutl.addstyle(this.id(), style);
            }
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * button border,text color
     * 
     * @param (mixed (color)) string: button background color name, #hex
     *                        array: [red, green, blue, (alpha)]
     *                        undefined: call as getter
     * @return (mixed) button accent color
     *                 null: not set yet
     * @type parameter
     */
    accentColor (prm,opt) {
        try {
	    let ret = super.accentColor(prm,opt);
            
            if (undefined !== prm) {
                let style = comutl.obj2style(
                    "#" + this.childDom().id() + ":hover",
                    { "color" : comutl.getcolor(prm).toString() }
                );
                comutl.addstyle(this.id(), style);
            }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
