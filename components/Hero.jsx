const Hero = () => {
    return (  
        // <!-- Hero -->
        <section className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 animate-gradient-x border-b border-blue-500 ">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
          >
            <div className="text-center">
              <h1
                className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl py-5"
              >
                Professional Music Teachers
              </h1>
              <p className="my-4 text-xl text-white">
                Find your location & instrument type.
              </p>
              <p className="my-4 text-xl text-white">
                Discover the perfect teacher for your lessons.
              </p>
            </div>
            {/* <!-- Form Component --> */}
            <form
              className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
            >


              {/* TODO: Correct Errors */}
              <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0 py-5">
                <label htmlFor="location" className="sr-only">Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter Location (City, State, Zip, etc"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-2/5 md:pl-2">
                <label htmlFor="instrument-type" className="sr-only">Instrument Type</label>
                <select
                  id="instrument-type"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                >
                 <option value="All">All</option>

                {/* <!-- Orchestra Instruments --> */}
                <option value="Violin">Violin</option>
                <option value="Viola">Viola</option>
                <option value="Cello">Cello</option>
                <option value="Double Bass">Double Bass</option>
                <option value="Flute">Flute</option>
                <option value="Oboe">Oboe</option>
                <option value="Clarinet">Clarinet</option>
                <option value="Bassoon">Bassoon</option>
                <option value="Trumpet">Trumpet</option>
                <option value="Trombone">Trombone</option>
                <option value="French Horn">French Horn</option>
                <option value="Tuba">Tuba</option>
                <option value="Percussion">Percussion</option>
                <option value="Harp">Harp</option>

                {/* <!-- Popular Instruments for Country --> */}
                <option value="Acoustic Guitar">Acoustic Guitar</option>
                <option value="Banjo">Banjo</option>
                <option value="Mandolin">Mandolin</option>
                <option value="Fiddle">Fiddle</option>
                <option value="Pedal Steel Guitar">Pedal Steel Guitar</option>
                <option value="Harmonica">Harmonica</option>

                {/* <!-- Popular Instruments for Rock --> */}
                <option value="Electric Guitar">Electric Guitar</option>
                <option value="Bass Guitar">Bass Guitar</option>
                <option value="Keyboard">Keyboard</option>
                <option value="Synthesizer">Synthesizer</option>

                {/* <!-- Popular Instruments for Jazz --> */}
                <option value="Saxophone">Saxophone</option>
                <option value="Jazz Piano">Jazz Piano</option>
                <option value="Jazz Guitar">Jazz Guitar</option>

                {/* <!-- Popular Instruments for Classical --> */}
                <option value="Piano">Piano</option>
                <option value="Organ">Organ</option>
              
                            </select>
              </div>
              <button
                type="submit"
                className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Search
              </button>
            </form>
          </div>
        </section>
    );
}
 
export default Hero;