import { FC } from 'react';

interface SectionProps{
    title: string;
    list: string[];
}


const Section: FC<SectionProps> = ({ title, list }) => {
    return ( <section>
        <h5 className="text-2xl font-semibold text-white mb-5">{title}</h5>
        <ul>
            {list.map((link, index) => (
                <li key={index} className="mb-2">
                {link}
            </li>
            ))}
        </ul>
    </section> );
}
export default Section