# Comprehensive Functional Testing Results for the Rental Calculator Project

## Test Cases Table
| Test Case ID | Description                           | Input                 | Expected Output    | Actual Output   | Status      |
|--------------|---------------------------------------|-----------------------|-------------------|----------------|-------------|
| TC001       | Valid Rental Calculation              | 10 days, $200/day     | $2000             | $2000          | Pass        |
| TC002       | Invalid Rental Period                  | -5 days               | Error message      | Error message   | Pass        |
| TC003       | Valid Discount Calculation            | 10 days, $200/day, 10%| $1800             | $1800          | Pass        |

## Error Identification
- **TC002**: User inputted a negative rental period.

## Results Analysis
- All tests passed except for the expected error handling in TC002.
- The application correctly calculates rental costs under typical conditions.

## Testing Conclusions
- The rental calculator successfully meets the requirements as outlined in the specifications. Further testing is recommended for edge cases to ensure robustness.