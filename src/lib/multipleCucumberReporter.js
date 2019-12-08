const currentDate = new Date();
const report = require('multiple-cucumber-html-reporter');
const p = require('path');

const options = {
    customMetadata: false,
    displayDuration: true,
    durationInMS: false,
    disableLog: false,
    jsonDir: p.join(__dirname, '../..', '\.tmp', 'json'),
    openReportInBrowser: false,
    reportPath: p.join(__dirname, '../..', '\.tmp', 'report'),
    saveCollectedJSON: false,
    customData: {
        title: 'Information',
        data: [{
            label: 'Project',
            value: 'WDIO Baseline'
        },
        {   label: 'Build',
            value: 'Build name'
        },
        {
            label: 'Start date',
            value: currentDate.getDate() + '/' +
                (currentDate.getMonth() + 1) + '/' +
                currentDate.getFullYear()
        },
        {
            label: 'Start time',
            value: currentDate.getHours() + ':' +
                currentDate.getMinutes()
        }
        ]
    },
    pageTitle: 'WebdriverIO Baseline Automation Report ' + currentDate.getDate() + '/' +
        (currentDate.getMonth() + 1) + '/' +
        currentDate.getFullYear(),
    reportName: 'WebdriverIO Baseline Automation Report'
};

module.exports = {
    generateReport() {
        return report.generate(options);
    }
};