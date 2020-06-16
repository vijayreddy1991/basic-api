
pipeline {
    agent { docker { image 'node:6.3' } }
    parameters {
      string(name: 'runNumber', defaultValue: '0', description: 'JFrog Pipelines Run Number')
      string(name: 'imageName', description: 'image to test')
      string(name: 'imageTag', description: 'image tag to test')
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                echo "RunNumber sent from pipelines is: ${params.runNumber}"
                echo "Running tests on image ${params.imageName}:${params.imageTag}"
                echo "pulling image ${params.imageName}:${params.imageTag}"
                sh 'sleep 30'
            }
        }
        stage('report') {
            steps {
                jfPipelines(
                    outputResources: """[
                        {
                          "name": "app_test_results",
                          "content": {
                            "runNumber": "${params.runNumber}",
                            "jobName": "${JOB_NAME}",
                            "passing": 1234,
                            "failing": 0
                          }
                        }
                    ]"""
                )
            }
        }
    }
}
