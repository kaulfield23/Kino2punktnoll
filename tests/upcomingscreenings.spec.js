
import { upcomingScreenings } from "../static/u_screenings"



test("moviepage shows list of screenings", async () => {
const response = await upcomingScreenings()
console.log(upcomingScreenings());
// .get('/')
// .expect(200);
});