export default [
  { // Yoshi's Island 1
    name: `Yoshi's Island 1`,
    id: '105',
    world: 1,
    powerups: ['Mushroom', 'Fire'],
    dragoncoins: true,
    moon: true,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Spin the Koopa`,
                time: 263,
                link: 'https://www.youtube.com/embed/Do7OvDZ4I0I',
                desc: `This is slightly faster than jumping over the Koopa, but you risk losing cape.`,
                source: `Bramz`
              },
              {
                id: 2,
                name: `Jump Over the Koopa`,
                time: 262,
                link: 'https://www.youtube.com/embed/wWcYGTM-C_I',
                desc: `This is more consistent than spinning the Koopa.`,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `11 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 3,
                name: `Get Orb`,
                time: 250,
                link: 'https://www.youtube.com/embed/pLHifXe-4uw',
                desc: `Orb is slower than Cloud, but this strat can be used in numerous runs on the category extensions page.`,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 4,
                name: `Small Only`,
                time: 260,
                link: 'https://www.youtube.com/embed/lxZma7ucZM4',
                desc: `You exit the previous level small, but it is not required that you remain small. If you hit the midway, it's okay.`,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 5,
                name: `Dragon Coins`,
                time: 259,
                link: 'https://www.youtube.com/embed/hZznveNmmtc',
                desc: ``,
                source: `Umari0`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Yoshi's Island 2 (add 0 exit at some point)
    name: `Yoshi's Island 2`,
    id: '106',
    world: 1,
    powerups: ['Mushroom', 'Yoshi'],
    dragoncoins: true,
    categories: [
      {
        title: `All Categories`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Small Only`,
                time: 361,
                link: 'https://www.youtube.com/embed/Hmod32SwX6w',
                desc: `Getting a 361 is only possible if you release the d-pad on the correct frame. Mario's speed oscillates (49, 48, 47, 48, 47) when you hold the d-pad. If you release when your speed is 49 subpixels per frame, you will get a 361.`,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `11 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `B5 Cloud Setup`,
                time: 356,
                link: 'https://www.youtube.com/embed/ZhB4VpPE1SU',
                desc: `You need to despawn the Koopa in a pixel-perfect location. If you are struggling with this, consider the easy setup.`,
                source: `Dotsarecool`
              },
              {
                id: 3,
                name: `Easy Cloud Setup`,
                time: 354,
                link: 'https://www.youtube.com/embed/hk8rVl6ldwY',
                desc: `This loses a couple seconds, but is extremely consistent.`,
                source: `LostC0re`
              },
              {
                id: 4,
                name: `Get Yoshi, Midway (11 Exit (Orb))`,
                time: 358,
                link: 'https://www.youtube.com/embed/3LtxEmleBXY',
                desc: `This strat is only used for the Orb variant of 11 Exit and some category extensions.`,
                source: `Sten`
              },
              {
                id: 5,
                name: `Small Only (11 Exit (Glitchless))`,
                time: 361,
                link: 'https://www.youtube.com/embed/Hmod32SwX6w',
                desc: `Getting a 361 is only possible if you release the d-pad on the correct frame. Mario's speed oscillates (49, 48, 47, 48, 47) when you hold the d-pad. If you release when your speed is 49 subpixels per frame, you will get a 361.`,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `0 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 6,
                name: `oh boy`,
                time: 420,
                link: '',
                desc: `what a category`,
                source: `honestly`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `11 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 7,
                name: `B5 Cloud Setup`,
                time: 356,
                link: 'https://www.youtube.com/embed/ZhB4VpPE1SU',
                desc: `You need to despawn the Koopa in a pixel-perfect location. If you are struggling with this, consider the easy setup.`,
                source: `Dotsarecool`
              },
              {
                id: 8,
                name: `Easy Cloud Setup`,
                time: 354,
                link: 'https://www.youtube.com/embed/hk8rVl6ldwY',
                desc: `This loses a couple seconds, but is extremely consistent.`,
                source: `LostC0re`
              },
              {
                id: 9,
                name: `Get Yoshi, Midway (11 Exit, No Cape (Orb))`,
                time: 358,
                link: 'https://www.youtube.com/embed/3LtxEmleBXY',
                desc: `This strat is only used for the Orb variant of 11 Exit and some category extensions.`,
                source: `Sten`
              },
              {
                id: 10,
                name: `Small Only (11 Exit, No Cape (Glitchless))`,
                time: 361,
                link: 'https://www.youtube.com/embed/Hmod32SwX6w',
                desc: `Getting a 361 is only possible if you release the d-pad on the correct frame. Mario's speed oscillates (49, 48, 47, 48, 47) when you hold the d-pad. If you release when your speed is 49 subpixels per frame, you will get a 361.`,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 11,
                name: `Dragon Coins`,
                time: 358,
                link: 'https://www.youtube.com/embed/UvKYSsJGmN4',
                desc: `Using Yoshi for a boost up to the fourth coin is faster than using the vine.`,
                source: `Umari0`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Yoshi's Island 3
    name: `Yoshi's Island 3`,
    id: '103',
    world: 1,
    powerups: ['Fire', 'Yoshi'],
    dragoncoins: true,
    categories: [
      {
        title: `All Categories`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Small Only`,
                time: 259,
                link: 'https://www.youtube.com/embed/gE34tasCAhE',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `Dragon Coins`,
                time: 256,
                link: 'https://www.youtube.com/embed/_eJgZYKl2iI',
                desc: ``,
                source: `Umari0`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Yoshi's Island 4
    name: `Yoshi's Island 4`,
    id: '102',
    world: 1,
    powerups: ['Fire'],
    dragoncoins: true,
    categories: [
      {
        title: `All Categories`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Shell Jump`,
                time: 276,
                link: 'https://www.youtube.com/embed/4fYfXXLzkIY',
                desc: `The shell jump saves about 0.25 seconds.`,
                source: `Bramz`
              },
              {
                id: 2,
                name: `No Shell Jump`,
                time: 275,
                link: 'https://www.youtube.com/embed/liweWJF0l8A',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 23,
                name: `Dragon Coins`,
                time: 274,
                link: 'https://www.youtube.com/embed/4fYfXXLzkIY',
                desc: `https://www.youtube.com/embed/ORg9ufySB-0`,
                source: `Umari0`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Yellow Switch Palace
    name: `Yellow Switch Palace`,
    id: '14',
    world: 1,
    powerups: ['None'],
    dragoncoins: false,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Pipe Fly`,
                time: 190,
                link: 'https://www.youtube.com/embed/G_AN_06XVmg',
                desc: `Alternatively, you can skip the pipe fly. This is a bit slower.`,
                source: `Sten`,
              },
            ],
          },
          secret: null,
        },
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `No Cape`,
                time: 189,
                link: 'https://www.youtube.com/embed/3_5sDWSW7Ac',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 3,
                name: `Pipe Fly`,
                time: 190,
                link: 'https://www.youtube.com/embed/G_AN_06XVmg',
                desc: `Alternatively, you can skip the pipe fly. This is a bit slower.`,
                source: `Sten`,
              },
            ],
          },
          secret: null,
        },
      },
    ],
  },
  { // #1 Iggy's Castle
    name: `#1 Iggy's Castle`,
    id: '',
    world: 1,
    powerups: ['Fire'],
    dragoncoins: false,
    categories: [
      {
        title: `All Categories`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `P-Switch Jump`,
                time: 242,
                link: 'https://www.youtube.com/embed/JQTpVqcTUAw',
                desc: `This jump is frame perfect without a visual cue.`,
                source: `Lambby`
              },
              {
                id: 2,
                name: `Underball`,
                time: 242,
                link: 'https://www.youtube.com/embed/O00lDZTnFrc',
                desc: ``,
                source: `Lambby`
              },
              {
                id: 3,
                name: `Get Fire`,
                time: 241,
                link: 'https://www.youtube.com/embed/JQTpVqcTUAw',
                desc: ``,
                source: `dram55`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `11 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 4,
                name: `Stay Small`,
                time: 240,
                link: 'https://www.youtube.com/embed/XmSipnVHjR0',
                desc: ``,
                source: `Bramz`
              },
              {
                id: 5,
                name: `Use Orb`,
                time: 299,
                link: 'https://www.youtube.com/embed/ZzrkKKCinJ8',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 6,
                name: `Stay Small`,
                time: 240,
                link: 'https://www.youtube.com/embed/XmSipnVHjR0',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Cape, No Starworld`,
        exits: {
          normal: {
            strats: [
              {
                id: 7,
                name: `Stay Small`,
                time: 240,
                link: 'https://www.youtube.com/embed/XmSipnVHjR0',
                desc: `Do this strat if you get fire in Donut Plains 4.`,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 8,
                name: `No Damage Boost`,
                time: 241,
                link: 'https://www.youtube.com/embed/1gjveh1zgps',
                desc: `This saves 47 frames, as you don't transition from big to small.`,
                source: `Lui`
              },
              {
                id: 9,
                name: `Damage Boost`,
                time: 241,
                link: 'https://www.youtube.com/embed/OfLVmLpit8A',
                desc: `More consistent than avoiding damage.`,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Donut Plains 1
    name: `Donut Plains 1`,
    id: '15',
    world: 2,
    powerups: ['Mushroom', 'Cape', 'Yoshi'],
    dragoncoins: true,
    categories: [
      {
        title: `Cape Categories`,
        exits: {
          normal: null,
          secret: {
            strats: [
              {
                id: 1,
                name: `DP1 Guy`,
                time: 363,
                link: '',
                desc: ``,
                source: ``
              },
              {
                id: 2,
                name: `Get Cape`,
                time: 362,
                link: '',
                desc: ``,
                source: ``
              },
            ]
          }
        }
      },
      {
        title: `No Cape Categories`,
        exits: {
          normal: null,
          secret: {
            strats: [
              {
                id: 3,
                name: `Fire, Get Yoshi`,
                time: 360,
                link: 'https://www.youtube.com/embed/8BcoB2klOis',
                desc: ``,
                source: `LostC0re`
              },
              {
                id: 4,
                name: `Small, Get Yoshi`,
                time: 360,
                link: 'https://www.youtube.com/embed/uCuITNVPnL8',
                desc: ``,
                source: `LostC0re`
              },
            ]
          }
        }
      },
      {
        title: `Small Only Categories`,
        exits: {
          normal: null,
          secret: {
            strats: [
              {
                id: 5,
                name: `Fast Strat`,
                time: 360,
                link: 'https://www.youtube.com/embed/5gCbb6b6WPU',
                desc: `This saves two seconds over the other strat, but the turnaround is difficult.`,
                source: `rezephos`
              },
              {
                id: 6,
                name: `Easier Strat`,
                time: 358,
                link: 'https://www.youtube.com/embed/h2cmrYzAsz8',
                desc: ``,
                source: `rezephos`
              },
            ]
          }
        }
      },
      
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 5,
                name: `Normal Strat`,
                time: 363,
                link: 'https://www.youtube.com/embed/dWrDGixjfLc',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 6,
                name: `Normal Strat`,
                time: 358,
                link: 'https://www.youtube.com/embed/wLECVSevi38',
                desc: `You need Yoshi for the second half of Donut Plains and Vanilla Dome.`,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 7,
                name: `Dragon Coins`,
                time: 360,
                link: 'https://www.youtube.com/embed/3tQ7jKb99lc',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Donut Plains 2
    name: `Donut Plains 2`,
    id: '9',
    world: 2,
    powerups: ['Mushroom', 'Cape'],
    dragoncoins: true,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Normal Strat`,
                time: 309,
                link: 'https://www.youtube.com/embed/vu9T6OvAA-0',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: {
            strats: [
              {
                id: 2,
                name: `Faster Key Room`,
                time: 311,
                link: 'https://www.youtube.com/embed/84hpsmxbqUg',
                desc: `This saves about half a second. Sometimes a football will spawn, but spinning the cape will normally get rid of it.`,
                source: `ThirdLavaDolphin`
              },
              {
                id: 3,
                name: `Normal Strat`,
                time: 310,
                link: 'https://www.youtube.com/embed/AeqAIgJYWxE',
                desc: ``,
                source: `Bramz`
              },
            ]
          }
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 4,
                name: `No Cape, Yoshi`,
                time: 302,
                link: 'https://www.youtube.com/embed/Rou31_cElic',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: {
            strats: [
              {
                id: 5,
                name: `No Cape, Yoshi`,
                time: 300,
                link: 'https://www.youtube.com/embed/irWL4grV8aI',
                desc: ``,
                source: `Bramz`
              },
            ]
          }
        }
      },
      {
        title: `Small Only`,
        exits: {
          normal: {
            strats: [
              {
                id: 6,
                name: `Small Only`,
                time: 307,
                link: 'https://www.youtube.com/embed/e4qE7-msEjo',
                desc: ``,
                source: `rezephos`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 7,
                name: `Dragon Coins`,
                time: 212,
                link: 'https://www.youtube.com/embed/tVyUb4TxXeI',
                desc: ``,
                source: `Umari0`
              },
            ]
          },
          secret: {
            strats: [
              {
                id: 8,
                name: `Faster Key Room`,
                time: 311,
                link: 'https://www.youtube.com/embed/84hpsmxbqUg',
                desc: `This saves about half a second. Sometimes a football will spawn, but spinning the cape will normally get rid of it.`,
                source: `ThirdLavaDolphin`
              },
              {
                id: 9,
                name: `Normal Strat`,
                time: 310,
                link: 'https://www.youtube.com/embed/AeqAIgJYWxE',
                desc: ``,
                source: `Bramz`
              },
            ]
          }
        }
      },
    ]
  },
  { // Donut Plains 3
    name: `Donut Plains 3`,
    id: '5',
    world: 2,
    powerups: ['Cape'],
    dragoncoins: true,
    categories: [
      {
        title: `Cape Categories`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Normal Strat`,
                time: 263,
                link: 'https://www.youtube.com/embed/Wqf8eJtBHZI',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Small Only Categories`,
        exits: {
          normal: {
            strats: [
              {
                id: 3,
                name: `No Clouds`,
                time: 262,
                link: 'https://www.youtube.com/embed/IrpSBrAKy5E',
                desc: `This is slightly faster than using the clouds and can be used as a backup in case the jump up to the clouds fails.`,
                source: `rezephos`
              },
              {
                id: 4,
                name: `Clouds`,
                time: 262,
                link: 'https://www.youtube.com/embed/NvG4G74R9C4',
                desc: `The jump up to the clouds has a 3/5 chance of succeeding as it is based on Mario's speed.`,
                source: `rezephos`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 5,
                name: `Platform Boosts`,
                time: 262,
                link: 'https://www.youtube.com/embed/aSx268oK5R8',
                desc: `This strat saves half a second due to running on the spinning platforms.`,
                source: `Lui`
              },
              {
                id: 6,
                name: `Normal Strat`,
                time: 261,
                link: 'https://www.youtube.com/embed/TVLsMlf2JOU',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Cape, No Starworld and All Castles, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `Fire`,
                time: 263,
                link: 'https://www.youtube.com/embed/vPpYjSFLDBQ',
                desc: `Alternatively, you can remain small and get fire in Donut Plains 4.`,
                source: `Lambby`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 7,
                name: `Normal Fly`,
                time: 263,
                link: 'https://www.youtube.com/embed/ffu0hLshGHI',
                desc: ``,
                source: `ThirdLavaDolphin`
              },
              {
                id: 8,
                name: `Spin Fly`,
                time: 261,
                link: 'https://www.youtube.com/embed/7gidgBgWupw',
                desc: ``,
                source: `Umari0`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Donut Plains 4
    name: `Donut Plains 4`,
    id: '6',
    world: 2,
    powerups: ['Mushroom', 'Fire', 'Cape', 'Yoshi'],
    dragoncoins: true,
    moon: true,
    categories: [
      {
        title: `96 Exit & All Castles`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Cape, Get Yoshi`,
                time: 258,
                link: 'https://www.youtube.com/embed/hu6HvOkz5Ao',
                desc: `You need Yoshi to get wings in Vanilla Dome 1.`,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Starworld`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `Skip Yoshi`,
                time: 263,
                link: 'https://www.youtube.com/embed/pBLcg68HNq4',
                desc: `You don't get Vanilla Dome 1 wings in this category, so you can skip Yoshi.`,
                source: `LostC0re`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 3,
                name: `No Cape, Yoshi, Get Fire`,
                time: 260,
                link: 'https://www.youtube.com/embed/Q1M-JRzfmus',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Cape, No Starworld & All Castles, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 4,
                name: `Blue Shell`,
                time: 255,
                link: 'https://www.youtube.com/embed/9_SEt-3bhfk',
                desc: `The blue shell throw can be tricky. The yellow shell bounce at the beginning saves 0.3 seconds, but can be omitted.`,
                source: `Lui`
              },
              {
                id: 5,
                name: `No Cape, Get Fire, Get Yoshi`,
                time: 256,
                link: 'https://www.youtube.com/embed/JNb9T2dPBww',
                desc: `Do this strat if you are entering the stage small.`,
                source: `MaestroBrau`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Small Only`,
        exits: {
          normal: {
            strats: [
              {
                id: 6,
                name: `Under Bro`,
                time: 260,
                link: 'https://www.youtube.com/embed/7O_v1oS8J9U',
                desc: `The jump under the Hammer Bro has a small window.`,
                source: `rezephos`
              },
              {
                id: 7,
                name: `Shell`,
                time: 259,
                link: 'https://www.youtube.com/embed/QrEUNQvJLCM',
                desc: `This is a much more consistent strat.`,
                source: `rezephos`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 8,
                name: `Pipe Fly`,
                time: 263,
                link: 'https://www.youtube.com/embed/3FQsYybR3zM',
                desc: `Spamming cape in the sublevel manipulates the camera and makes the pipe fly setup consistent.`,
                source: `Lui`
              },
              {
                id: 9,
                name: `No Pipe Fly`,
                time: 260,
                link: 'https://www.youtube.com/embed/Mx0XBSkop1k',
                desc: ``,
                source: `Umari0`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Green Switch Palace
    name: `Green Switch Palace`,
    id: '8',
    world: 2,
    powerups: ['None'],
    dragoncoins: false,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Pipe Fly`,
                time: 190,
                link: 'https://www.youtube.com/embed/bDUanTn1HQE',
                desc: `Alternatively, you can skip the pipe fly. This is a bit slower.`,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `No Cape, Yoshi`,
                time: 189,
                link: 'https://www.youtube.com/embed/vh7qYqqNayk',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 3,
                name: `Pipe Fly`,
                time: 190,
                link: 'https://www.youtube.com/embed/bDUanTn1HQE',
                desc: `Alternatively, you can skip the pipe fly. This is a bit slower.`,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Donut Ghost House
    name: `Donut Ghost House`,
    id: '4',
    world: 2,
    powerups: ['None'],
    dragoncoins: false,
    categories: [
      {
        title: ``,
        exits: {
          normal: {
            strats: []
          },
          secret: {
            strats: []
          }
        }
      },
    ]
  },
  { // vd1 not done
    name: `Vanilla Dome 1`,
    id: '11A',
    world: 3,
    powerups: ['Fire', 'Cape (NTSC-U)'],
    dragoncoins: true,
    categories: [
      {
        title: `96 Exit`,
        id: `96_exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Wings Tutorial`,
                time: null,
                link: 'https://www.youtube.com/embed/s6-TlVgmNHQ',
                desc: `One thing not mentioned in this tutorial is the possibility of hitting the key block. This can happen by picking up the Buzzy Beetle while it has horizonal momentum, or by going for the second dupe while the block beneath the invisible key block is spinning.`,
                source: `Bramz`,
              },
              {
                id: 2,
                name: `Fast Wings`,
                time: 378,
                link: 'https://www.youtube.com/embed/wT9b2scXB9I',
                desc: `This is not recommended for beginners.`,
                source: `Lui`,
              },
              {
                id: 3,
                name: `Intermediate Wings`,
                time: 375,
                link: 'https://www.youtube.com/embed/Pauba8wh9MA',
                desc: ``,
                source: `Lui`,
              },
              {
                id: 4,
                name: `Easy`,
                time: 372,
                link: 'https://www.youtube.com/embed/BRiMrDl9y4U',
                desc: ``,
                source: `Sten`,
              },
              {
                id: 5,
                name: `No Wings`,
                time: 343,
                link: 'https://www.youtube.com/embed/pghNLJ3tqlM',
                desc: `Use this strat if you aren't going for wings just yet.`,
                source: `Sten`,
              },
            ],
          },
          secret: {
            strats: [
              {
                id: 6,
                name: `Normal Strat`,
                time: 382,
                link: 'https://www.youtube.com/embed/ovyIEN6PHqc',
                desc: ``,
                source: `Sten`,
              },
              {
                id: 7,
                name: `Fast Strat`,
                time: 383,
                link: 'https://www.youtube.com/embed/cxCzl9Xls3E',
                desc: `The turnaround here is very precise, and it is more likely that you will lose time doing it.`,
                source: `LostC0re`,
              },
            ],
          },
        },
      },
      {
        title: `All Castles`,
        id: 'ac',
        exits: {
          normal: {
            strats: [],
          },
          secret: null,
        },
      },
      {
        title: `No Starworld`,
        id: 'nsw',
        exits: {
          normal: null,
          secret: {
            strats: [],
          },
        },
      },
      {
        title: `95 Exit, No Cape`,
        id: '95nc',
        exits: {
          normal: {
            strats: [],
          },
          secret: {
            strats: [],
          },
        },
      },
      {
        title: `All Castles, No Cape`,
        id: 'acnc',
        exits: {
          normal: {
            strats: [],
          },
          secret: null,
        },
      },
      {
        title: `No Cape, No Starworld`,
        id: 'ncnsw',
        exits: {
          normal: null,
          secret: {
            strats: [],
          },
        },
      },
      {
        title: `All Castles, Small Only`,
        id: 'acso',
        exits: {
          normal: {
            strats: [],
          },
          secret: null,
        },
      },
      {
        title: `No Starworld, Small Only`,
        id: 'nswso',
        exits: {
          normal: null,
          secret: {
            strats: [],
          },
        },
      },
      {
        title: `Small Only`,
        id: 'small',
        exits: {
          normal: null,
          secret: {
            strats: [],
          },
        },
      },
      {
        title: `Lunar Dragon`,
        id: 'lunar_d',
        exits: {
          normal: {
            strats: [],
          },
          secret: {
            strats: [],
          },
        },
      },
    ],
  },
  { // Butter Bridge 1
    name: `Butter Bridge 1`,
    id: 'C',
    world: 4,
    powerups: ['Cape'],
    dragoncoins: true,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Pipe Fly`,
                time: 154,
                link: 'https://www.youtube.com/embed/gJwfcH_xj30',
                desc: `This setup avoids spinning any parakoopas. Alternatively, you can skip the pipe fly.`,
                source: `Lui`
              },
             ]
           },
           secret: null
         }
      },
      {
        title: `No Starworld`,
        exits: {
          normal: {
            strats: [
             {
               id: 2,
               name: `Pipe Fly`,
               time: 154,
               link: 'https://www.youtube.com/embed/gJwfcH_xj30',
               desc: `This setup avoids spinning any parakoopas. Alternatively, you can skip the pipe fly.`,
               source: `Lui`
             },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
             {
               id: 3,
               name: `No Cape`,
               time: 153,
               link: 'https://www.youtube.com/embed/dy6hYkH3wuU',
               desc: ``,
               source: `Sten`
             },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Cape, No Starworld`,
        exits: {
          normal: {
            strats: [
             {
               id: 4,
               name: `No Cape`,
               time: 153,
               link: 'https://www.youtube.com/embed/dy6hYkH3wuU',
               desc: ``,
               source: `Sten`
             },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
             {
               id: 5,
               name: `No Cape`,
               time: 154,
               link: 'https://www.youtube.com/embed/Q986GKw59Ig',
               desc: ``,
               source: `Umari0`
             },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Butter Bridge 2
    name: `Butter Bridge 2`,
    id: 'D',
    world: 4,
    powerups: ['Cape', 'Yoshi'],
    dragoncoins: true,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Normal Strat`,
                time: 263,
                link: 'https://www.youtube.com/embed/GvamBJKhUqE',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Starworld`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `Normal Strat`,
                time: 263,
                link: 'https://www.youtube.com/embed/GvamBJKhUqE',
                desc: ``,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 3,
                name: `No Cape`,
                time: 261,
                link: 'https://www.youtube.com/embed/-ky6Uthz5fU',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Cape, No Starworld`,
        exits: {
          normal: {
            strats: [
              {
                id: 4,
                name: `No Cape`,
                time: 261,
                link: 'https://www.youtube.com/embed/-ky6Uthz5fU',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `No Starworld, Small Only`,
        exits: {
          normal: {
            strats: [
              {
                id: 5,
                name: `Small Only`,
                time: 260,
                link: 'https://www.youtube.com/embed/xs-MrooJXys',
                desc: ``,
                source: `rezephos`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 6,
                name: `Lunar Dragon`,
                time: 250,
                link: 'https://www.youtube.com/embed/xxhg7JY_fiE',
                desc: ``,
                source: `Umari0`
              },
            ]
          },
          secret: null
        }
      },
    ]
  },
  { // Cheese Bridge Area
    name: `Cheese Bridge Area`,
    id: 'F',
    world: 4,
    powerups: ['Cape'],
    dragoncoins: true,
    moon: true,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Keep Yoshi`,
                time: 274,
                link: 'https://www.youtube.com/embed/mH90NkMEWmY',
                desc: `Keep Yoshi if you go for Cookie Mountain Boss Kill.`,
                source: `Bramz`
              },
              {
                id: 2,
                name: `Ditch Yoshi`,
                time: 274,
                link: 'https://www.youtube.com/embed/BplZX6U52pw',
                desc: `Ditch Yoshi if you don't go for Cookie Mountain Boss Kill.`,
                source: `Bramz`
              },
            ]
          },
          secret: {
            strats: [
              {
                id: 3,
                name: `Enter With Yoshi`,
                time: 259,
                link: 'https://www.youtube.com/embed/TcNImRWeoXc',
                desc: `Use this strat to switch back to cape after doing Cookie Mountain Boss Kill.`,
                source: `Sten`
              },
              {
                id: 4,
                name: `Enter Without Yoshi`,
                time: 259,
                link: 'https://www.youtube.com/embed/u2SkO5B5PrM',
                desc: `You will not have Yoshi if you don't go for Cookie Mountain Boss Kill.`,
                source: `Sten`
              },
            ]
          }
        }
      },
      {
        title: `All Castles`,
        exits: {
          normal: {
            strats: [
              {
                id: 5,
                name: `Keep Yoshi`,
                time: 274,
                link: 'https://www.youtube.com/embed/mH90NkMEWmY',
                desc: `It is faster to keep Yoshi here instead of getting him in Forest of Illusion 1.`,
                source: `Bramz`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 6,
                name: `Optimal Saw Bouncing`,
                time: 262,
                link: 'https://www.youtube.com/embed/logtlhvmK0A',
                desc: `This saves some time over the safer bounces, but is kind of risky.`,
                source: `Bramz`
              },
              {
                id: 7,
                name: `Safer Saw Bouncing`,
                time: 256,
                link: 'https://www.youtube.com/embed/QQeF9d9RXdg',
                desc: `A bit slower, but way safer. Little chance of missing saws and death.`,
                source: `Sten`
              },
            ]
          },
          secret: {
            strats: [
              {
                id: 8,
                name: `Optimal Saw Bouncing`,
                time: 244,
                link: 'https://www.youtube.com/embed/KvFoygBtr00',
                desc: `This saves time over the safer bounces, but is kind of risky.`,
                source: `Bramz`
              },
              {
                id: 9,
                name: `Safer Saw Bouncing`,
                time: 238,
                link: 'https://www.youtube.com/embed/xrm61lee7A8',
                desc: `A bit slower, but way safer. Little chance of missing saws and death.`,
                source: `Sten`
              },
            ]
          }
        }
      },
      {
        title: `All Castles, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 10,
                name: `Optimal Saw Bouncing`,
                time: 262,
                link: 'https://www.youtube.com/embed/logtlhvmK0A',
                desc: `This saves some time over the safer bounces, but is kind of risky. NOTE: In this category, you do not have fire and Yoshi is green. This does not change the strat in any way.`,
                source: `Bramz`
              },
              {
                id: 11,
                name: `Safer Saw Bouncing`,
                time: 256,
                link: 'https://www.youtube.com/embed/QQeF9d9RXdg',
                desc: `A bit slower, but way safer. Little chance of missing saws and death. NOTE: In this category, you do not have fire and Yoshi is green. This does not change the strat in any way.`,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `All Castles, Small Only`,
        exits: {
          normal: {
            strats: [
              {
                id: 12,
                name: `Small Only`,
                time: 243,
                link: 'https://www.youtube.com/embed/SEIvqEuM34A',
                desc: ``,
                source: `rezephos`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 13,
                name: `No Yoshi`,
                time: 263,
                link: 'https://www.youtube.com/embed/mPvT7Y9gmDg',
                desc: `Normally you don't have Yoshi in this category, so just fly over the level.`,
                source: `Bramz`
              },
            ]
          },
          secret: {
            strats: [
              {
                id: 14,
                name: `Dragon Coins`,
                time: 257,
                link: 'https://www.youtube.com/embed/zI72pNOB9UY',
                desc: ``,
                source: `Umari0`
              },
            ]
          }
        }
      },
    ]
  },
  { // Blue Switch Palace
    name: `Blue Switch Palace`,
    id: '121',
    world: 5,
    powerups: ['None'],
    dragoncoins: false,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `Pipe Fly`,
                time: 190,
                link: 'https://www.youtube.com/embed/SSS-m-q8s8w',
                desc: `Alternatively, you can skip the pipe fly. This is a bit slower.`,
                source: `Sten`,
              },
            ],
          },
          secret: null,
        },
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 2,
                name: `No Cape`,
                time: 189,
                link: 'https://www.youtube.com/embed/mg1b7WTVzA4',
                desc: ``,
                source: `Sten`
              },
            ]
          },
          secret: null
        }
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 3,
                name: `Pipe Fly`,
                time: 190,
                link: 'https://www.youtube.com/embed/SSS-m-q8s8w',
                desc: `Alternatively, you can skip the pipe fly. This is a bit slower.`,
                source: `Sten`,
              },
            ],
          },
          secret: null,
        },
      },
    ],
  },
  { // Awesome
    name: `Awesome`,
    id: '12D',
    world: 9,
    powerups: ['Fire'],
    dragoncoins: true,
    categories: [
      {
        title: `96 Exit`,
        exits: {
          normal: {
            strats: [
              {
                id: 1,
                name: `ARK Tutorial`,
                time: null,
                link: 'https://www.youtube.com/embed/Y4yU0bFXq_A',
                desc: ``,
                source: `Bramz`,
              },
              {
                id: 2,
                name: `Flower Grab`,
                time: 261,
                link: 'https://www.youtube.com/embed/K6E-odR-U5U',
                desc: `This is the fastest flower to grab in Special World if you don't do Awesome Reznor Kill, and you'll need it if you go for Groovy Boss Kill.`,
                source: `Sten`,
              },
              {
                id: 3,
                name: `Normal Strat`,
                time: 261,
                link: 'https://www.youtube.com/embed/JCLtVj-EM3M',
                desc: `If you don't go for Groovy Boss Kill and you're struggling with the flower grab strat, you can do this and get flower in Groovy instead.`,
                source: `Sten`,
              },
            ],
          },
          secret: null,
        },
      },
      {
        title: `95 Exit, No Cape`,
        exits: {
          normal: {
            strats: [
              {
                id: 4,
                name: `No Cape, Blue Yoshi`,
                time: 260,
                link: 'https://www.youtube.com/embed/5MWN-x-OSd4',
                desc: `Basically the same as the strat for 96 Exit, but of course there's no cape.`,
                source: `Sten`,
              },
            ],
          },
          secret: null,
        },
      },
      {
        title: `Lunar Dragon`,
        exits: {
          normal: {
            strats: [
              {
                id: 5,
                name: `Flower Grab`,
                time: 261,
                link: 'https://www.youtube.com/embed/AXKNH-4HUgQ',
                desc: `This is the fastest flower grab. If you struggle with this, you can skip it and get a flower in Groovy or Vanilla Dome 1.`,
                source: `Umari0`,
              },
            ],
          },
          secret: null,
        },
      },
    ],
  },
];