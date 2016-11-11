"use strict";
const Controller = require('./controller');
const controllersMap = [];
function newController(user) {
    // Create a new controller
    let controller = new Controller(user);
    // Add it to the list of controllers
    controllersMap[controller.id] = controller;
    // Return the created controller
    return controller;
}
exports.newController = newController;
function removeControllerBy(id) {
    // Get the controller
    let controller = controllersMap[id];
    // Removes the controller from the map
    delete controllersMap[id];
}
exports.removeControllerBy = removeControllerBy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb250cm9sbGVyX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU8sVUFBVSxXQUFXLGNBQWMsQ0FBQyxDQUFBO0FBRTNDLE1BQU0sY0FBYyxHQUFrQyxFQUFFLENBQUE7QUFFeEQsdUJBQThCLElBQVk7SUFFekMsMEJBQTBCO0lBQzFCLElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRXJDLG9DQUFvQztJQUNwQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtJQUUxQyxnQ0FBZ0M7SUFDaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQTtBQUNsQixDQUFDO0FBVmUscUJBQWEsZ0JBVTVCLENBQUE7QUFFRCw0QkFBbUMsRUFBVTtJQUU1QyxxQkFBcUI7SUFDckIsSUFBSSxVQUFVLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRW5DLHNDQUFzQztJQUN0QyxPQUFPLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUUxQixDQUFDO0FBUmUsMEJBQWtCLHFCQVFqQyxDQUFBIiwiZmlsZSI6Im1vZGVscy9jb250cm9sbGVyX2ZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcicpXG5cbmNvbnN0IGNvbnRyb2xsZXJzTWFwOiB7IFtpZDogbnVtYmVyXTogQ29udHJvbGxlcjsgfSA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdDb250cm9sbGVyKHVzZXI6IHN0cmluZyk6IENvbnRyb2xsZXIge1xuXG5cdC8vIENyZWF0ZSBhIG5ldyBjb250cm9sbGVyXG5cdGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIodXNlcilcblxuXHQvLyBBZGQgaXQgdG8gdGhlIGxpc3Qgb2YgY29udHJvbGxlcnNcblx0Y29udHJvbGxlcnNNYXBbY29udHJvbGxlci5pZF0gPSBjb250cm9sbGVyXG5cblx0Ly8gUmV0dXJuIHRoZSBjcmVhdGVkIGNvbnRyb2xsZXJcblx0cmV0dXJuIGNvbnRyb2xsZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbnRyb2xsZXJCeShpZDogbnVtYmVyKTogdm9pZCB7XG5cblx0Ly8gR2V0IHRoZSBjb250cm9sbGVyXG5cdGxldCBjb250cm9sbGVyID0gY29udHJvbGxlcnNNYXBbaWRdXG5cblx0Ly8gUmVtb3ZlcyB0aGUgY29udHJvbGxlciBmcm9tIHRoZSBtYXBcblx0ZGVsZXRlIGNvbnRyb2xsZXJzTWFwW2lkXVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9