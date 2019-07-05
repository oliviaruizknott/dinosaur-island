import { shuffle, uniqueId } from '../../utilities';

// This looks something like:
//   workers: {
//     yB9zsmlDa: {
//       icon: '👨🏽',
//       title: 'Scientist, Level 1',
//       task: null
//     },
//    ...
//     pGvdfSIIm7: {
//       icon: '👨🏾',
//       title: 'Worker',
//       task: null
//     }
//   }
const initialState = generateStartingWorkers();

export default function(state = initialState, action) {
  return state;
}

// Functions

function generateStartingWorkers() {
  // Make an array of 3 scientists with random emoji and associated starting data
  const scientistEmoji = ["👩‍🔬", "👩🏻‍🔬", "👩🏼‍🔬", "👩🏽‍🔬", "👩🏾‍🔬", "👩🏿‍🔬", "👨‍🔬", "👨🏻‍🔬", "👨🏼‍🔬", "👨🏽‍🔬", "👨🏾‍🔬", "👨🏿‍🔬"];
  const finalScientistEmoji = shuffle(scientistEmoji).slice(0,3);
  let scientists = finalScientistEmoji.map((emoji, i) => {
    return {
      icon: emoji,
      title: `Scientist, Level ${i+1}`,
      task: null
    }
  })

  // Make an array of 4 workers with random emoji and associated starting data
  const workerEmoji = ["👩‍💼", "👩🏻‍💼", "👩🏼‍💼", "👩🏽‍💼", "👩🏾‍💼", "👩🏿‍💼", "👨‍💼", "👨🏻‍💼", "👨🏼‍💼", "👨🏽‍💼", "👨🏾‍💼", "👨🏿‍💼"];
  const finalWorkerEmoji = shuffle(workerEmoji).slice(0,4);
  let workers = finalWorkerEmoji.map((emoji, i) => {
    return {
      icon: emoji,
      title: "Worker",
      task: null
    }
  });

  // Combine these two arrays, then turn them into a hash with unique
  // identifiers for keys
  let allWorkers = {}
  scientists.concat(workers).forEach((worker) => {
    allWorkers[uniqueId()] = worker;
  })

  return allWorkers;
}
