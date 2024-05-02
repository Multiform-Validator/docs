import isEmail from '../../src/isEmail';

describe('isEmail', () => {
	it('returns true for valid email', () => {
		expect(isEmail('foo@bar.com')).toBe(true);
	});

	it('returns false for email without domain', () => {
		expect(isEmail('foo@bar')).toBe(false);
	});

	it('returns false for email starting with a number', () => {
		expect(isEmail('1foo@bar.com')).toBe(false);
	});

	it('returns false for email with number after @', () => {
		expect(isEmail('foo@1bar.com')).toBe(false);
	});

	it('returns false for email with number after last dot', () => {
		expect(isEmail('foo@bar.1com')).toBe(false);
	});

	it('returns throw for non-string input', () => {
		expect(() => isEmail(123 as any)).toThrow("Invalid input, must be a string");
	});

	it('returns throw for null or empty input', () => {
		expect(() => isEmail('')).toThrow("Value cannot be null or empty");
	});

	it('return false when email is missing @', () => {
		expect(isEmail('foo.bar.com')).toBe(false);
	});

	it('return false when have .com.com', () => {
		expect(isEmail('joaoaoao@gmail.com.com')).toBe(false);
	});

	it('return false when have before @ ..', () => {
		expect(isEmail('joao..@gmail.com')).toBe(false);
	});

	it('return false when have before @ .', () => {
		expect(isEmail('joao.@gmail.com')).toBe(false);
	});

	it('return false when have @ @', () => {
		expect(isEmail('joao@@gmail.com')).toBe(false);
	});

	it('return false when have before @ .', () => {
		expect(isEmail('joao.@gmail.com')).toBe(false);
	});

	it('return false when have after @ .', () => {
		expect(isEmail('joao@gmail..com')).toBe(false);
	});

	it('return true .com.br', ()=>{
		expect(isEmail('foo@bar.com.br')).toBe(true);
	});

	it('return false .com.br.br', ()=>{
		expect(isEmail('foo@bar.com.br.br')).toBe(false);
	});

	it('return false .com.com.br.br', ()=>{
		expect(isEmail('foo@bar.com.com.br.br')).toBe(false);
	});

	it('return false .com.com.br', ()=>{
		expect(isEmail('foo@bar.com.com.br')).toBe(false);
	});
});
