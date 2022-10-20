import styled from 'styled-components';
import { typography, color, space, TypographyProps, SpaceProps } from 'styled-system';
import { RobotoRegular } from '../theme/typography/Typography'

type Props = TypographyProps & SpaceProps & {
  textTransform?: string;
}

const Text = styled.span<Props>`
  ${RobotoRegular}
  ${typography};
  ${color};
  ${space};
  ${p => p.textTransform && `text-transform: ${p.textTransform}`}
`

export default Text;

