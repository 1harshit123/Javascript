# JavaScript Notes

## Variables
- We cannot update and change the **constant variable** (declared with `const`), but we can change the **key of a constant object**.

## Comparison Operators
- In JavaScript, `==` only checks the **value** of the objects. For example:
    ```javascript
    5 == "5"  // returns true
    ```
- To check both **value and type**, use the strict version of the comparison operator `===`:
    ```javascript
    5 === "5"  // returns false
    ```

## Type Conversions

### Conversion to Number
- **String** (if it contains a number) → Number
- **NULL** → `0`
- **Undefined** → `NaN`
- **True** → `1`
- **False** → `0`

### Conversion to Boolean
- `1` → `true`
- `0` → `false`
- `""` (empty string) → `false`
- `"df"` (non-empty string) → `true`

## Data Types
### Primitive Types (stored in stack memory)
- **string**
- **number**
- **boolean**
- **null**
- **undefined**
- **symbol**

### Reference Types (stored in heap memory)
- **Array**
- **Object**
- **Function**

## Objects
- **Singleton** objects are created only when we make an object using a constructor function.
- The **symbol** datatype is often used in `[]` in object declarations and when accessing object keys in `console.log`.

### `this` Keyword
- The `this` keyword can only be used in **object environments** and **not in regular functions**.

### Arrow Functions and Objects
- Objects cannot be returned in an arrow function without using parentheses `()` around the object. For example:
    ```javascript
    const getObject = () => ({ key: 'value' });
    ```

## Call Stack (Life Cycle) - Last In, First Out (LIFO)
- In JavaScript, the **call stack** is like a to-do list for functions in your program.
- It follows **LIFO** (Last In, First Out), meaning the last thing added is the first to be done.
- The call stack is like a script's roadmap for the JavaScript Engine.

## Important to Learn: Fetch Documentation
- The `fetch` API documentation is important to understand and learn for making HTTP requests in JavaScript.

