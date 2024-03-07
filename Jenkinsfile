pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                bat 'npm install -g truffle'
                bat 'npm install'
            }
        }

        stage('Compile') {
            steps {
                bat 'truffle compile'
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

    post {
        always {
            archiveArtifacts artifacts: '**/build/contracts/*.json', fingerprint: true
        }
    }
}
