"use strict";
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ScriptManager = require('./models/script_manager');
const SocketManager = require('./models/socket_manager');
const Arena = require('./models/arena');
// Set up App ======================
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
// Set up Server ======================
const server = app.listen(3011, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
// Set up Other ======================
const socketManager = SocketManager.init(server);
const arena = Arena.getInstance();
// Set up Routs ======================
app.post('/scripts/save', function (req, res) {
    console.log('POST: /scripts/save');
    let user_id = req.body['user_id'];
    let script = req.body['script'];
    if (user_id && script) {
        // Save script to file
        ScriptManager.saveScript(user_id, script);
        res.sendStatus(200);
        return;
    }
    res.status(500).json({ error: 'could not save script' });
});
app.post('/scripts/remove', function (req, res) {
    console.log('POST: /scripts/remove');
    res.sendStatus(200);
});
app.post('/scripts/load', function (req, res) {
    console.log('POST: /scripts/load');
    let user_id = req.body['user_id'];
    // If a user_id was provided
    if (user_id) {
        // Get script from file
        let script = ScriptManager.getScript(user_id);
        // If we found a script for provided user_id
        if (script) {
            // Send respond to client containing script
            res.status(200).send(JSON.stringify({ script: script }));
            return;
        }
    }
    res.status(500).json({ error: 'could not load script' });
});
app.post('/arenas/join', function (req, res) {
    console.log('POST: /arenas/join');
    let user_id = req.body['user_id'];
    // If a user_id was provided
    if (user_id) {
        // Add the robot to an arean
        arena.addRobot(user_id);
        res.sendStatus(200);
        return;
    }
    res.status(500).json({ error: 'could not add robot' });
});
app.post('/arenas/leave', function (req, res) {
    console.log('POST: /arenas/leave');
    let user_id = req.body['user_id'];
    // If a user_id was provided
    if (user_id) {
        // Remove the robot from an arean
        arena.removeRobot(user_id);
        res.sendStatus(200);
        return;
    }
    res.status(500).json({ error: 'could not remove robot' });
});
app.get('/reset.css', (req, res) => {
    console.log('reset.css delivered');
    res.sendFile(path.resolve(__dirname, 'reset.css'));
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

//# sourceMappingURL=data:application/json;base64,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NEI7SUFDNUIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztRQUVYLGlDQUFpQztRQUNqQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzFCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsTUFBTSxDQUFBO0lBQ1AsQ0FBQztJQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQTtBQUMxRCxDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDL0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFBO0FBQ3RELENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO0lBQ3JELEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQTtBQUN2RCxDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuaW1wb3J0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXG5pbXBvcnQgU2NyaXB0TWFuYWdlciA9IHJlcXVpcmUoJy4vbW9kZWxzL3NjcmlwdF9tYW5hZ2VyJylcbmltcG9ydCBTb2NrZXRNYW5hZ2VyID0gcmVxdWlyZSgnLi9tb2RlbHMvc29ja2V0X21hbmFnZXInKVxuaW1wb3J0IEFyZW5hID0gcmVxdWlyZSgnLi9tb2RlbHMvYXJlbmEnKVxuXG4vLyBTZXQgdXAgQXBwID09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy8nKSk7XG5cbi8vIFNldCB1cCBTZXJ2ZXIgPT09PT09PT09PT09PT09PT09PT09PVxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbigzMDExLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgaG9zdCA9IHNlcnZlci5hZGRyZXNzKCkuYWRkcmVzc1xuICAgIGxldCBwb3J0ID0gc2VydmVyLmFkZHJlc3MoKS5wb3J0XG4gICAgY29uc29sZS5sb2coJ1RoaXMgZXhwcmVzcyBhcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6JyArIHBvcnQpXG59KVxuXG4vLyBTZXQgdXAgT3RoZXIgPT09PT09PT09PT09PT09PT09PT09PVxuY29uc3Qgc29ja2V0TWFuYWdlciA9IFNvY2tldE1hbmFnZXIuaW5pdChzZXJ2ZXIpXG5jb25zdCBhcmVuYSA9IEFyZW5hLmdldEluc3RhbmNlKClcblxuLy8gU2V0IHVwIFJvdXRzID09PT09PT09PT09PT09PT09PT09PT1cbmFwcC5wb3N0KCcvc2NyaXB0cy9zYXZlJywgZnVuY3Rpb24ocmVxLCByZXMpe1xuXHRcblx0Y29uc29sZS5sb2coJ1BPU1Q6IC9zY3JpcHRzL3NhdmUnKVxuXG5cdGxldCB1c2VyX2lkID0gcmVxLmJvZHlbJ3VzZXJfaWQnXVxuXHRsZXQgc2NyaXB0ID0gcmVxLmJvZHlbJ3NjcmlwdCddXG5cblx0aWYodXNlcl9pZCAmJiBzY3JpcHQpe1xuXG5cdFx0Ly8gU2F2ZSBzY3JpcHQgdG8gZmlsZVxuXHRcdFNjcmlwdE1hbmFnZXIuc2F2ZVNjcmlwdCh1c2VyX2lkLCBzY3JpcHQpXG5cdFx0cmVzLnNlbmRTdGF0dXMoMjAwKVxuXHRcdHJldHVyblxuXHR9XG5cdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdjb3VsZCBub3Qgc2F2ZSBzY3JpcHQnIH0pXG5cbn0pXG5cbmFwcC5wb3N0KCcvc2NyaXB0cy9yZW1vdmUnLCBmdW5jdGlvbihyZXEsIHJlcyl7XG5cdGNvbnNvbGUubG9nKCdQT1NUOiAvc2NyaXB0cy9yZW1vdmUnKVxuXHRyZXMuc2VuZFN0YXR1cygyMDApXG59KVxuXG5hcHAucG9zdCgnL3NjcmlwdHMvbG9hZCcsIGZ1bmN0aW9uKHJlcSwgcmVzKXtcblxuXHRjb25zb2xlLmxvZygnUE9TVDogL3NjcmlwdHMvbG9hZCcpXG5cblx0bGV0IHVzZXJfaWQgPSByZXEuYm9keVsndXNlcl9pZCddXG5cblx0Ly8gSWYgYSB1c2VyX2lkIHdhcyBwcm92aWRlZFxuXHRpZih1c2VyX2lkKXtcblxuXHRcdC8vIEdldCBzY3JpcHQgZnJvbSBmaWxlXG5cdFx0bGV0IHNjcmlwdDogc3RyaW5nID0gU2NyaXB0TWFuYWdlci5nZXRTY3JpcHQodXNlcl9pZClcblxuXHRcdC8vIElmIHdlIGZvdW5kIGEgc2NyaXB0IGZvciBwcm92aWRlZCB1c2VyX2lkXG5cdFx0aWYoc2NyaXB0KXtcblxuXHRcdFx0Ly8gU2VuZCByZXNwb25kIHRvIGNsaWVudCBjb250YWluaW5nIHNjcmlwdFxuXHRcdFx0cmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoe3NjcmlwdDogc2NyaXB0fSkpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdH1cblxuXHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnY291bGQgbm90IGxvYWQgc2NyaXB0JyB9KVxuXG59KVxuXG5hcHAucG9zdCgnL2FyZW5hcy9qb2luJywgZnVuY3Rpb24ocmVxLCByZXMpe1xuXHRcblx0Y29uc29sZS5sb2coJ1BPU1Q6IC9hcmVuYXMvam9pbicpXG5cblx0bGV0IHVzZXJfaWQgPSByZXEuYm9keVsndXNlcl9pZCddXG5cdFxuXHQvLyBJZiBhIHVzZXJfaWQgd2FzIHByb3ZpZGVkXG5cdGlmKHVzZXJfaWQpe1xuXG5cdFx0Ly8gQWRkIHRoZSByb2JvdCB0byBhbiBhcmVhblxuXHRcdGFyZW5hLmFkZFJvYm90KHVzZXJfaWQpXG5cdFx0cmVzLnNlbmRTdGF0dXMoMjAwKVxuXHRcdHJldHVyblxuXG5cdH1cblx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ2NvdWxkIG5vdCBhZGQgcm9ib3QnIH0pXG59KVxuXG5hcHAucG9zdCgnL2FyZW5hcy9sZWF2ZScsIGZ1bmN0aW9uKHJlcSwgcmVzKXtcblx0XG5cdGNvbnNvbGUubG9nKCdQT1NUOiAvYXJlbmFzL2xlYXZlJylcblxuXHRsZXQgdXNlcl9pZCA9IHJlcS5ib2R5Wyd1c2VyX2lkJ11cblx0XG5cdC8vIElmIGEgdXNlcl9pZCB3YXMgcHJvdmlkZWRcblx0aWYodXNlcl9pZCl7XG5cblx0XHQvLyBSZW1vdmUgdGhlIHJvYm90IGZyb20gYW4gYXJlYW5cblx0XHRhcmVuYS5yZW1vdmVSb2JvdCh1c2VyX2lkKVxuXHRcdHJlcy5zZW5kU3RhdHVzKDIwMClcblx0XHRyZXR1cm5cblx0fVxuXHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnY291bGQgbm90IHJlbW92ZSByb2JvdCcgfSlcbn0pXG5cbmFwcC5nZXQoJy9yZXNldC5jc3MnLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuXHRjb25zb2xlLmxvZygncmVzZXQuY3NzIGRlbGl2ZXJlZCcpXG4gICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdyZXNldC5jc3MnKSlcbn0pXG5cbmFwcC5nZXQoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpKVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
