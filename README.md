# Pricing table for React

A simple and easy to use react pricing table

## Installation

Requires **React 16 or later**

`npm i --save @aiherrera/react-pricing-table`

`# or`

`yarn add @aiherrera/react-pricing-table`

## Demo

You can check all the configurations in this [playground](https://coderlab.aiherrera.com/?path=/story/playground-react-components--hamburger-menu)

## Usage

`{ PricingTable }`

```
// ES5 syntax
const PricingTable = require('@aiherrera/react-pricing-table')

// ES6 syntax
import PricingTable from '@aiherrera/react-pricing-table'

```

### Full example

```typescript
import React from 'react'
import { IoCheckmark } from 'react-icons/io5'

import PricingTable from '@aiherrera/react-pricing-table'

const App = () => {

  const plans = [
    {
      id: 'basic',
      circle: 'B',
      title: 'Basic',
      subtitle: 'Best for personal websites',
      price: 'MX$8,000',
      discount: 'MX$6,500',
      buttonText: 'Select plan',
      popular: false,
      features: (
        <ul>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
        </ul>
      )
    },
    {
      id: 'standard',
      circle: 'S',
      title: 'Standard',
      subtitle: 'Optimized for startups',
      price: 'MX$12,000',
      buttonText: 'Select plan',
      popular: true,
      features: (
        <ul>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
        </ul>
      )
    },
    {
      id: 'premium',
      circle: 'E',
      title: 'Premium',
      subtitle: 'Enterprise class website',
      price: 'MX15,000',
      buttonText: 'Select plan',
      popular: false,
      features: (
        <ul>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem Ipsum</span>
          </li>
        </ul>
      )
    }
  ]

  const main = '#EEEEFC'
  const features = '#A5A5F0'
  const font = '#fff'
  const fontInverted = '#000'
  const background = '#fff'
  const popular = '#7474E7
  const checkMark = '#89ce94'

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <>
      <PricingTableComponent
        plans={plans}
        color={{
          main,
          features,
          font,
          fontInverted,
          background,
          popular,
          checkMark
        }}
        handleClick={handleClick}
      />
    </>
  )
}
```

## Props

All these props are passed as defaults and can be overriden any time.

| Name  | Type   | Unit | Description                                | Default |
| ----- | ------ | ---- | ------------------------------------------ | ------- |
| plans | array  | N/A  | An array with the desired plans to include |         |
| color | object | N/A  | An object with all the colors <br>         |         |

##### These are the colors passed in the color object to customize the pricing table

<ul>
  <li>main: main color</li>
  <li>font: color of the font</li>
  <li>fontInverted: color of the font to contrast popular background</li>
  <li>background: color of the header background</li>
  <li>popular: color of the best offer or the most popular</li>
  <li>features: color of the features text</li>
  <li>checkmark: color of the features icon</li>
</ul>
