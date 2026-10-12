"use client";

import { NextIntlClientProvider } from "next-intl";
import React, { JSX, ReactNode } from "react";

import enMessages from "../../../messages/en.json";
import frMessages from "../../../messages/fr.json";
import nlMessages from "../../../messages/nl.json";

type Props = {
  children?: ReactNode;
  locale: string;
};

function selectMessages(locale: string) {
  switch (locale) {
    case "nl":
      return nlMessages;
    case "fr":
      return frMessages;
    default:
      return enMessages;
  }
}

export default function Providers({ children, locale }: Props): JSX.Element {
  return (
    <NextIntlClientProvider locale={locale} messages={selectMessages(locale)} timeZone="Europe/Brussels">
      {children}
    </NextIntlClientProvider>
  );
}
