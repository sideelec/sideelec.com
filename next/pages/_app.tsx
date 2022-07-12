import "~/styles/main.scss";
import "@fontsource/barlow";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import env from "~/lib/env";
import Link from "next/link";
import TransitionLayout from "~/components/TransitionLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <TransitionLayout>
            <PlausibleProvider domain={env.url}>
                <div className="flex min-h-screen flex-col">
                    <div className="sticky top-0 bg-white shadow">
                        <div className="space-x-3">
                            <Link href="/">
                                <a className="text-blue-500 underline visited:text-violet-500">
                                    Home
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="text-blue-500 underline visited:text-violet-500">
                                    About
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Component {...pageProps} />
                </div>
            </PlausibleProvider>
        </TransitionLayout>
    );
}

export default MyApp;
