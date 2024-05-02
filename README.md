# Typescript besic

## What is typescript?

Typescript is an object oriented programming language that is build on the top of JS with extra features.

## Lack of JS

- JS is a dynamically typed language that why we can reasign any type variable. It does not through any error.

* JS does not allow make changes other version

## Benefit of TS

- Support older browser.
- Type safety
- Increase your productivity
- Less bugg and less testing

## Lack of TS

- Type complexities
- Limited library support
- Over engineering
- Migration challenges

## Can browser really recognized TS?

No, browser can not recognized the TS. Firstly TS transplied the JS, then run into browser or run time.

## Some command for change and check node version

- Check if Node is installed on the machine, or check what the Node version is -- node -v
- If not, go to the Node document and install the Node package.
- To change the node version for a different purpose. Use node version manager (nvm). - install nvm to see documentation
- Now check the nvm version command line. - nvm --v
- Installing any type of version of the Node command line - npm i version number
- To see the node version list, the command line is - nvm list
- Any type of version on the SWICTH command line is - nvm use version number

## Besic data type

- Primitive type - number, string, boolean, null, nundefined, symbol
- Non-primitive type- array, tuple, object

## In TypeScript, there are two ways to define the type of a variable: explicitly and implicitly.

## Implicit typing is a TypeScript feature

Automatically infers the type of a variable based on its initial value or usage in the code.

## Explicit typing is a TypeScript feature

Explicit typing refers to the process of explicitly defining the type of a variable, function parameter, or return value using a type annotation.

## What is tuple?

Tuple is one kind of array but with a fixed number of elements. They provide us with a fixed-size container that can store values of multiple types, where order and structure are very important.

## What is literal value?

When a value behave like type then called it literal value.

## Access modifier in TS.

Access modifiers are used to encapsulate class and its member variables. There are four type of access modifier are support in TS- public, private, protected and read-only.

## What is method in TS?

When a function declare in object then call it method. In object, declare the normal function beacuse arrow function do not support "this".

## What is rest operator?

When used as a parameter in a function, it's called the rest operator. It collects multiple arguments into an array.

## Destructure type in TS

Two type - array destructure, object destructure.

## What is type alias?

Type alias is powerful features of typescript, which allow to developer create customes name for types.

## Nullish coalescing

When make a decession based on null or undefined, then use the nullish coalescing.
