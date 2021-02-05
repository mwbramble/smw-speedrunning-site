export default [
  { // YI2
    name: `Yoshi's Island 2`,
    id: '106',
    world: 1,
    powerups: ['Mushroom', 'Yoshi'],
    dragoncoins: true,
    strats: {
      normal: [
        {
          name: `Small Only`,
          id: 1,
          categories: [
            `96`,
            `AC`,
            `NSW`,
            `11 (Glitchless)`,
            `95NC`,
            `ACNC`,
            `NCNSW`,
            `11NC (Glitchless)`,
            `ACSO`,
            `NSWSO`,
            `SO`
          ],
          time: 361,
          link: 'https://www.youtube.com/embed/Hmod32SwX6w',
          desc: `Getting a 361 is only possible if you release the d-pad on the correct frame. Mario's speed oscillates (49, 48, 47, 48, 47) when you hold the d-pad. If you release when your speed is 49 subpixels per frame, you will get a 361.`,
          source: `Bramz`
        },
        {
          name: `B5 Cloud Setup`,
          id: 2,
          categories: [
            `11 (Cloud)`,
            `11NC (Cloud)`
          ],
          time: 356,
          link:'https://www.youtube.com/embed/ZhB4VpPE1SU',
          desc: `You need to despawn the Koopa in a pixel-perfect location. If you are struggling with this, consider the easy setup.`,
          source: `IsoFrieze`
        },
        {
          name: `Easy Cloud Setup`,
          id: 3,
          categories: [
            `11 (Cloud)`,
            `11NC (Cloud)`
          ],
          time: 354,
          link: 'https://www.youtube.com/embed/hk8rVl6ldwY',
          desc: `This loses a couple seconds, but is extremely consistent.`,
          source: `LostC0re`
        },
        {
          name: `Get Yoshi, Midway`,
          id: 4,
          categories: [
            `11 (Orb)`,
            `11NC (Orb)`
          ],
          time: 358,
          link: 'https://www.youtube.com/embed/3LtxEmleBXY',
          desc: `This strat is only used for the Orb variant of 11 Exit and some category extensions.`,
          source: `Sten`
        },
        {
          name: `Dragon Coins`,
          id: 5,
          categories: [`LD`],
          time: 358,
          link: 'https://www.youtube.com/embed/UvKYSsJGmN4',
          desc: `Using Yoshi for a boost up to the fourth coin is faster than using the vine.`,
          source: `Umari0`
        }
      ],
      secret: null
    }
  }
]

// Strat Template
// {
//   name: ,
//   id: ,
//   categories: [],
//   time: ,
//   link: '',
//   desc: ``,
//   source: ``
// }