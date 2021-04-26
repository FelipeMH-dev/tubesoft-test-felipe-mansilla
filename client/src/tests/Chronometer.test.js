import React from "react";
import { shallow } from "enzyme";
import Chronometer from "../components/Chronometer/main";

jest.setTimeout(10000);
describe("Test Chronometer", () => {
  let wrapper = shallow(<Chronometer />);

  test("Snapshot <Chronometer/>", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("test start", async () => {
    wrapper.find("#start").simulate("click");

    await new Promise((res) =>
      setTimeout(() => {
        const counterText = wrapper.find("h2").text().trim();
        console.log("Start: ", counterText);
        expect(counterText).not.toBe("00 : 00 : 00");
        res();
      }, 1000)
    );
  });

  test("test pause", async () => {
    await new Promise((res) =>
      setTimeout(() => {
        wrapper.find("#pause").simulate("click");
        const counterText = wrapper.find("h2").text().trim();
        console.log("Pause in: ", counterText);
        res();
      }, 3000)
    );

    await new Promise((res) =>
      setTimeout(() => {
        const counterText = wrapper.find("h2").text().trim();
        console.log("Check pause after two seconds: ", counterText);
        expect(counterText).toBe("00 : 00 : 04");
        res();
      }, 2000)
    );
  });

  test("test finish", async () => {
    const counterText = wrapper.find("h2").text().trim();
    console.log("Time before finish: ", counterText);
    wrapper.find("#finish").simulate("click");
    await new Promise((res) =>
      setTimeout(() => {
        const counterText = wrapper.find("h2").text().trim();
        console.log("Finish and Reset: ", counterText);
        expect(counterText).toBe("00 : 00 : 00");
        res();
      }, 1000)
    );
  });
});
