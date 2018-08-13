module.exports = {
	 options: {},
	 build: {
		 files: [{
			 expand: true,
			 cwd: "../../dist",
			 src: "bundle.js",
			 dest: "../../dist",
			 ext: ".min.js"
		 }]
	 }
 } 
