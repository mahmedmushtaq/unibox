import { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";

interface IProps {
  heading: string | ReactNode;
  children: ReactNode | ReactNode[];
}

const AccordionWrapper = ({ heading, children }: IProps) => {
  return (
    <div>
      <Accordion sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {heading}
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionWrapper;
