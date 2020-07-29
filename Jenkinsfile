pipeline {

    agent any

    environment {
        PATH = "/usr/local/bin:/usr/local/lib/ruby/gems/2.7.0/bin:/usr/local/opt/ruby/bin:$PATH"
    }

    stages {
        stage('Clean') {
            steps {
                echo $BROWSERSTACK_USERNAME_BS
                echo $BROWSERSTACK_ACCESS_KEY_BS
            }
        }


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