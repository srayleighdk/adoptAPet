pipeline {
  agent any
  stages {
    stage('Checkout Code / Git') {
      steps {
        git(url: 'https://github.com/srayleighdk/curriculum-app', branch: 'dev')
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
            sh 'cd    curriculum-front  && npm i && npm run test:unit'
          }
        }

      }
    }

  }
}