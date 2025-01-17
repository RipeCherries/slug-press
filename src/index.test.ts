import { slugPress, SlugPressOptions } from './index';

describe('slugPress', () => {
  test('should replace spaces with default separator "-"', () => {
    const input = 'hello world';

    const actual = slugPress(input);
    const expected = 'hello-world';

    expect(actual).toBe(expected);
  });

  test('should replace spaces with custom separator', () => {
    const input = 'hello world';
    const options: SlugPressOptions = { separator: '_' };

    const actual = slugPress(input, options);
    const expected = 'hello_world';

    expect(actual).toBe(expected);
  });

  test('should trim spaces at the edges of the input', () => {
    const input = '     hello world     ';

    const actual = slugPress(input);
    const expected = 'hello-world';

    expect(actual).toBe(expected);
  });

  test('should handle multiple spaces between words', () => {
    const input = 'hello                world';

    const actual = slugPress(input);
    const expected = 'hello-world';

    expect(actual).toBe(expected);
  });

  test('should handle empty input string', () => {
    const input = '';

    const actual = slugPress(input);
    const expected = '';

    expect(actual).toBe(expected);
  });

  test('should handle input with no spaces', () => {
    const input = 'helloworld';

    const actual = slugPress(input);
    const expected = 'helloworld';

    expect(actual).toBe(expected);
  });

  test('should remove special characters by default', () => {
    const input = 'hello@world!';

    const actual = slugPress(input);
    const expected = 'hello-world';

    expect(actual).toBe(expected);
  });

  test('should not remove special characters if removeSpecialChars is false', () => {
    const input = 'hello@world!';
    const options: SlugPressOptions = { removeSpecialChars: false };

    const actual = slugPress(input, options);
    const expected = 'hello@world!';

    expect(actual).toBe(expected);
  });

  test('should handle input with only special characters', () => {
    const input = '@#$%^&*()';

    const actual = slugPress(input);
    const expected = '';

    expect(actual).toBe(expected);
  });

  test('should not remove special characters but replace spaces with custom separator', () => {
    const input = 'hello @ world !';
    const options: SlugPressOptions = { separator: '_', removeSpecialChars: false };

    const actual = slugPress(input, options);
    const expected = 'hello_@_world_!';

    expect(actual).toBe(expected);
  });

  test('should keep case as original by default', () => {
    const input = 'Hello World';

    const actual = slugPress(input);
    const expected = 'Hello-World';

    expect(actual).toBe(expected);
  });

  test('should convert to lowercase when caseStyle is "lowercase"', () => {
    const input = 'Hello World';
    const options: SlugPressOptions = { caseStyle: 'lowercase' };

    const actual = slugPress(input, options);
    const expected = 'hello-world';

    expect(actual).toBe(expected);
  });

  test('should convert to uppercase when caseStyle is "uppercase"', () => {
    const input = 'Hello World';
    const options: SlugPressOptions = { caseStyle: 'uppercase' };

    const actual = slugPress(input, options);
    const expected = 'HELLO-WORLD';

    expect(actual).toBe(expected);
  });

  test('should limit the result to maxLength if provided', () => {
    const input = 'hello world slug press test';
    const options: SlugPressOptions = { maxLength: 11 };

    const actual = slugPress(input, options);
    const expected = 'hello-world';

    expect(actual).toBe(expected);
  });

  test('should return an empty string if maxLength is 0', () => {
    const input = 'hello world';
    const options: SlugPressOptions = { maxLength: 0 };

    const actual = slugPress(input, options);
    const expected = '';

    expect(actual).toBe(expected);
  });

  test('should remove stop words from input', () => {
    const input = 'hello world test case';
    const options: SlugPressOptions = { stopWords: ['world', 'test'] };

    const actual = slugPress(input, options);
    const expected = 'hello-case';

    expect(actual).toBe(expected);
  });

  test('should handle stop words with case insensitive comparison', () => {
    const input = 'Hello World Test Case';
    const options: SlugPressOptions = { stopWords: ['world', 'TEST'] };

    const actual = slugPress(input, options);
    const expected = 'Hello-Case';

    expect(actual).toBe(expected);
  });

  test('should handle custom replacements', () => {
    const input = 'hello world';
    const options: SlugPressOptions = { customReplacements: [['world', 'planet']] };

    const actual = slugPress(input, options);
    const expected = 'hello-planet';

    expect(actual).toBe(expected);
  });

  test('should apply multiple custom replacements', () => {
    const input = 'hello world';
    const options: SlugPressOptions = {
      customReplacements: [
        ['hello', 'hi'],
        ['world', 'planet']
      ]
    };

    const actual = slugPress(input, options);
    const expected = 'hi-planet';

    expect(actual).toBe(expected);
  });
});
