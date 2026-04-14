import Mission from "../components/Mission";
import Team from "../components/Team";

const About = () => {
    return (
      <main>
        {/* Simple Hero */}
        <div className="bg-[#1B263B] py-24 text-center">
          <h1 className="text-white text-5xl font-black mb-4">About Us</h1>
        
        </div>
  
        <Mission />
        <Team />
        
        {/* Quick CTA */}
        <section className="bg-[#1B263B] py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-6">Ready to start your journey with us?</h2>
            <button className="bg-white cursor-pointer font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              <a href="/contact">Enroll Now</a>
              
            </button>
          </div>
        </section>
      </main>
    );
  };
  
  export default About;