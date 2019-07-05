// import { generateWorkers } from '../../utilities';
import { shuffle } from '../../utilities';

const initialState = generateStartingWorkers();

export default function(state = initialState, action) {
  return state;
}

function generateStartingWorkers() {
  const scientistEmoji = ["👩‍🔬", "👩🏻‍🔬", "👩🏼‍🔬", "👩🏽‍🔬", "👩🏾‍🔬", "👩🏿‍🔬", "👨‍🔬", "👨🏻‍🔬", "👨🏼‍🔬", "👨🏽‍🔬", "👨🏾‍🔬", "👨🏿‍🔬"];
  const finalScientistEmoji = shuffle(scientistEmoji).slice(0,3);
  let scientists = finalScientistEmoji.map((emoji, i) => {
    return {
      icon: emoji,
      name: `Scientist, Level ${i+1}`
    }
  })

  const workerEmoji = ["👩‍💼", "👩🏻‍💼", "👩🏼‍💼", "👩🏽‍💼", "👩🏾‍💼", "👩🏿‍💼", "👨‍💼", "👨🏻‍💼", "👨🏼‍💼", "👨🏽‍💼", "👨🏾‍💼", "👨🏿‍💼"];
  const finalWorkerEmoji = shuffle(workerEmoji).slice(0,4);
  let workers = finalWorkerEmoji.map((emoji, i) => {
    return {
      icon: emoji,
      name: "Worker"
    }
  });

  let allWorkers = scientists.concat(workers);
  return allWorkers;
}
