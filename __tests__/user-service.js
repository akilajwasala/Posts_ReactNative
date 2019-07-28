import {
    getUserAsync
} from '../src/services';

const mockuserjson = {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}


test('getUserAsync()', async () => {
    try {
        const users = await getUserAsync();
        //is array of object
        expect(typeof users).toEqual('[object Array]');

        //check object is matching
        expect(users[0]).toMatchObject(mockuserjson)
    } catch (error) {

    }
});