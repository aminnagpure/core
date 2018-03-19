module.exports = {};
const atob = require('atob');
const btoa = require('btoa');
const JDB = require('jungle-db');
const fs = require('fs');
const dns = require('dns');
const https = require('https');
const WebSocket = require('ws');

global.Class = {
    register: clazz => {
        module.exports[clazz.prototype.constructor.name] = clazz;
    }
};
