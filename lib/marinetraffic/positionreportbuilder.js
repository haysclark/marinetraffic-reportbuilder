'use strict';

const moment = require('moment');

/**
 *  Marine Traffic Position Report Builder
 *
 *  This builder creates a standard positions report expected by Marine Traffic.
 *  https://help.marinetraffic.com/hc/en-us/articles/205327427-Can-I-e-mail-my-position-reports-to-you
 */
module.exports = class PositionReportBuilder {

    /**
     * Creates the standard position report builder instance.
     *
     * @param mmsi
     * @param latitude
     * @param longitude
     * @param speed
     * @param course
     * @param timestamp
     */
    constructor(mmsi, latitude, longitude, speed, course, timestamp) {
        this.setMmsi(mmsi);
        this.setLatitude(latitude);
        this.setLongitude(longitude);
        this.setSpeed(speed);
        this.setCourse(course);
        this.setTimestamp(timestamp);
    }

    /**
     * Sets the MMSI
     * expected format 367725690
     *
     * @param mmsi
     */
    setMmsi(mmsi) {
        this.mmsi = mmsi;
    }

    /**
     * Sets the latitude
     * expected format 48.4929646
     *
     * @param latitude
     */
    setLatitude(latitude) {
        this.latitude = latitude;
    }

    /**
     * Sets the longitude
     * expected format -122.6803961
     *
     * @param longitude
     */
    setLongitude(longitude) {
        this.longitude = longitude;
    }

    /**
     * Sets the speed
     * expected format 0
     *
     * @param speed
     */
    setSpeed(speed) {
        this.speed = speed;
    }

    /**
     * Sets the course
     * expected format 003
     *
     * @param course
     */
    setCourse(course) {
        this.course = course;
    }

    /**
     * Set the timestamp
     * expected format "2016-05-02 22:00"
     *
     * @param timestamp
     */
    setTimestamp(timestamp) {
        this.timestamp = moment(timestamp)
            .format('YYYY-MM-DD HH:mm');
    }

    /**
     * Build the Position Report message body.
     *
     * @returns {string}
     */
    build() {
        let message = '________________\n';
        message += 'MMSI=' + this.mmsi + '\n';
        message += 'LAT=' + this.latitude + '\n';
        message += 'LON=' + this.longitude + '\n';
        message += 'SPEED=' + this.speed + '\n';
        message += 'COURSE=' + this.course + '\n';
        message += 'TIMESTAMP=' + this.timestamp + '\n';
        message += '________________';
        return message;
    }
};
