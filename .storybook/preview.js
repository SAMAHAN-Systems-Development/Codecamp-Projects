import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import "../styles/globals.css";
import Image from "next/image";

const NextImageDefualt = Image.default;

Object.defineProperty(Image, "default", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (props) => <NextImageDefualt {...props} unoptimized />,
});


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
}

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

export const decorators = [
  (Story) => (
    <body>
      <Story />
    </body>
  ),
];