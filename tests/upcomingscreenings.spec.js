import { jest } from "@jest/globals";
import { filterOneScreening } from "../src/one_screeningFilter.js"

//mock time to compare with mock api
beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2022, 1, 15));
});

afterEach(() => {
    jest.clearAllTimers();
});

test("correct respons from api", async () => {
    const screenings = await filterOneScreening(10, api.fakeScreenings);
    // console.log("screenings.data.length: " + screenings.data.length);
    expect(screenings.data[0].room).toBeTruthy();
    expect(screenings.data.length).toBeGreaterThan(0);
    expect(screenings.data[0].room.includes('Stora salongen')).toBeTruthy();

});

test("upcomings screenings", async () => {
    const screenings = await filterOneScreening(10, api.fakeScreenings);
    const toBecomeFakedTime = new Date();

    screenings.data.forEach((screening) => {
        const timeFromMockedApi = new Date(screening.time);
        expect(timeFromMockedApi > toBecomeFakedTime).toBeTruthy();
    })
});

// mock api
const api = {
    async fakeScreenings() {
        return [
            {
                id: 1,
                attributes: {
                    start_time: "2022-01-24T12:00:00.000Z",
                    room: "Stora salongen",
                    createdAt: "2022-01-23T10:31:58.536Z",
                    updatedAt: "2022-01-23T10:31:58.536Z"
                }
            },
            {
                id: 2,
                attributes: {
                    start_time: "2022-02-24T17:00:00.000Z",
                    room: "Stora salongen",
                    createdAt: "2022-01-23T10:31:59.065Z",
                    updatedAt: "2022-01-23T10:31:59.065Z"
                }
            },
            {
                id: 3,
                attributes: {
                    start_time: "2022-02-14T19:00:00.000Z",
                    room: "Stora salongen",
                    createdAt: "2022-01-23T10:31:59.612Z",
                    updatedAt: "2022-01-23T10:31:59.612Z"
                }
            },
        ]
    }
}
