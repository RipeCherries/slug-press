export interface SlugPressOptions {
  separator?: string;
}

export const slugPress = (input: string, options: SlugPressOptions = {}): string => {
  const {
    separator = '-'
  } = options;

  // Removing spaces at the edges of a line
  let result = input.trim();

  // Replacing spaces with a separator
  result = result.replace(/\s+/g, separator);

  return result;
};