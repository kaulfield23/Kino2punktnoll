import { jest } from "@jest/globals";
import { getRating } from "../src/getRating.js"
import api from '../src/api'

test('get the right average of mocked api', async() => {

    const mock = jest.spyOn(api, 'fetchReviews');
    mock.mockImplementation(() => [{
            "id": 57,
            "attributes": {
                "comment": "This is also great!",
                "rating": 1,
                "author": "Richard",
                "verified": null,
                "createdAt": "2022-01-27T13:25:43.197Z",
                "updatedAt": "2022-01-27T13:25:43.197Z"
            }
        },
        {
            "id": 57,
            "attributes": {
                "comment": "This is also great!",
                "rating": 2,
                "author": "Richard",
                "verified": null,
                "createdAt": "2022-01-27T13:25:43.197Z",
                "updatedAt": "2022-01-27T13:25:43.197Z"
            }
        },
        {
            "id": 57,
            "attributes": {
                "comment": "This is also great!",
                "rating": 3,
                "author": "Richard",
                "verified": null,
                "createdAt": "2022-01-27T13:25:43.197Z",
                "updatedAt": "2022-01-27T13:25:43.197Z"
            }
        },
        {
            "id": 57,
            "attributes": {
                "comment": "This is also great!",
                "rating": 4,
                "author": "Richard",
                "verified": null,
                "createdAt": "2022-01-27T13:25:43.197Z",
                "updatedAt": "2022-01-27T13:25:43.197Z"
            }
        },
        {
            "id": 57,
            "attributes": {
                "comment": "This is also great!",
                "rating": 11,
                "author": "Richard",
                "verified": null,
                "createdAt": "2022-01-27T13:25:43.197Z",
                "updatedAt": "2022-01-27T13:25:43.197Z"
            }
        },
        {
            "id": 57,
            "attributes": {
                "comment": "This is also great!",
                "rating": 21,
                "author": "Richard",
                "verified": null,
                "createdAt": "2022-01-27T13:25:43.197Z",
                "updatedAt": "2022-01-27T13:25:43.197Z"
            }
        },
    ]);

    const rating = await getRating();

    expect(rating).toEqual(7);
});