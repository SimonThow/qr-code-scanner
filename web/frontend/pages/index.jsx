import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Button,
  ButtonGroup,
  Page,
  SkeletonBodyText
} from "@shopify/polaris";

export default function HomePage() {
  /*
    Add an App Bridge useNavigate hook to set up the navigate function.
    This function modifies the top-level browser URL so that you can
    navigate within the embedded app and keep the browser in sync on reload.
  */
  const navigate = useNavigate();


  /*
    These are mock values. Setting these values lets you preview the loading markup and the empty state.
  */
  const isLoading = false;
  const isRefetching = false;
  const QRCodes = [];

  /* loadingMarkup uses the loading component from AppBridge and components from Polaris  */
  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;

  /* Use Polaris Card and EmptyState components to define the contents of the empty state */
  const emptyStateMarkup =
    !isLoading && !QRCodes?.length ? (
      <Card>
        <EmptyState
          heading="ReCharge Product Swapping"
          /* This button will take the user to a Create a QR code page */
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          fullWidth
        >
          <p>
            Please Choose Your Products
          </p>
          <br></br>
          <Card sectioned>
          <ButtonGroup>
            <Button class="btn"primary size="medium" onClick={() => navigate(`/qrcodes/product1`)} >Product 1</Button>
            <Button class="btn" primary size="medium" onClick={() => navigate(`/qrcodes/product2`)}>Product 2</Button>
          </ButtonGroup>
          </Card>


        </EmptyState>
      </Card>
    ) : null;

  /*
    Use Polaris Page and TitleBar components to create the page layout,
    and include the empty state contents set above.
  */
  return (
    <Page>
      <Layout fullWidth>
        <Layout.Section>
          {loadingMarkup}
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
