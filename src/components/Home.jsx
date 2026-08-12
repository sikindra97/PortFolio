const Home = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100">    
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
                Hi! I'm a software developer specializing in building exceptional digital experiences. Explore my projects and get to know more about me.

            </p>
            <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
                View My Projects
            </a>
        </section>
    );
}
export default Home;
