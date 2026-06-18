export type CharacterType = 'ScoutT' | 'NinjaT' | 'BuilderT' | 'CaptainT';

export const agentsT = {
  ScoutT: { x: 0, y: 0 },
  NinjaT: { x: 120, y: 80 },
  BuilderT: { x: 240, y: 160 },
  CaptainT: { x: -80, y: 120 },
};

export const motion = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity }
  }
};
