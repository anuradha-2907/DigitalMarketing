import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AgencyArea from "@/components/AgencyArea";
import LifeArea from "@/components/LifeArea";
import CountingArea from "@/components/CountingArea";
import CardArea from "@/components/CardArea";
import RecentWork from "@/components/RecentWork";
import ArticleArea from "@/components/ArticleArea";
import ReadyArea from "@/components/ReadyArea";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AgencyArea />
        <LifeArea />
        <CountingArea />
        <CardArea />
        <RecentWork />
        <ArticleArea />
        <ReadyArea />
      </main>
      <Footer />
      <Parallax />
    </>
  );
}
