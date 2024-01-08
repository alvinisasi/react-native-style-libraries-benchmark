# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo SDK 49 App reproducer to demonstrate the performance difference between popular style libraries and react-native built-in styling.

Tests include React Native [StyleSheet](https://reactnative.dev/docs/stylesheet), [Styled Components](https://github.com/styled-components/styled-components), [Tamagui](https://github.com/tamagui/tamagui), [NativeWind](https://github.com/marklawlor/nativewind), [Emotion](https://github.com/emotion-js/emotion), [Zephyr](https://github.com/FormidableLabs/react-native-zephyr), [Dripsy](https://github.com/nandorojo/dripsy), Gluestack [[1]](https://github.com/gluestack/gluestack-ui) [[2]](https://github.com/gluestack/gluestack-style), [fast-styles](https://github.com/fedemartinm/fast-styles), [Tailwind React Native Classnames(twrnc)](https://github.com/jaredh159/tailwind-react-native-classnames), Shopify's [restyle](https://github.com/Shopify/restyle) and [react-native-unistyles](https://github.com/jpudysz/react-native-unistyles) 

Feel free to fork or PR this repo with improvements or to include other styling libraries.

### ***Note: Test scores may vary between different machines with different hardware***

~~Note: `Tamagui` scores are surprisingly low, I've created a [discussion about it](https://github.com/tamagui/tamagui/discussions/1471)~~
 
#### Note: Tamagui compiler is turned off in DEV mode, production/release performance is greatly improved, it reaches `StyleSheet` levels.

1000 items are rendered in `Array.map` and it's a **basic** test in DEV mode. When more features of each library are added (eg. media queries etc) as your project grows the measurements may vary by a lot.

Read this comment on how to test the performance: https://github.com/styled-components/styled-components/issues/3940#issuecomment-1630244738

![demo.png](assets/demo.png)

Demo video with `TAMAGUI_TARGET=native expo start --no-dev --minify`:


https://github.com/efstathiosntonas/react-native-style-libraries-benchmark/assets/717975/9942825e-2e97-47ac-9311-0df98718b3b1


## Results - Rendering Time for 1000 Empty Views (ms) in release mode

Mac Specs: 
MacBook Pro 2020 Intel Core i5 256GB SSD 8GB RAM\
Simulator: Xiaomi Poco F4

|               | 1   | 2   | 3   | 4   | 5   | 6   | Avg    | % Slowdown |
|---------------|-----|-----|-----|-----|-----|-----|--------|------------|
| NativeWind    | 148 | 154 | 147 | 150 | 150 | 150 | 149.83 |            |
| NativeWind v4 | 126 | 94  | 190 | 190 | 191 | 208 | 166.5  |            |
| React Native  | 95  | 101 | 93  | 95  | 92  | 107 | 97.16  |            |
| Unistyles     | 94  | 109 | 94  | 95  | 99  | 88  | 96.5   |            |



