/* eslint-disable react/prop-types */
import { Card, Image } from "@heroui/react";

const DogStatusCard = ({ item }) => {
    return (
        <Card isFooterBlurred className="border-none" radius="lg">
            <Image
                alt={item.title}
                className="object-cover w-full"
                src={item.image.jpg}
            />
        </Card>
    );
};

export default DogStatusCard;
