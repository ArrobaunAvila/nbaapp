pipeline {
    agent any

    tools {
        nodejs '19.0.0'
    }

    options {
        timeout(time: 3, unit: 'MINUTES')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Comenzando stage checkout...'
                cat pwd
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    // Instalar dependencias de Angular y construir la aplicación
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Instalar dependencias de prueba y ejecutar pruebas con Karma
                    sh 'npm install --only=dev'
                    sh 'npm test'
                }
            }
        }

        stage('Deploy Simulation') {
            steps {
                // Aquí puedes simular el despliegue, por ejemplo, copiar los archivos construidos a un directorio de destino
                sh 'cp -r dist/*  home/daniel/Documents/desarrollo/angular/nba-app/deploy
            echo '¡El pipeline se ejecutó exitosamente! Puedes realizar acciones adicionales aquí.'
        }
        failure {
            echo 'El pipeline ha fallado. Realiza acciones de manejo de errores aquí si es necesario.'
        }
    }
}
