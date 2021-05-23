import { sendMarker } from "."
import axios from 'axios';
import { deleteMarker } from "./HolidayAPI";

jest.mock('axios');

describe('HolidayAPI', () => {
    beforeEach(() => jest.resetAllMocks())

    let data =  {
        title: 'Holland',
        desc: 'Amsterdam trip',
        position_lat: 52.379189,
        position_long: 4.899431,
        holiday_id: 3,
      }

    it('posts markers data', async () => { 
        // axios.post.mockImplementation(() => Promise.resolve(data))
        return sendMarker(data).then(data => {expect(data).toBe(data);})
    });
})