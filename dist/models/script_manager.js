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
        let text = "module.exports.run = function(myRobot) {\n\t// Please enter your code here\n}";
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
        fs.unlikSync(fileName);
    }
}
exports.removeScript = removeScript;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zY3JpcHRfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxFQUFFLFdBQVksSUFBSSxDQUFDLENBQUE7QUFFMUIsTUFBTSxJQUFJLEdBQVcsZUFBZSxDQUFBO0FBRXBDLElBQUcsQ0FBQztJQUVILHVDQUF1QztJQUN2QyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUVwQyxDQUFDO0FBQUEsS0FBSyxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztBQUdaLENBQUM7QUFFRCxvQkFBMkIsT0FBZSxFQUFFLE1BQWM7SUFHekQsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFOUMsSUFBSSxDQUFDO1FBRUosc0NBQXNDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFckIsdUJBQXVCO1FBQ3ZCLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBRW5DLENBQUM7SUFBQSxLQUFLLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7QUFDRixDQUFDO0FBaEJlLGtCQUFVLGFBZ0J6QixDQUFBO0FBRUQsbUJBQTBCLE9BQWU7SUFFeEMsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFOUMsSUFBSSxDQUFDO1FBRUosc0NBQXNDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFdEIsQ0FBRTtJQUFBLEtBQUssQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7UUFFdEQsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxHQUFHLCtFQUErRSxDQUFDO1FBRTNGLGNBQWM7UUFDZCxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUV6QyxDQUFDO0FBdEJlLGlCQUFTLFlBc0J4QixDQUFBO0FBRUQsc0JBQTZCLE9BQWU7SUFFM0MsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFOUMsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QixDQUFDO0FBRUYsQ0FBQztBQVJlLG9CQUFZLGVBUTNCLENBQUEiLCJmaWxlIjoibW9kZWxzL3NjcmlwdF9tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzICA9IHJlcXVpcmUoJ2ZzJylcblxuY29uc3QgcGF0aDogc3RyaW5nID0gJy4vZGlzdC91c2Vycy8nXG5cbnRyeXtcblx0XG5cdC8vIENyZWF0ZSB1c2VycyBmb2xkZXJzIHRvIGtlZXAgc2NyaXB0c1xuXHRmcy5ta2RpclN5bmMocGF0aClcblx0Y29uc29sZS5sb2coJ1VzZXJzIGZvbGRlciBjcmVhdGVkJylcblx0XG59Y2F0Y2goZXJyKXtcblxuXHQvLyBJZiBtYXAgZG9lcyBleGlzdCBkb25ub3QgY3JlYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2NyaXB0KHVzZXJfaWQ6IHN0cmluZywgc2NyaXB0OiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcblx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgPSBwYXRoICsgdXNlcl9pZCArICcuanMnO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBUaHJvd3MgZXJyb3IgaWYgZmlsZSBkb2VzIG5vdCBleGlzdFxuXHRcdGZzLnN0YXRTeW5jKGZpbGVOYW1lKVxuXG5cdFx0Ly8gV3JpdGUgc2NyaXB0IHRvIGZpbGVcblx0XHRmcy53cml0ZUZpbGVTeW5jKGZpbGVOYW1lLCBzY3JpcHQpXG5cblx0fWNhdGNoKGVycil7XG5cdFx0Y29uc29sZS5sb2coJ3NhdmVTY3JpcHQuc3RhdFN5bmMvd3JpdGVGaWxlU3luYzogRmlsZSBkb2VzIG5vdCBleGlzdCcpXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdCh1c2VyX2lkOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcblx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgPSBwYXRoICsgdXNlcl9pZCArICcuanMnO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBUaHJvd3MgZXJyb3IgaWYgZmlsZSBkb2VzIG5vdCBleGlzdFxuXHRcdGZzLnN0YXRTeW5jKGZpbGVOYW1lKVxuXG5cdH0gY2F0Y2goZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coJ2dldFNjcmlwdC5zdGF0U3luYzogRmlsZSBkb2VzIG5vdCBleGlzdCcpXG5cblx0XHQvLyBDcmVhdGUgYmFzZSB0ZXh0XG5cdFx0bGV0IHRleHQgPSBcIm1vZHVsZS5leHBvcnRzLnJ1biA9IGZ1bmN0aW9uKG15Um9ib3QpIHtcXG5cXHQvLyBQbGVhc2UgZW50ZXIgeW91ciBjb2RlIGhlcmVcXG59XCI7XG5cdFx0XG5cdFx0Ly8gQ3JlYXRlIGZpbGVcblx0XHRmcy53cml0ZUZpbGVTeW5jKGZpbGVOYW1lLCB0ZXh0KVxuXHR9XG5cblx0Ly8gUmVhZCBmaWxlIGFuZCByZXR1cm4gdmFsdWVcblx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYyhmaWxlTmFtZSwgXCJ1dGY4XCIpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNjcmlwdCh1c2VyX2lkOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRsZXQgZmlsZU5hbWU6IHN0cmluZyA9IHBhdGggKyB1c2VyX2lkICsgJy5qcyc7XG5cdFxuXHRpZihmcy5zdGF0U3luYyhmaWxlTmFtZSkpIHtcblx0XHRmcy51bmxpa1N5bmMoZmlsZU5hbWUpXG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
