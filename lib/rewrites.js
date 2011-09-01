/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/welcome'},
    {from: '/history', 'to': '_list/history/tests_by_created'},
    {from: '*', to: '_show/not_found'}
];
