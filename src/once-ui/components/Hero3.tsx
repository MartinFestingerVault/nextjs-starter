"use client";

import {
  Background,
  Badge,
  Button,
  Column,
  Flex,
  Heading,
  Input,
  LetterFx,
  RevealFx,
  SmartImage,
} from "@/once-ui/components";
import React from "react";

const Hero3 = () => {
  return (
    <Column fillWidth paddingY="48" horizontal="center" fitHeight>
      <RevealFx fill position="absolute" top="0" speed="slow">
        <Background
          fill
          mask={{
            x: 50,
            y: 0,
            radius: 75,
          }}
          gradient={{
            display: true,
            x: 50,
            y: 0,
            colorStart: "accent-solid-strong",
            colorEnd: "static-transparent",
          }}
          grid={{
            display: true,
            opacity: 30,
            width: "2rem",
            height: "2rem",
            color: "page-background",
          }}
        />
      </RevealFx>
      <Column maxWidth={40} gap="24">
        <RevealFx fillWidth speed="fast">
          <Badge paddingY="8" paddingX="16" href=" " textVariant="label-default-s" icon="sparkle">
            <LetterFx trigger="instant" speed="slow">
              The future has arrived
            </LetterFx>
          </Badge>
        </RevealFx>
        <RevealFx speed="fast" delay={0.2} translateY="4">
          <Heading align="center" variant="display-default-l">
            Reclaim your life
          </Heading>
        </RevealFx>
        <RevealFx speed="fast" delay={0.4} translateY="12">
          <Heading
            wrap="balance"
            align="center"
            onBackground="neutral-medium"
            variant="heading-default-xl"
          >
            The social platform of the new era.
            <br /> With the friends that matter.
          </Heading>
        </RevealFx>
        <RevealFx
          speed="fast"
          delay={0.4}
          translateY="12"
          marginBottom="24"
          onBackground="accent-medium"
        >
          Decentralized. Secure. Private.
        </RevealFx>
        <RevealFx speed="fast" delay={0.6} translateY="16" marginBottom="32">
          <Flex gap="-1" vertical="center" marginBottom="24">
            <Input id="email" label="Email" labelAsPlaceholder radius="left" />
            <Button id="download" href="/" size="l" radius="right">
              Early access
            </Button>
          </Flex>
        </RevealFx>
      </Column>
      <RevealFx maxWidth={72} aspectRatio="12 / 8" speed="fast" delay={0.8} translateY="20">
        <Background mask={{ x: 20, y: 20, radius: 100 }} fill>
          <SmartImage
            priority
            fill
            src="/images/mockups/social-01.png"
            sizes="(max-width: 1024px) 80vw, 960px"
            radius="l"
          />
        </Background>
      </RevealFx>
    </Column>
  );
};

export { Hero3 };
