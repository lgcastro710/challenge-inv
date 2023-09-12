
import { CARDS } from "../constants";
import { MyCard } from "./MyCard";
import { useState } from "react";
import ModalSearch from "./ModalSearch";

const Cards = () => {

    const [value, setValue] = useState('')
    const [showModal, setShowModal] = useState(false)

    return (
        <section className="bg-[#F8F9FC]">
            <div className="max-w-[1380px] m-auto p-10 ">
                <h3 className="text-[#121a26] font-medium text-[24px] px-6">Hear Ticket Volume, our podcast of ITSM world</h3>
                <div className="block lg:flex justify-between">
                    {CARDS.map(card => (
                        <MyCard handleClick={() => setShowModal(true)} card={card} key={card.id} />
                    ))}
                </div>
            </div>
            {showModal && <ModalSearch searchValue={value} setValue={setValue} onClose={setShowModal} />}
        </section>
    )
}

export default Cards
