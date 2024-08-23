

import InfoBox from "./InfoBox";

const InfoBoxes = () => {
    return ( 
        <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

            <InfoBox heading = 'Students' buttonInfo={{
              text: 'Browse Musicians',
              href: '/musicians',
              backgroundColor:'bg-black'
            }}>
            Find your instrument. Bookmark instrument and contact
            music teachers.
              </InfoBox>
            <InfoBox heading = 'Music Teachers' backgroundColor='bg-blue-100' buttonInfo={{
              text: 'Add Musician',
              href: '/musicians/add',
              backgroundColor:'bg-black'
            }} >
            List your studio and reach potential students. Teach at your
                studio or online.
              </InfoBox>





            {/* First Info Box replaced */}
           {/*  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Students</h2>
              <p className="mt-2 mb-4">
                Find your instrument. Bookmark instrument and contact
                music teachers.
              </p>
              <Link
                href="/musicians"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Musicians
              </Link>
            </div> */}
            {/* Second Info Box Replaced */}
            {/* <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Music Teachers</h2>
              <p className="mt-2 mb-4">
                List your studio and reach potential students. Teach at your
                studio or online.
              </p>
              <Link
                href="/musicians/add"
                className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
              >
                Add Musician
              </Link>
            </div> */}
          </div>
        </div>
      </section>
     );
}
 
export default InfoBoxes;