// named exports
export const name = 'John';
export const age = 30;

// default export
export default function sayHi() {
    console.log('Hi from module.js file!');
}

export { sayHi };
