module.exports = function(grunt) {
	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: './js',
					mainConfigFile: 'require-config.js',
					dir: './build/',
					paths: {
						jquery: '../components/jquery/jquery'
					},
					modules: [
						{
							name: 'bolderiser'
						}
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);
};
