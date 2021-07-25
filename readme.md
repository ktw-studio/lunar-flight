![Production Build](https://github.com/ktw-studio/lunar-flight/workflows/Project%20Build/badge.svg)
![Test](https://github.com/ktw-studio/lunar-flight/workflows/Test/badge.svg)
![Lint Check](https://github.com/ktw-studio/lunar-flight/workflows/Lint%20Check/badge.svg)

# Lunar flight - Toolkit

Lunar Flight is a lightweight toolkit.
It's not supposed to be tell you how to do things, 
but it's supposed to help you reduce boilerplate code from your repository.

## Packages:
1. Command Module – CQRS module
2. System – Tools and utils


### Installation:
Install any of the following packages:
```
npm run install @lunar-flight-v/command-module
npm run install @lunar-flight-v/system
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
