import playingWithDigits from "./playing-with-digits-kata";

// test('finds the correct number', () => {
//     expect(playingWithDigits(695, 2).toBe(2))
// })

test("returns the correct k or -1", () => {
  expect(playingWithDigits(695, 2)).toBe(2);
  expect(playingWithDigits(46288, 3)).toBe(51);
  expect(playingWithDigits(92, 2)).toBe(-1);
});
