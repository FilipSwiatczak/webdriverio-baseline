###WebdriverIO Baseline project with Cucumber

This project is a ready to go foundation for using WebdriverIO v5 framework with Typescript and Cucumber.

Run `npm run test` for basic Google search test in Chrome

####Project highlights:
 - **Page Object** pattern [showcase](src/page-objects/google-check.po.ts)
 - **Composition pattern** [showcase](src/web-elements) - wrapping common web elements like buttons, dropdowns and text fields for stable re-use and encapsulation
 - Cucumber WDIO config set up - [wdio.conf.js](config/wdio.conf.js)
 - beautiful **Cucumber reporter** by _Wim Selles_ [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter) all set up [here](src/lib/multipleCucumberReporter.js) 
 - **Winston** logger configured [here](src/lib/winston-logger.ts)
 - centralised and readable **wait time control** under [timeouts](src/data/timeouts.ts)

With this base, you can simply copy paste new step definitions and page objects and scale your coverage with speed and confidence.

Feel free to visit [my Medium](https://medium.com/beargineer) for more detailed content on pattern usage in automation.

Thank you. I aim to continuously expand this baseline over time. All feedback is welcome.

![alt text](https://cdn-images-1.medium.com/max/249/1*y_euvEopwrhPAT2meoPTkg@2x.png)