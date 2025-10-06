import TradingViewWidget from "@/components/TradingViewWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";
import React from "react";

const Home = () => {
    return (
        <div className="flex min-h-screen home-wrapper">
            <section className="grid w-full gap-8 home-section">
                <div className="md:col-span-1 xl:col-span-1">
                    <TradingViewWidget
                        title="AAPL Stock Chart"
                        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
