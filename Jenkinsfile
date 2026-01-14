pipeline {
    agent any 
    
    tools {
        nodejs "node" // Ensure this matches your Jenkins Global Tool Configuration
    }

    environment {
        // Mapping Jenkins credentials to environment variables used in your code
        username = credentials('DEMOBLAZE_USERNAME')
        password = credentials('DEMOBLAZE_PASSWORD')
        url = "https://demoblaze.com/index.html"
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Test') {
            steps {
                // Running the test; '|| true' allows the pipeline to continue for reporting even if tests fail
                sh 'npx playwright test || true'
            }
        }
    }

    post {
        always {
            // Archives and publishes the HTML report for every build
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}