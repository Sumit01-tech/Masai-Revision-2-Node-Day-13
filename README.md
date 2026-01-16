# Day 13: Error Handling & Validation

## 1. What are the types of errors in Node.js?

Node.js errors are broadly categorized into:

* **Syntax Errors**: Errors due to incorrect JavaScript syntax (caught at parse time).
* **Runtime Errors**: Errors that occur during execution (e.g., accessing undefined variables).
* **Logical Errors**: Code runs but produces incorrect results due to flawed logic.
* **Operational Errors**: Errors caused by external factors like network failure, invalid input, database downtime.
* **Programmer Errors**: Bugs in code such as null reference, undefined access, incorrect assumptions.

---

## 2. How do you handle errors in synchronous vs asynchronous code?

* **Synchronous Code**:

  * Use `try-catch` blocks.

* **Asynchronous Code**:

  * Callbacks: Pass errors using `callback(err, result)` pattern.
  * Promises: Use `.catch()`.
  * Async/Await: Use `try-catch` around `await` calls.

---

## 3. What is the try-catch block? When should you use it?

`try-catch` is used to handle runtime exceptions gracefully.

**Use cases:**

* JSON parsing
* Async/await error handling
* External API calls
* Code that may throw exceptions

Avoid using `try-catch` for normal control flow.

---

## 4. How do you handle unhandled promise rejections?

* Always use `.catch()` on promises.
* Wrap async logic in `try-catch`.
* Add a global handler:

```js
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
```

---

## 5. What are operational errors vs programmer errors?

| Operational Errors | Programmer Errors   |
| ------------------ | ------------------- |
| Invalid user input | Undefined variables |
| Network failure    | Null reference      |
| Database downtime  | Logic bugs          |
| Timeout issues     | Syntax mistakes     |

Operational errors should be handled gracefully; programmer errors should crash and be fixed.

---

## 6. How would you implement centralized error handling in Express?

By creating a global error-handling middleware:

```js
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error'
  });
});
```

All routes pass errors using `next(err)`.

---

## 7. What is input validation? Why is it important?

Input validation ensures incoming data is:

* Correct
* Safe
* Expected

**Importance:**

* Prevents security vulnerabilities
* Avoids crashes
* Ensures data integrity
* Improves user experience

---

## 8. What libraries can you use for validation?

Common validation libraries:

* **Joi** – Schema-based validation
* **express-validator** – Middleware-based validation
* **Yup** – Popular with React
* **Zod** – Type-safe validation
* **Validator.js** – String validations

---

## 9. How do you sanitize user input?

Sanitization removes or escapes harmful data:

* Escape HTML characters
* Remove scripts
* Use libraries like:

  * `express-validator`
  * `xss-clean`
  * `sanitize-html`

Example:

```js
body('email').trim().escape()
```

---

## 10. Difference between client-side and server-side validation?

| Client-Side Validation | Server-Side Validation |
| ---------------------- | ---------------------- |
| Runs in browser        | Runs on server         |
| Improves UX            | Ensures security       |
| Can be bypassed        | Cannot be bypassed     |
| Faster feedback        | Final authority        |

---
