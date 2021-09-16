# Rocky playground

This app is one of Agile's [geosci.ai](https://geosci.ai) experiments.

The app is currently deployed on AWS Amplify — [check it out!](https://playground.geosci.ai).

## About

Rocky Playground is an interactive visualization of neural networks, written in
TypeScript using d3.js. It is a fork of the [Google Neural Network Playground](https://playground.tensorflow.org/),
and also incorporates code from [David Cato's fork](https://github.com/dcato98/playground) of the same project.

Some examples of what has changed:

- Real-world datasets related to geological tasks.
- New activation functions including ELU, Leaky ReLU, and Swish.
- Some new synthetic datasets: moons and linear (from `matplotlib`), and diagonal (to illustrate overfitting).
- You can change regularization on the fly.
- You can upload your own datasets.
- Some bug-fixes and cosmetic changes.


## Contributing

Want to help? We'd love to have your involvement! If you'd like to contribute, take a look at the [contribution guidelines](CONTRIBUTING.md).


## Development

You will need to [install Node for your system](https://nodejs.org/en/download/).

Then, to run the visualization locally, run:
- `npm i` to install dependencies
- `npm run build` to compile the app and place it in the `dist/` directory
- `npm run serve` to serve from the `dist/` directory and open a page on your browser.

For a fast edit-refresh cycle when developing run `npm run serve-watch`.
This will start an http server and automatically re-compile the TypeScript,
HTML and CSS files whenever they change.
