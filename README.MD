# PCCW Global - Technical Assessment

## 1. Test Cases Design
>*Document any possible test cases that you would perform in order to test the following form embedded in a website. Include testing about functionality, security, performance, etc.*

**Functional**
- Post button creates post with correct data
- Check max character limit on the field
- Check max character limit on the database
- Check valid and invalid characters - different languages, symbols, emojis
- Check multiple clicks of post button does not send multiple duplicate posts
- Write article button correctly opens/closes textfield
- Drag & drop file creates post attachment
- Upload button opens upload window and uploads file correctly
- Uploaded files download and open correctly
- Check supported and unsupported upload file formats

**Visual**
- Check Page styling is correct - colors, layout
- Check Page copy is correct
- Check text field expand function

**Security**
- Text field script injection - JS, HTML, SQL

**Performance**
- Check page load time
- Check time taken for post request/response complete
- Check High concurrent post requests - points where lag appears, system breakpoint

**Cross Device**
- Mobile web browser display and functionality (if supported)

## 2. Test Strategy
>*Imagine you join a team that will do a testing for google platform, how will you start to do the test plan, how to perform your testing, how will you delivery your test result. Try to design the overall test strategy if you are the owner of the google testing.*

When creating my test strategy I will consider the following areas:

**Planning:**
1. What is the reason for and objective of the testing?
- e.g. verifying a functional change + regression

2. What is the scope of the functional testing?
- Determine features to be tested 
- Determine scope of regression testing
- Determine features not required to be tested

3. Does the change also require non-functional testing?
- e.g. Performance, Security, Accessibility, User Experience

4. Automation scripts required?

5. Test schedule - What is the timeline for testing?
- Estimate effort for testing
- Estimate effort for any automation
- Determine from estimation if enough time and resources to execute scope 
- If not, how can we prioritise execution according to risk

**Execution:**
1. Pre-requisites: 
- Are test environments ready? e.g. a scaled up env for performance tests
- Any required test data ready?
- Any necessary test tools ready?
- How and where do we create test cases and test results? e.g. Test Management tool, JIRA?
- Do we have a record of traceability of tests to requirements
2. How do we store record of any non-functional testing
- e.g. Performance test results, Security report, Accessibility report
3. What is the Definition of Done?
 - e.g. all functional tests passing, no medium+ issues

**Deliverables:**
1. Who are our stakeholders for test reporting?
2. What documentation is required? 
- e.g. Test summary reports, any non-functional test reports, Test cases and results, Traceability matrix?
3. Creation of Automation scripts?

## 3. Test Script Development
>Write an automated test script to verify the login functionality of a web application. The test script should:
>- Open the web application in a browser.
>- Enter valid credentials (username and password) and submit the login form.
>- Verify that the user is successfully logged in by checking for a specific element or page title.
The Login Page:  https://practicetestautomation.com/practice-test-login

Created script in tests/login.spec.ts