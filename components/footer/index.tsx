import Container from "@/components/shared/container";
import Logo from "@/components/shared/logo";
import Section from "./components/section";
import Tag from "@/components/ui/tag";

const Footer = () => {
    return ( <footer className="bg-gray-light/10 ">
        <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10 px-5 py-10 lg:p-8 lg:py-20">
            <Logo />
            <Section title="Company" list={['About', 'Carrers', 'Blogs']} />
            <Section title="Contact" list={['Help / FAQ', 'Press']} />
            <Section title="More" list={['Program', 'Plan', 'Method']} />
            <section>
            <h5 className="text-2xl font-semibold text-white mb-5">Popular Tags</h5>
            <div className="flex items-center gap-2 flex-wrap">
                <Tag text="Abs"/>
                <Tag text="Workout"/>
                <Tag text="Nutrition"/>
                <Tag text="Boxing"/>
                <Tag text="Gym"/>
                <Tag text="Facilities" active/> 
                <Tag text="Plans"/>
                <Tag text="Trainers"/>

                </div>
            </section>
        </Container>
        <div className="bg-primary p-5 text-white text-center">
            <h5>&copy; 2023 All Rights Reserved</h5>
        </div>
    </footer> );
}
export default Footer