/**globals ujs */

/**
 *  ujs utilities functions
 *  add DOM manipulation facilities
 *
 */

if ( window.ujs === undefined ) {
    window.ujs = {};
}

(function ( ujs ) {

    "use strict";


    /**
     * test if el has class "className"
     *
     * el.classlist isn't supported in IE9- and opera mini
     *
     * @param el
     * @param className
     */
    ujs.hasClass = function ( el, className ) {

        // check params existence and validity
        if ( !el || !className || typeof className !== 'string' ) {
            return false;
        }

        // use available browser capacities
        if ( el.classList ) {
            return el.classList.contains( className );
        }
        return new RegExp( '(^| )' + className + '( |$)', 'gi' ).test( el.className );

    };


    ujs.addClass = function ( el, className ) {

        if ( !el || !className || typeof className !== 'string' ) {
            return false;
        }
        if (el.classList) {
            el.classList.add( className );
        } else {
            el.className += ' ' + className;
        }
    };

}( window.ujs ));


