pipeline {
  agent any
  stages {
    stage('Check') {
      steps {
        git(url: 'https://github.com/MaTtiaa01/vue-dashboard.git', branch: 'main')
        sh 'cd dashboard'
      }
    }

    stage('Build') {
      steps {
        sh '''npm install
npm run build'''
      }
    }

  }
}