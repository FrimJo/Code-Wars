import fs  = require('fs')

const path: string = './dist/users/'

try{
	
	// Create users folders to keep scripts
	fs.mkdirSync(path)
	console.log('Users folder created')
	
}catch(err){

	// If map does exist do not create
}

export function saveScript(user_id: string, script: string): void {

	
	let fileName: string = path + user_id + '.js';

	try {

		// Throws error if file does not exist
		fs.statSync(fileName)

		// Write script to file
		fs.writeFileSync(fileName, script)

	}catch(err){
		console.log('saveScript.statSync/writeFileSync: File does not exist')
	}
}

export function getScript(user_id: string): string {
	
	let fileName: string = path + user_id + '.js';

	try {

		// Throws error if file does not exist
		fs.statSync(fileName)

	} catch(err) {
		console.log('getScript.statSync: File does not exist')

		// Create base text
		let text = "var Physics = require('physicsjs');\n\nmodule.exports.init = function(myRobot, currentArena) {\n\t// Please enter your init code here\n};\n\nmodule.exports.run = function() {\n\t// Please enter your loop code here\n};";
		
		// Create file
		fs.writeFileSync(fileName, text)
	}

	// Read file and return value
	return fs.readFileSync(fileName, "utf8")

}

export function removeScript(user_id: string): void {

	let fileName: string = path + user_id + '.js';
	
	if(fs.statSync(fileName)) {
		// TODO: remove script
		//fs.unlikSync(fileName) <= depricated
	}

}