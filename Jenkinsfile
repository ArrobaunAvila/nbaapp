pipeline {
    agent any

    tools {
        nodejs 'v19.0.0'
    }

    options {
        timeout(time: 3, unit: 'MINUTES')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Comenzando stage checkout...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                    // Instalar dependencias de Angular y construir la aplicación
                    sh 'npm install'
                    sh 'npm run build'

            }
        }

        stage('RUN REMOTE') {
          steps {
              build wait: false, job: 'parameterized', parameters: [string(name: 'ROOT_ID', value: '$BUILD_ID')]
          }
        }

        stage('Test') {
            steps {
                    // Instalar dependencias de prueba y ejecutar pruebas con Karma
                    sh 'npm install --only=dev'
                    sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Aquí puedes simular el despliegue, por ejemplo, copiar los archivos construidos a un directorio de destino
                sh 'mv /home/daniel/Documents/desarrollo/angular/nba-app/dist/*  /home/daniel/Documents/desarrollo/angular/nba-app/deploy'
                echo '¡El pipeline se ejecutó exitosamente! Puedes realizar acciones adicionales aquí.'
        }
    }
 }
}
