# Rocky playground

Rocky playground is an interactive visualization of neural networks, written in
TypeScript using d3.js. It is a clone of the [Google TensorFlow Playground](https://playground.tensorflow.org/),
with some new datasets and enhanced options:

- Real-world datasets related to geological tasks.
- Three new activation functions: ELU, Leaky ReLU, and Swish.
- Some new synthetic datasets: moons and linear (from `matplotlib`), and diagonal (to illustrate overfitting).
- A couple of small bug-fixes.

**If you'd like to contribute, be sure to review the [contribution guidelines](CONTRIBUTING.md).**

## Development

You will need to [install Node for your system](https://nodejs.org/en/download/).

To run the visualization locally, run:
- `npm i` to install dependencies
- `npm run build` to compile the app and place it in the `dist/` directory
- `npm run serve` to serve from the `dist/` directory and open a page on your browser.

For a fast edit-refresh cycle when developing run `npm run serve-watch`.
This will start an http server and automatically re-compile the TypeScript,
HTML and CSS files whenever they change.
