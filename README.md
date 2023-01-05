# Steckdose

This package empowers you to develop.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![CI](https://github.com/jamashita/steckdose/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/jamashita/steckdose/actions/workflows/ci.yml)

## Requisite

```
> node -v
v18.9.1

> npm -v
8.19.1

> yarn -v
1.22.19
```

## Conventional commit

```
git cz
```

## Digest

### `new Digest(rounds: number)`

Returns `Digest` instance. Round is the cost o processing data.

### `digest.compare(str: string, hash: string): Promise<boolean>`

Compare `str` to `hash`. `hash` is a generated string. It will return `true` if `str` is identical to `hash`.

### `digest.generate(str: string): Promise<string>`

Generate a hash of the given `str`.

## JSONA

### `JSONA.parse<T extends ObjectLiteral>(text: string): Promise<T>`

Asynchronously returns JSON.

### `JSONA.stringify(value: ObjectLiteral): Promise<string>`

Asynchronously return a string representation of the given JSON.

## Random

### `Random.integer(min: number, max: number): number`

Generate a random number between min and max, inclusive.

## Tokenizer

### `new Tokenizer(str: string, delimiter: string)`

Returns `Tokenizer` instance.

### `tokenizer.count(): number`

Returns the number of tokens.

### `tokenizer.getTokens()`

Returns tokens as an Array.

### `wait(ms: number): Promise<void>`

Wait given `ms` milliseconds.

## License

[MIT](LICENSE)