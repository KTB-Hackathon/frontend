pipeline {
    agent any

    environment {
        REPO = 'KTB-Hackathon/frontend'
        DOCKER_HUB_REPO = 'jonum12312/ktbhackfront'  // Docker Hub 저장소
        DOCKER_HUB_CREDENTIALS_ID = 'dockerhub'     // Jenkins에 저장된 Docker Hub 자격 증명
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "https://github.com/${REPO}.git"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Docker 이미지 빌드
                    dockerImage = docker.build("${DOCKER_HUB_REPO}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_HUB_CREDENTIALS_ID}") {
                        dockerImage.push('latest')
                        dockerImage.push("${BUILD_NUMBER}")
                    }
                }
            }
        }

        stage('Deploy on Local Server') {
            steps {
                script {
                    // 로컬 서버에서 기존 컨테이너 제거
                    sh "docker rm -f ktbhackfront || true"

                    // Docker Hub에서 최신 이미지 pull
                    sh "docker pull ${DOCKER_HUB_REPO}:latest"

                    // 컨테이너 실행 (로컬 포트 80 -> 컨테이너 8080)
                    sh "docker run -d --name ktbhackfront -p 80:5173 ${DOCKER_HUB_REPO}:latest"
                }
            }
        }
    }
}