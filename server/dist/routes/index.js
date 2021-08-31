"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome!');
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map