import React, { FC } from 'react'
import { PricingTableProps } from '../index'
import {
  Section,
  Container,
  Card,
  Circle,
  Header,
  Title,
  Subtitle,
  Price,
  Discount,
  Features,
  Button
} from './pricing-table.css'

const Pricingtable: FC<PricingTableProps> = ({ plans, color, handleClick }) => {
  return (
    <>
      <Section>
        <h1>Pricing table</h1>
        <h3>Select the best plan for your next awesome website</h3>
      </Section>
      <Container color={color.popular}>
        {plans.map((plan) => (
          <Card color={color} key={plan.id} popular={plan.popular}>
            <Circle popular={plan.popular} color={color}>
              {plan.circle}
            </Circle>
            <Header popular={plan.popular} color={color}>
              <Title>{plan.title}</Title>
              <Subtitle>{plan.subtitle}</Subtitle>
              <Price discount={plan.discount}>{plan.price}</Price>
              <Discount>{plan.discount}</Discount>
            </Header>
            <Button color={color} onClick={() => handleClick(plan.id)}>
              {plan.buttonText}
            </Button>
            <Features color={color}>{plan.features}</Features>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Pricingtable
