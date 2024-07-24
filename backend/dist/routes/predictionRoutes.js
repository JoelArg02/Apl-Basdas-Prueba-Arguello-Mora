"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const predictionController_1 = require("../controller/predictionController");
const router = (0, express_1.Router)();
router.post('/', predictionController_1.predictIncome);
exports.default = router;
