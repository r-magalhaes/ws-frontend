pipeline {
    agent none
    stages {
        stage("Test echo"){
            steps{
                echo "testingg"
            }
        }
        stage('SonarQube Analysis') {
            steps{
                script{
                    echo "cenasg"
                    def scannerHome = tool 'SonarQubeScanner'
                    withSonarQubeEnv('My SonarQube Server') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}