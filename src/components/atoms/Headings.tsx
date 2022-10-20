import { color, space, border, SpaceProps, FontSizeProps } from "styled-system";
import styled from 'styled-components';
import { RobotoBold } from '../theme/typography/Typography'

export const H1 = styled.h1`
  ${RobotoBold};
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.extraBold};
  letter-spacing: -0.02em;
  ${color};
  ${space};
  ${border};
`;

export const H2 = styled.h2<SpaceProps & FontSizeProps>`
  ${RobotoBold};
  font-size: 35;
  font-weight: ${p => p.theme.fontWeights.extraBold};
  letter-spacing: -0.02em;
  ${color};
  ${space};
  ${border};
`;

export default H1;