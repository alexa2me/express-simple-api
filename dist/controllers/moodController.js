"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const addMoodQuery_1 = require("../data/addMoodQuery");
const getMoodQuery_1 = require("../data/getMoodQuery");
class MoodController {
    constructor() {
        this.controlAddMood = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { description } = req.body;
                console.log(description);
                if (!description) {
                    res.statusCode = 422;
                    throw new Error("Preencha 'description'.");
                }
                const newMood = { description };
                yield (0, addMoodQuery_1.addMood)(newMood);
                res.status(200).send({ message: "Mood added successfully!" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send({
                    message: err.message,
                });
            }
        });
        this.controlGetMoods = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getMoodQuery_1.getMoods)();
                res.status(200).send(result);
            }
            catch (err) {
                console.log(err);
                res.status(400).send({
                    message: err.message,
                });
            }
        });
    }
}
exports.default = MoodController;
//# sourceMappingURL=moodController.js.map