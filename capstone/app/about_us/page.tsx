import Image from "next/image";
import meal from "../assets/meal.jpg"
import meal2 from "../assets/meal2.jpg"

const AboutUs = () => {
  return (
    <section className="bg-yellow-800 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">About Us</h2>
        <p className="text-4xl">Little Lemon</p>
        <p className="text-2xl text-yellow-200 mb-8">Chicago</p>
        <p className="mt-2 text-[#d5d5d5]">We are a family-owned Mediterranean restaurant which brings the best restaurant experience to you.</p>
        <p className="mt-2 text-[#d5d5d5]">We always provide you with the best service and our staff is very polite.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <Image src={meal} alt="Meal image" className="h-32 w-64"></Image>
          <Image src={meal2} alt="Another meal image" className="bg-gray-300 h-32 w-64"></Image>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
