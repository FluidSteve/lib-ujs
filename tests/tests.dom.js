module("UJS DOM tests");


test('ujs.hasClass', function() {

    var testedFuncName = 'ujs.hasClass',
        el = document.createElement('div' ),
        className = "laclasse";

    el.setAttribute('class', className );

    // test function on valid el and className
    equal(
                ujs.hasClass( el, className ),
                true,
                testedFuncName + ' : el hasClass returns true if el hasClass '
    );
    notEqual(
                ujs.hasClass( el, 'lol' ),
                true,
                testedFuncName + ' : el hasClass returns false if el not hasClass '
    );

    // test missing params
    equal( ujs.hasClass( null, className ), false,  testedFuncName + ' : el hasClass returns false if el param missing ' );
    equal( ujs.hasClass( el, undefined ), false,  testedFuncName + ' : el hasClass returns false if className param missing ' );

    // test invalid params
    equal( ujs.hasClass( 'lol', className ), false,  testedFuncName + ' : el hasClass returns false if el is a String ' );
    equal( ujs.hasClass( [], className ), false,  testedFuncName + ' : el hasClass returns false if el is an Array ' );
    equal( ujs.hasClass( {classlist : function(){} }, className ), false,  testedFuncName + ' : el hasClass returns false if el is an Object ' );
    equal( ujs.hasClass( el, {} ), false,  testedFuncName + ' : el hasClass returns false if className is not a string ' );

});

