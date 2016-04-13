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


;/**globals ujs */

/**
 *  ujs utilities functions
 *  add diverse utilities
 *
 */

if (window.ujs === undefined) {
    window.ujs = {};
}




(function( ujs ){

    "use strict";

    /**
     * extend one object with a second one,
     * overriding first object if "override" is true
     *
     * @param o1        {object}    the object to be extended : receives new keys
     * @param o2        {object}    the object that extends or overrides : sets new keys or overrides existing if asked
     * @param override  {boolean}   set to true : o2 properties override o1's, false, : just extend with new props
     * @returns {object}
     */
    ujs.extend = function ( o1, o2, override ) {

        var prop;

        for ( prop in o2 ) {
            if ( o2.hasOwnProperty( prop ) ) {

                if ( o1[ prop ] ) {
                    if ( override === true ) {
                        o1[ prop ] = o2[ prop ];
                    }
                } else {
                    o1[ prop ] = o2[ prop ];
                }
            }

        }

        return o1;

    };


    ujs.generateUID = (function () {

        return function () {

            function s4 () {
                return Math.floor( (1 + Math.random() * (new Date()).getTime() ) * 0x10000 )
                    .toString( 16 )
                    .substring( 1 );
            }

            return (new Date()).getTime() + '_' + s4() + s4();

        };

    }());


}( window.ujs ));
