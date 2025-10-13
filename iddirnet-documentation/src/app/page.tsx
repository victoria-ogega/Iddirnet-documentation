import CodeStructure from "./components/codeStructure";
import Testing from "./components/testingQA";
import Deployment from "./components/deploymentMethods";
import HomeSection from "./components/Homepage";
import ProductOverview from "./components/productOverview";
import FooterSection from "./components/footer";
import Navigation from "./components/Navigation";
import Products from "./components/overview";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div id="home">
        <HomeSection />
      </div>
      <div id="features">
      </div>
      <div id="code-structure">
        <CodeStructure />
      </div>
      <div id="testing">
        <Testing />
      </div>
      <div id="deployment">
        <Deployment />
      </div>
      <Products/>
      <FooterSection />
    </div>
  );
}