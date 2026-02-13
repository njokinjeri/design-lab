import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import Process from "./components/sections/Process";
import Features from "./components/sections/Features";
import CaseStudy from "./components/sections/CaseStudy";
import Membership from "./components/sections/Membership";
import FAQ from "./components/sections/FAQ";
import MainCTA from "./components/sections/MainCTA";

export default function App() {
    return (   
        <Layout>
            <Hero />
            <Partners />
            <Process />
            <Features />
            <CaseStudy />
            <Membership />
            <FAQ />
            <MainCTA />
        </Layout>
    )
};
