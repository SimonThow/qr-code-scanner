import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { Product2Form } from "../../components";

export default function ManageCode() {
  const breadcrumbs = [{ content: "QR codes", url: "/product2" }];

  return (
    <Page>
      <TitleBar
        title="Select Product to swap to"
        breadcrumbs={breadcrumbs}
        primaryAction={null}
      />
      <Product2Form />
    </Page>
  );
}
