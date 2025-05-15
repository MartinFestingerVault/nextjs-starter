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
  ScrollToTop,
  Plans4,
  Hero3,
  Header1,
} from "@/once-ui/components";

import { CodeBlock, MediaUpload } from "@/once-ui/modules";

const Pricing1 = () => {
  return (
    <Column as="section" id="pricing" fillWidth fitHeight horizontal="center" gap="xl">
      <Column maxWidth={40} gap="12" horizontal="center">
        <Heading as="h2" align="center" variant="display-strong-m">
          Pricing
        </Heading>
        <Text align="center" onBackground="neutral-medium" variant="body-default-xl" wrap="balance">
          Use Once UI for free. Upgrade for advanced components and resources.
        </Text>
      </Column>
      <Plans4 maxWidth="m" />
    </Column>
  );
};

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

        {/* Pricing section */}
        <Pricing1 />
      </Column>
    </Column>
  );
}
