import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/data/features";
import { pricing } from "@/data/pricing";
import { CircleCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="border-b border-border bg-gradient-to-r from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <main className="container mx-auto">
          <div className="relative md:mt-20 mx-auto w-full max-w-4xl pt-8 text-center">
            <div className="hidden md:flex justify-center">
              <div className="flex items-center gap-3 p-2 text-xs bg-white/80 dark:bg-gray-700/80 backdrop-blur-md rounded-lg border border-gray-300 dark:border-gray-600">
                <Badge className="font-semibold">New</Badge>
                <span className="text-gray-700 dark:text-gray-300">
                  Introducing our latest feature update!
                </span>
                <Link
                  href="/"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn More <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
              Build Exceptional Websites with Byte Light
            </h1>
            <p className="mx-auto mt-6 text-base text-gray-600 dark:text-gray-400 max-w-xl">
              Byte Light provides a seamless and customizable platform to create
              stunning digital experiences with ease. Powered by Next.js,
              TailwindCSS, and TypeScript.
            </p>
            <div className="flex justify-center mt-8 gap-4">
              <Button>Get Started</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Image
              className="rounded-lg shadow-lg"
              src="/dashboard-ui.png"
              alt="Dashboard UI Design"
              priority
              width={1200}
              height={800}
            />
          </div>
        </main>
      </div>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto text-center">
          <h5 className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
            WHY CHOOSE US
          </h5>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Elevate Your Website with Our Features
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discover powerful tools and features tailored to help you create
            standout websites effortlessly.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 text-center border border-gray-200 shadow-md hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-500/30 rounded-full">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Pricing Plans
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Choose a plan that suits your needs. Upgrade or downgrade anytime.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan) => (
              <Card
                key={plan.title}
                className={`p-6 border ${
                  plan.fancy
                    ? "border-blue-600 shadow-lg dark:border-blue-400"
                    : "border-gray-200 shadow-sm dark:border-gray-600"
                } bg-white dark:bg-gray-800 transition-shadow hover:shadow-lg`}
              >
                {plan.fancy && (
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white dark:bg-blue-400">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </CardDescription>
                  <h5 className="mt-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {plan.price}
                  </h5>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full mt-4"
                    variant={plan.fancy ? "default" : "secondary"}
                  >
                    Get Started
                  </Button>
                </CardContent>
                <CardFooter className="mt-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <CircleCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
