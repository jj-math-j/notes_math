# arithmetic

the process of evaluating mathematical expressions

## anatomy

- **value**: a numeric representation

  - **literal**: a fixed number used in calculations (e.g., `3`, `2.7`, `π`)
 
  - **variable**: a symbol representing an unknown or dynamic value (e.g., `x` in `2x + 3`)

  - **expression**: an operation or combination of operations, along with their operands  (e.g., `2 * 3 + 5`)
 
- **operand**: an input value in an operation (the building blocks of calculation)

- **group**: an expression operand requring calculation before its operation can be performed

- **operator**: a fixed symbol representing an operation within an expression

- **operation**: a deterministic process performed on operands that yields a new value, representing a condensed version of the original expanded operation

## concepts

- **commutativity**: operand order does not affect operation result (e.g., `u + v = v + u`, `u * v = v * u`)

- **precedence**: how the order of operations in an expression is determined

- **associativity**: operation order/grouping does not affect expression result (e.g., `(u + v) + w = u + (v + w)`, `(u * v) * w = u * (v * w)`)

  - **left/right associativity**: how the order of operations with equal precedence are determined

- **zero**: the absence of quantity (e.g., `u + 0 = u`, `u * 0 = 0`, `u - u = 0`)

  - **addition identity**: all addition operations can add zero and not change the result, thus all additions can be viewed as having an implicit addition of zero (e.g., `3 + 3 = 0 + 3 + 3`)

  - **division by zero**: undefined behavior
 
  - **zero exponent**: a number multiplied by itself zero times is 1 _(multiplication identity is 1, `3^2 = 1 * 3 * 3 = 9`, `3^0 = 1`)_ (e.g., `u^0 = 1`)

    - **0 to the 0th power**: undefined behavior
   
- **one**: the building block of counting (e.g., `1 + 1 + 1 = 3`, `3 / 3 = 1`)

  - **multiplication identity**: all multiplication operations can multiply itself by one and not change the result, thus all multiplications can be viewed as having an implicit multiplication by one (e.g., `3 * 3 = 1 * 3 * 3`)

- **self**: (e.g., `u + 0 = u`, `u * 1 = u`, `u - u = 0`, `u = u`)

## operations

### addition

the process of combining two values (_addends_) into a single value (_sum_) (e.g., `1 + 1 = 2`, `1 + 2 = 3`)

#### anatomy

- **addend**: an operand value in an addition operation

- **sum**: the result value of an addition operation

#### properties

- **operation kind**: foundational

- **notation symbol**: +

- **notation kind**: binary infix

- **associativity**: left

- **precedence**: least (left to right versus addition and subtraction)

### subtraction

(e.g., `7 - x = 7 + (-x) = 7 + (-1 * x)`)

#### anatomy

- **minuend**: 

- **subtrahend**:

- **difference**:

#### properties

- **operation kind**: derivative

- **notation symbol**: -

- **notation kind**: binary infix

- **associativity**: left

- **precedence**: least (left to right versus addition and subtraction)

### multiplication

the scaling of a number by itself some number of times (e.g., `2 * 3 = 2 + 2 + 2 = 3 + 3`, `-2 * 3 = -2 + -2 + -2 = -(3) + -(3) = -(3 + 3)`)

#### anatomy

- **multiplicand**:

- **multiplier**:

- **product**: 

#### properties

- **operation kind**: foundational

- **notation symbol**: * or x or ·

- **notation kind**: binary infix

- **associativity**: left

- **precedence**: middle (left to right versus multiplication and division)

### division

(e.g., `4 / 2 = 2`, `2 / 2 = 1`, `1 / 2 = 0.5`)

#### anatomy

- **dividend**:

- **divisor**:

- **quotient**:

#### properties

- **operation kind**: foundational

- **notation symbol**: / or ÷

- **notation kind**: binary infix

- **associativity**: left

- **precedence**: middle (left to right versus multiplication and division)

### exponentation

#### anatomy

- **base**:

- **exponent/power**:

#### properties

- **operation kind**: conceptual

- **notation symbol**: ^ or ** or superscript

- **notation kind**: binary postfix

- **associativity**: right

- **precedence**: highest(second highest???) (left to right versus exponentation and grouping???)

### grouping

the prioritization of an operation's evaluation relative to its peers (e.g., `3 * (2 + 1) = 9`, `3 * 2 + 1 = 7`)

#### properties

- **operation kind**: foundational

- **notation symbol**: (<someExpression>)

- **notation kind**: binary??? outfix

- **associativity**: none

- **precedence**: highest (left to right versus exponentation and grouping???)

### negation/inversion

(e.g., `-x = -1 * x`)

#### properties

- **operation kind**: conceptual

- **notation symbol**: -

- **notation kind**: unary prefix

- **associativity**: ???

- **precedence**: ???

## shorthands 

- **coefficient/linear**: (e.g., the 3 in `3x` where `3x = 3 * x`)

## outstanding questions

- given `a # b $ c`, where operators # and $ have equal precedence, but # is right-associative and $ is left-associative, which operation is performed first? same question, but the expression is reversed `a $ b # c`? are those mathematically valid scenarios, specifically can two unique operators with different directions of associativity have equal precedence?


