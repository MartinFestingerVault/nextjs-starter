"use client";

import React from "react";
import { Background, Column, Row, Heading, Flex, Text, Icon, Button } from "@/once-ui/components";

interface PlansProps extends React.ComponentProps<typeof Row> {}

const plans = {
  free: {
    name: "Free",
    href: " ",
    color: "neutral" as "neutral" | "brand" | "accent",
    gradient: false,
    price: {
      original: "0",
      discounted: "0",
    },
    features: ["Comprehensive variables", "Fluid component system"],
  },
  pro: {
    name: "Pro",
    href: " ",
    color: "brand" as "neutral" | "brand" | "accent",
    gradient: false,
    price: {
      original: "120",
      discounted: "80",
    },
    features: [
      "Comprehensive variables",
      "Fluid component system",
      "Landing page examples",
      "Marketing resources",
      "Data viz module",
      "Social module",
      "Regular updates",
    ],
  },
  team: {
    name: "Team",
    href: " ",
    color: "neutral" as "neutral" | "brand" | "accent",
    gradient: false,
    price: {
      original: "240",
      discounted: "160",
    },
    features: [
      "Comprehensive variables",
      "Fluid component system",
      "Landing page examples",
      "Marketing resources",
    ],
  },
};

interface PlanCardProps extends React.ComponentProps<typeof Row> {
  id: string;
  plan: (typeof plans)[keyof typeof plans];
}

const PlanCard: React.FC<PlanCardProps> = ({ id, plan, ...rest }) => {
  const textColor = `${plan.color}-weak` as const;

  return (
    <Column id={plan.name} border="neutral-medium" minWidth={16} fillWidth {...rest}>
      <Column fill>
        <Column paddingX="l" paddingY="24" gap="4" fillWidth borderBottom="neutral-medium">
          <Heading as="h3" align="left" onBackground={textColor} variant="heading-default-xs">
            {plan.name}
          </Heading>
          <Text align="left" variant="heading-default-xl">
            {plan.price.original !== plan.price.discounted && (
              <Text onBackground="neutral-weak" style={{ textDecoration: "line-through" }}>
                ${plan.price.original}
              </Text>
            )}{" "}
            ${plan.price.discounted}{" "}
            <Text onBackground="neutral-strong" variant="body-default-s">
              / year
            </Text>
          </Text>
        </Column>
        <Column
          paddingX="l"
          paddingY="24"
          fill
          overflowY="auto"
          gap="12"
          borderBottom="neutral-medium"
        >
          {plan.features.map((feature, index) => (
            <Row key={index} vertical="center" gap="12">
              <Icon name="checkCircle" size="s" onBackground={textColor} />
              <Text align="left" onBackground="neutral-medium" variant="body-default-s">
                {feature}
              </Text>
            </Row>
          ))}
        </Column>
      </Column>
      <Flex fillWidth paddingX="l" padding="24">
        <Button
          id={id + "-button-4"}
          href={plan.href}
          variant="secondary"
          weight="default"
          arrowIcon
        >
          Get started
        </Button>
      </Flex>
    </Column>
  );
};

const Plans4 = ({ ...rest }: PlansProps) => {
  return (
    <Row fillWidth gap="-1" overflowX="auto" {...rest}>
      <PlanCard id="free" plan={plans.free} />
      <PlanCard id="pro" plan={plans.pro} zIndex={1} />
      <PlanCard id="team" plan={plans.team} />
    </Row>
  );
};

export { Plans4 };
