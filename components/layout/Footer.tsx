import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <div className="max-w-screen-xl mx-auto px-6 py-12 space-y-12">
                {/* Top Section */}
                <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Ready to elevate your business?
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Discover the tools and features to achieve your goals with Byte Light.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            className="text-gray-800 border-gray-800 hover:bg-gray-200 dark:text-white dark:border-white dark:hover:bg-gray-800"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            About Us
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Byte Light provides innovative solutions to help businesses thrive in the digital age.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            Support
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/help"
                                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            Stay Connected
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Follow us on social media to stay updated on the latest news and features.
                        </p>
                        <div className="flex mt-4 space-x-4">
                            <Link
                                href="https://twitter.com"
                                aria-label="Twitter"
                                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                            >
                                Twitter
                            </Link>
                            <Link
                                href="https://facebook.com"
                                aria-label="Facebook"
                                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                            >
                                Facebook
                            </Link>
                            <Link
                                href="https://instagram.com"
                                aria-label="Instagram"
                                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                            >
                                Instagram
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between pt-6 border-t border-gray-300 dark:border-gray-700 sm:flex-row">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © 2025 Byte Light. All rights reserved.
                    </p>
                    <ul className="flex mt-4 space-x-4 sm:mt-0">
                        <li>
                            <Link
                                href="/privacy"
                                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                            >
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
