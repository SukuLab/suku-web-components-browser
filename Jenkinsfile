pipeline {
    agent { label "build" }
    environment {
         def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
    }

    stages {

         stage("slack notification") {
             steps {
                 slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
             }
         }

        stage("checkout"){
            steps {
                checkout scm
            }
        }


        //stage("static code analysis"){
            //steps {
                //withSonarQubeEnv('sonarqube') {
                    //sh '/opt/sonar/bin/sonar-scanner -Dsonar.projectKey=SukuMarketplaceUI -Dsonar.sources=Suku/src/app -Dsonar.exclusions=**/**/assets/**'
                //}
            //}
        //}

        stage("build docker image") {
            steps {
                sh "docker build -t $SUKU_DOCKER_REGISTRY/sukumarketplaceui:ci_${GIT_COMMIT} ."
            }
        }

        stage("env cleanup"){
            steps {
                sh returnStatus: true, script: 'docker rm -f sukumarketplaceui'

            }
        }

        stage("Launch service"){
            steps {
                sh "docker run -d -p $CR_APP_SUKUMARKET_PORT:80 --name sukumarketplaceui $SUKU_DOCKER_REGISTRY/sukumarketplaceui:ci_${GIT_COMMIT}"
                sh "docker logs sukumarketplaceui"
            }
        }

        stage("Launch Info"){
            steps {
                echo "http://${ip}:$CR_APP_SUKUMARKET_PORT"
            }
        }

        stage("Sanity testing"){
            steps {
                sh returnStdout: true, script: 'curl -is http://${ip}:$CR_APP_SUKUMARKET_PORT | head -n1'
            }
        }

        stage("Tag and push") {
            steps {
                withDockerRegistry(credentialsId: 'b9421aa7-cd71-48d1-9a11-3c9410fd3e45', url: '') {
                    sh "docker tag ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:ci_${GIT_COMMIT} ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:${VERSION}"
                    sh "docker push ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:${VERSION}"
                    sh "docker push ${SUKU_DOCKER_REGISTRY}/sukumarketplaceui:ci_${GIT_COMMIT}"

                }
            }
        }


        /*
        stage("code-scanning"){
            steps{
                sh "docker build -t codescan -f Dockerfile.scanner ."
                sh "docker run codescan"
            }
        }
         */
    }

    post {

        success {
             slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }

        failure {
             slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
    }
}
