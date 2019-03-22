import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Goal } from '../goal';
var GoalDetailsComponent = /** @class */ (function () {
    function GoalDetailsComponent() {
    }
    GoalDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Goal)
    ], GoalDetailsComponent.prototype, "goal", void 0);
    GoalDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-goal-details',
            templateUrl: './goal-details.component.html',
            styleUrls: ['./goal-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalDetailsComponent);
    return GoalDetailsComponent;
}());
export { GoalDetailsComponent };
//# sourceMappingURL=goal-details.component.js.map