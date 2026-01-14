pipeline {
    agent any 
    
    tools {
        nodejs "node" // Make sure "node" matches your Jenkins Tool name
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
                // We use '|| true' so the pipeline doesn't stop on test failure
                // allowing us to still archive the report in the post block
                sh 'npx playwright test || true'
            }
        }
    }

    post {
        always {
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