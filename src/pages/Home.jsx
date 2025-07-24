import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 to-indigo-500 text-white px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">BucketList</h1>
      <p className="text-lg sm:text-xl max-w-xl mb-8">
        Plan your biggest goals and dreams in one place. Start adding items to your personal bucket list and make them happen.
      </p>
      <Link
        to="/list"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-100 transition"
      >
        Start Planning →
      </Link>
    </section>
  );
};

export default Home;
