pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                script {
                    try {
                        bat 'npm init -y'
                        bat 'npm install -g truffle'
                        bat 'npm install -g ganache-cli'
                        bat 'npm install'
                    } catch (Exception e) {
                        error("Setup stage failed with: ${e}")
                    }
                }
            }
        }

        stage('Start Ganache') {
            steps {
                script {
                    try {
                        bat 'start /b ganache-cli > ganache.log'
                        sleep 30 // wait for Ganache to start
                    } catch (Exception e) {
                        error("Start Ganache stage failed with: ${e}")
                    }
                }
            }
        }

        stage('Compile') {
            steps {
                script {
                    try {
                        bat 'truffle compile'
                    } catch (Exception e) {
                        error("Compile stage failed with: ${e}")
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        bat 'truffle test'
                    } catch (Exception e) {
                        error("Test stage failed with: ${e}")
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    try {
                        bat 'truffle migrate'
                    } catch (Exception e) {
                        error("Deploy stage failed with: ${e}")
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/build/contracts/*.json', fingerprint: true
        }
        cleanup {
            script {
                try {
                    bat 'npm uninstall -g truffle'
                    bat 'npm uninstall -g ganache-cli'
                } catch (Exception e) {
                    echo "Cleanup stage failed with: ${e}"
                }
            }
        }
    }
}
