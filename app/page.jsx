import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaMapMarkerAlt } from "react-icons/fa"

// components
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Kojima Acupuncture
            </h1>
            <p className="text-accent text-2xl">
              Tadashi Kojima
            </p>
            <p className="text-xs mb-4 ml-4">R. AC (Registered Acupuncturist)</p>
            <p className="max-w-[500px] xl:mx-0 mb-5 text-[#674636]/80">Thank you for visiting our clinic. Here, we create personalized treatment programs tailored to each patient's unique constitution and condition. Our approach integrates Nagano style, Kiiko Matsumoto style, and our own experienced-based methods. We offer a variety of treatments for different symptoms. If you don't see immediate improvement, please don't hesitate to consult with us.</p>
            {/* btn and socials */}
            <div className="w-full flex gap-2">
              <a href="/contact" className="flex flex-col mx-auto xl:mx-0 xl:flex-row items-center gap-8">
                <Button
                  variant="default"
                  size="lg"
                  className="uppercase flex items-center gap-2 mb-5"
                >
                  <span>Book an Appointment</span>
                </Button>
              </a>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Stats />
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
        <div className="w-full h-9 xl:mt-10">
          <div className="flex-1 flex items-center order-1 xl:order-none mb-2">
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-6">
                <a href={`https://www.google.co.jp/maps/place/40+Wynford+Dr+%23301c,+North+York,+ON+M3C+1J5+%E3%82%AB%E3%83%8A%E3%83%80/@43.7242816,-79.3383161,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cd09e766292d:0x55aeb91d5d02a745!8m2!3d43.7242816!4d-79.3357412?hl=ja&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D`} target="_blank" rel="noopener noreferrer" className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#AAB396] text-accent rounded-md flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110">
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>
                </a>
                <div className="flex-1">
                  <p className="text-[#674636]/60">Location</p>
                  <h1 className="text-xl">40 Wynford Drive 301 Toronto, Ontario</h1>
                </div>
              </li>
            </ul>
          </div>
          <Image
            width={2000}
            height={1000}
            src="/assets/building.png"
            quality={100}
            alt="building"
            className="pb-14"
          >
          </Image>
        </div>
      </div>

    </section >
  )
}

export default page