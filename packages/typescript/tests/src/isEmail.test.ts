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

	it('returns throw for array input', () => {
		expect(() => isEmail([] as any)).toThrow("Invalid input, must be a string");
	});

	it('returns throw for object input', () => {
		expect(() => isEmail({} as any)).toThrow("Invalid input, must be a string");
	});

	it('returns throw for boolean input', () => {
		expect(() => isEmail(true as any)).toThrow("Invalid input, must be a string");
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

	it('it return false when start with .', () => {
		expect(isEmail('.foo@bar.com')).toBe(false);
	});

	it('it return false when start with ,', () => {
		expect(isEmail(',foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character !', () => {
		expect(isEmail('!foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character @', () => {
		expect(isEmail('@foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character #', () => {
		expect(isEmail('#foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character $', () => {
		expect(isEmail('$foo@bar.com')).toBe(false);
	});
	it('returns false for email starting with special character %', () => {
		expect(isEmail('%foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character ^', () => {
		expect(isEmail('^foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character &', () => {
		expect(isEmail('&foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character *', () => {
		expect(isEmail('*foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character (', () => {
		expect(isEmail('(foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character )', () => {
		expect(isEmail(')foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character -', () => {
		expect(isEmail('-foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character _', () => {
		expect(isEmail('_foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character =', () => {
		expect(isEmail('=foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character +', () => {
		expect(isEmail('+foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character [', () => {
		expect(isEmail('[foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character ]', () => {
		expect(isEmail(']foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character {', () => {
		expect(isEmail('{foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character }', () => {
		expect(isEmail('}foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character ;', () => {
		expect(isEmail(';foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character :', () => {
		expect(isEmail(':foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character \\', () => {
		expect(isEmail('\'foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character "', () => {
		expect(isEmail('"foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character <', () => {
		expect(isEmail('<foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character >', () => {
		expect(isEmail('>foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character ?', () => {
		expect(isEmail('?foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character /', () => {
		expect(isEmail('/foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character two \\', () => {
		expect(isEmail('\\foo@bar.com')).toBe(false);
	});

	it('returns false for email starting with special character |', () => {
		expect(isEmail('|foo@bar.com')).toBe(false);
	});

	it('it return false when start with @', () => {
		expect(isEmail('@foo@bar.com')).toBe(false);
	});

	it('returns false when have more than one @', () => {
		expect(isEmail('foo@@bar.com')).toBe(false);
	});

	it('return true .com.br', () => {
		expect(isEmail('foo@bar.com.br')).toBe(true);
	});

	it('return false .com.br.br', () => {
		expect(isEmail('foo@bar.com.br.br')).toBe(false);
	});

	it('return false .com.com.br.br', () => {
		expect(isEmail('foo@bar.com.com.br.br')).toBe(false);
	});

	it('return false .com.com.br', () => {
		expect(isEmail('foo@bar.com.com.br')).toBe(false);
	});

	it('returns false for email with special characters', () => {
		expect(isEmail('foo!@bar.com')).toBe(false);
	});

	it('returns false for email with spaces', () => {
		expect(isEmail('foo bar@baz.com')).toBe(false);
	});

	it('returns false for email with leading whitespace', () => {
		expect(isEmail(' foo@bar.com')).toBe(false);
	});

	it('returns false for email with trailing whitespace', () => {
		expect(isEmail('foo@bar.com ')).toBe(false);
	});

	it('returns false for email with consecutive dots', () => {
		expect(isEmail('foo..bar@baz.com')).toBe(false);
	});

	it('returns false for email with consecutive @ symbols', () => {
		expect(isEmail('foo@@bar.com')).toBe(false);
	});

	it('returns false for email with consecutive dots after @', () => {
		expect(isEmail('foo@bar..com')).toBe(false);
	});

	it('returns false for email with consecutive dots before @', () => {
		expect(isEmail('foo..bar@baz.com')).toBe(false);
	});

	it('returns false for email with consecutive dots after last dot', () => {
		expect(isEmail('foo@bar.com..')).toBe(false);
	});

	it('returns false for email with consecutive dots before last dot', () => {
		expect(isEmail('foo@bar..com')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after @', () => {
		expect(isEmail('foo..@bar.com')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after last dot', () => {
		expect(isEmail('foo@bar..com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after @ and last dot', () => {
		expect(isEmail('foo..@bar..com.')).toBe(false);
	});

	it('returns false for email with consecutive @ symbols before domain', () => {
		expect(isEmail('foo@@@bar.com')).toBe(false);
	});

	it('returns false for email with consecutive dots before domain', () => {
		expect(isEmail('foo...bar.com')).toBe(false);
	});

	it('returns false for email with consecutive dots after domain', () => {
		expect(isEmail('foo@bar.com...')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain', () => {
		expect(isEmail('foo...@bar.com...')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns false for email with consecutive dots before and after domain and last dot', () => {
		expect(isEmail('foo...@bar...com.')).toBe(false);
	});

	it('returns true for valid email with uppercase letters', () => {
		expect(isEmail('Foo@Bar.com')).toBe(true);
	});

	it('returns false for email with special characters in domain', () => {
		expect(isEmail('foo@bar!com')).toBe(false);
	});

	it('returns false for email with special characters in username', () => {
		expect(isEmail('foo!@bar.com')).toBe(false);
	});

	it('returns false for email with invalid TLD', () => {
		expect(isEmail('foo@bar.c')).toBe(false);
	});
})
