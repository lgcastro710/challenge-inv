import { CATEGORIES } from "../constants";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
} from "@material-tailwind/react";


export const MyPost = ({ post }) => {

    const getCategoriName = (id) => {
        const categorie = CATEGORIES.find(categorie => categorie.id === id)
        return categorie.name
    }
    return (
        <Card className="w-full max-w-[48rem] flex-col lg:flex-row px-5 mb-8 shadow-none" key={post.id}>
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full lg:w-2/4 shrink-0 rounded-r-none"
            >
                <img
                    src={post.postImg}
                    alt="card-image"
                    className="w-full h-60 object-cover rounded-lg"
                />
            </CardHeader>
            <CardBody className="py-2 px-0 lg:px-6 max-[411px]:w-60 min-[412px]:w-80 lg:w-full">
                <Typography variant="h6" color="gray" className="mb-2 text-[#256ba5] font-medium text-[14px]">
                    {post.breadcrumbs}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 text-[#121a26] font-medium text-[20px] flex items-start justify-between">
                    {post.titulo}
                </Typography>
                <Typography color="gray" className="text-[#687382] font-normal text-[16px] mb-6">
                    {post.parrafo}
                </Typography>
                <div className="flex">
                    {post.catId.map(id => (
                        <Chip
                            value={
                                <Typography
                                    variant="small"
                                    className="font-medium capitalize leading-none text-[#256BA5]"
                                >
                                    {getCategoriName(id)}
                                </Typography>
                            }
                            className="rounded-full w-fit py-1.5 bg-[#256ba529] mr-2"
                        />
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}
