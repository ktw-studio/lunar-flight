![Production Build](https://github.com/ktw-studio/lunar-flight/workflows/Project%20Build/badge.svg)

# Lunar flight - Toolkit

Lunar Flight is a lightweight, CQRS and DDD toolkit.
It's not supposed to be tell you how to do things, 
but it's supposed to help you reduce boilerplate code from your repository.

## Packages:
1. Command Module – CQRS module
2. Lunar Module – DDD building blocks
3. Instruments – Tools and utils
4. Houston - Errors and exceptions
5. Express - Express specific set of useful tools  

### Installation:
Install any of the following packages:
```
npm run install @lunar-flight/command-module
npm run install @lunar-flight/lunar-module
npm run install @lunar-flight/houston
npm run install @lunar-flight/instruments
npm run install @lunar-flight/express
```

### Usage:
All packages come with the same npm script commands.
```
start - installs packages
dev - starts nodemon
build - builds package
test - runs jest test suites
test:watch - runs jest and watches for changes
lint - lint based on project code style
format - format with prettier
typecheck - typescript check
```
