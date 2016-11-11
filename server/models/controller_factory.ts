import Controller = require('./controller')

const controllersMap: { [id: number]: Controller; } = []

export function newController(user: string): Controller {

	// Create a new controller
	let controller = new Controller(user)

	// Add it to the list of controllers
	controllersMap[controller.id] = controller

	// Return the created controller
	return controller
}

export function removeControllerBy(id: number): void {

	// Get the controller
	let controller = controllersMap[id]

	// Removes the controller from the map
	delete controllersMap[id]

}