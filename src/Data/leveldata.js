// Level Template
// {
//   name: ``,
//   id: '',
//   world: ,
//   image: '',
//   powerups: [],
//   dragoncoins: ,
//   categories: [
//      {
//        title: ``,
//        exits: {
//          normal: {
//            strats: [
//              {
//                id: ,
//                name: ``,
//                time: ,
//                link: '',
//                desc: ``,
//                source: ``
//              }
//            ]
//          },
//          secret: {}
//        }
//      },
//   ]
// },

export default [
  {
    name: `Vanilla Dome 1`,
    id: '11A',
    world: 3,
    image: null,
    powerups: ['Fire', 'Cape (NTSC-U)'],
    dragoncoins: true,
    categories: 
      [
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
                  source: `Lui`
                },
                {
                  id: 4,
                  name: `Easy`,
                  time: 372,
                  link: 'https://www.youtube.com/embed/BRiMrDl9y4U',
                  desc: ``,
                  source: `Sten`
                },
                {
                  id: 5,
                  name: `No Wings`,
                  time: 343,
                  link: 'https://www.youtube.com/embed/pghNLJ3tqlM',
                  desc: `Use this strat if you aren't going for wings just yet.`,
                  source: `Sten`
                },
              ]
            },
            secret: {
              strats: [
                {
                  id: 6,
                  name: `Normal Strat`,
                  time: 382,
                  link: 'https://www.youtube.com/embed/ovyIEN6PHqc',
                  desc: ``,
                  source: `Sten`
                },
                {
                  id: 7,
                  name: `Fast Strat`,
                  time: 383,
                  link: 'https://www.youtube.com/embed/cxCzl9Xls3E',
                  desc: `The turnaround here is very precise, and it is more likely that you will lose time doing it.`,
                  source: `LostC0re`
                },
              ]
            }
          }
        },
        {
          title: `All Castles`,
          id: 'ac',
          exits: {
            normal: {
              strats: []
            },
            secret: null
          }
        },
        {
          title: `No Starworld`,
          id: 'nsw',
          exits: {
            normal: null,
            secret: {
              strats: []
            }
          }
        },
        {
          title: `95 Exit, No Cape`,
          id: '95nc',
          exits: {
            normal: {
              strats: []
            },
            secret: {
              strats: []
            }
          }
        },
        {
          title: `All Castles, No Cape`,
          id: 'acnc',
          exits: {
            normal: {
              strats: []
            },
            secret: null
          }
        },
        {
          title: `No Cape, No Starworld`,
          id: 'ncnsw',
          exits: {
            normal: null,
            secret: {
              strats: []
            }
          }
        },
        {
          title: `All Castles, Small Only`,
          id: 'acso',
          exits: {
            normal: {
              strats: []
            },
            secret: null
          }
        },
        {
          title: `No Starworld, Small Only`,
          id: 'nswso',
          exits: {
            normal: null,
            secret: {
              strats: []
            }
          }
        },
        {
          title: `Small Only`,
          id: 'small',
          exits: {
            normal: null,
            secret: {
              strats: []
            },
          }
        },
        {
          title: `Lunar Dragon`,
          id: 'lunar_d',
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
]