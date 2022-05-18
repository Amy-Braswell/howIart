import React from 'react';
import Footer from '../components/footer';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Outer>
      <Footer.Inner>
      <Footer.Title>
        <Footer.Link href="mailto:amy@iart-gallerywalks.com">Questions? Contact us.</Footer.Link>
      </Footer.Title>
      <Footer.Break />
      {/* <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
          <Footer.Link href="#">Placeholder</Footer.Link>
        </Footer.Column>
      </Footer.Row> */}
      <Footer.Break />
      <Footer.Break />
      <Footer.Text>© iArt Walks, LLC</Footer.Text>
      </Footer.Inner>
      </Footer.Outer>
    </Footer>
  );
}
