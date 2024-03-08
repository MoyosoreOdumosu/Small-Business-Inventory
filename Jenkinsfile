pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install -g truffle'
                bat 'npm install -g ganache'
            }
        }

        stage('Start Ganache') {
            steps {
                bat 'start /b ganache > ganache-output.txt 2>&1'
                sleep 15  // Wait for Ganache to start
            }
        }

        stage('Checkout') {
            steps {
                // using Git as source code management tool
                git 'https://github.com/MoyosoreOdumosu/Small-Business-Inventory.git'
            }
        }

        stage('Test') {
            steps {
                bat 'truffle test'
            }
        }

        stage('Compile and Migrate') {
            steps {
                bat 'truffle compile'
                bat 'truffle migrate'
            }
        }

        
        stage('Deploy') {
            steps {
                bat 'truffle Deploy'
            }
        }
    }
}
