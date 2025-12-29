"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Index() {
  const indexPageText = useTranslations("Index");

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header with controls */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">{indexPageText("welcome")}</h1>
              <p className="text-xs text-muted-foreground">Modern Design System</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto space-y-12 px-6 py-12">
        {/* Hero section */}
        <section className="space-y-4">
          <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
            ✨ Modern Components
          </div>
          <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Beautiful UI Components
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore our modern button variants, theme toggle, and language switcher components built with the
            latest design trends.
          </p>
        </section>

        {/* Color Palette Section */}
        <section className="space-y-6 rounded-2xl border border-border/40 bg-card/50 p-8 shadow-xl backdrop-blur-sm">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Color Palette</h3>
            <p className="text-sm text-muted-foreground">Vibrant colors for modern interfaces</p>
          </div>

          {/* Primary Colors */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Primary</h4>
            <div className="flex flex-wrap gap-3">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-blue-500 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-blue-400 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-blue-300 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-blue-200 shadow-lg transition-transform hover:scale-110" />
            </div>
          </div>

          {/* Emerald */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Emerald</h4>
            <div className="flex flex-wrap gap-3">
              <div className="h-16 w-16 rounded-2xl bg-emerald-600 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-emerald-500 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-emerald-400 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-emerald-300 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-emerald-200 shadow-lg transition-transform hover:scale-110" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Orange */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Orange</h4>
              <div className="flex flex-wrap gap-2">
                <div className="h-12 w-12 rounded-xl bg-orange-600 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-orange-500 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-orange-400 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-orange-300 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-orange-200 shadow-md transition-transform hover:scale-110" />
              </div>
            </div>

            {/* Yellow */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Yellow</h4>
              <div className="flex flex-wrap gap-2">
                <div className="h-12 w-12 rounded-xl bg-yellow-600 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-yellow-500 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-yellow-400 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-yellow-300 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-yellow-200 shadow-md transition-transform hover:scale-110" />
              </div>
            </div>

            {/* Red */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Red</h4>
              <div className="flex flex-wrap gap-2">
                <div className="h-12 w-12 rounded-xl bg-red-600 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-red-500 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-red-400 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-red-300 shadow-md transition-transform hover:scale-110" />
                <div className="h-12 w-12 rounded-xl bg-red-200 shadow-md transition-transform hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Secondary</h4>
            <div className="flex flex-wrap gap-3">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-purple-600 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-pink-600 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-cyan-600 shadow-lg transition-transform hover:scale-110" />
              <div className="h-16 w-16 rounded-2xl bg-slate-600 shadow-lg transition-transform hover:scale-110" />
            </div>
          </div>
        </section>

        {/* Button Variants Section */}
        <section className="space-y-6 rounded-2xl border border-border/40 bg-card/50 p-8 shadow-xl backdrop-blur-sm">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Button Variants</h3>
            <p className="text-sm text-muted-foreground">Different button styles for various use cases</p>
          </div>

          {/* Large Buttons */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Large</h4>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl">
                Large Button
              </button>
              <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl">
                Large Button
              </button>
            </div>
          </div>

          {/* Medium Buttons */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Medium</h4>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
                Medium Button
              </button>
              <button className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
                Medium Button
              </button>
            </div>
          </div>

          {/* Small Buttons */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Small</h4>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Small Button
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Small Button
              </button>
            </div>
          </div>

          {/* Tiny Buttons */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Tiny</h4>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow transition-all hover:scale-105 hover:bg-blue-700">
                Tiny Button
              </button>
              <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow transition-all hover:scale-105 hover:bg-blue-700">
                Tiny Button
              </button>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="space-y-6 rounded-2xl border border-border/40 bg-card/50 p-8 shadow-xl backdrop-blur-sm">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Tags</h3>
            <p className="text-sm text-muted-foreground">Colorful status indicators and labels</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Hot Desk
              </span>
              <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Wi-fi
              </span>
              <span className="rounded-lg bg-orange-100 px-3 py-1.5 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                Pending
              </span>
              <span className="rounded-lg bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                Confirmed
              </span>
              <span className="rounded-lg bg-red-100 px-3 py-1.5 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                Alert
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                Active
              </span>
              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                Closed
              </span>
              <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-yellow-900 shadow-md">
                ⏳ Waiting
              </span>
            </div>
          </div>

          {/* Status with icons */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Status Badges</h4>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-lg bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Replied
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-orange-100 px-3 py-1.5 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Open
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-red-100 px-3 py-1.5 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
                Closed
              </span>
            </div>
          </div>
        </section>

        {/* Theme & Language Section */}
        <section className="grid gap-6 sm:grid-cols-2">
          {/* Theme Toggle Card */}
          <div className="space-y-4 rounded-2xl border border-border/40 bg-card/50 p-8 shadow-xl backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Theme Toggle</h3>
              <p className="text-sm text-muted-foreground">
                Switch between light and dark modes with a smooth animated toggle
              </p>
            </div>
            <div className="flex items-center justify-center py-8">
              <ThemeToggle />
            </div>
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-950/30 dark:to-purple-950/30">
              <p className="text-xs text-muted-foreground">
                ✨ Features: Hover effects, rotation animation, gradient backgrounds, and smooth transitions
              </p>
            </div>
          </div>

          {/* Language Switcher Card */}
          <div className="space-y-4 rounded-2xl border border-border/40 bg-card/50 p-8 shadow-xl backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Language Switcher</h3>
              <p className="text-sm text-muted-foreground">
                Modern dropdown with flag icons and smooth animations
              </p>
            </div>
            <div className="flex items-center justify-center py-8">
              <LanguageSwitcher />
            </div>
            <div className="rounded-lg bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 dark:from-emerald-950/30 dark:to-cyan-950/30">
              <p className="text-xs text-muted-foreground">
                ✨ Features: Globe icon, flag emojis, active indicators, loading states, and backdrop blur
              </p>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid gap-6 sm:grid-cols-3">
          <div className="group space-y-3 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-blue-900/30 dark:from-blue-950/30 dark:to-blue-900/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
              </svg>
            </div>
            <h4 className="font-bold text-blue-900 dark:text-blue-100">Modern Animations</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Smooth transitions and hover effects for delightful interactions
            </p>
          </div>

          <div className="group space-y-3 rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 dark:border-purple-900/30 dark:from-purple-950/30 dark:to-purple-900/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="font-bold text-purple-900 dark:text-purple-100">Clean Code</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Well-structured, maintainable components with TypeScript
            </p>
          </div>

          <div className="group space-y-3 rounded-xl border border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 dark:border-pink-900/30 dark:from-pink-950/30 dark:to-pink-900/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
              </svg>
            </div>
            <h4 className="font-bold text-pink-900 dark:text-pink-100">Responsive Design</h4>
            <p className="text-sm text-pink-700 dark:text-pink-300">
              Works perfectly on all screen sizes and devices
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
