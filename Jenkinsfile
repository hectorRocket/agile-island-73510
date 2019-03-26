pipeline {
  agent any
  stages {
    stage('Github') {
      steps {
        echo 'Commit GitHub'
      }
    }
    stage('Heroku') {
      steps {
        git(url: 'https://git.heroku.com/agile-island-73510.git', branch: 'master')
      }
    }
  }
}