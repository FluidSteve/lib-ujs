module("UJS UTILS Tests");

test('ujs.extend', function() {

    var testedFuncName = 'ujs.extend',
        obj1 = {
            prop1 : 'initialProp1',
            prop2 : 'initialProp2'
        },
        obj2 = {
            prop2 : 'modifiedProp2',
            prop3 : 'addedProp3'
        };

    propEqual(
        ujs.extend( obj1, obj2, false ),
        {
            prop1 : 'initialProp1',
            prop2 : 'initialProp2',
            prop3 : 'addedProp3'
        }
    );
    notPropEqual(
        ujs.extend( obj1, obj2, true ),
        {
            prop1 : 'initialProp1',
            prop2 : 'initialProp2',
            prop3 : 'addedProp3'
        }
    );
    propEqual(
        ujs.extend( obj1, obj2, true ),
        {
            prop1 : 'initialProp1',
            prop2 : 'modifiedProp2',
            prop3 : 'addedProp3'
        }
    );
    notEqual(false, "false", '// false notEqual "false"');
});

test('ujs.generateUID', function() {

    var testedFuncName = 'ujs.generateUID';

    // test if 2 generated UID's are not equal
    notEqual( ujs.generateUID(), ujs.generateUID(), testedFuncName + ' generated 2 different UID\'s');


});

