var romanumeral = require('./romannumeral');

describe('romanumeral', function() {
    it('should convert 1 - 10 to I, II, III, IV, V, VI, VII, VIII, IX, X', function() {
        expect(romanumeral.convert(1)).toEqual('I');
        expect(romanumeral.convert(2)).toEqual('II');
        expect(romanumeral.convert(3)).toEqual('III');
        expect(romanumeral.convert(4)).toEqual('IV');
        expect(romanumeral.convert(5)).toEqual('V');
        expect(romanumeral.convert(6)).toEqual('VI');
        expect(romanumeral.convert(7)).toEqual('VII');
        expect(romanumeral.convert(8)).toEqual('VIII');
        expect(romanumeral.convert(9)).toEqual('IX');
        expect(romanumeral.convert(10)).toEqual('X');
        expect(romanumeral.convert(11)).toEqual('XI');
        expect(romanumeral.convert(12)).toEqual('XII');
        expect(romanumeral.convert(13)).toEqual('XIII');
        expect(romanumeral.convert(14)).toEqual('XIV');
        expect(romanumeral.convert(15)).toEqual('XV');
        expect(romanumeral.convert(16)).toEqual('XVI');
        expect(romanumeral.convert(18)).toEqual('XVIII');
        expect(romanumeral.convert(19)).toEqual('XIX');
        expect(romanumeral.convert(20)).toEqual('XX');
        expect(romanumeral.convert(21)).toEqual('XXI');
        expect(romanumeral.convert(22)).toEqual('XXII');
        expect(romanumeral.convert(24)).toEqual('XXIV');
        expect(romanumeral.convert(25)).toEqual('XXV');
        expect(romanumeral.convert(29)).toEqual('XXIX');
        expect(romanumeral.convert(30)).toEqual('XXX');
        expect(romanumeral.convert(31)).toEqual('XXXI');
        expect(romanumeral.convert(39)).toEqual('XXXIX');
        expect(romanumeral.convert(40)).toEqual('XL');
        expect(romanumeral.convert(41)).toEqual('XLI');
        expect(romanumeral.convert(49)).toEqual('XLIX');
        expect(romanumeral.convert(50)).toEqual('L');

    });
})
