```js
Game_Battler.prototype.callAkeaActions = function (actionName, parameters, action, targets) {
    let parsedParams = {};
    let checkedParameters = checkDefaultParam(parameters, actionName);
    let regex = /(\w+):\s*([^\s]*)/gm;
    let id;
    let param;
    do {
        param = regex.exec(checkedParameters);
        if (param) {
            switch (RegExp.$1) {
                case "id":
                case "damage":
                case "time":
                    parsedParams[RegExp.$1] = parseInt(RegExp.$2);
                    break;
                default:
                    parsedParams[RegExp.$1] = RegExp.$2;
                    break;
            }
        }
    } while (param);
    for (let key in parsedParams){
        id = parsedParams[key];
        break;
    }
    switch (actionName) {
        case "Randomize":
            this._akeaAnimatedBSActions.addAkeaHit(id, targets, actionName, this, action);
            break;
        case "Actions":
            this._akeaAnimatedBSActions.addAkeaSkillActions(id, targets, actionName, action);
            break;
        case "ActionEnemy":
            this._akeaAnimatedBSActions.addAkeaSkillActionsEnemy(id, targets, actionName, this, action);
            break;
        case "AniTarget":
            this._akeaAnimatedBSActions.addAkeaAnimation(id, targets, actionName, action);
            break;
        case "AniSelf":
            this._akeaAnimatedBSActions.addAkeaAnimation(id, [this], actionName, action);
            break;
        case "Script":
            this._akeaAnimatedBSActions.addAkeaScript(id, targets, actionName, this, action);
            break;
        case "Skill":
            action = JsonEx.parse(JsonEx.stringify(this.initialAction));
            action.setSkill(id);
            let newTargets = action.makeTargets();
            this.translateSkillActions(action, newTargets, $dataSkills[id].note, true);
            break;
        case "HitWeapon":
        case "Hit":
            this._akeaAnimatedBSActions.addAkeaHit(id, targets, actionName, this, action);
            break;
        case "HitAll":
            this._akeaAnimatedBSActions.addAkeaHit(id, targets, actionName, this, action);
            break;
        case "Wait":
            this._akeaAnimatedBSActions.addAkeaHit(id, targets, actionName, this, action);
            break;
    }
};
```