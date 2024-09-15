import { Button } from "@/components/ui/button"

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
            <p className="text-xs mb-4 ml-4">R. AC (Registerd Acupuncturist)</p>
            <p className="max-w-[500px] mb-5 text-[#674636]/80">Thank you for visiting our clinic. Here, we create personalized treatment programs tailored to each patient's unique constitution and condition. Our approach integrates Nagano style, Kiiko Matsumoto style, and our own experienced-based methods. We offer a variety of treatments for different symptoms. If you don't see immediate improvement, please don't hesitate to consult with us.</p>
            {/* btn and socials */}
            <a href="/contact" className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="default"
                size="lg"
                className="uppercase flex items-center gap-2 mb-5"
              >
                <span>Book an Appointment</span>
              </Button>
            </a>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Stats />
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>

    </section >
  )
}

export default page