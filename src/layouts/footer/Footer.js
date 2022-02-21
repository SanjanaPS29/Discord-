import React from "react";
import {
  FooterStyle,
  LinkStyle,
  SingUp,
  SingUpStyle,
  FlexBox,
  MainLeftStyle,
  FooterLinks,
  MainFooter,
  PStyle,
  SocailMedia,
  Icon,
} from "./Footer.style";
import UsaFlag from "../../assets/image-footer/usaFlag.png";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <FooterStyle>
      <MainFooter>
        <MainLeftStyle>
          <PStyle>Imagine a place</PStyle>
          <div>
            <div>
              <img src={UsaFlag} width="30%" alt="usa flag" />
            </div>
            <div>English, USA</div>
          </div>
          <SocailMedia>
            <Icon>
              <FaTwitter />
            </Icon>
            <Icon>
              <AiOutlineInstagram />
            </Icon>
            <Icon>
              <AiOutlineFacebook />
            </Icon>
            <Icon>
              <AiOutlineYoutube />
            </Icon>
          </SocailMedia>
        </MainLeftStyle>
        <FooterLinks>
          <FlexBox>
            <LinkStyle href="/">Product</LinkStyle>
            <LinkStyle href="#">Download</LinkStyle>
            <LinkStyle href="#">Nitro</LinkStyle>
            <LinkStyle href="#">Status</LinkStyle>
          </FlexBox>

          <FlexBox>
            <LinkStyle href="#">Company</LinkStyle>
            <LinkStyle href="#">About</LinkStyle>
            <LinkStyle href="#">Jobs</LinkStyle>
            <LinkStyle href="#">Branding</LinkStyle>
            <LinkStyle href="#">Newsroom</LinkStyle>
          </FlexBox>

          <FlexBox>
            <LinkStyle href="#">Resources</LinkStyle>
            <LinkStyle href="#">Collage</LinkStyle>
            <LinkStyle href="#">Support</LinkStyle>
            <LinkStyle href="#">Safety</LinkStyle>
            <LinkStyle href="#">Blog</LinkStyle>
            <LinkStyle href="#">Feedback</LinkStyle>
            <LinkStyle href="#">Develops</LinkStyle>
            <LinkStyle href="#">StramKit</LinkStyle>
          </FlexBox>

          <FlexBox>
            <LinkStyle href="#">Policies</LinkStyle>
            <LinkStyle href="#">Terms</LinkStyle>
            <LinkStyle href="#">Privacy</LinkStyle>
            <LinkStyle href="#">Guidelines</LinkStyle>
            <LinkStyle href="#">Acknowledgements</LinkStyle>
            <LinkStyle href="#">Licenses</LinkStyle>
            <LinkStyle href="#">Moderation</LinkStyle>
          </FlexBox>
        </FooterLinks>
      </MainFooter>
      <div>
        <hr />
      </div>
      <SingUpStyle>
        <div>Discord</div>
        <div>
          <SingUp>signup</SingUp>
        </div>
      </SingUpStyle>
    </FooterStyle>
  );
}

export default Footer;
