pipeline {
    agent any
    stages {
        stage('Clone repo') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/danielureche/jenkins-password-validator.git'
            }
        }
        stage('Build & Test in Node') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
    }
    post {
        success {
            echo '✅ All tests passed successfully!'
        }
        failure {
            echo '❌ Some tests failed. Check logs.'
        }
    }
}
