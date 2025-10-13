import CodeStructure from "./components/codeStructure";
import Testing from "./components/testingQA";
import Deployment from "./components/deploymentMethods";
import HomeSection from "./components/Homepage";
import ProductOverview from "./components/productOverview";
import FooterSection from "./components/footer";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <ProductOverview/>
      <CodeStructure />
      <Testing />
      <Deployment />
      <FooterSection/>
    </div>
  );
}