export interface SlugPressOptions {
  separator?: string;
  removeSpecialChars?: boolean;
  caseStyle?: 'original' | 'lowercase' | 'uppercase';
  maxLength?: number;
}

export const slugPress = (input: string, options: SlugPressOptions = {}): string => {
  const { separator = '-', removeSpecialChars = true, caseStyle = 'original', maxLength = Infinity } = options;

  // Removing spaces at the edges of a line
  let result = input.trim();

  // Deleting all characters except letters, numbers, and spaces
  if (removeSpecialChars) {
    result = result.replace(/[^\w\s]/g, ' ');
    result = result.trim();
  }

  // Replacing spaces with a separator
  result = result.replace(/\s+/g, separator);

  // Case application depending on the specified style
  if (caseStyle === 'lowercase') {
    result = result.toLowerCase();
  } else if (caseStyle === 'uppercase') {
    result = result.toUpperCase();
  }

  // Limiting the length of a string while preserving words
  if (result.length > maxLength) {
    const words = result.split(separator);
    result = words.reduce((acc, word) => {
      const nextSegment = acc ? `${acc}${separator}${word}` : word;
      return nextSegment.length <= maxLength ? nextSegment : acc;
    }, '');
  }

  return result;
};
