pipeline {
  agent any
  stages {
    stage('Checkout Code / Git') {
      steps {
        git(url: 'https://github.com/srayleighdk/adoptAPet', branch: 'main')
      }
    }

    stage('') {
      steps {
        sh 'ls -la'
      }
    }

  }
}