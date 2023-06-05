import { styled, Box, Link } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";
import Contact from "../../data/Contact.json";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const FooterContainer = styled(Box)(({ theme }) => ({
  height: 150,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: StyleConstants.FOOTER,
  bottom: 0,
  zIndex: 1,
  fontWeight: 600,
  "& .mail": {
    display: "flex",
    padding: 6,
    minWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .links": {
    display: "flex",
    padding: 6,
    width: 350,
    justifyContent: "space-between",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .divider": {
    height: 7,
    borderTop: "1px solid rgba(0,0,0,0.1)",
    width: "95%",
  },
  "& .creator": {
    fontSize: 12,
    opacity: 0.85,
    padding: "0 0 5px",
    "& a": {
      textDecoration: "none",
      color: StyleConstants.BLACK_COLOR,
      "&:hover":{
        color: StyleConstants.HEADER,
      }
    },
  },
  "& .actions": {
    padding: 5,
    "& button": {
      marginRight: 6,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
export const Footer = () => {
  const { emailId = "", linkedIn = "", github = "" } = Contact;
  return (
    <FooterContainer>
      <Box className="mail">
        <EmailIcon /> {emailId}
      </Box>
      <Box className="links">
        {github && (
          <div>
            <Link href={github} target="_blank" style={{ color: "black" }}>
              <GitHubIcon />
            </Link>
          </div>
        )}
        {linkedIn && (
          <div>
            <Link href={linkedIn} target="_blank" style={{ color: "black" }}>
              <LinkedInIcon />
            </Link>
          </div>
        )}
      </Box>
    </FooterContainer>
  );
};
