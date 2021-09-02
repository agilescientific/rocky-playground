// Author: Kevin Scott
// Source: https://github.com/thekevinscott/make_moons
// Licence: MIT

// MIT License

// Copyright (c) 2018 Kevin Scott

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const K = 2;
const A = 7 * K;

const parabola = ({ a, h, k, x }) => (a * Math.pow((x - h), 2)) + k;

const getRandom = max => (Math.random() * max) - (max / 2);

const getRandomPosition = (min, max) => min + (Math.random() * (max - min));

const getDot = ({
  fn,
  noise,
  range,
}) => {
  const x = getRandomPosition(range[0], range[1]);
  const radius = getRandom(noise);
  const theta = getRandom(Math.PI * 2);

  return {
    x: x + (Math.sin(theta) * radius),
    y: fn(x) + (Math.cos(theta) * radius),
  };
}

const getDotType = {
  pos: (noise, range = [0, 2 / 3]) => getDot({
    fn: x => parabola({ a: -1 * A, h: 1 / 3, k: K - 1, x}),
    noise,
    range,
  }),
  neg: (noise, range = [1 / 3, 1]) => getDot({
    fn: x => parabola({ a: A, h: 2 / 3, k: -1, x}),
    noise,
    range,
  }),
}

const getRandomType = () => Math.random() > 0.5 ? 'pos' : 'neg';

const getData = ({
  type,
  noise = 1,
  n_samples = 200,
  range,
}) => {
  const dots = [];
  if (!type) {
    type = getRandomType();
  }

  for (let i = 0; i < n_samples; i++) {
    dots.push(getDotType[type](noise, range));
  }
  return dots;
};

const make_moons = (props) => getData({ ...props });

export default make_moons;