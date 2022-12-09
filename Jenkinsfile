pipeline {
  agent any
  stages {
    stage('Checkout Code / Git') {
      steps {
        git(url: 'https://github.com/srayleighdk/adoptAPet', branch: 'main')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit Test') {
          steps {
            sh 'cd adoptApet && npm i && npm run test:unit'
          }
        }

      }
    }

  }
}