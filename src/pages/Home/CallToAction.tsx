import { Button } from '@/components/ui/button'
import * as Icons from '@/assets/icons'

export default function CallToAction() {
  return (
    <section className="container items-center py-16 flex flex-col gap-6 relative">
      <div className="flex md:flex-row flex-col items-center gap-4 md:gap-8 w-full">
        <div className="flex gap-4 items-center w-full md:min-w-[480px]">
          <Icons.MKMotoBox.MK className="min-w-12 md:block hidden" />
          <div className="flex flex-col gap-1">
            <h3 className="text-foundation-orange-300 text-2xl font-semibold">
              Que tal vender através da MK?
            </h3>
            <p className="text-white body body-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              repellendus non dicta pariatur
            </p>
          </div>
        </div>
        <div className="md:block hidden h-px bg-foundation-orange-300 w-full" />
        <Button variant="primary" className="text-black w-full md:w-auto">
          Quero saber mais!
        </Button>
      </div>
    </section>
  )
}
