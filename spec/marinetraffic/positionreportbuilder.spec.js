'use strict';

const PositionReportBuilder = require('../../bin/marinetraffic/positionreportbuilder');

describe('PositionReportBuilder', function() {
    const mmsi = '327725610';
    const latitude = '48.4929646';
    const longitude = '-122.6803961';
    const speed = '0';
    const course = '005';
    const timestamp = '2016-05-02 22:00';

    let builder;

    before(function () {
        builder = new PositionReportBuilder();
    });

    after(function () {
        builder = null;
    });

    it('should be instanciated', function () {
        assert.isNotNull(builder);
    });

    it('should have a build function', function () {
        assert.isFunction(builder.build);
    });

    describe('build()', function() {

        before(function () {
            builder = new PositionReportBuilder(
                mmsi,
                latitude,
                longitude,
                speed,
                course,
                new Date(timestamp)
            );
        });

        it('should return a string report', function () {
            let result = builder.build();
            assert.isString(result);
        });

        it('should return report that starts with line of underscores', function () {
            let lines = builder.build()
                .split('\n');
            assert.ok(lines.length > 0);
            assert.equal(lines[0], '________________');
        });

        it('should return report that ends with line of underscores', function () {
            let lines = builder.build()
                .split('\n');
            assert.ok(lines.length >= 2);
            assert.equal(lines[lines.length - 1], '________________');
        });

        it('should return report with expected MMSI value', function () {
            let result = builder.build();
            assert.include(result, 'MMSI=' + mmsi);
        });

        it('should return report with expected latitude value', function () {
            let result = builder.build();
            assert.include(result, 'LAT=' + latitude);
        });

        it('should return report with expected longitude value', function () {
            let result = builder.build();
            assert.include(result, 'LON=' + longitude);
        });

        it('should return report with expected speed value', function () {
            let result = builder.build();
            assert.include(result, 'SPEED=' + speed);
        });

        it('should return report with expected course value', function () {
            let result = builder.build();
            assert.include(result, 'COURSE=' + course);
        });

        it('should return report with expected timestamp value', function () {
            let result = builder.build();
            assert.include(result, 'TIMESTAMP=' + timestamp);
        });
    });

    it('should have a setMmsi function', function () {
        assert.isFunction(builder.setMmsi);
    });

    describe('setMmsi()', function() {
        it('should set the reports MMSI', function () {
            let expected = 'abcdefg';
            builder.setMmsi(expected);
            let result = builder.build();
            assert.include(result, 'MMSI=' + expected);
        });
    });

    it('should have a setLatitude function', function () {
        assert.isFunction(builder.setLatitude);
    });

    describe('setLatitude()', function() {
        it('should set the reports latitude', function () {
			let expected = 123.1234;
            builder.setLatitude(expected);
            let result = builder.build();
            assert.include(result, 'LAT=' + expected);
        });
    });

    it('should have a setLongitude function', function () {
        assert.isFunction(builder.setLongitude);
    });

    describe('setLongitude()', function() {
        it('should set the reports longitude', function () {
            let expected = 123.1234;
            builder.setLongitude(expected);
            let result = builder.build();
            assert.include(result, 'LON=' + expected);
        });
    });

    it('should have a setSpeed function', function () {
        assert.isFunction(builder.setSpeed);
    });

    describe('setSpeed()', function() {
        it('should set the reports speed', function () {
            let expected = 123.1234;
            builder.setSpeed(expected);
            let result = builder.build();
            assert.include(result, 'SPEED=' + expected);
        });
    });

    it('should have a setLongitude function', function () {
        assert.isFunction(builder.setCourse);
    });

    describe('setCourse()', function() {
        it('should set the reports course', function () {
            let expected = 123.1234;
            builder.setCourse(expected);
            let result = builder.build();
            assert.include(result, 'COURSE=' + expected);
        });
    });

    it('should have a setLongitude function', function () {
        assert.isFunction(builder.setTimestamp);
    });

    describe('setTimestamp()', function() {
        it('should set the reports timestamp with Date object', function () {
            let expected = '1999-09-19 09:09';
            builder.setTimestamp(new Date(expected));
            let result = builder.build();
            assert.include(result, 'TIMESTAMP=' + expected);
        });

        it('should set the reports timestamp with date string', function () {
            let expected = '1999-09-19 09:09';
            builder.setTimestamp(expected);
            let result = builder.build();
            assert.include(result, 'TIMESTAMP=' + expected);
        });
    });
});
