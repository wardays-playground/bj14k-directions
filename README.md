# Directions Exercises

## Exercise 1 

Given a constant similar to the following : 

```javascript
const params = [{
  name: 'Address1',
  country: 'Spain',
  city: 'Barcelona',
  street: 'Diagonal',
  number: '605'
},
{
  name: 'Address2',
  country: 'Spain',
  city: 'Barcelona',
  street: '',
  number: ''
},
{
  name: 'Address3',
  country: '',
  city: '',
  street: 'Diagonal',
  number: '605'
}];
```

Create a function that receives the constant per parameter and returns the address in the following format:

"**$name : $street $number, $city - $country.**" 

Taking into account that:

    * If *$country* or *$city* doesn't exist, shows the next format: "**$name : $street $number.**"
    * If "*$street*" or *$number* doesn't exist, shos the next format: "**$city, $country ($name)**"
    * For all other cases, show a message indicating which properties are missing.

## Exercise 2

Given the previous constant, create a functions for:

    * Returns the number of addresses with at least one empty property
    * Return the array by removing the repeated values
    * Sort the elements Ascendingly / Descendingly according to a property (name, country, etc.)
        * You must be able to enter any property in the function.
    * Filter addresses by one or more properties: name, country, city, street or number.
    * Return the address with the highest number.
        * Null, undefined or empty will not be shown.
    * Return the address with the lowest number
        * Null, undefined or empty will not be shown.
    * Count the number of matches given one or more properties: name, country, city, street or number.

