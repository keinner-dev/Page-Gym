import Container from "@/components/shared/container";
import Title from "@/components/ui/title";
import ButtonPrimary from "./ui/button-primary";
import Image from "next/image";


const About = () => {
    return ( <section id="about" className="min-h-screen flex items-center justify-center">
        <Container>
            <Title title="Why Join With" titlePrimary="Us?" />
            <div className="flex items-center justify-between gap-10">
                <section className="flex-1 flex flex-col items-center gap-8">
                    <ul className="space-y-4 text-xl">
                        <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4">Best Gym</li>
                        <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4">Experts Coach</li>
                        <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4">Flexible Workout Time</li>
                        <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4">Good Workout Time</li>
                        <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4">Consultation Whith Experts</li>
                    </ul>
                    <ButtonPrimary type="button" text="See More Benifits"/>
                </section>
                <section className="flex-1 relative ">
                    <div className="sm:absolute -top-40 left-80">
                    <div className="relative w-48 h-72">
                    <Image src="/images/trainer-1.png" alt="Trainer" fill className="object-cover rounded-xl" 
                    />
                    </div>
                    
                    <div className="sm:absolute -top-10 right-60">

                    <div className="relative w-48 h-72">
                    <Image src="/images/trainer-2.png" alt="Trainer" fill className="object-cover rounded-xl" />
                    </div>
                    </div>

                    <div className="sm:absolute top-40 left-40">

                    <div className="relative w-64 h-48">
                    <Image src="/images/trainer-3.png" alt="Trainer" fill className="object-cover rounded-xl" />
                    </div>
                    </div>

                    <div className="sm:absolute -top-40 -right-60">

                    <div className="relative w-64 h-48">
                    <Image src="/images/trainer-4.png" alt="Trainer" fill className="object-cover rounded-xl" />
                    </div>
                    </div>

                    </div>
                </section>
            </div>
        </Container>
    </section> 
  );
}
export default About;