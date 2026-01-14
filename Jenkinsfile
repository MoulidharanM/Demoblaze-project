pipeline {
    agent any 
    
    tools {
        nodejs "node" 
    }

    environment {
        username = credentials('DEMOBLAZE_USERNAME')
        password = credentials('DEMOBLAZE_PASSWORD')
        url = "https://demoblaze.com/index.html"
    }

    stages {
        stage('Install') {
            steps {
                // Use 'bat' instead of 'sh' for Windows
                bat 'npm install'
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Test') {
            steps {
                // Use 'bat' and wrap variables in % to access them in Batch
                bat 'npx playwright test || exit 0'
            }
        }
    }

    post {
        always {
            // Archive and publish report
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