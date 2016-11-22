"use strict";
const fs = require('fs');
const path = './dist/users/';
try {
    // Create users folders to keep scripts
    fs.mkdirSync(path);
    console.log('Users folder created');
}
catch (err) {
}
function saveScript(user_id, script) {
    let fileName = path + user_id + '.js';
    try {
        // Throws error if file does not exist
        fs.statSync(fileName);
        // Write script to file
        fs.writeFileSync(fileName, script);
    }
    catch (err) {
        console.log('saveScript.statSync/writeFileSync: File does not exist');
    }
}
exports.saveScript = saveScript;
function getScript(user_id) {
    let fileName = path + user_id + '.js';
    try {
        // Throws error if file does not exist
        fs.statSync(fileName);
    }
    catch (err) {
        console.log('getScript.statSync: File does not exist');
        // Create base text
        let text = "var Physics = require('physicsjs');\n\nmodule.exports.init = function(myRobot, currentArena) {\n\t// Please enter your init code here\n};\n\nmodule.exports.run = function() {\n\t// Please enter your loop code here\n};";
        // Create file
        fs.writeFileSync(fileName, text);
    }
    // Read file and return value
    return fs.readFileSync(fileName, "utf8");
}
exports.getScript = getScript;
function removeScript(user_id) {
    let fileName = path + user_id + '.js';
    if (fs.statSync(fileName)) {
    }
}
exports.removeScript = removeScript;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zY3JpcHRfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxFQUFFLFdBQVksSUFBSSxDQUFDLENBQUE7QUFFMUIsTUFBTSxJQUFJLEdBQVcsZUFBZSxDQUFBO0FBRXBDLElBQUcsQ0FBQztJQUVILHVDQUF1QztJQUN2QyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUVwQyxDQUFDO0FBQUEsS0FBSyxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztBQUdaLENBQUM7QUFFRCxvQkFBMkIsT0FBZSxFQUFFLE1BQWM7SUFHekQsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFOUMsSUFBSSxDQUFDO1FBRUosc0NBQXNDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFckIsdUJBQXVCO1FBQ3ZCLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBRW5DLENBQUM7SUFBQSxLQUFLLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7QUFDRixDQUFDO0FBaEJlLGtCQUFVLGFBZ0J6QixDQUFBO0FBRUQsbUJBQTBCLE9BQWU7SUFFeEMsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFOUMsSUFBSSxDQUFDO1FBRUosc0NBQXNDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFdEIsQ0FBRTtJQUFBLEtBQUssQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7UUFFdEQsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxHQUFHLDJOQUEyTixDQUFDO1FBRXZPLGNBQWM7UUFDZCxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUV6QyxDQUFDO0FBdEJlLGlCQUFTLFlBc0J4QixDQUFBO0FBRUQsc0JBQTZCLE9BQWU7SUFFM0MsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFOUMsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHM0IsQ0FBQztBQUVGLENBQUM7QUFUZSxvQkFBWSxlQVMzQixDQUFBIiwiZmlsZSI6Im1vZGVscy9zY3JpcHRfbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyAgPSByZXF1aXJlKCdmcycpXG5cbmNvbnN0IHBhdGg6IHN0cmluZyA9ICcuL2Rpc3QvdXNlcnMvJ1xuXG50cnl7XG5cdFxuXHQvLyBDcmVhdGUgdXNlcnMgZm9sZGVycyB0byBrZWVwIHNjcmlwdHNcblx0ZnMubWtkaXJTeW5jKHBhdGgpXG5cdGNvbnNvbGUubG9nKCdVc2VycyBmb2xkZXIgY3JlYXRlZCcpXG5cdFxufWNhdGNoKGVycil7XG5cblx0Ly8gSWYgbWFwIGRvZXMgZXhpc3QgZG8gbm90IGNyZWF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNjcmlwdCh1c2VyX2lkOiBzdHJpbmcsIHNjcmlwdDogc3RyaW5nKTogdm9pZCB7XG5cblx0XG5cdGxldCBmaWxlTmFtZTogc3RyaW5nID0gcGF0aCArIHVzZXJfaWQgKyAnLmpzJztcblxuXHR0cnkge1xuXG5cdFx0Ly8gVGhyb3dzIGVycm9yIGlmIGZpbGUgZG9lcyBub3QgZXhpc3Rcblx0XHRmcy5zdGF0U3luYyhmaWxlTmFtZSlcblxuXHRcdC8vIFdyaXRlIHNjcmlwdCB0byBmaWxlXG5cdFx0ZnMud3JpdGVGaWxlU3luYyhmaWxlTmFtZSwgc2NyaXB0KVxuXG5cdH1jYXRjaChlcnIpe1xuXHRcdGNvbnNvbGUubG9nKCdzYXZlU2NyaXB0LnN0YXRTeW5jL3dyaXRlRmlsZVN5bmM6IEZpbGUgZG9lcyBub3QgZXhpc3QnKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQodXNlcl9pZDogc3RyaW5nKTogc3RyaW5nIHtcblx0XG5cdGxldCBmaWxlTmFtZTogc3RyaW5nID0gcGF0aCArIHVzZXJfaWQgKyAnLmpzJztcblxuXHR0cnkge1xuXG5cdFx0Ly8gVGhyb3dzIGVycm9yIGlmIGZpbGUgZG9lcyBub3QgZXhpc3Rcblx0XHRmcy5zdGF0U3luYyhmaWxlTmFtZSlcblxuXHR9IGNhdGNoKGVycikge1xuXHRcdGNvbnNvbGUubG9nKCdnZXRTY3JpcHQuc3RhdFN5bmM6IEZpbGUgZG9lcyBub3QgZXhpc3QnKVxuXG5cdFx0Ly8gQ3JlYXRlIGJhc2UgdGV4dFxuXHRcdGxldCB0ZXh0ID0gXCJ2YXIgUGh5c2ljcyA9IHJlcXVpcmUoJ3BoeXNpY3NqcycpO1xcblxcbm1vZHVsZS5leHBvcnRzLmluaXQgPSBmdW5jdGlvbihteVJvYm90LCBjdXJyZW50QXJlbmEpIHtcXG5cXHQvLyBQbGVhc2UgZW50ZXIgeW91ciBpbml0IGNvZGUgaGVyZVxcbn07XFxuXFxubW9kdWxlLmV4cG9ydHMucnVuID0gZnVuY3Rpb24oKSB7XFxuXFx0Ly8gUGxlYXNlIGVudGVyIHlvdXIgbG9vcCBjb2RlIGhlcmVcXG59O1wiO1xuXHRcdFxuXHRcdC8vIENyZWF0ZSBmaWxlXG5cdFx0ZnMud3JpdGVGaWxlU3luYyhmaWxlTmFtZSwgdGV4dClcblx0fVxuXG5cdC8vIFJlYWQgZmlsZSBhbmQgcmV0dXJuIHZhbHVlXG5cdHJldHVybiBmcy5yZWFkRmlsZVN5bmMoZmlsZU5hbWUsIFwidXRmOFwiKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTY3JpcHQodXNlcl9pZDogc3RyaW5nKTogdm9pZCB7XG5cblx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgPSBwYXRoICsgdXNlcl9pZCArICcuanMnO1xuXHRcblx0aWYoZnMuc3RhdFN5bmMoZmlsZU5hbWUpKSB7XG5cdFx0Ly8gVE9ETzogcmVtb3ZlIHNjcmlwdFxuXHRcdC8vZnMudW5saWtTeW5jKGZpbGVOYW1lKSA8PSBkZXByaWNhdGVkXG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
