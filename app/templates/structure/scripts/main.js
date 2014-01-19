require.config({

	baseUrl: './scripts',

    paths: {
		jquery: '../bower_components/jquery/jquery',
		modernizr: '../bower_components/modernizr/modernizr',
		underscore: '../bower_components/underscore/underscore',
		backbone:  '../bower_components/backbone/backbone',
		text:  '../bower_components/requirejs-text/text',
		app: 'js/app',
		// views:'js/app/views',
        tpl: 'js/tpl'
    },

    map: {
        '*': {
            'app/models/employee': 'app/models/memory/employee'
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

/* 'app' here is an example how to include file */
require(['app','jquery', 'backbone', 'app/router'], function (app,$, Backbone, Router) {
	'use strict';
    var router = new Router();
	console.log(app);
    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    Backbone.history.start();
});