angular.module('facilities.view', [
    'ui.router'
])

    .config(function config($stateProvider) {
        $stateProvider.state('facilities-view', { // dot notation in ui-router indicates nested ui-view
            url: '/facilities/view', // TODO set facilities base path on upper level and say here /create ?
            views: {
                "main": {
                    controller: 'ViewCtrl',
                    templateUrl: 'facilities/view/view.tpl.html'
                }
            },
            data: { pageTitle: 'View Facility' }
        });
    })

    .controller('ViewCtrl', function ViewController($scope) {
    })
;
