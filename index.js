const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Ratchet', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Ironhide', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = robots.map((alliance, i) => {
  if (knownDecepticons.includes(robots[i]["name"])) {
      return Object.assign({}, alliance, {alliance: "decepticon"})
    } else {
      return Object.assign({}, alliance, {alliance: "autobot"})
    }
  })

var coloredZebraStripes = zebraStripes.map((color, i) => {
  if (i % 2 == 0) {
      return Object.assign({}, color, {color: "black"})
    } else {
      return Object.assign({}, color, {color: "white"})
    }
  })
