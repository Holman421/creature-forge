import { Link as MuiLink } from "@mui/material";
import {
  Link as ReactRouterLink,
  useLocation,
} from "react-router-dom";

import { FC, useEffect, useState } from "react";
import { mainGreen, textColor } from "../Config/colors";

type CustomLinkProp = {
  href: string;
  label: string;
  sx?: any;
};

const CustomLink: FC<CustomLinkProp> = ({
  href,
  label,
  sx,
}) => {
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === href);
  }, [location, href]);

  return (
    <MuiLink
      sx={{
        ...sx,
        color: isActive ? mainGreen : textColor,
        textDecoration: "none",
        transition: "color 300ms ease",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          left: "0",
          bottom: "-2px",
          width: "100%",
          height: "2px",
          background: isActive ? mainGreen : textColor,
          transform: "scaleX(0)",
          transition: "transform 300ms ease",
        },
        "&:hover::before": {
          transform: "scaleX(1)",
        },
      }}
      component={ReactRouterLink}
      to={href ?? "#"}
    >
      {label}
    </MuiLink>
  );
};

export default CustomLink;
