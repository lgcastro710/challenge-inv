import { CARDS, POSTS, CATEGORIES } from "../constants";
import { Chip, Typography } from "@material-tailwind/react";
import { MyCard } from "./MyCard";
import { MyPost } from "./MyPost";
import InputSearch from "./InputSearch"
import { useEffect, useState } from "react";
import "./../styles/header.css"

const ModalSearch = ({ searchValue, onClose, setValue, defaultCategories }) => {

    const [categoriesSelecte, setCategoriesSelecte] = useState(defaultCategories)

    const [cardsFiltered, setCardsFiltered] = useState([])

    const [postsFiltered, setPostsFiltered] = useState([])

    const filterCards = () => {
        const filterText = CARDS.filter((card) => card.titulo?.toLowerCase().includes(searchValue.toLowerCase()))

        const filtercategory = CARDS.filter(card =>
            card.catId.some(categoria => categoriesSelecte?.includes(categoria))
        );

        const cards = filtercategory.length
            ? filterText.filter(elemento => filtercategory?.includes(elemento))
            : filterText
        setCardsFiltered(cards)
    }
    const filterPosts = () => {
        const filterText = POSTS.filter((post) => post.titulo?.toLowerCase().includes(searchValue.toLowerCase()))

        const filtercategory = POSTS.filter(post =>
            post.catId.some(categoria => categoriesSelecte?.includes(categoria))
        );

        const posts = filtercategory.length
            ? filterText.filter(elemento => filtercategory?.includes(elemento))
            : filterText
        setPostsFiltered(posts)
    }

    const addCategoryFilter = (id) => {
        const categories = [...categoriesSelecte]
        if (!categories?.includes(id)) {
            categories.push(id)
            setCategoriesSelecte(categories)
        }

    }
    const removeCategoryFilter = (id) => {
        const categories = [...categoriesSelecte.filter((categoryId) => {
            return id !== categoryId
        })]

        setCategoriesSelecte(categories)
    }

    useEffect(() => {
        filterCards()
        filterPosts()
    }, [categoriesSelecte, searchValue])


    return (
        <div className="fixed z-50 top-[80px] px-5 pb-20 pt-12 lg:p-20 bg-[#fffffff2] w-full h-full overflow-auto left-0 right-0">
            <div className="block lg:flex max-w-[1380px] m-auto lg:justify-center justify-start items-center w-auto h-auto flex-input">
                <InputSearch
                    value={searchValue}
                    setValue={setValue}
                    handleClick={() => {
                        filterCards()
                        filterPosts()
                    }}
                />
                <div className="block lg:flex items-center pl-0 lg:pl-8">
                    <p>Categorias:</p>
                    {CATEGORIES.map(category => (
                        <Chip
                            key={category.id}
                            style={{ backgroundColor: categoriesSelecte?.includes(category.id) ? "#08A1FF" : category.bgColor }}
                            onClick={() => addCategoryFilter(category.id)}
                            value={
                                <div className="flex justify-between items-center">
                                    <Typography
                                        variant="small"
                                        className="font-medium capitalize leading-none text-[#026AA2]"
                                    >
                                        {category.name}
                                    </Typography>
                                    <button onClick={() => removeCategoryFilter(category.id)} className="mx-2">
                                        {categoriesSelecte.includes(category.id) && <button onClick={() => removeCategoryFilter(category.id)} className="mx-2">
                                            <i class="material-icons">
                                                close
                                            </i>
                                        </button>
                                        }
                                    </button>
                                </div>

                            }
                            className="rounded-full flex w-fit h-8 pr-0 mb-3 lg:mb-0 bg-[#256ba529] mx-1 cursor-pointer"

                        />
                    ))}
                </div>
            </div>
            <div className="max-w-[1380px] m-auto pt-8 mb-8">
                <h3 className="text-[#121a26] font-medium text-[24px] px-6 pb-8">Recent blog posts</h3>
                <div className="block lg:grid lg:grid-cols-2 justify-start">
                    {postsFiltered.map(post => (
                        <MyPost post={post} />
                    ))}
                </div>
            </div>
            <div className="max-w-[1380px] m-auto mb-10">
                <h3 className="text-[#121a26] font-medium text-[24px] px-6">Hear Ticket Volume, our podcast of ITSM world</h3>
                <div className="block lg:flex justify-start gap-24">
                    {cardsFiltered.map(card => (
                        <MyCard card={card} />
                    ))}
                </div>
            </div>

            <button onClick={() => {
                onClose(false)
                setValue('')
            }}
                className="absolute top-2 lg:top-3 right-5 lg:right-20 bg-red-600 rounded-2xl cursor-pointer px-[10px] flex items-center text-white"
            >
                <i class="material-icons">
                    close
                </i>
            </button>
        </div>
    )
}

export default ModalSearch
