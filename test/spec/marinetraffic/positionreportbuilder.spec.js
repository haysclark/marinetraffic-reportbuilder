'use strict';

const PositionReportBuilder = require('../../../lib/marinetraffic/positionreportbuilder');

describe('PositionReportBuilder', function () {
    const mmsi = '327725610';
    const latitude = '48.4929646';
    const longitude = '-122.6803961';
    const speed = '0';
    const course = '005';
    const timestamp = '2016-05-02 22:00';

    let builder = null;

    before(function () {
        builder = new PositionReportBuilder();
    });

    after(function () {
        builder = null;
    });

    it('should be instanciated', function () {
        expect(builder).to.not.be.null;
    });

    it('should have a build function', function () {
        expect(builder.build).to.be.ok;
    });

    describe('build()', function () {

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
            expect(result).to.be.a('string');
        });

        it('should return report that starts with line of underscores', function () {
            let lines = builder.build()
                .split('\n');
            expect(lines.length > 0).to.be.ok;
            expect(lines[0]).to.equal('________________');
        });

        it('should return report that ends with line of underscores', function () {
            let lines = builder.build()
                .split('\n');
            expect(lines.length >= 2).to.be.ok;
            expect(lines[lines.length - 1]).to.equal('________________');
        });

        it('should return report with expected MMSI value', function () {
            let result = builder.build();
            expect(result).to.include('MMSI=' + mmsi);
        });

        it('should return report with expected latitude value', function () {
            let result = builder.build();
            expect(result).to.include('LAT=' + latitude);
        });

        it('should return report with expected longitude value', function () {
            let result = builder.build();
            expect(result).to.include('LON=' + longitude);
        });

        it('should return report with expected speed value', function () {
            let result = builder.build();
            expect(result).to.include('SPEED=' + speed);
        });

        it('should return report with expected course value', function () {
            let result = builder.build();
            expect(result).to.include('COURSE=' + course);
        });

        it('should return report with expected timestamp value', function () {
            let result = builder.build();
            expect(result).to.include('TIMESTAMP=' + timestamp);
        });
    });

    it('should have a setMmsi function', function () {
        expect(builder.setMmsi).to.be.ok;
    });

    describe('setMmsi()', function () {
        it('should set the reports MMSI', function () {
            let expected = 'abcdefg';
            builder.setMmsi(expected);
            let result = builder.build();
            expect(result).to.include('MMSI=' + expected);
        });
    });

    it('should have a setLatitude function', function () {
        expect(builder.setLatitude).to.be.ok;
    });

    describe('setLatitude()', function () {
        it('should set the reports latitude', function () {
            let expected = 123.1234;
            builder.setLatitude(expected);
            let result = builder.build();
            expect(result).to.include('LAT=' + expected);
        });
    });

    it('should have a setLongitude function', function () {
        expect(builder.setLongitude).to.be.ok;
    });

    describe('setLongitude()', function () {
        it('should set the reports longitude', function () {
            let expected = 123.1234;
            builder.setLongitude(expected);
            let result = builder.build();
            expect(result).to.include('LON=' + expected);
        });
    });

    it('should have a setSpeed function', function () {
        expect(builder.setSpeed).to.be.ok;
    });

    describe('setSpeed()', function () {
        it('should set the reports speed', function () {
            let expected = 123.1234;
            builder.setSpeed(expected);
            let result = builder.build();
            expect(result).to.include('SPEED=' + expected);
        });
    });

    it('should have a setLongitude function', function () {
        expect(builder.setCourse).to.be.ok;
    });

    describe('setCourse()', function () {
        it('should set the reports course', function () {
            let expected = 123.1234;
            builder.setCourse(expected);
            let result = builder.build();
            expect(result).to.include('COURSE=' + expected);
        });
    });

    it('should have a setLongitude function', function () {
        expect(builder.setTimestamp).to.be.ok;
    });

    describe('setTimestamp()', function () {
        it('should set the reports timestamp with Date object', function () {
            let expected = '1999-09-19 09:09';
            builder.setTimestamp(new Date(expected));
            let result = builder.build();
            expect(result).to.include('TIMESTAMP=' + expected);
        });

        it('should set the reports timestamp with date string', function () {
            let expected = '1999-09-19 09:09';
            builder.setTimestamp(expected);
            let result = builder.build();
            expect(result).to.include('TIMESTAMP=' + expected);
        });
    });
});
