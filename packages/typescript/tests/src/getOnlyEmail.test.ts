import getOnlyEmail from '../../src/getOnlyEmail';

describe('getOnlyEmail', () => {
	it('should return the first email when multiple is false', () => {
		const result = getOnlyEmail("Entre em contato com a equipe: joao@empresa.com, maria@empresa.com, contato@empresa.com", { multiple: false });
		expect(result).toBe('joao@empresa.com');
	});

	it('should return all emails when multiple is true', () => {
		const result = getOnlyEmail("Entre em contato com a equipe: joao@empresa.com, maria@empresa.com, contato@empresa.com", { multiple: true });
		expect(result).toEqual(['joao@empresa.com', 'maria@empresa.com', 'contato@empresa.com']);
	});

	it('should return cleaned emails when cleanDomain is true', () => {
		const result = getOnlyEmail("Entre em contato com a equipe: joao@empresa.com.br, maria@empresa.com.io, contato@empresa.com.pt jonyjony@gmail.comAwaodiawdoi", { multiple: true, cleanDomain: true });
		expect(result).toEqual(['joao@empresa.com.br', 'maria@empresa.com.io', 'contato@empresa.com.pt', 'jonyjony@gmail.com']);
	});

	it('should return unique emails when repeatEmail is false', () => {
		const result = getOnlyEmail("Entre em contato com a equipe: joao@empresa.com, joao@empresa.com, joao@empresa.com", { multiple: true, cleanDomain: false, repeatEmail: false });
		expect(result).toEqual(['joao@empresa.com']);
	});

	it('should return repeated emails when repeatEmail is true', () => {
		const result = getOnlyEmail("Entre em contato com a equipe: joao@empresa.com, joao@empresa.com, joao@empresa.com", { multiple: true, cleanDomain: false, repeatEmail: true });
		expect(result).toEqual(['joao@empresa.com', 'joao@empresa.com', 'joao@empresa.com']);
	});

	it('should return "No email found" when no email is present', () => {
		const result = getOnlyEmail("Entre em contato com a equipe", { multiple: false });
		expect(result).toBe('No email found');
	});

	it('should return "No email found" even if non of the options are passed', () => {
		const result = getOnlyEmail("Entre em contato com a equipe");
		expect(result).toBe('No email found');
	});

	it('should return an email even if non of the options are passed', () => {
		const result = getOnlyEmail("Entre em contato com a equipe:	alexa@google.com");
		expect(result).toBe('alexa@google.com');
	});
});
