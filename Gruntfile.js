module.exports = (grunt) => {

	grunt.loadNpmTasks('grunt-screeps');

	grunt.initConfig({
		screeps: {
			options: {
				email: 'christoph.wech@gmail.com',
				token: '06902652-5d03-4066-b4fc-8b524c29821f',
				branch: 'default'
			},
			dist: {
				src: ['dist/*.ts']
			}
		}
	})
}
