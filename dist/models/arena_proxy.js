"use strict";
class ArenaProxy {
    constructor(world) {
        console.log('creating proxy');
        this._world = world;
        console.log('proxy finished');
    }
    get allPositions() {
        return this._world.getBodies().map(body => {
            return {
                'uid': body.uid,
                'radius': body.radius,
                'position': {
                    'x': body.state.pos.x,
                    'y': body.state.pos.y
                }
            };
        });
    }
}
module.exports = ArenaProxy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9hcmVuYV9wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFJSSxZQUFZLEtBQUs7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUk7WUFDbkMsTUFBTSxDQUFDO2dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ3JCLFVBQVUsRUFBRTtvQkFDUixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0osQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztBQUVMLENBQUM7QUFFRCxpQkFBUyxVQUFVLENBQUEiLCJmaWxlIjoibW9kZWxzL2FyZW5hX3Byb3h5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXJlbmFQcm94eSB7XG5cbiAgICBwcml2YXRlIF93b3JsZFxuXG4gICAgY29uc3RydWN0b3Iod29ybGQpe1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgcHJveHknKVxuICAgICAgICB0aGlzLl93b3JsZCA9IHdvcmxkXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm94eSBmaW5pc2hlZCcpXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGxQb3NpdGlvbnMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmxkLmdldEJvZGllcygpLm1hcChib2R5ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3VpZCc6IGJvZHkudWlkLFxuICAgICAgICAgICAgICAgICdyYWRpdXMnOiBib2R5LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiB7XG4gICAgICAgICAgICAgICAgICAgICd4JzogYm9keS5zdGF0ZS5wb3MueCxcbiAgICAgICAgICAgICAgICAgICAgJ3knOiBib2R5LnN0YXRlLnBvcy55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgPSBBcmVuYVByb3h5Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
