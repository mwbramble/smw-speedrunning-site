export default [
  { // YI1
    name: `Yoshi's Island 1`,
    id: '105',
    world: 1,
    powerups: ['Mushroom', 'Fire'],
    dragoncoins: true,
    moon: true,
    strats: {
      normal: [
        {
          name: 'No Cape, Yoshi, Get Orb',
          id: 1,
          categories: ['11 (Orb)'],
          time: 249,
          link: 'i6nbwgtzm-A',
          desc: `In most cases, it is fastest to die after getting the orb so you don't have to watch the Yellow Switch Palace overworld events.`,
          descLink: {
            path: '/glitches/orb',
            text: 'Learn more about the Orb glitch here.'
          },
          source: `Sten`
        },
        {
          name: 'Cape',
          id: 2,
          categories: ['96'],
          time: 261,
          link: 'ggbJON0imHI',
          desc: ``,
          source: `Sten`
        },
        {
          name: 'No Cape',
          id: 3,
          categories: ['95NC', 'SO'],
          time: 260,
          link: 'p33u8WQlnYM',
          desc: ``,
          source: `Sten`
        },
        {
          name: 'Dragon Coins',
          id: 4,
          categories: ['LD'],
          time: 259,
          link: 'hZznveNmmtc',
          desc: ``,
          source: `Umari0`
        }
      ],
      secret: null
    }
  },
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
          link: 'Hmod32SwX6w',
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
          link:'ZhB4VpPE1SU',
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
          link: 'hk8rVl6ldwY',
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
          link: '3LtxEmleBXY',
          desc: `This strat is only used for the Orb variant of 11 Exit and some category extensions.`,
          source: `Sten`
        },
        {
          name: `Dragon Coins`,
          id: 5,
          categories: [`LD`],
          time: 358,
          link: 'UvKYSsJGmN4',
          desc: `Using Yoshi for a boost up to the fourth coin is faster than using the vine.`,
          source: `Umari0`
        }
      ],
      secret: null
    }
  },
  { // YI3
    name: `Yoshi's Island 3`,
    id: '103',
    world: 1,
    powerups: ['Fire', 'Yoshi'],
    dragoncoins: true,
    strats: {
      normal: [
        {
          name: 'Small Only',
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
          time: 259,
          link: 'gE34tasCAhE',
          desc: `Running on the brown platforms makes the difference between 258 and 259, as Mario is pushed forward.`,
          source: `Bramz`
        },
        {
          name: 'Dragon Coins',
          id: 2,
          categories: ['LD'],
          time: 256,
          link: '_eJgZYKl2iI',
          desc: ``,
          source: `Umari0`
        }
      ],
      secret: null
    }
  },
  { // YI4
    name: `Yoshi's Island 4`,
    id: '102',
    world: 1,
    powerups: ['Fire'],
    dragoncoins: true,
    strats: {
      normal: [
        {
          name: 'No Shell Jump',
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
          time: 275,
          link: 'SEDKMBsngJs',
          desc: `If you deliberately omit the shell jump, it is fastest to crush it with a spin jump.`,
          source: `Sten`
        },
        {
          name: 'Shell Jump',
          id: 2,
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
          time: 276,
          link: 'ufG_YvZxoUA',
          desc: `To do the shell jump, quickly tap left then release and regrab Y/X. If timed correctly, Mario will bounce off of the shell and avoid the water. This saves about 0.2 seconds.`,
          source: `rezephos`
        },
        {
          name: 'Dragon Coins',
          id: 3,
          categories: ['LD'],
          time: 274,
          link: 'ORg9ufySB-0',
          desc: ``,
          source: `Umari0`
        }
      ],
      secret: null
    }
  },
  { // YSP
    name: `Yellow Switch Palace`,
    id: '14',
    world: 1,
    powerups: ['None'],
    dragoncoins: false,
    strats: {
      normal: [
        {
          name: 'Cape',
          id: 1,
          categories: ['96', 'LD'],
          time: 190,
          link: 'OWr_0sRuow0',
          desc: ``,
          source: `Sten`
        },
        {
          name: 'No Cape',
          id: 2,
          categories: ['95NC'],
          time: 189,
          link: 'thVT7W4aI2w',
          desc: ``,
          source: `Sten`
        },
      ],
      secret: null
    }
  },
  { // #1C
    name: `#1 Iggy's Castle`,
    id: '101',
    world: 1,
    powerups: ['Fire'],
    dragoncoins: false,
    strats: {
      normal: [
        {
          name: 'Get Fire',
          id: 1,
          categories: [
            `96`,
            `AC`,
            `NSW`,
            `11 (Glitchless)`,
            `95NC`,
            `ACNC`,
            `NCNSW`,
            `11NC (Glitchless)`
          ],
          time: 241,
          link: 'm8uShJQJmL0',
          desc: `Optimizing the cage section is hard, but getting an 81 door is fairly lenient.`,
          source: `Bramz`
        },
        {
          name: 'Underball',
          id: 2,
          categories: [
            `96`,
            `AC`,
            `NSW`,
            `11 (Cloud)`,
            `11 (Glitchless)`,
            `95NC`,
            `ACNC`,
            `NCNSW`,
            `11NC (Cloud)`,
            `11NC (Glitchless)`,
            `ACSO`,
            `NSWSO`,
            `SO`
          ],
          time: 242,
          link: 'OFLihKpYd_0',
          desc: `This strat is a bit more advanced with not much time save. It is not recommended for beginners.`,
          source: `rezephos`
        },
        {
          name: 'P-Switch Jump',
          id: 3,
          categories: [
            `96`,
            `AC`,
            `NSW`,
            `11 (Cloud)`,
            `11 (Glitchless)`,
            `95NC`,
            `ACNC`,
            `NCNSW`,
            `11NC (Cloud)`,
            `11NC (Glitchless)`,
            `ACSO`,
            `NSWSO`,
            `SO`
          ],
          time: 242,
          link: 'JQTpVqcTUAw',
          desc: `P-Switch jumps are frame perfect. There is also no good visual cue, so this is not recommended for RTA.`,
          source: `Lambby`
        },
        
      ],
      secret: null
    }
  },
  { // DP1
    name: `Donut Plains 1`,
    id: '15',
    world: 2,
    powerups: ['Mushroom', 'Cape', 'Yoshi'],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // DP2
    name: `Donut Plains 2`,
    id: '9',
    world: 2,
    powerups: ['Mushroom', 'Cape'],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // DP3
    name: `Donut Plains 3`,
    id: '5',
    world: 2,
    powerups: ['Cape'],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // DP4
    name: `Donut Plains 4`,
    id: '6',
    world: 2,
    powerups: ['Mushroom', 'Fire', 'Cape', 'Yoshi'],
    dragoncoins: true,
    moon: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // GSP
    name: `Green Switch Palace`,
    id: '8',
    world: 2,
    powerups: ['None'],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // DGH
    name: `Donut Ghost House`,
    id: '4',
    world: 2,
    powerups: ['None'],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // DS1
    name: `Donut Secret 1`,
    id: 'A',
    world: 2,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // DS2
    name: `Donut Secret 2`,
    id: '10B',
    world: 2,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // DSH
    name: `Donut Secret House`,
    id: '13',
    world: 2,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // #2C
    name: `#2 Morton's Castle`,
    id: '7',
    world: 2,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VD1
    name: `Vanilla Dome 1`,
    id: '11A',
    world: 3,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // VD2
    name: `Vanilla Dome 2`,
    id: '118',
    world: 3,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // VD3
    name: `Vanilla Dome 3`,
    id: '10A',
    world: 3,
    powerups: [],
    dragoncoins: true,
    moon: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VD4
    name: `Vanilla Dome 4`,
    id: '119',
    world: 3,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // RSP
    name: `Red Switch Palace`,
    id: '11B',
    world: 3,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VGH
    name: `Vanilla Ghost House`,
    id: '107',
    world: 3,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VS1
    name: `Vanilla Secret 1`,
    id: '109',
    world: 3,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // VS2
    name: `Vanilla Secret 2`,
    id: '1',
    world: 3,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VS3
    name: `Vanilla Secret 3`,
    id: '2',
    world: 3,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VF
    name: `Vanilla Fortress`,
    id: 'B',
    world: 3,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // #3C
    name: `#3 Lemmy's Castle`,
    id: '11C',
    world: 3,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // BB1
    name: `Butter Bridge 1`,
    id: 'C',
    world: 4,
    powerups: ['Cape'],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // BB2
    name: `Butter Bridge 2`,
    id: 'D',
    world: 4,
    powerups: ['Cape', 'Yoshi'],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // CBA
    name: `Cheese Bridge Area`,
    id: 'F',
    world: 4,
    powerups: ['Cape'],
    dragoncoins: true,
    moon: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // CM
    name: `Cookie Mountain`,
    id: '10',
    world: 4,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // SL
    name: `Soda Lake`,
    id: '11',
    world: 4,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // #4C
    name: `#4 Ludwig's Castle`,
    id: 'E',
    world: 4,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // FOI1
    name: `Forest of Illusion 1`,
    id: '11E',
    world: 5,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // FOI2
    name: `Forest of Illusion 2`,
    id: '120',
    world: 5,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // FOI3
    name: `Forest of Illusion 3`,
    id: '123',
    world: 5,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // FOI4
    name: `Forest of Illusion 4`,
    id: '11F',
    world: 5,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // BSP
    name: `Blue Switch Palace`,
    id: '121',
    world: 5,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // FGH
    name: `Forest Ghost House`,
    id: '11D',
    world: 5,
    powerups: [],
    dragoncoins: true,
    moon: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // FSA
    name: `Forest Secret Area`,
    id: '122',
    world: 5,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // FF
    name: `Forest Fortress`,
    id: '1F',
    world: 5,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // #5C
    name: `#5 Roy's Castle`,
    id: '20',
    world: 5,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // CI1
    name: `Chocolate Island 1`,
    id: '22',
    world: 6,
    powerups: [],
    dragoncoins: true,
    moon: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // CI2
    name: `Chocolate Island 2`,
    id: '24',
    world: 6,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // CI3
    name: `Chocolate Island 3`,
    id: '23',
    world: 6,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // CI4
    name: `Chocolate Island 4`,
    id: '1D',
    world: 6,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // CI5
    name: `Chocolate Island 5`,
    id: '1C',
    world: 6,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // CGH
    name: `Choco-Ghost House`,
    id: '21',
    world: 6,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // CS
    name: `Chocolate Secret`,
    id: '117',
    world: 6,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // CF
    name: `Chocolate Fortress`,
    id: '1B',
    world: 6,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // #6C
    name: `#6 Wendy's Castle`,
    id: '1A',
    world: 6,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // SGS
    name: `Sunken Ghost Ship`,
    id: '18',
    world: 7,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VOB1
    name: `Valley of Bowser 1`,
    id: '116',
    world: 7,
    powerups: [],
    dragoncoins: true,
    moon: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VOB2
    name: `Valley of Bowser 2`,
    id: '115',
    world: 7,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // VOB3
    name: `Valley of Bowser 3`,
    id: '113',
    world: 7,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // VOB4
    name: `Valley of Bowser 4`,
    id: '10F',
    world: 7,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // VGH
    name: `Valley Ghost House`,
    id: '114',
    world: 7,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // VF
    name: `Valley Fortress`,
    id: '111',
    world: 7,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // #7C
    name: `#7 Larry's Castle`,
    id: '110',
    world: 7,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // BC
    name: `Bowser's Castle`,
    id: '10D',
    world: 7,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // SW1
    name: `Star World 1`,
    id: '134',
    world: 8,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // SW2
    name: `Star World 2`,
    id: '130',
    world: 8,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // SW3
    name: `Star World 3`,
    id: '132',
    world: 8,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // SW4
    name: `Star World 4`,
    id: '135',
    world: 8,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // SW5
    name: `Star World 5`,
    id: '136',
    world: 8,
    powerups: [],
    dragoncoins: false,
    strats: {
      normal: [],
      secret: []
    }
  },
  { // Gnarly
    name: `Gnarly`,
    id: '12A',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // Tubular
    name: `Tubular`,
    id: '12B',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // Way Cool
    name: `Way Cool`,
    id: '12C',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // Awesome
    name: `Awesome`,
    id: '12D',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // Groovy
    name: `Groovy`,
    id: '128',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // Mondo
    name: `Mondo`,
    id: '127',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // Outrageous
    name: `Outrageous`,
    id: '126',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
  { // Funky
    name: `Funky`,
    id: '125',
    world: 9,
    powerups: [],
    dragoncoins: true,
    strats: {
      normal: [],
      secret: null
    }
  },
]