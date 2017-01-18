Marine Traffic Self Reporter [![Build Status](https://travis-ci.org/haysclark/marinetraffic-reportbuilder.svg)](https://travis-ci.org/haysclark/marinetraffic-reportbuilder)[![Coverage Status](https://coveralls.io/repos/haysclark/marinetraffic-reportbuilder/badge.svg?branch=develop&service=github)](https://coveralls.io/github/haysclark/marinetraffic-reportbuilder?branch=develop)[![npm version](https://badge.fury.io/js/marinetraffic-reportbuilder.svg)](http://badge.fury.io/js/marinetraffic-reportbuilder)
============================

A builder for creating Marine Traffic position reports.

Installation
------------

    npm install marinetraffic-reportbuilder --save

Usage
-----

    var reportbuilder = require('marinetraffic-reportbuilder');
    var report = new PositionReportBuilder(
                    '327725610',
                    '48.4929646',
                    '-122.6803961',
                    4,
                    005,
                    new Date('2016-05-02 22:00')
                ).build();

Tests
-----

    npm test
    npm run coverage

Contributing
------------

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

Release History
---------------

* 0.0.1 alpha release