pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install -g truffle'
                bat 'npm install -g ganache-cli'
            }
        }

        stage('Start Ganache') {
            steps {
                bat 'start /b ganache-cli > ganache-output.txt 2>&1'
                sleep 15  // Wait for Ganache to start
            }
        }

        stage('Checkout') {
            steps {
                // Assuming you're using Git as source code management tool
                git 'https://github.com/your-repo/your-project.git'
            }
        }

        stage('Compile and Migrate') {
            steps {
                bat 'truffle compile'
                bat 'truffle migrate'
            }
        }

        stage('Test') {
            steps {
                bat 'truffle test'
            }
        }

        stage('Deploy') {
            steps {
                bat 'truffle migrate'
            }
        }
    }
}
