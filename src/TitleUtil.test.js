import { getTitle } from "./TitleUtil";

it("should return a title", () => {
    const title = getTitle();

    expect(title).toEqual("Learn React");
});
