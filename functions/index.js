const admin = require('firebase-admin');
admin.initializeApp();
const config = require('./config.json');
const functions = require('firebase-functions');
let fireactjsSaasFunctions =  require('@fireactjs/saas-cloud-functions')({config: config, admin: admin, functions: functions});
exports.fireactjsSaas = fireactjsSaasFunctions;