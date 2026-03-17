# Playwright Agent Demo 🎭🤖

![Playwright](https://img.shields.io/badge/-Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

A comprehensive, end-to-end test automation framework built with [Playwright](https://playwright.dev/) and TypeScript. This project serves as an automated test suite demonstrating various UI testing capabilities by automating the popular e-commerce test website [Automation Exercise](https://automationexercise.com).

## 📋 Features

- **End-to-End Testing**: Complete user flows including authentication, shopping cart, product browsing, and checkout.
- **Cross-browser Testing**: Configured for Chromium, Firefox, and WebKit.
- **Parallel Execution**: Tests are configured to run fully in parallel for faster execution.
- **TypeScript Support**: Strongly typed tests for better maintainability and error catching.
- **Automatic Retries**: Built-in test retries for CI pipeline stability.
- **HTML Reporting**: Detailed HTML reports with trace viewing enabled on retries.

## 🗂️ Project Structure

- `tests/` - Contains all E2E test files organized by feature:
  - `auth.spec.ts`: Authentication flows (Login/Signup/Logout).
  - `cart.spec.ts`: Shopping cart functionality (Add, update, view).
  - `contact.spec.ts`: Contact Us form validation and submission.
  - `products.spec.ts` & `product_details.spec.ts`: Product catalog browsing and detail views.
  - `navigation.spec.ts`: Site-wide navigation checks and active state validations.
  - `ui.spec.ts`: General UI component interactions and layout assertions.
  - `seed.spec.ts`: Test data seeding functionality.
- `specs/` - Contains test plans and requirement documentation.
- `playwright.config.ts` - Central Playwright execution and project configurations.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright-agent-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers and dependencies:
   ```bash
   npx playwright install --with-deps
   ```

### 🤖 AI Agent Integration

This project was built utilizing **Playwright AI Agents** via a VS Code **MCP** (Model Context Protocol) server. There are three specialized AI agents tasked with managing the test lifecycle:

- **Planner** (`playwright-test-planner.agent.md`): Responsible for understanding requirements and structuring the test plans.
- **Generator** (`playwright-test-generator.agent.md`): Responsible for writing the actual Playwright test code based on the plans.
- **Healer** (`playwright-test-healer.agent.md`): Analyzes test failures, traces, and DOM dumps to automatically fix broken tests.

#### Initializing Agents

To initialize the agents to run directly inside VS Code through the MCP loop, execute the following command:

```bash
npx playwright init-agents --loop=vscode
```

#### Additional Configurations

To successfully run and interact with these agents in your environment, you will need to configure the following:

1. **VS Code & MCP Extension**: Ensure you are using Visual Studio Code and have an appropriate AI agent extension installed (such as Cline, Roo Code, or an equivalent extension that hooks into MCP).
2. **API Keys**: Depending on the underlying LLM powering the agents (e.g., OpenAI, Anthropic), make sure you have your API key set as an environment variable (e.g., `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`) so the agents can connect to the model.
3. **Agent Definitions**: The initialization command will map internal IDE instructions to the agent definition files found inside the `.github/agents/` folder. Make sure not to manually delete or alter these core `.agent.md` files unless you are customizing the agent prompts.

## 🧪 Running Tests

Playwright comes with a rich set of CLI commands. Here are the most common ways to execute the test suite:

**Run all tests in headless mode:**
```bash
npx playwright test
```

**Run tests in UI mode (Highly recommended for debugging & authoring):**
```bash
npx playwright test --ui
```

**Run tests with a visible browser (Headed mode):**
```bash
npx playwright test --headed
```

**Run tests on a specific browser (e.g., Chromium):**
```bash
npx playwright test --project=chromium
```

**Run a specific test file:**
```bash
npx playwright test tests/cart.spec.ts
```

## 📊 Viewing Reports

After test execution completes, Playwright generates a detailed HTML report. This is automatically opened if a test fails, but you can view it manually anytime:

```bash
npx playwright show-report
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a Pull Request.

## 📄 License

This project is licensed under the ISC License. See the `LICENSE` file for details.

---
*Created as a demonstration of Playwright with AI-Agent capabilities.*
