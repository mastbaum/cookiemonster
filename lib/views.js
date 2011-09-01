/**
 * Show functions to be exported from the design doc.
 */

exports.tests_by_created = {
    map: function(doc) {
        emit(doc.loc, {'type': doc.type, 'loc': doc.loc});
    }
};

