import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <Box className="grid grid-two-column">
            <Box>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </Box>

            <Box>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </Box>
          </Box>
        </section>
        {/* footer section */}

        <footer>
          <Box className="container grid grid-four-column">
            <Box className="footer-about">
              <h3>React E-Commerce</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </Box>
            <Box className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </Box>
            <Box className="footer-social">
              <h3>Follow Us</h3>
              <Box className="footer-social--icons">
                <Box>
                  <FaDiscord className="icons" />
                </Box>
                <Box>
                  <FaInstagram className="icons" />
                </Box>
                <Box>
                  <FaYoutube className="icons" />
                </Box>
              </Box>
            </Box>
            <Box className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </Box>
          </Box>

          <Box className="footer-bottom--section">
            <hr />
            <Box className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} React E-Commerce. All Rights
                Reserved
              </p>
              <Box>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </Box>
            </Box>
          </Box>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid Box:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 11rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      Box {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 4rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid Box:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
