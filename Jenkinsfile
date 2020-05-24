node {

	 def app

    	stage('Clone Repository') {
			echo "Poolig git gepository..."
			git "https://github.com/vatsal199/doComplaint-FrontEnd.git"
    	}

		stage('NPM Build'){
			sh 'npm install'
			sh 'ng build --prod --aot'
		}
	
    	stage('Build Image') {
		echo "Generating docker image..."
        	app = docker.build("vatsal199/do-complaint-front")
    	}

    	stage('Push Image') {
			echo "Uploading docker image to docker hub..."
			docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
		    		app.push("${env.BUILD_NUMBER}")
		    		app.push("latest")
			}
    	}

		stage('Deploy on Node'){
    	    step([
    	        $class:"RundeckNotifier",
    	        includeRundeckLogs:true,
    	        jobId: "c7d1a80a-4725-4091-8875-c356aac8b53b",
    	        rundeckInstance: "RundeckConf",
    	        shouldFailTheBuild: true,
    	        shouldWaitForRundeckJob: true,
    	        tailLog: true
    	        ])
    	}

}
