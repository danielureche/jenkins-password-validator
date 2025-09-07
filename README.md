# 🔐 Password Validator

Simple Node.js project that validates password strength based on rules:

- Minimum 8 characters
- At least one uppercase letter
- At least one number
- At least one special character

Includes **unit tests with Jest** and a **Jenkins Declarative Pipeline** that runs inside Docker.

---

## 🚀 Requirements

- [Node.js](https://nodejs.org/) (for local testing)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Jenkins](https://www.jenkins.io/) running in a Docker container with access to Docker.

---

## 🧪 Run locally

```bash
npm install
npm test
```

## ⚙️ Jenkins Pipeline Setup

This project includes a `Jenkinsfile` in the repository, so Jenkins can read it directly.

1. Open Jenkins: http://localhost:8080
2. Go to **New Item**.
3. Select **Pipeline** and name it (e.g., `Password-Validator`).
4. In **Pipeline**, choose **Pipeline script from SCM**.
5. Select **Git** and paste your repo URL:

```
https://github.com/YOUR-USER/password-validator.git
```

6. Set branch to `main`.
7. Save and run the pipeline.

## 📌 Notes

- The pipeline is written in **Declarative Jenkins Pipeline**.
- The build runs inside a **Node.js 18 Docker container**.
- On each run:
  - The repo is cloned.
  - Dependencies are installed.
  - Tests are executed with Jest.

✅ If tests pass → `All tests passed successfully!`
❌ If tests fail → `Some tests failed. Check logs.`
