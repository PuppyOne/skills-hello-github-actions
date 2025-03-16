import { expect } from "chai";
import { add, sub } from "./app.js";

describe('App', () => {
    describe('add()', () => {
        it('should add two numbers', () => {
            expect(add(1, 2)).to.equal(3);
        });
        it('should concat two strings', () => {
            expect(add('a', 'b')).to.equal('ab');
        });
    });
    describe('sub()', () => {
        it('should sub two numbers', () => {
            expect(sub(1, 2)).to.equal(-1);
        });
    });
});