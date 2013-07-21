module.exports = function(grunt) {
	grunt.initConfig({
		transpile: {
			main: {
				type: 'amd',
				files: [{
					expand: true,
					cwd: 'js/',
					src: ['**/*.js'],
					dest: 'amd/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-es6-module-transpiler');

	grunt.registerTask('default', ['transpile']);
};
