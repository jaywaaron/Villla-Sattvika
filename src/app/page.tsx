import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Rooms from "@/components/Rooms";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Rooms />
        <Location />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
