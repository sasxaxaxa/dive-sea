import {useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import AccordionIcon from "./AccordionIcon.jsx";

const CustomAccordion = styled(Accordion)`
  box-shadow: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #ADADAD;

  &:before {
    display: none;
  }
`;

const CustomAccordionSummary = styled(AccordionSummary)`
  padding-top: 20px;
  padding-bottom: 6px;
  padding-left: 14px;
`;

const CustomTypographyTitle = styled(Typography)`
  font-family: var(--font-family-poppins);
  font-weight: 600;
  font-size: 25px;
  line-height: 253%;
  color: #323142;
`;

const CustomTypographyDescription = styled(Typography)`
  font-family: var(--font-family-poppins);
  font-weight: 400;
  font-size: 20px;
  line-height: 177%;
  color: var(--color-gray-6);
  padding-bottom: 30px;
`;

const AccordionAQ = () => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <div className="accordion">
      <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <CustomAccordionSummary
          className="accordion__summary"
          expandIcon={<AccordionIcon />}
        >
          <CustomTypographyTitle className="accordion__title">
            What is an NFT?
          </CustomTypographyTitle>
        </CustomAccordionSummary>
        <AccordionDetails>
          <CustomTypographyDescription className="accordion__description">
            A unique digital asset stored on a blockchain, representing ownership of art, music, or other digital items.
          </CustomTypographyDescription>
        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <CustomAccordionSummary
          className="accordion__summary"
          expandIcon={<AccordionIcon />}
        >
          <CustomTypographyTitle className="accordion__title">
            What can I use NFTs for?
          </CustomTypographyTitle>
        </CustomAccordionSummary>
        <AccordionDetails>
          <CustomTypographyDescription className="accordion__description">
            Collecting, trading, proving ownership, accessing exclusive content, or supporting creators.
          </CustomTypographyDescription>
        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <CustomAccordionSummary
          className="accordion__summary"
          expandIcon={<AccordionIcon />}
        >
          <CustomTypographyTitle className="accordion__title">
            What is the difference between an NFT and cryptocurrency?
          </CustomTypographyTitle>
        </CustomAccordionSummary>
        <AccordionDetails>
          <CustomTypographyDescription className="accordion__description">
            Cryptocurrency is interchangeable; NFTs are unique, non-fungible assets with individual value.
          </CustomTypographyDescription>
        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <CustomAccordionSummary
          className="accordion__summary"
          expandIcon={<AccordionIcon />}
        >
          <CustomTypographyTitle className="accordion__title">
            How much is an NFT worth?
          </CustomTypographyTitle>
        </CustomAccordionSummary>
        <AccordionDetails>
          <CustomTypographyDescription className="accordion__description">
            Its value depends on demand, rarity, creator reputation, and market trends.
          </CustomTypographyDescription>
        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <CustomAccordionSummary
          className="accordion__summary"
          expandIcon={<AccordionIcon />}
        >
          <CustomTypographyTitle className="accordion__title">
            How do I purchase an NFT on your platform ?
          </CustomTypographyTitle>
        </CustomAccordionSummary>
        <AccordionDetails>
          <CustomTypographyDescription className="accordion__description">
            Create an account, connect your crypto wallet, add funds, browse listings, and complete the purchase.
          </CustomTypographyDescription>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  )
}

export default AccordionAQ

