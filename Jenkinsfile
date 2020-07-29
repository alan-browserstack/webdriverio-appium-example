pipeline {

    agent any

    environment {
        PATH = "/usr/local/bin:/usr/local/lib/ruby/gems/2.7.0/bin:/usr/local/opt/ruby/bin:$PATH"
    }

    stages {

        stage('Test - iOS') {
            steps {
                sh 'npm run ios'
            }
        }

        stage('Test - android') {
            steps {
                sh 'npm run android'
            }
        }
    }
}