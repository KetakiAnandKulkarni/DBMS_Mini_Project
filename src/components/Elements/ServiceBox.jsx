// import React from "react";
// import styled from "styled-components";
// // Assets
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
// import MonitorImage from "../../assets/svg/Services/MonitorIcon";
// import BrowserImage from "../../assets/svg/Services/BrowserIcon";
// import PrinterImage from "../../assets/svg/Services/PrinterIcon";

// export default function ServiceBox({icon, title, subtitle}) {
//   let getIcon;

//   switch (icon) {
//     case "roller":
//       getIcon = <RollerIcon />;
//       break;
//     case "monitor":
//       getIcon = <MonitorIcon />;
//       break;
//     case "browser":
//       getIcon = <BrowserIcon />;
//       break;
//     case "printer":
//       getIcon = <PrinterIcon />;
//       break;
//     default:
//       getIcon = <RollerIcon />;
//       break;
//   }


//   return (
//     <Wrapper className="flex flexColumn">
//       <IconStyle>{getIcon}</IconStyle>
//       <TitleStyle className="font20 extraBold">{title}</TitleStyle>
//       <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   width: 100%;
// `;
// const IconStyle = styled.div`
//   @media (max-width: 860px) {
//     margin: 0 auto;
//   }
// `;
// const TitleStyle = styled.h2`
//   width: 100%;
//   max-width: 300px;
//   margin: 0 auto;
//   padding: 40px 0;
//   @media (max-width: 860px) {
//     padding: 20px 0;
//   }
// `;
// const SubtitleStyle = styled.p`
//   width: 100%;
//   max-width: 300px;
//   margin: 0 auto;
// `;



import React from "react";
import styled from "styled-components";
// Import image assets
import RollerImage from "../../assets/img/add/check-leave.png";
import MonitorImage from "../../assets/img/add/apply-leave.png";
import BrowserImage from "../../assets/img/add/manager.png";
import PrinterImage from "../../assets/img/add/check-list.png";

export default function ServiceBox({ icon, title, subtitle }) {
  let iconSrc;

  // Switch to map icon prop to the respective image file
  switch (icon) {
    case "roller":
      iconSrc = RollerImage;
      break;
    case "monitor":
      iconSrc = MonitorImage;
      break;
    case "browser":
      iconSrc = BrowserImage;
      break;
    case "printer":
      iconSrc = PrinterImage;
      break;
    default:
      iconSrc = RollerImage; // Fallback icon
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>
        {/* Display image */}
        <img src={iconSrc} alt={title} className="icon" />
      </IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const IconStyle = styled.div`
  .icon {
    width: 80px;  /* Set desired size */
    height: auto;
    margin-bottom: 20px;
  }
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;

const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;

const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
