<h1 align="center">
    A library for generating slug based on the input string and the ability to configure parameters ✏️
</h1>

<p align="center">
    <a href="#-summary">Summary</a> •
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-api">API</a> •
    <a href="#-examples">Examples</a> •
    <a href="#-contributing">Contributing</a> •
    <a href="#-license">License</a> •
    <a href="#-contact">Contact</a>
</p>

<img src="assets/cover.png" height="auto" width="100%">

<div align="center">
    <a href="https://github.com/RipeCherries/slug-press/actions/workflows/test.yml">
        <img src="https://github.com/RipeCherries/slug-press/actions/workflows/test.yml/badge.svg" alt="Tests">
    </a>
    <a href="https://www.npmjs.com/package/slug-press">
        <img src="https://img.shields.io/npm/v/slug-press" alt="NPM Version">
    </a>
</div>

## ✏️ Summary

**SlugPress** is a lightweight and flexible library for generating slugs from strings. A slug is a URL-friendly
representation of a string, often used in creating readable and SEO-friendly URLs.

## ✏️ Features

* Removes special characters;
* Converts to lowercase, uppercase, or keeps the original case;
* Removes stop words;
* Supports custom replacements;
* Allows custom separators;
* Trims slugs to a maximum length while preserving whole words.

## ✏️ Installation

Install via npm:

```bash
npm install slug-press
```

or via yarn:

```bash
yarn add slug-press
```

## ✏️ Usage

Import `slugPress` and `SlugPressOptions` (optional) and use it in your project:

```typescript
import { slugPress, SlugPressOptions } from 'slug-press';

const options: SlugPressOptions = {
  separator: '-',
  removeSpecialChars: true,
  caseStyle: 'lowercase',
  maxLength: 50,
  stopWords: ['the', 'a', 'of'],
  customReplacements: [['&', 'and']],
};

const slug = slugPress('The Quick & Brown Fox Jumps Over the Lazy Dog!', options);
console.log(slug); // Output: "quick-brown-fox-jumps-over-lazy-dog"
```

## ✏️ API

`slugPress(input: string, options?: SlugPressOptions): string`

Generates a slug from the provided input string based on the specified options.

**Parameters:**

* `input`: The string to be transformed into a slug;
* `options` *(optional)*: Configuration options for customizing slug generation.

| Option               | Type                 | Default      | Description                                                                      |
|----------------------|----------------------|--------------|----------------------------------------------------------------------------------|
| `separator`          | `string`             | `'-'`        | The character used to separate words in the slug.                                |
| `removeSpecialChars` | `boolean`            | `true`       | If true, removes non-alphanumeric characters (except spaces).                    |
| `caseStyle`          | `string`             | `'original'` | Defines the case style of the slug (`'original'`, `'lowercase'`, `'uppercase'`). |
| `maxLength`          | `number`             | `Infinity`   | Maximum length of the slug (whole words only).                                   |
| `stopWords`          | `string[]`           | `[]`         | List of words to exclude from the slug.                                          |
| `customReplacements` | `[string, string][]` | `[]`         | Array of custom replacements (e.g., replace & with and).                         |

## ✏️ Examples

**Basic Usage:**

```typescript
const slug = slugPress('Hello, World!');
console.log(slug); // Output: "hello-world"
```

**Custom Separator:**

```typescript
const slug = slugPress('Hello World', { separator: '_' });
console.log(slug); // Output: "Hello_World"
```

**Remove Stop Words:**

```typescript
const slug = slugPress('A Journey to the Center of the Earth', {
  stopWords: ['a', 'the', 'of']
});
console.log(slug); // Output: "Journey-to-Center-Earth"
```

**Custom Replacements:**

```typescript
const slug = slugPress('Rock & Roll', {
  customReplacements: [['&', 'and']]
});
console.log(slug); // Output: "Rock-and-Roll"
```

**Enforce Maximum Length:**

```typescript
const slug = slugPress('This is a very long title that exceeds the maximum length', {
  maxLength: 20
});
console.log(slug); // Output: "This-is-a-very"
```

## ✏️ Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

## ✏️ License

`slug-press` is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.

## ✏️ Contact

If you want to contact me, please see my socials medias in [my GitHub profile](https://github.com/RipeCherries).