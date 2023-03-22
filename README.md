# Steckdose

This package empowers you to develop.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![CI](https://github.com/jamashita/steckdose/actions/workflows/ci.yml/badge.svg)](https://github.com/jamashita/steckdose/actions/workflows/ci.yml)

## TODO

- [ ] Probability

## Install

```text
yarn add @jamashita/steckdose
```

## Prerequisite

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

## Arithmetic

A class for performing arithmetic operations.

### `Arithmetic.average(iterable: Iterable<number>): number`

Calculates the average of a series of numbers. The `iterable` parameter is an iterable object containing the numbers to
calculate the average of. The method returns the average of the numbers in the `iterable` as a floating-point number.

If the length of the given iterable is 0, an `ArithmeticError` will be thrown.

### `Arithmetic.combination(n: number, m: number): number`

Calculates the number of combinations of `m` items that can be selected from a set of `n` items. The `n` and `m`
parameters are positive integers representing the values to use in the calculation. The method returns the number of
combinations as an integer.

If `n` is less than `m`, or either `n` or `m` are not positive integers, an `ArithmeticError` will be thrown.

### `Arithmetic.deviation(iterable: Iterable<number>): number`

Calculates the deviation of a series of numbers. The `iterable` parameter is an iterable object containing the numbers
to
calculate the deviation of. The method returns the deviation of the numbers in the `iterable` as a floating-point
number.

If the length of the given iterable is 0, an `ArithmeticError` will be thrown.

### `Arithmetic.factorial(n: number): number`

Calculates the factorial of a number `n`. The `n` parameter is a positive integer representing the value to use in the
calculation. The method returns the factorial of `n` as an integer.

If `n` is not a positive integer, an `ArithmeticError` will be thrown.

### `Arithmetic.float(min: number, max: number): number`

Generates a random floating-point number in the range [min, max), where `min` is inclusive and `max` is exclusive. The
function returns a random number that is greater than or equal to `min` and less than `max`.

### `Arithmetic.gcd(n: number, m: number): number`

Calculates the greatest common divisor (GCD) of two positive integers `n` and `m`. The `n` and `m` parameters are the
positive integers to use in the calculation. The method returns the GCD of `n` and `m` as an integer.

If n is not a positive integer, or if n is less than m, an ArithmeticError will be thrown.

### `Arithmetic.integer(min: number, max: number): number`

Generates a random integer in the range [min, max], inclusive. The function returns a random number that is greater than
or equal to `min` and less than or equal to `max`.

### `Arithmetic.inverse(num: number): number`

Calculates the inverse of a number `num`. The num parameter is the value to use in the calculation. The method returns
the inverse of `num` as a floating-point number.

If num is equal to 0, an `ArithmeticError` will be thrown.

### `Arithmetic.median(iterable: Iterable<number>): number`

Calculates the median of a series of numbers. The `iterable` parameter is an iterable object containing the numbers to
calculate the median of. The method returns the median of the numbers in the `iterable` as a floating-point number.

If the length of the given iterable is 0, an `ArithmeticError` will be thrown.

### `Arithmetic.negate(num: number): number`

Calculates the negation of a number `num`. The `num` parameter is the value to negate. The method returns the negation
of `num` as a floating-point number.

### `Arithmetic.permutation(n: number, m: number): number`

Calculates the number of permutations of `m` items that can be selected from a set of `n` items. The `n` and `m`
parameters are positive integers representing the values to use in the calculation. The method returns the number of
permutations as an integer.

If `n` is less than `m`, or either `n` or `m` are not positive integers, an `ArithmeticError` will be thrown.

### `Arithmetic.random(): number`

Generates a random floating-point number in the range [0, 1). The function returns a random number that is greater than
or equal to 0 and less than 1.

### `Arithmetic.variance(iterable: Iterable<number>): number`

Calculates the variance of a series of numbers. The `iterable` parameter is an iterable object containing the numbers to
calculate the variance of. The method returns the variance of the numbers in the `iterable` as a floating-point number.

If the length of the given `iterable` is 0, an `ArithmeticError` will be thrown.

## Config

A class for reading configuration files.

### `new Config(dir: string, env: string)`

The package reads the configuration file in the following format: `dir`/`env`.json (or .yml, .yaml). The following
conditions apply to the constructor:

The package tries to read the configuration file in the order .json, .yml, .yaml. If a file is found, it stops searching
and does not attempt to read any other files. If no file is found, `ConfigError` is thrown.

Regardless of the specified environment, the package will attempt to read the `default.json`, `default.yml`,
or `default.yaml` file. If it exists, it will be merged with the environment-specific file to create the final
configuration object.

### `Config.prototype.get<T>(property: string): T`

Retrieves the value of a specified property from the configuration object. The property parameter is a string that
represents the name of the property to retrieve, and it can handle nested properties using a dot-notation (e.g. a.b.c).
The method returns a value of the specified type `T`.

### `Config.prototype.has(property: string): boolean`

Checks if a specified property exists in the configuration object. The property parameter is a string that represents
the name of the property to check and supports dot-notation for nested properties (e.g. a.b.c). The method returns a
boolean value indicating whether the property exists in the configuration object.

## Delay

A class for delaying the process for a certain amount of time in milliseconds.

### `Delay.debounce<T extends AnyFunction>(callback: T, ms: number): NoReturn<T>`

Creates a new function that will delay the execution of `callback` by `ms` milliseconds. The new function will be
returned and it can be used to replace the original function `callback`.

### `Delay.randomWait(minMS: number, maxMS: number): Promise<void>`

Creates a promise that will wait for a random number of milliseconds between `minMS` and `maxMS`. The
Promise will resolve with void after the specified random wait time has passed.

### `Delay.throttle<T extends AnyFunction>(callback: T, ms: number): NoReturn<T>`

Creates a new function that will limit the rate of execution of `callback` to once every `ms` milliseconds. The returned
function will replace the original `callback` and can be used in its place. The returned function will be called
immediately, and subsequent calls to the function will be ignored until `ms` milliseconds have passed.

### `Delay.wait(ms: number): Promise<void>`

Returns a Promise that will resolve after `ms` milliseconds have passed.

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

A class for generating random values.

### `Random.float(min: number, max: number): number`

Generates a random floating-point number in the range [min, max), where `min` is inclusive and `max` is exclusive. The
function returns a random number that is greater than or equal to `min` and less than `max`.

### `Random.integer(min: number, max: number): number`

Generates a random integer in the range [min, max], inclusive. The function returns a random number that is greater than
or equal to `min` and less than or equal to `max`.

### `Random.pick<T>(iterable: Iterable<T>): T`

Returns a random element from the provided `iterable`.

If the `iterable` is empty, a `RandomError` will be thrown.

### `Random.random(): number`

Generates a random floating-point number in the range [0, 1). The function returns a random number that is greater than
or equal to 0 and less than 1.

### `Random.string(length: number, pool?: string): string`

Generates a random string of the specified `length` using the characters in the `pool` string. By default, the `pool`
string contains all uppercase and lowercase letters and digits, but you can provide a custom `pool` string to generate a
string using a different set of characters.

## Tokenizer

A class for tokenizing a string by a certain delimiter.

### `new Tokenizer(str: string, delimiter: string)`

Returns a Tokenizer instance.

### `Tokenizer.prototype.count(): number`

Returns the number of tokens.

### `Tokenizer.prototype.getTokens(): string[]`

Returns the tokens as an array.

## License

[MIT](LICENSE)
