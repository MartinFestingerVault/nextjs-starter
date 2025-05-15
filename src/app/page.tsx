// Example page: delete the content or rework the blocks
"use client";

import type React from "react";
import { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  type DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
  CompareImage,
  ThemeSwitcher,
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import { ScrollToTop } from "@/once-ui/components/ScrollToTop";

const Header1 = () => {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={10}>
      <Row
        data-border="rounded"
        horizontal="space-between"
        maxWidth="l"
        paddingX="32"
        paddingY="32"
        background="overlay"
        shadow="s"
      >
        <Logo size="s" href="/" />
        <Row gap="24" hide="s" vertical="center">
          {navLinks.map(link => (
            <Button
              key={link.href}
              href={link.href}
              size="s"
              label={link.label}
              variant="primary"
            />
          ))}
          <Button
            href="/signup"
            size="s"
            label="Get Started"
            variant="primary"
          />
        </Row>
        <Row show="s" vertical="center">
          <IconButton
            icon="menu"
            variant="primary"
            aria-label="Menu"
          />
        </Row>
      </Row>
    </Row>
  );
};

const Hero3 = () => (
  <Row 
    fillWidth 
    paddingTop="80" 
    paddingBottom="64" 
    paddingX="32" 
    gap="48" 
    position="relative"
    mobileDirection="column"
  >
    <Background
      mask={{ x: 0, y: 0 }}
      position="absolute"
      gradient={{
        display: true,
        tilt: -35,
        height: 60,
        width: 100,
        x: 50,
        y: 30,
        colorStart: "brand-solid-medium",
        colorEnd: "static-transparent",
      }}
    />
    <Background
      mask={{ x: 100, y: 0, radius: 100 }}
      position="absolute"
      grid={{
        display: true,
        opacity: "35",
        width: "0.5rem",
        height: "0.5rem",
        color: "accent-alpha-strong",
      }}
    />
    <Column maxWidth={24} gap="24" paddingTop="48">
      <Heading variant="display-strong-xl" as="h1" wrap="balance">
        Build beautiful interfaces in record time
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-medium" wrap="balance">
        A comprehensive design system for building modern web applications with speed and confidence.
      </Text>
      <Row gap="16">
        <Button size="l" label="Get Started" variant="primary" arrowIcon />
        <Button size="l" label="View Demo" variant="secondary" prefixIcon="play" />
      </Row>
      <Row gap="32" paddingTop="16">
        <Column gap="8">
          <Text variant="heading-strong-xs">100+</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">Components</Text>
        </Column>
        <Column gap="8">
          <Text variant="heading-strong-xs">5k+</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">Happy Users</Text>
        </Column>
        <Column gap="8">
          <Text variant="heading-strong-xs">99%</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">Satisfaction</Text>
        </Column>
      </Row>
    </Column>
    <Column fillWidth>
      <TiltFx fillWidth radius="xl" border="accent-alpha-weak" overflow="hidden" shadow="xl">
        <HoloFx fill>
          <Row
            aspectRatio="4/3"
            background="surface"
            padding="24"
            fillWidth
            vertical="center"
            horizontal="center"
          >
            <SmartImage
              src="/images/dashboard-preview.jpg"
              alt="Dashboard preview"
              radius="l"
              border="neutral-alpha-weak"
              shadow="m"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </Row>
        </HoloFx>
      </TiltFx>
    </Column>
  </Row>
);

export default function Home() {
  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <ScrollToTop><IconButton variant="secondary" icon="chevronUp"/></ScrollToTop>
      <Fade
        zIndex={3}
        pattern={{ display: true, size: "2" }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />

      {/* Nieuwe header */}
      <Header1 />

      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        {/* Nieuwe hero */}
        <Hero3 />
      </Column>
    </Column>
  );
}
