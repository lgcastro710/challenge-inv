import { CATEGORIES } from "../constants";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from "@material-tailwind/react";

export const MyCard = ({ card, setDefaultCategories }) => {

  const addCategories = (categoryId) => {
    console.log(setDefaultCategories)
    setDefaultCategories && setDefaultCategories([categoryId])
  }
  const getCategoriColor = (id) => {
    const categorie = CATEGORIES.find(categorie => categorie.id === id)
    return categorie.color
  }

  const getCategoriBgColor = (id) => {
    const categorie = CATEGORIES.find(categorie => categorie.id === id)
    return categorie.bgColor
  }
  const getCategoriName = (id) => {
    const categorie = CATEGORIES.find(categorie => categorie.id === id)
    return categorie.name
  }
  return (
    <Card className="mt-3 w-auto lg:w-96 bg-transparent shadow-none">
      <CardHeader color="blue-gray" className="relative p-5 bg-transparent shadow-none">
        <img
          src={card.imgCard}
          alt="card-image"
          className="rounded-lg h-48 lg:h-56 w-full"
        />
      </CardHeader>
      <CardBody className="py-2 w-52 max-sm:w-80 lg:w-full">

        <Typography key={card.id} variant="h5" color="blue-gray" className="mb-2 text-[#256ba5] font-medium text-[14px]">
          {card.breadcrumbs}
        </Typography>

        <Typography variant="h3" color="blue-gray" className="mb-2 text-[#121a26] cursor-pointer font-medium text-[28px] flex items-start justify-between">
          {card.titulo}
          <i className="material-icons rotate-180 text-[#418FDE] mt-2">transit_enterexit</i>
        </Typography>
        <Typography className="text-[#687382] font-normal text-[16px]">
          {card.parrafo}

        </Typography>

      </CardBody>
      <CardFooter className="pt-2 flex">
        {card.catId.map(id => (
          <button onClick={() => addCategories(id)}>
            <Chip
              style={{ backgroundColor: getCategoriBgColor(id) }}
              value={
                <Typography
                  style={{ color: getCategoriColor(id) }}
                  variant="small"
                  className="font-medium capitalize leading-none text-[#256BA5]"
                >
                  {getCategoriName(id)}
                </Typography>
              }
              className="rounded-full w-fit py-1.5 bg-[#256ba529] mr-2"
            />
          </button>
        ))}
      </CardFooter>
    </Card>
  )
}
