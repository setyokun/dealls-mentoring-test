# Dealls Mentoring Test 

![CI](https://github.com/setyokun/dealls-mentoring-test/actions/workflows/gh-action.yml/badge.svg)


## Description

This project automates the **mentoring feature** in the Dealls application using Cypress.  
Specifically, it tests the **mentoring session booking** process with an **available mentor** under the topic **Career Planning**.

## 🔧 Tech Stack

- [Cypress](https://www.cypress.io/) — for automation testing  
- [Node.js](https://nodejs.org/) — JavaScript runtime  
- [npm](https://www.npmjs.com/) — package manager  
- **GitHub Actions** — CI/CD pipeline runner  
- **Cypress Dashboard** — for monitoring and visualizing test results

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/         # GitHub Actions workflow
├── cypress/
│   ├── e2e/               # End-to-end test files
│   ├── fixtures/          # Test data & file upload
│   ├── results/           # Test result output
│   └── support/
│       ├── commands/      # Custom commands
│       └── pages/         # Page Object files
├── cypress.config.js      # Cypress configuration
├── package.json
└── README.md
```

## 🚀 Setup & Running the Test Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/setyokun/dealls-mentoring-test.git
   cd dealls-mentoring-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the test:

   ```bash
   npx cypress open
   ```

   or Run as headless

   ```bash
   npx cypress run
   ```

## 🤖 CI/CD with GitHub Actions

This project uses **GitHub Actions** to automatically run Cypress tests in the following scenarios:

### Automatic Triggers:
- On **push to the `master` branch**
- When **creating a pull request targeting `master`**

### Manual Trigger via GitHub UI:
1. Go to the GitHub repository:  
   [https://github.com/setyokun/dealls-mentoring-test](https://github.com/setyokun/dealls-mentoring-test)
2. Click the **"Actions"** tab
3. Select the **`Dealls Mentoring Test - CI`** workflow
4. Click **"Run workflow"**
5. Choose:
   - Branch: `master`
   - Browser: `chrome` or `firefox`(another options)
6. Click the green **"Run workflow"** button

### Cypress Dashboard Integration

This CI pipeline is integrated with the [Cypress Dashboard](https://www.cypress.io/dashboard/), which allows you to:

- View test results in real-time
- Store videos and screenshots of test runs
- Analyze historical test results
- Debug more efficiently when tests fail

> All test runs will be automatically recorded and sent to the Cypress Dashboard.
