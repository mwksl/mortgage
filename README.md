# mortgage

[![Build Status](https://travis-ci.org/mwksl/mortgage.svg?branch=master)](https://travis-ci.org/mwksl/mortgage)
[![Build status](https://ci.appveyor.com/api/projects/status/dkyrkelfv6wetas6?svg=true)](https://ci.appveyor.com/project/mwksl29153/mortgage)

The world's best Mortgage Calculator -- guaranteed. Created with React, Redux, and passing tests!

To run a development server, simply type `npm i` followed by `npm run start`.

# Mortgage Equation

M is Monthly Payment, P is principal, r is monthly interest rate, n is number of payments

`M = P * ((r * ((1+r)^n))/(((1 + r)^n) - 1))`

Curious about those tests?
==========================
`npm run test` will run through them in the console.