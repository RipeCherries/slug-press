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
});
