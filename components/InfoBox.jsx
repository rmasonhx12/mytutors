import Link from "next/link";

const InfoBox = () => {
    return ( 
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
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
            </div>
    );
}
 
export default InfoBox;