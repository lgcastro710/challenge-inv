
import { useEffect } from "react";
import { CARDS } from "../constants";
import { MyCard } from "./MyCard";


const Cards = ({ setDefaultCategories }) => {

    return (
        <section className="bg-[#F8F9FC]">
            <div className="max-w-[1380px] m-auto p-10 ">
                <h3 className="text-[#121a26] font-medium text-[24px] px-6">Hear Ticket Volume, our podcast of ITSM world</h3>
                <div className="block lg:flex justify-between">
                    {CARDS.map(card => (
                        <MyCard card={card} key={card.id} setDefaultCategories={setDefaultCategories} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards
