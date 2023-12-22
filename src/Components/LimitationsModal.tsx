import React from "react";
import {
  darkerGreen,
  mainGreen,
  textColor,
} from "../Config/colors";
import {
  List,
  ListItem,
  Modal,
  Typography,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

interface LimitationsModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

interface LimitationItemProps {
  text: string;
}

const LimitationItem: React.FC<LimitationItemProps> = ({
  text,
}) => {
  return (
    <ListItem
      sx={{
        color: textColor,
        alignItems: "flex-start !important",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: "1.5rem ",
          marginTop: ".5rem",
        }}
      >
        <FiberManualRecordIcon
          sx={{
            fontSize: ".5rem",
            color: textColor,
          }}
        />
      </ListItemIcon>
      {text}
    </ListItem>
  );
};

const LimitationsModal: React.FC<LimitationsModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const limitations = [
    "If the generated creature is missing some of the selected features, it's not a fault of poor coding skills but rather a result of Leonardo.AI being quite random or a lack of my prompt engineering skills.",
    "Selecting a certain option in one section is not a guarantee that the creature will have that feature. It's just more likely to have it.",
    "Options may influence each other. For example, microscopic size is much more likely to be reflected in underwater or space habitats.",
    "Unfortunately, the generator often fails to create a creature with a certain combination of legs and arms.",
    "Sometimes the generated creature will be much bigger than the selected size.",
    "For some reason, generator is really good at generating various types of octopus-like creatures (select special feature: tentacles).",
  ];

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: darkerGreen,
          border: `2px solid ${mainGreen}`,
          padding: "2rem",
        }}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: textColor,
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: textColor,
          }}
        >
          Limitations of the Image generator
        </Typography>
        <List>
          {limitations.map((limitation, index) => (
            <LimitationItem key={index} text={limitation} />
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default LimitationsModal;
