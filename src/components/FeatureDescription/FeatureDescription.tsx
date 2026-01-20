"use client";

import Link from "next/link";

import { Box, Heading, Text, colors } from "@mordis-dev/components";

export type FeatureDescriptionProps = {
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
};

export const FeatureDescription = ({
  title,
  description,
  linkUrl,
  linkText,
}: FeatureDescriptionProps) => (
  <Box $bordered>
    <Heading type="secondary">{title}</Heading>
    <Text $fontType="medium">{description}</Text>
    <Link
      href={linkUrl}
      style={{ color: colors.text.secondary, textDecoration: "none" }}
    >
      {linkText}
    </Link>
  </Box>
);
