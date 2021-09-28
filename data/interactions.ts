import { FaArrowDown, FaArrowUp, FaExclamationTriangle, FaHeartbeat, FaRegDotCircle, FaTimes } from 'react-icons/fa';

export const INTERACTION_CATEGORIES = {
  'Low Risk & Synergy': {
    description:
      'These work together to cause an effect greater than the sum of their parts. The combination is unlikely to cause any adverse or undesirable reaction beyond those that might ordinarily be expected from either one.',
    icon: FaArrowUp,
    color: '#0a89dd',
  },
  'Low Risk & No Synergy': {
    description:
      'Effects are additive. The combination is unlikely to cause any adverse or undesirable reaction beyond those that might ordinarily be expected from either one.',
    icon: FaRegDotCircle,
    color: '#35afff',
  },
  'Low Risk & Decrease': {
    description:
      'Effects are subtractive, dampening the effects of both. The combination is unlikely to cause any adverse or undesirable reaction beyond those that might ordinarily be expected from either one.',
    icon: FaArrowDown,
    color: '#006cb3',
  },
  Caution: {
    description:
      'These are not USUALLY physically harmful, but they may produce undesirable effects, such as physical discomfort or overstimulation. Extreme use may cause physical health issues. Synergistic effects may be unpredictable. Care should be taken when choosing to use this combination.',
    icon: FaExclamationTriangle,
    color: '#d5c625',
  },
  Unsafe: {
    description:
      'There is considerable risk of physical harm when taking these together and this combination should be avoided where possible.',
    icon: FaHeartbeat,
    color: '#d98427',
  },
  Dangerous: {
    description:
      'This is considered extremely harmful and should always be avoided. Reactions to this combination are highly unpredictable and have a potential to cause death.',
    icon: FaTimes,
    color: '#d12128',
  },
};
