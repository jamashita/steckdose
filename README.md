# Steckdose

This package empowers you to develop.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![CI](https://github.com/jamashita/steckdose/actions/workflows/ci.yml/badge.svg)](https://github.com/jamashita/steckdose/actions/workflows/ci.yml)

## Requisite

```
> node -v
v19.7.0

> npm -v
9.5.0

> yarn -v
1.22.19
```

## Conventional commit

```
git cz
```

## Digest

A class for generating and comparing cryptographic hashes, using bcrypt.

### `new Digest(rounds: number)`

Returns a new `Digest` instance, with the specified number of `rounds` for the bcrypt algorithm. The higher the number
of `rounds`, the more secure the resulting hash will be, but it will also take longer to generate.

### `Digest.prototype.compare(str: string, hash: string): Promise<boolean>`

Compares the given `str` with the provided `hash`, and returns a promise that resolves to `true` if they match,
and `false` otherwise.

### `Digest.prototype.generate(str: string): Promise<string>`

Generates a cryptographic hash of the provided `str`, using the number of rounds specified in the Digest constructor.
Returns a promise that resolves to the resulting hash.

## JSONA

A class for asynchronously parsing JSON from a string and stringifying JSON to a string.

### `JSONA.parse<T extends ObjectLiteral>(text: string): Promise<T>`

Asynchronously returns a JavaScript object from the provided JSON string.

### `JSONA.stringify(value: ObjectLiteral): Promise<string>`

Asynchronously returns a JSON string representation of the provided JavaScript object.

## Random

A class for generating random integers.

### `Random.integer(min: number, max: number): number`

Generates a random integer between min and max, inclusive.

## Tokenizer

A class for tokenizing a string by a certain delimiter.

### `new Tokenizer(str: string, delimiter: string)`

Returns a Tokenizer instance.

### `Tokenizer.prototype.count(): number`

Returns the number of tokens.

### `Tokenizer.prototype.getTokens(): string[]`

Returns the tokens as an array.

## Wait

A class for delaying the process for a certain amount of time in milliseconds.

### `Wait.for(ms: number): Promise<void>`

Waits for the given ms milliseconds before resolving the promise.

### `Wait.approximatelyFor(minMS: number, maxMS: number): Promise<void>`

Waits for a random amount of time between minMS and maxMS milliseconds, inclusive, before resolving the promise.

## License

[MIT](LICENSE)